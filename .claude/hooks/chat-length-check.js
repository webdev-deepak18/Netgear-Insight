// UserPromptSubmit hook: warns when this chat is getting long and asks Claude to checkpoint.
// Measures transcript size and the number of real user prompts. Fires once per level per session.
const fs = require('fs');
const os = require('os');
const path = require('path');

const SOFT_KB = 1000, HARD_KB = 1600;       // transcript size thresholds
const SOFT_PROMPTS = 20, HARD_PROMPTS = 30; // user-prompt thresholds

let input = '';
process.stdin.on('data', d => (input += d));
process.stdin.on('end', () => {
  try {
    const { transcript_path, session_id } = JSON.parse(input || '{}');
    if (!transcript_path || !fs.existsSync(transcript_path)) return;

    const raw = fs.readFileSync(transcript_path, 'utf8');
    const kb = Math.round(Buffer.byteLength(raw) / 1024);
    const ids = new Set(); // distinct human prompts already in the transcript
    for (const line of raw.split('\n')) {
      if (!line.includes('"type":"user"')) continue;
      try {
        const m = JSON.parse(line);
        if (m.type === 'user' && m.promptId && (m.origin?.kind === 'human' || m.turnOrigin === 'human')) ids.add(m.promptId);
      } catch {}
    }
    const prompts = ids.size + 1; // + the prompt being submitted now

    const level = kb >= HARD_KB || prompts >= HARD_PROMPTS ? 2
                : kb >= SOFT_KB || prompts >= SOFT_PROMPTS ? 1 : 0;
    if (!level) return;

    const stateFile = path.join(os.tmpdir(), `netgear-chatlen-${session_id || 'x'}.txt`);
    const last = fs.existsSync(stateFile) ? Number(fs.readFileSync(stateFile, 'utf8')) || 0 : 0;
    if (level <= last) return;
    fs.writeFileSync(stateFile, String(level));

    const stats = `${prompts} prompts, ~${kb} KB`;
    const banner = level === 2
      ? `Chat is very long (${stats}). Strongly recommend a fresh chat after this reply.`
      : `Chat is getting long (${stats}). Good time to checkpoint soon.`;

    console.log(JSON.stringify({
      systemMessage: banner,
      hookSpecificOutput: {
        hookEventName: 'UserPromptSubmit',
        additionalContext:
          `[Chat-length hook] This session is at ${stats} (level ${level}/2). ` +
          `First answer Deepak's current message. Then run the netgear-job CHECKPOINT: ` +
          `(1) update research/session_state.md (status, decisions, open tasks, Gemini briefs, next step); ` +
          `(1b) review research/decision_log.md; (2) update changed notes, and if the Q&A Bank doc changed this chat, ` +
          `re-export it to research/round2_qa_bank.md; (3) end by telling Deepak: "State is saved. Start a fresh chat and say Resume NETGEAR." ` +
          (level === 2 ? 'Do this now, in this reply.' : 'Do it at the end of this reply, or at the next natural pause if mid-task.')
      }
    }));
  } catch {}
});
