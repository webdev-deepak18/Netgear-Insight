---
name: netgear-job
description: Deepak's NETGEAR UX Designer job campaign — the team workflow (Claude lead, Gemini researcher, Deepak director), task routing, Gemini handoff briefs, session checkpoints, and the map of all notes. Use for ANY request about the NETGEAR application, interviews, prep, portfolio, case studies, outreach, or research in this workspace, and when starting or ending a chat here.
---

# NETGEAR Job Campaign

**Goal:** Deepak gets the UX Designer offer at NETGEAR (Bengaluru).
This skill is a living document. Update it when the process improves, and log the change in the Changelog section at the bottom.

## The team
| Who | Role | Strengths |
|---|---|---|
| **Deepak** | Director | Sets direction, owns decisions, sends every email. Prefers to go slowly: notes first, no pushing. |
| **Claude** (main agent) | Lead / strategist | Judgment, writing, synthesis, Figma builds, editing notes, quality control. Spends its tokens carefully. |
| **Gemini** (Antigravity agent) | Researcher | Long web research, broad sweeps, reading many pages, competitor and app reviews, news, big document digests. |

## Routing: decide on every prompt
Before doing the work, state one line, either **"→ Me"** or **"→ Gemini (brief: tasks/…)"**.

**Send it to Gemini** when the task is:
- Web research needing more than about 3 searches or page fetches (company news, products, app-store reviews, competitors, Glassdoor-style interview reports, industry trends).
- Reading or summarizing long material: PDFs, videos, many URLs.
- Gathering lots of examples or inspiration (dashboard patterns, WiFi app flows).
- Searches that need looking up a person by name. Claude's search tool refuses these, so Gemini or Deepak handles them.

**Claude keeps it** when the task is:
- Strategy, prioritizing, deciding what to do next.
- Writing that Deepak will send: emails, thank-you notes, LinkedIn messages, answers.
- Interview prep from notes we already have: STAR stories, mock Q&A, pitch.
- Figma and design work, or anything that edits workspace files.
- Quick facts needing 1–2 lookups.
- Reviewing and condensing Gemini's output into the notes.

**Split it** when a task has both parts: Gemini gathers the raw material, then Claude synthesizes it into the notes.

