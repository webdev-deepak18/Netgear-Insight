# GoComet Sr. Brand Designer Assignment: full project context

> **Purpose of this file:** a self-contained briefing for Claude (lead agent) working in a *different* workspace, so it can understand, explain and reuse this project without reading the original repo.
> **Owner:** Deepak S · **Built:** 1–4 Oct 2026 (3-day take-home) · **Status:** submitted, interviewed 6 Oct 2026, waiting on result.
> **This project is NOT in Deepak's portfolio site.** It exists only as the Figma file, a Drive package and this repo. GoComet's brief says: *"Your work remains yours. We will not use the assignment commercially."* So Deepak may show it in other interviews.
> Last updated: 2026-10-10.

---

## 0. Links and locations

| What | Where |
|---|---|
| **Figma file (main deliverable)** | https://www.figma.com/design/KZB76T2aJmQMIq3oBVAo1H/Deepak-S---GoComet-%E2%80%94-Brand-System---Assignment?node-id=0-1 |
| Figma file key | `KZB76T2aJmQMIq3oBVAo1H` |
| Drive package (submitted) | https://drive.google.com/drive/folders/1pCmwiwtDK2264A1fEU4WCRtZ6YEJf6E7 (PDF exports + MP4) |
| Local repo | `E:\Gocomet-Assigment\` |
| Original brief (verbatim) | `E:\Gocomet-Assigment\Resources\ASSIGNMENT_ORIGINAL.md` |
| Decision log, 84 decisions with reasons | `E:\Gocomet-Assigment\DECISIONS.md` (the best "why" source for interview answers) |
| Current state | `E:\Gocomet-Assigment\STATE.md` |
| Full history (append-only, ~790 lines) | `E:\Gocomet-Assigment\HANDOFF.md` |
| Design approach skill (principles, banned clichés) | `E:\Gocomet-Assigment\.claude\skills\gocomet-design-approach\SKILL.md` |
| Final film (53.3 s, 1920×1080, 24 fps) | `E:\Gocomet-Assigment\assets\video\t5\06_renders\final\deepak-s-gocomet-short-video-assignment.mp4` |
| Submission package (PDFs + MP4, 157 MB) | `E:\Gocomet-Assigment\submission\Deepak S - GoComet Sr Brand Designer Assignment\` |
| Website critique working notes | `E:\Gocomet-Assigment\research\t3-audit.md` |
| Interview debrief | `E:\Gocomet-Assigment\research\interview-debrief-2026-10-06.md` |

---

## 1. The company and the brief, in short

**GoComet** is an "AI-native platform for global trade": enterprises manage freight across the whole journey (planning → procurement → shipment tracking → disruption management → invoice validation). Two AI products: **Nova** (sets up and coordinates GoComet around each company's processes, systems, partners and rules) and **AI Workers** (do specific tasks such as checking invoices, following up with carriers, comparing freight rates; **people define the rules and approve important decisions**).
**Buyers:** Head / VP / Director of Supply Chain & Logistics, and Digital Transformation teams at enterprises.
**The ask:** logo and colours stay the same; design the system underneath that makes GoComet look like an AI-native enterprise company, consistent across brand, product, presentations and video. It should feel credible, sophisticated and technology-led, avoid generic AI clichés, use no other company's brand assets, and use placeholder content where needed.

**Five tasks (from the brief):**
1. **Design system:** foundations (use of existing colours; extra colours for charts, data, alerts, dark backgrounds; typography; grid and spacing; image style; icon style) + ~5 reusable components + a Do / Don't page for non-designers.
2. **Sales deck template:** 4 slides (Title "The AI-Native Platform for Global Trade / Plan. Procure. Move. Resolve. Pay." · Problem: decisions spread across emails, spreadsheets, carrier portals, ERP workarounds · Proof: 10M containers/yr, 500+ enterprise customers, 70+ countries, 5,000+ carrier integrations · one Flexible content layout Sales can reuse). Final question: which elements are locked, and which are editable for Sales?
3. **Website:** critique one page (max 5 points: works / could improve / less enterprise-grade + expected outcome), then redesign only the first screen (hero + the section below).
4. **AI Worker visual:** one visual that explains to a **Finance Controller in under 10 seconds**: invoice arrives → AI Worker checks it against contracted rate + shipment data → finds an overcharge, flags it → sent to a person for approval before payment. Show clearly what the AI does and what the person decides.
5. **Short video** with a given voiceover (7 lines, ending on the GoComet logo). Any AI tools, motion or editing allowed.

Deadline: 4 Oct 2026, 8 PM IST. Submitted on time on 4 Oct.

---

## 2. How it was made (the workflow, a talking point in itself)

- **Deepak = creative director and decision-maker.** Every call is logged with its reason in `DECISIONS.md` (#1–#84).
- **Claude (lead agent)** worked *inside Figma* via the **Figma MCP** (`use_figma` Plugin API scripts): built variables, styles, components, boards, slides, the web prototype and keyframed video scenes. Also strategy, copy, critique and reviews.
- **Gemini (sub-agent)**, in Antigravity next to Claude: research and extraction (brand colours/CSS from gocomet.com, homepage structure, Nova console timings, tutorials), file work, footage start frames.
- **Google Flow** produced live-action footage (ship, plane, trucks, ops-floor pull-back). Brand scenes were animated in **Figma's motion/keyframes** and exported as video. **After Effects** was used only to join clips + voiceover + music.
- **Discipline mechanisms:** the original brief was re-read every session (drift between paraphrase and original happened once and got caught, see #18); a "compliance script" ran after every build (every fill/stroke bound to a variable or style, every text node on a text style, every gap/radius on a variable, icons as instances → result "0 unbound"); no deletions during the build (old versions renamed `OLD ·` for one final clean-up).
- In the interview, Deepak opened Antigravity live and, from a one-line prompt, had Claude build a **mobile version of the redesigned hero** in Figma (`Homepage · Redesign · Mobile 390`, node `503:595` on page 03) using the system's Mobile mode.

---

## 3. The big ideas (what to say in one minute)

1. **One visual language across 5 channels.** The same tokens and components drive the design-system boards, deck, website, AI Worker visual and video. Changing the mode (Desktop / Mobile / Deck…) adapts it; nothing is redesigned per channel.
2. **"Blue acts, violet thinks."** GoComet's blue (#0054ff) = human action and the brand; violet (#a033ff) appears **only where an AI is acting**, at most one violet focal point per view.
3. **"Show the work, not the magic."** AI is shown as steps, states, evidence and timestamps, never as robots, brains, orbs or glows (that is the cliché the brief warns against).
4. **"AI works, the person decides."** Every AI flow ends on a visible human approval (Approve / Hold).
5. **Trade lanes = the signature motif.** Thin blue lanes sweep out from one origin port with stops = global trade routes (earth and ocean). Deliberately *not* globes, arcs or domes (they read as planets). Used on opening surfaces only, one per view, text left / lanes right, never behind data. Built as a component (5 patterns × 4 sizes). The **Journey rail** component is one lane drawn straight: Plan → Procure → Move → Resolve → Pay.
6. **Elevate, don't copy.** Brand *values* (colours, logo, sourced shadows) are taken strictly from gocomet.com; *layouts* are new. Any extra shade is marked "Extended"; nothing is invented.
7. **AI-native at first glance.** Every artifact opens on a brand gradient (Midnight AI navy → deep blue → violet hint), not plain white. White is for reading.

---

## 4. The Figma file: structure

File: `KZB76T2aJmQMIq3oBVAo1H`. Pages panel (no divider pages, #79/#80):

| Page | ID | What is on it |
|---|---|---|
| **Cover** | `0:1` | `File Thumbnail` 217:50 (1600×960, Midnight AI, the "route": one trade lane with 5 numbered stops = the 5 tasks; AI Worker = the only violet stop) + **`Reviewer guide · How to review this file · START HERE` 470:71** (a ~15-min route through the file, 5 linked stop cards, "Short on time? 5 minutes" path) |
| **01 \| Design System** | `10:2` | `Design System · Overview` 220:2: Why · "What's inside" (8 thumbnail cards linking to each sub-page) · Brief check table (brief item → where it lives → link) |
| ↳ 1.1 Variables | `160:2` | Variables board 170:182 |
| ↳ 1.2 Colour | `160:3` | Colour · Masters 174:10 (Deepak's favourite board, the benchmark) |
| ↳ 1.3 Typography | `160:4` | Typography · Masters 183:2 |
| ↳ 1.4 Imagery & Icons | `89:622` | Image style 163:186 + Icons 57:3 |
| ↳ 1.5 Grid & Spacing | `160:5` | Grid & Spacing · Masters 192:2 |
| ↳ 1.6 Atoms | `89:621` | Atoms · Masters 83:186 (private building blocks, prefixed `.`) |
| ↳ 1.7 Components | `89:620` | Component sets + one masters board per component |
| ↳ 1.8 Do / Don’t | `160:6` | Do / Don’t · Masters 203:2 |
| **02 \| Master Sales Deck** | `10:3` | Slides in one column + reviewer note |
| **03 \| Webpage Critique & Redesign** | `10:4` | Critique, redesign, prototype card, reviewer note |
| **04 \| AI Worker Workflow** | `10:5` | The AI Worker visual + reviewer note |
| **05 \| Video Storyboard & Assets** | `10:6` | Film board (START HERE), storyboard, 6 keyframed scenes, reviewer note |

**Reader-facing conventions in the file**
- Every task page has a **reviewer note** with a visible "For reviewers · How this … works" tag (eye icon, blue pill): deck 258:651 · website 327:1268 · AI Worker 348:6117 · video 452:3437. Each has Quick-access node links.
- **Masters board template** (every component/atom/foundation board): dark hero 1440×480 (Gradient/Midnight AI + a Trade lanes instance) → numbered sections **01 · WHY** (2–3 lines, the business problem) → **02 · WHAT** (white outlined stage with all variants) → **03 · WHERE** (which task/channel uses it) → **04 · HOW** (Usage table + Do/Don't cards). Minimal text; the component is the hero.
- Doc boards are 1440 wide (80 margins → 1280 content = `layout/container-max`).
- Old/superseded frames are kept but renamed `OLD ·` / `STALE ·` (e.g. T4 v2 346:2, Video 06 v1 441:2525) for a final clean-up.

---

## 5. Task 1: the design system in depth

### 5.1 Variables (4 collections, tiered; DECISIONS #6)
`Brand` (hidden; raw ramps 50–950: Blue, Violet, Navy, Green, Amber, Red, Orange + Deep, Foundation, Dark, Scale numbers) → `Alias` (hidden; Primary, Accent, Neutral, Success, Warning, Error, Information, Orange ramps; radius, border-width, space, font family/weight) → **`Semantic`** (modes **Light / Dark**: Surface / Border / Text / Icon / Dataviz, e.g. `Surface/action`, `Text/accent`, `Surface/success-strong`) → **`Responsive`** (modes **Desktop · 1440+ / Mobile / Deck / Tablet / Wide · 1920**: font size, line height and letter spacing per text style; grid columns, margin and gutter; 6 spacing "jumpers" like `space/4xl-xl`).
- No component-specific tokens; tiers are never skipped.
- Every variable has a one-line description with its GoComet CSS source or the word "Extended".
- Letter spacing is a variable per style, stored in px (= GoComet % × size per mode), so tracking scales with the mode.
- **Deck** is a Responsive mode: the same text styles become projector-sized on slides and in the video.

### 5.2 Colour (Colour · Masters 174:10)
- Primary = blue/600 **#0054ff**, accent = violet **#a033ff** (GoComet's numbering kept; ramp gaps filled and labelled Extended). No invented colour families (a Teal was removed for this reason).
- Board: Why → Palette (one card per family: key colour + ramp + role + "Use for / Never" + tokens) → One system, every channel → **Charts & data** (series chips, bar/line/stacked samples) → **Accessible by default** (deuteranopia simulation + contrast table from resolved values) → Light & Dark → **Gradients & effects** → Rules.
- **Status colours** (match the `.Status` atom): Needs you = blue, Flagged = orange, at risk = amber, error = red, success = green.
- **7 gradient styles**, stops bound to variables: sourced **AI** (Blue 600 → Violet 500) + **Hero Scrim**; Extended **Midnight**, **Midnight AI**, **Blue**, **AI Soft**, **Sky**. Any gradient with violet still means "AI is here".
- **Effects:** only sourced shadows (Card, Lift, CTA Blue, CTA Violet) + Blur/Glass 12. **Glass** only over a brand gradient or video, never on white, never glass on glass.

### 5.3 Typography (Typography · Masters 183:2)
- Brand font **Proxima Nova**; the file uses **Inter as the stand-in** (Figma's plugin API can't load local fonts and the licence wasn't available). Family is bound to one variable, so a swap = one change. Labelled honestly on the board (#5, #83).
- No mono font (an early "mono/data font" requirement turned out to be drift, not in the original brief; removed, #18). Data styles = sans with tabular figures.
- Board: Type family (role cards Headlines / Reading / Labels / Numbers) → **Type sizes** (every style × 5 modes) → Every channel (deck, web, video, social 1080², alerts, print A4) → **12 edge cases** (long headline, +30% translation, text on photo, font fallback, missing value = em dash + reason, long IDs cut in the middle…) → Readable by default → Rules.
- **Deck / video minimum text = Lede 28 px** (two documented exceptions: slide footer and source lines in Data M 18 px).

### 5.4 Grid & spacing (Grid & Spacing · Masters 192:2)
- One responsive grid style `Grid/Columns` bound to variables: columns 12·4·12·8, margin 80·16·128·32, gutter 24·16·32·24 (Desktop·Mobile·Deck·Tablet); Wide 1920 uses a 320 margin so content caps at 1280. Plus `Grid/Baseline 8` and `Grid/Deck Safe Area` (96 top/bottom).
- Spacing scale grouped Inside (4–16) / Between (20–48) / Sections (64–128). Sourced radii (button = 6, GoComet's `--radius-btn`).
- An "honest check" on the board caught that a Lede max width of 880 (~95 chars) was too long → fixed to 8 columns (845).

### 5.5 Imagery & icons
- **Image style:** real work, natural colour, scrim only behind text. **Greyscale is reserved for "the old way"** (used on the Problem slide and in video scene 02).
- **Icons:** one family, **Tabler Icons outline** (MIT), redrawn at 1.5 px on a 24 grid, named `Icon/<Category>/<Name>`, stroke bound to `Icon/*` tokens.

### 5.6 Atoms (1.6 Atoms, private, prefixed `.`)
`.Status` (AI working / Needs you / Approved / On hold / Flagged…) · `.Stage` · `.Task step` · **`.Button`** (Primary / Secondary; State Default / Hover with a Smart Animate 150 ms hover; Size L for deck/video at the 28 px minimum) · `.Avatar` (initials, no invented people) · `.AI mark` (the AI Worker's mark, never a robot) · `.Eyebrow` (Tone Default blue / AI violet) · `.Stat` · **`.Slide footer`** (deck title, slide number, optional logo/confidential).

### 5.7 Components (1.7 Components); all brand-facing (#25)
| # | Component | Notes |
|---|---|---|
| 1 | **Journey rail** (85:186) | The 5-stage journey Plan → Procure → Move → Resolve → Pay as one straight trade lane |
| 2+3 | **AI Worker device** = **Task** (114:499, the AI half) + **Decision card** (123:510, the person half) | Counts as the brief's "work in progress" device. Decision card colour = state: Waiting (neutral) → Needs you (solid warning/amber band; the overcharge is the issue) → Approved (solid dark green) / Held (warning tint). Split bar shows money state |
| 4 | **Proof · Numbers** (134:697) | Layouts including Glass (Midnight AI band, blue feature + 3 glass tiles) and Lane |
| 5 | **Section heading** (145:986) | 5 layouts: Stacked · Centred · Split · Underline · Compact; every element toggleable |
| 6 | **CTA** (157:1050) | 4 layouts: Band · Closing · Inline · Stacked (mobile). One Primary, max one secondary; edge-case block on its board |
| 7 | **Trade lanes** (set 227:1267, board 228:1514) | 5 patterns (Fan right, Fan left, Corner, Horizon, Converge) × 4 sizes (Slide 1920×1080, Wide 1440×480, Square 1080, Mobile 375×480); boolean "AI Worker port" = the one violet port |
| 8 | **Slide** (set 236:2435, board 236:2484) | The deck master: one variant per slide *type* (Title, Problem, Proof, Flexible × 4, Blank Dark/Light, Closing) |

Dropped on purpose: Quote card (would need invented people/quotes) and Chart style as a component (chart colours live on the Colour board), because the role is *brand*, not product UI.

### 5.8 Do / Don’t (Do / Don’t · Masters 203:2)
Written for Sales, Marketing and agencies: hero "Getting GoComet right" + **10 rules as visual pairs** (green-bar Do card / red-bar Don't card with a real mini example + one plain sentence), grouped: Brand (logo as is · blue acts, violet = AI · brand background) · Words (one message · one font, one left edge) · Pictures (real work · one icon style) · Numbers, AI & actions (source every number · AI works, person decides · one main button) · Before you send (6-point checklist, "ask the brand team"). No token names or jargon.
**Logo rules** (our system rules, since GoComet publishes none): clear space = logo height; minimum 96 px wide on screen / 25 mm print; placement per channel (web top-left 28 px; deck title + closing only, 40 px; video end card centred 96 px; social bottom-left; print A4 40 mm).

---

## 6. Task 2: sales deck (page 02, `10:3`)

Slides stacked in one column, every slide is an **instance of the `Slide` component**:
- **01 Title** (236:2453): Midnight AI, logo, brief heading/subheading, Trade lanes (Slide size), editable presenter line.
- **02 Problem** (241:1720): light slide (Sky) so the deck alternates dark → light → dark; H1 + 4 icon tiles (emails, spreadsheets, carrier portals, ERP workarounds) + one greyscale "old way" photo.
- **03 Proof** (247:2758): nested Proof · Numbers Glass instance, the 4 numbers + source **locked** (company facts, changed once in the master).
- **04 Flexible content** (257:380 Product + alternates 257:435 Use case · 257:495 Customer story · 257:548 AI Worker): **one layout, 4 types** (H1 + 3 points on the left, a 675² panel on the right). Text properties are shared across types, so switching type keeps the copy.
- **05 Closing** (260:3461): CTA Closing + contact block (added beyond the brief).
- **Reviewer note · Locked vs editable** (258:651), the answer to the final question: **"Brand locks how it looks. Sales edits what it says."** Locked = background, logo, trade lanes, margins, type, colour, the proof numbers. Editable = only component text properties (headings, items, presenter, contact). Master shows *descriptive placeholders* for editable text ("Name the problem in one line") and *real content* for locked parts, so the master explains itself.

---

## 7. Task 3: website critique + redesign (page 03, `10:4`)

**Critique · Homepage** (266:2): 5 points (homepage of gocomet.com):
1. **Works: real trade, real product.** Aerial ship footage tells the business in one second; the Nova console speaks in the buyer's words.
2. **Improve: the story repeats instead of moving forward.** Nova ×3, numbers in 4 blocks, six-card grids ×3; the best line ("Humans decide. AI executes.") is buried in section 2.
3. **Improve: too much, too small, hidden interactions.** 11–13 px text for a 40+ audience; hover-flip, click-to-reveal, tiny tabs, opposite-direction marquees with no pause.
4. **Enterprise gap: no single visual language.** Scrim + centred text, AI drawn three ways, light/dark with no rule, violet as decoration, robot mascot.
5. **Enterprise gap: AI is claimed, not shown, and the person in control is hidden.**
**Outcome:** a Head of Supply Chain gets what GoComet does in one screen, sees an AI Worker do real work and a person approve it, and knows the next step → more qualified demo requests, and one system that makes every new page faster.
Third-party logos/photos in the evidence crops are masked grey (brief guideline 2).

**Redesign** (275:19, Wide 1920 / Desktop): **Hero** = Midnight AI background, text left, GoComet's real footage in a **video window** (cols 7–12), a glass **AI Worker chip** as the lower third of the video (the one violet point, with a slow breathing glow = the single allowed glow, motion-only), static trade lanes baked as a faded image behind, metrics animating in sequence (10M → 500+ → 70+ → 5,000+). **Section below** = Section heading Split + **`Run · Invoice check`** (set 279:3952): a scripted, auto-playing AI Worker run (s1 Arrive → s7 Approved / Held; Smart Animate, pause/resume) on a white stage, ending with a person approving.
**Prototype card** `Prototype · See it move · START HERE` (463:498) with a button linking to the live Figma prototype (flow "Homepage redesign"). Mobile hero 503:595 was built live in the interview.

---

## 8. Task 4: AI Worker visual (page 04, `10:5`)

**`AI Worker · Invoice check · 1920`** (349:50), 1920×1080, Midnight AI, Deck mode. Headline: **"Every invoice checked. Nothing paid without you."**
**One lane, four stops** (the Journey rail idea; a sequence drawn as a sequence): a violet segment for the AI stops → a lock gate (payment on hold) → a blue segment to the person stop.
- Stop cards: 1 **Reads the invoice** (glass, "Received 09:41") · 2 **Checks it** against contract rate + shipment data ("12 of 12 lines checked") · 3 **Flags +$260** (the one orange number, 96 px) · 4 **What you decide** (solid white card = a different role; .Button L "Approve $14,600" / "Hold invoice").
- AI cards = glass, person card = solid white → AI vs person read as different roles before any word is read. Strict type scale 64 / 32 / 28 / 96. Sample-data line.
- v1 failed on text size; v2 ("two zones") was judged "junior: off font sizes, no clear flow" by Deepak → v3 rebuilt as the lane.
- Reviewer note 348:6117.

---

## 9. Task 5: video (page 05, `10:6`)

**Final film:** 53.3 s, 1920×1080, 24 fps (locked by Deepak; file path in §0). Page opens on **`Video · Watch the film · START HERE`** (449:3364) with the film as a video fill + "Recommended: download from Drive" card. Storyboard sketch board 367:550. Reviewer note 452:3437.
**Pipeline:** script → storyboard (hand-drawn sketch rows in Figma) → photomatic (AI start frames) → Flow clips → brand scenes keyframed in Figma → AE join (VO + music) → render. Voiceover = the brief's text word for word.

| Scene | Node | What happens |
|---|---|---|
| 01 Global trade | footage + 419:216 | Ship → plane → trucks (Flow), pull-back reveals it's all on one ops-floor wall display; question tags multiply, colour drains to grey = "thousands of decisions" |
| 02 Old way | 411:182 | Greyscale. Line card, then Emails → Spreadsheets → Disconnected systems, each full screen then into a grid cell; cables snap on "disconnected" |
| 03 The turn | 394:576 | Grid collapses into a hub that turns blue; Midnight AI spreads; logo; mirrored trade-lane fans flow inward = "brings it together"; "with **AI** at the core" (AI in violet) |
| 04 AI Workers at work | 402:610 | The violet "AI" becomes the `.AI mark` and works like a colleague's cursor on one glass screen: comparing freight rates → managing exceptions → validating invoices (flags +$260) → "Work done. One decision left." |
| 05 Decide | 433:259 | Reuses the **website's Run · Invoice check component** (no redraw); camera moves; a pointer presses Approve; "AI handles the work. People stay in control." (= T4's workflow in video, as the brief suggests) |
| 06 Journey to logo | 443:2716 | Title "The AI-Native Platform for Global Trade" (the deck's opening line); a shipment dot travels the Journey rail; arriving at Pay opens into daylight → full-colour logo + gocomet.com |

Colour story: grey = the old way, violet = AI, the dark opening of scene 03 mirrors the daylight ending of scene 06.

---

## 10. Submission

Email to Talent Acquisition (CC AVP Marketing) on 4 Oct with the Figma link + Drive folder. Drive package = vector PDFs per board (exported via Figma MCP `download_assets`, deck merged with pdf-lib) + MP4 + poster + README.

---

## 11. Interview outcome so far (for honest framing)

- **Panel, 6 Oct 2026** (90 min, in office): AVP Marketing (~40% of questions: visual craft, customers), an AI/GTM lead (~60%: how Deepak uses AI, "what is design / what is AI", "what did you do differently with Claude's output?"), a designer (silent).
- Deepak demoed the Claude + Gemini + Figma MCP workflow live and built the mobile hero live.
- Rated the project 10/10; the AI lead said "I didn't like this assignment" (likely a stress test; Deepak stayed calm and walked through the system). Better answer next time: "9, and here's what I'd improve."
- **Weak moment:** couldn't name GoComet's customers precisely. Lesson: **research the company's customers and buyer roles before any interview.**
- Status: thank-you email sent 7 Oct, waiting on HR.

---

## 12. Honest weak spots (own them, don't hide them)
- **Volume:** the file is large; mitigated by the Cover reviewer guide, START HERE cards and reviewer notes, but a reviewer may still feel it's a lot.
- **Inter, not Proxima Nova** (tool and licence limit; one-variable swap).
- **AI-generated footage** has garbled lettering on the ship/plane shots.
- **Film polish not applied** (loudness −12.9 LUFS, slight crossfade ghosting ~35 s, one black last frame).
- Parts lean **systems/product thinking over expressive brand craft**; the AVP wanted to see more visual craft.
- PDF exports were never visually checked by Claude.

---

## 13. Reusing this project in another interview (e.g. Netgear)

**What it proves (transferable):**
- **Systems thinking at brand level:** tokens → semantic → responsive modes; one system drives web, deck, video and a mobile screen with *mode switches, not redesigns*.
- **Business-first design:** every board opens with WHY (the business problem); the buyer (VP Supply Chain, Finance Controller) drives decisions (e.g. 28 px minimum for 40+ readers, 10-second test for T4).
- **Governance for non-designers:** Do / Don’t page and a locked-vs-editable deck master so Sales can't break the brand.
- **Motion and video:** storyboard → AI footage → Figma-keyframed brand scenes → final edit in 3 days.
- **AI-augmented workflow, with judgment:** Claude as lead agent inside Figma via MCP, Gemini as sub-agent, Flow for footage; 84 logged human decisions show who directed what. Live demo-able.
- **Critique skill:** a structured, evidence-based 5-point website critique with outcome.
- **Restraint and honesty:** no invented brand values, no other brands' assets, sample data labelled, weak spots named.

**How to present it (suggested 5-min path):** film (53 s) → Cover route → Colour board (the benchmark) → deck master + locked/editable note → website prototype → AI Worker visual. Close with "what I'd improve".

**Cautions:** it's GoComet's brand: present it as an assignment, not client work; don't claim GoComet adopted it. Map lessons to the new company's context (for Netgear: consumer + business networking hardware, multiple product lines and channels, so the "one system across channels" and "governance for Sales/partners" stories transfer best). Verify the new company's facts separately; don't assume.

---

## 14. How a new Claude session should get deeper detail

1. Read this file, then `E:\Gocomet-Assigment\DECISIONS.md` for the "why" behind any detail (search by topic: "Trade lanes", "Slide", "Decision card", "Scene 05"…).
2. For visuals, use the Figma MCP on file key `KZB76T2aJmQMIq3oBVAo1H`:
   - `get_metadata` on a page ID (§4) to list frames;
   - `get_screenshot` on board/node IDs (§5–§9) to see them;
   - `get_variable_defs` on a node for tokens.
   Start with Cover 0:1 → Overview 220:2 → Colour 174:10 → the task pages.
3. Read-only by default: **never edit, move or delete nodes in this file** unless Deepak explicitly asks (it's the submitted version).