## Gemini handoff protocol
1. Claude writes a brief to `tasks/gemini/NNN-short-name.md` using the template below.
2. Claude gives Deepak a **complete prompt to paste**, in one code block. It must work even if Gemini never opens the file. It includes:
   - the brief's goal,
   - all the questions,
   - what we already know,
   - the rules on sources ("open every URL", "no source found" when there isn't one),
   - the output path and format,
   - a final line: "Also read tasks/gemini/NNN-short-name.md, then write results to research/gemini/NNN-short-name.md and set the brief's status to done."
   A one-line pointer to the file alone isn't enough, because Gemini skipped the file in brief 005.
3. Gemini writes its results to `research/gemini/NNN-short-name.md` and sets the brief's status to `done`.
4. Deepak says "Gemini's done with NNN". Claude reads the results, checks and condenses them into the right note, and records anything durable.

Brief template:
```markdown
# NNN — <title>
status: open        <!-- open | done -->
output: research/gemini/NNN-short-name.md

## Goal
<why we need this, 1–2 lines, tied to getting the job>

## Questions to answer
1. ...

## Scope & sources
<where to look, recency limits, what to skip>

## Output format
- Bullets, scannable, max ~<N> words
- Every fact gets a source URL
- End with "Implications for Deepak" (3–5 bullets)
```
Number briefs in sequence (001, 002, …). Check `tasks/gemini/` for the last number used.

## Session checkpoints (context management)
Claude can't see its exact token count, so it uses these signals instead. Claude **proposes a new chat** when any of these happen:
- About 20 or more back-and-forth turns, or several large tool outputs (web pages, PDFs, long files) in this chat.
- The conversation has been auto-summarized once.
- A major milestone ends, such as an interview round being done or a case study being finished.

**Checkpoint steps:**
1. Update `research/session_state.md`: current status, decisions made, open tasks, pending Gemini briefs, next step.
1b. **Review `research/decision_log.md`:**
   - Add any missed decisions.
   - Move entries from `proposed` to `decided` where Deepak confirmed them.
   - Ask Deepak for any missing "Deepak's reasoning" lines.
2. Update any notes that changed (email log, prep, and so on).
3. Tell Deepak: "Good point to start a fresh chat. State is saved. In the new chat, say: **`Resume NETGEAR`**."

**On "Resume NETGEAR"** or at the start of any new chat: read `research/session_state.md` first, then only the notes the next task needs. Don't re-read everything.

Deepak can also say **"checkpoint"** at any time to force a save.

**Automatic alert:** a `UserPromptSubmit` hook (`.claude/hooks/chat-length-check.js`, registered in `.claude/settings.json`) measures the transcript.
- **Level 1 (soft):** 1000 KB or 20 prompts. Checkpoint at the next natural pause.
- **Level 2 (hard):** 1600 KB or 30 prompts. Checkpoint in that reply.
- Each level fires once per session. Deepak sees a banner, and Claude gets an instruction to answer first and then run the checkpoint steps above.
- When it fires, follow it. To tune it, change the constants at the top of the script.

## File map
| File | What |
|---|---|
| `CLAUDE.md` | Auto-loaded pointer to this skill and the state file |
| `GEMINI.md` | Instructions for Gemini: how to take briefs and where to write results |
| `research/session_state.md` | **Start here.** Live status and next steps |
| `research/jd_netgear.md` | Job description |
| `research/portfolio_deepak.md` | Portfolio summary and fit/gap analysis against the JD |
| `research/email_log.md` | Timeline, people, verbatim emails, prep-PDF summary |
| `research/NETGEAR_Candidate_Interview_Prep-.pdf` | Official prep guide (values, STAR) |
| `research/decision_log.md` | **Mandatory.** Every case-study decision, with options, evidence and Deepak's reasoning |
| `research/gemini/` | Gemini's raw research output |
| `research/gocomet/` | GoComet Sr. Brand Designer assignment (Oct 2026): project context, original brief, 84 logged decisions. Figma file `KZB76T2aJmQMIq3oBVAo1H` (read-only) |
| `research/hrdotcom-products.pdf` | HR.com product guide (about 2022), digested in Gemini 006 |
| **Round 2 Q&A Bank** (Claude Doc) | https://claude.ai/code/artifact/02679b00-5fb3-41c1-853f-9a49b271a76c. Main interview prep. Each question gets a detailed answer + a cue card. Pinned in Deepak's sidebar |
| `research/round2_qa_bank.md` | Local backup of the Q&A Bank, taken from the doc's Markdown export. Re-export after big edits. The live doc is the source of truth |
| `research/insight-knowledge/` | Official Insight PDFs (user manual, FAQ, 10.0 data sheet) + `design_notes_ds.md` (visual notes) + `insight_verified_facts.md` (canonical PDF facts, PDF page numbers) + `appstore_reviews.md` (real user quotes, Apple RSS) + `portal_tokens.md` (live portal tokens, extracted by Deepak's script) + `appstore-screens/` (old purple UI, not for tokens) |
| `research/insight-knowledge/onboarding_video_flow.md` | Deepak's onboarding screen recording, mapped frame by frame (78 frames in `assets/onboarding-video-frames/`). Privacy warnings inside |
| **Case-study Figma file** | `Ti6wtRh3s6HOEeQBae5Lcg`: Netgear_Deepak_UI_UX_Project (editable; Claude builds here) |
| `tasks/gemini/` | Briefs for Gemini |

Add new files to this table when you create them.

## Decision log (mandatory)
`research/decision_log.md` is how we prove the design thinking is Deepak's.
- **During work:** Claude drafts an entry quietly for each choice Deepak makes. Deepak doesn't do any extra note-taking.
- **End-of-task debrief (required):** after each task (screen, component, flow, design-system piece), Claude asks Deepak 3–5 short questions, e.g. "Why X over Y?" or "What did you reject?". His answers fill "Deepak's reasoning". Keep it quick.
- Each entry records:
  - the options considered,
  - the evidence (link to research files),
  - **Owner** (`Deepak` / `Deepak ← Claude` / `Pending`),
  - and **Deepak's reasoning** in his own words. When he decides, ask for one line if he hasn't given one. Never write reasoning for him. Use `*(pending)*` instead.
- Claude and Gemini propose. Only Deepak decides. Record what AI suggested honestly.
- Review the log at every checkpoint (see step 1b).

## Verifying Gemini output (always)
Before anything from Gemini goes into the notes or the decision log, or reaches Deepak as fact:
- **Check the URL shapes.** Real Reddit links carry a post id (`/comments/<id>/`). Real community.netgear.com links end in `/td-p/<n>`. Slug-only links, such as `/comments/insight_alerts`, are fabricated.
- Spot-check 2–3 of the key links with WebFetch.
- Treat any quote without a working link as **unverified**. Never present it in the interview.
- Deepak's own hands-on use of the app is strong evidence. Capture it in conversation; there's no separate notes folder.

## ⭐ Design rules (Deepak's request, 11 Oct; these apply to ALL Figma and case-study work)

### 1. Claude acts as a senior UX designer and pushes back
- Deepak is new to product UI/UX and asked to be challenged. When his idea is weaker than the standard practice, say so plainly. Name the better option and give the reason in one line. Then let him decide.
- Don't just agree to keep things moving. If Claude would push back in a real design critique, push back here.
- Push back on: process order, scope creep, weak problem statements, decoration with no purpose, inconsistent patterns, missing states, inaccessible choices, and claims we can't back up.

### 2. Keep context in the Figma file minimal
- Reviewers skim. In an interview, nobody reads paragraphs.
- Each annotation or why card has **at most about 25 words**, one idea, and a label: *User goal · Business goal · Evidence · Metric*.
- Use evidence as short quotes with a source tag ("App Store, 2024"). No essays on the canvas. Longer reasoning lives in `research/`, not in Figma.
- Each page should make its point in about 10 seconds.

### 3. No AI slop, no generic designs
- **Use real content only:**
  - real Insight terms, statuses and colours (green connected / red disconnected / orange unmanaged / grey waiting, Manual p.25),
  - real error situations from the evidence,
  - realistic names for businesses and locations.
  - Never "Lorem ipsum", "John Doe", "Acme" or "Feature 1/2/3".
- **Banned:** purple/blue gradients, glassmorphism, emoji as icons, generic 3D blob illustrations, sparkle "AI" decoration, rows of three identical cards used as filler, centred hero text for an app screen, shadows on everything.
- Every element must earn its place. If it doesn't help the user goal on that screen, cut it.
- Use one icon set and one 8-pt spacing scale. Status always uses colour **plus** an icon or label (accessibility).
- Copy is specific and calm. Write "Couldn't reach GC110P. Check the cable to port 1", not "Oops! Something went wrong".
- **NETGEAR branding on documents** (D019, Deepak 11 Oct): every page that explains something must look like part of a NETGEAR UX study. Use the `.Motif / Insight diagonal` instance (component `11:8`, 79×70 base) **only on the cover and on the FIRST board of each page** (the page's opening board), top-right, flush to the top edge: 4× on the 1600 cover, 3× on 1920 boards. **Not on every card** (Deepak: "repetitive and hard for the eyes"). Never recoloured, never inside app screens. Outfit font, navy #2B3749, teal #00695C, canvas #DDE2E7.
- **Board size = 1920×1200 (16:10)** for every presentation board (Deepak presents on a laptop; he asked for wider than square; 16:10 was chosen over 4:3 so it fills a laptop screen). Spacing 2040 between boards, y = 800. The cover stays at 1600×960. **Exception (D052):** reference pages like the design system use 1920-wide boards whose height grows to fit, with a grey #F3F5F7 board, white cards (radius 16, padding 40, 28 px card titles) and one line under each title. **Readable text width** (Deepak: "text is dominating, sentences too wide"): side margins 160; text column max 800 px next to a screenshot (gap 160, content centred), max 1200 px on text-only boards.
- **Hi-fi screens page (06 · Screens, Deepak, D055):** no boards, no headlines, no motif. Each screen is its own top-level 390×844 frame with square corners (prototype-ready for the live Figma demo). Device chrome (time, battery, home line) is hidden, not deleted, and its safe-area space stays empty (D040). **Row 1 (y 0) = screens only, side by side, x + 470 each. Row 2 (y 924) = a white 390-wide "NN · Name · Design decisions" frame under each screen** (why cards: 14 px label, 20 px text). **Every source in a decision card is a clickable link** (teal + underline): a research card → a NODE hyperlink to that card (card 01 = 15:4), an outside source → a URL. The prototype flow "Onboarding · first run" starts at Splash 136:13. The device frame (iPhone 390×844) is set by hand in the Prototype panel, because the API can't.
- Presentation pages are minimal: a short heading + cards with a few words each. No paragraphs (Deepak: "reduce the cognitive load").
- Before showing Deepak any screen, check it: *could this be any app's screen?* If yes, make it specific to Insight.

- **Bottom safe zone (Deepak, D040):** on every phone screen, keep main buttons and key information out of the bottom system area: a 48 px system nav bar + a 24 px gap above it. The button bar is sticky and never scrolls away (card 15: Continue was cut off).
- **Accessibility on every screen (Deepak, D043):** screen reader labels + announced errors, AA contrast and never colour alone, 48 px targets, works at 200% text, respects Reduce motion, no hidden time limits. Checked after wireframes and again after hi-fi. Interview weak spot, so make it visible in the case study.
- **One point per intro slide (Deepak, D039):** heading = benefit, description = a new detail, animation shows that detail. No repeats.
- **Motion principle (Deepak, D069): "Motion explains, then stops."** Every animation must:
  - show a real change of state (devices connect, a letter arrives, a badge appears), never just decorate;
  - play **once**, ≤ 1.5 s, ending on a still frame that carries the full meaning. A timeline that would loop: make it long (60 s), or navigate before it ends (Splash);
  - never block or delay the main button. No looping wiggles or pulses (WCAG 2.2.2);
  - respect **Reduce motion** (WCAG 2.3.3): show the final frame. Write that in the screen's decision card;
  - use the Motion tokens (05 · Design system, DS · 4) and keyframes in Figma; verify with export_video + ffmpeg frames.
  - Evidence: research cards 01 + 03–06 (Deepak praised animations that explain). Lives on 02 · Define → Principles. Celebration is saved for the first device online (Home), not sign-up.

### 4. Process order (pending D013)
research → define → flows → grey wireframes → **accessibility check** → tokens + only the needed components → final screens + why cards → **accessibility check** → prototype. (Accessibility is a step, not an afterthought: D043.) Build the design system *from* the wireframes' needs, not before them.

## Working rules
- Keep notes condensed. Store raw dumps in `research/gemini/` and keep only what matters in the main notes.
- Never send emails or messages yourself. Draft them and Deepak sends.
- Don't look up private people beyond their professional presence. For interviewers, stick to LinkedIn-level information such as role, product area and public talks.
- Tie every piece of work back to the JD's priorities: networking UX, Figma tokens and design systems, AI-assisted prototyping, user research, and data-driven decisions.

## Changelog
- 2026-10-11: Added the motion principle "Motion explains, then stops" (D069, Deepak: motion is an early decision, not decoration).
- 2026-10-11: Accessibility is a process step + design rule (Deepak, D043).
- 2026-10-11: Added the bottom safe-zone rule and the one-point-per-intro-slide rule (Deepak).
- 2026-10-11: Branding rule (motif on the cover + first board of each page only) and board size 1920×1200. Metrics measure friction, not screen count (D022). (Deepak's request.)
- 2026-10-11: Added the Design rules: Claude acts as a senior UX designer and pushes back; Figma context is minimal (≤25 words per annotation); no AI slop. (Deepak: "This is very important.")
- 2026-10-11: Gemini gets bot-blocked on app stores, Reddit and the NETGEAR community. Claude can get App Store reviews directly from Apple's RSS feed (`itunes.apple.com/<cc>/rss/customerreviews/page=N/id=1186392308/sortby=mostrecent/json`). Use that for user voice.
- 2026-10-10: Added an automatic chat-length hook. A soft alert fires at 1000 KB or 20 prompts and a hard one at 1600 KB or 30, and it triggers the checkpoint routine. (Deepak's request.)
- 2026-10-10: Gemini handoffs now use a complete, self-contained prompt in a code block. A one-line file pointer isn't enough, because Gemini ignored the 005 brief file. (Deepak's request.)
- 2026-10-10: Simplified the workflow. Dropped the separate teardown-notes folder. Decisions are now drafted quietly by Claude and confirmed in an end-of-task debrief.
- 2026-10-10: Added Gemini output verification after 004 had fabricated links.
- 2026-10-10: Added the mandatory decision log. Entries are logged when decisions happen and reviewed at each checkpoint, with an owner and Deepak's own reasoning.
- 2026-10-10: Skill created. Set up team roles, routing, the file-based Gemini handoff (no Gemini CLI on this machine), and the checkpoint protocol.
