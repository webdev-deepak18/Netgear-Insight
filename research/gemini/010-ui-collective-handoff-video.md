# UI Collective Video: Dev Handoff + Accessibility Annotations

**Video:** [Design to Developer Handoff in Figma (UI Collective)](https://www.youtube.com/watch?v=ALkqhXv0GPk) | Presenter: Kirk McNeill (~1 h 48 min)

---

### 1. The Handoff Method, Step by Step
* **[05:21] Reject native Figma annotations:** Drops built-in annotations; layout-focused with zero screen reader properties.
* **[07:48] Import CVS Health kit:** Duplicates Community kit, publishes to team library, and consumes as a design system ([11:31]).
* **[11:26] Button vs link tagging:** Separates actions from navigation; stamps elements and adds detail cards for names, descriptions, types, and targets ([11:26]–[22:59]).
* **[22:59] Heading hierarchy:** Sets semantic `<h1>`–`<h6>` levels (single H1, no skipped levels) via stamps and cards ([22:59]–[30:28]).
* **[30:28] Asset specs:** Writes alt text for images; flags decorative icons/SVGs as hidden ([30:28]–[33:39]).
* **[33:39] Reading order:** Maps screen reader order with numbered stamps; flags decorative items to skip ([33:39]–[40:06]).
* **[40:06] Focus / Tab order:** Labels keyboard Tab sequence via numbered stamps for first-time vs returning visitors ([40:06]–[46:38]).
* **[46:38] Form inputs:** Annotates field types, required flags, autocomplete, mobile keyboard modes, limits, and unlock rules ([46:38]–[51:12]).
* **[51:12] Landmarks:** Outlines regions (`<header>`, `<main>`, `<nav>`, `<section>`) via red dashed canvas lines and cards ([51:12]–[57:40]).
* **[57:40] Canvas structuring:** Organizes flows by feature; badges frames "Ready for dev" [66:11] and archives iterations ([65:53]–[67:40]).
* **[67:48] Error & loading states:** Brainstorms edge cases with ChatGPT ([71:02]); docks error screens beneath primary screens ([73:35]); builds skeleton loaders ([75:49]); specifies system/auth errors and validation ([79:59]–[97:48]).
* **[97:48] QA checklist & token audit:** Runs Dev Handoff Checklist ([97:48]–[99:53]); audits tokens with Design System Tracker plugin ([100:00]–[101:20]).
* **[101:20] Interactive delivery:** Provides guided walkthroughs or Screen Studio demos ([101:20]–[103:54]); verifies responsive collapse on mobile viewports ([103:59]–[108:35]).

---

### 2. Why He Advises Against Figma's Built-in Annotations
* **Rigid formatting [05:24]:** Leaves designers unguided; key details get lost.
* **Layout property bloat [06:13]:** Only outputs basic CSS values (width, height, padding, gap, radius, stroke).
* **Lacks accessibility semantics [06:40]:** Exposes layout values but *"nothing about how a screen reader might interpret this, nothing about accessibility labels"* [06:47].
* **Duplicates Dev Mode [06:59]:** Devs already inspect component dimensions and styling in Dev Mode.
* **Noise and omissions [07:12]:** Clutters files with useless layout properties while omitting programmatic behavior.

---

### 3. CVS Health Kit Usage
* **Buttons & Links [11:26]–[22:59]:** Stamp on element; Details card beside screen for Accessible Name, Description, Type (`download`, `submit`, `open`), and Target (`#FAQ`, URL path).
* **Headings [27:32]–[30:28]:** H1–H6 stamp on text; Details card beside screen for heading level and contextual descriptions.
* **Images & SVGs [30:56]–[32:46]:** Details card beside image with alt text; element selector (`Image` vs `SVG`). Decorative SVGs marked without accessible names.
* **Reading Order [37:56]–[39:40]:** Numbered circle stamps placed on elements (1, 2, 3...) in reading sequence; unnumbered stamps to exclude decorative items ("leave this out").
* **Focus Order [44:51]–[46:08]:** Numbered stamps on interactive controls (Tab 1, 2, 3...) indicating keyboard sequence across scenarios.
* **Inputs [46:57]–[50:57]:** Details card beside field for Type, Required, Autocomplete, Input Mode (mobile keyboard trigger), Min/Max Length, Title, and Disabled logic.
* **Landmarks [54:12]–[57:38]:** Red 2px dashed lines across canvas for region boundaries; Landmark Details card beside frame defines element type and name.
* **Live Regions & Notes:** Both **not covered in the video** (notes handled via detail cards/custom text).
* **Canvas Placement:** Stamps placed **directly on screen elements**; boundary lines drawn **across canvas**; detail tables placed **beside screen frames**; error states placed **directly beneath** primary screens.

---

### 4. Kit Import & File/Frame Arrangement
* **Import Method [11:31]:** Duplicates file from Figma Community, publishes to workspace library, and consumes as an external design system library.
* **Page Arrangement [57:40]–[64:34]:** Simple apps stay on a single page combining flow, annotations, error states, and prototype. Complex apps split into feature pages with divider pages (`---`).
* **Frame Layout & Archiving [65:53]–[67:40]:** Badges production frames "Ready for dev" [66:11]; moves exploratory iterations into an `Archive` frame or separate `Archive` page.

---

### 5. Additional Handoff Deliverables Beyond Accessibility
* **Spacing & Redlines:** Not annotated manually; inspected via Dev Mode [06:59] and verified on Functional QA checklist [98:10].
* **Component & Variant Names [99:35]:** Verified for property naming consistency across variants.
* **States:**
  * **Loading [75:14]–[76:30]:** Layout-matched skeleton loaders (never single floating spinners).
  * **Error [79:59]–[97:48]:** System errors (404, 500, offline banner), auth errors (expired session, permissions), and field validation (inline copy, red dashed boxes, callout arrows [96:41]–[97:38]).
  * **Empty States:** Empty input validation covered [93:33]; dedicated empty screen states not covered in the video.
* **Interactions / Transitions [101:20]–[103:54]:** Async video walkthroughs via Screen Studio with zoom-ins and cursor highlights. Micro-transitions not covered in the video.
* **Copy [18:28], [96:03]:** Content designer collaboration on accessible names/descriptions; field hint copy vs error copy.
* **Dev Mode & "Ready for Dev":** Dev Mode for code inspection [06:59]; "Ready for dev" badge on final frames [66:11].
* **Version Notes:** Not covered as a deliverable; version mismatch covered as a system error [82:18]; file history managed via `Archive` frames [65:53].
* **Token/Variable Checks [98:19]–[101:20]:** UI Collective's Design System Tracker plugin audits tokens, ensuring 100% remote styles, no detached components, dark/light mode parity, and WCAG contrast.

---

### 6. Mobile Apps & Native Screen Readers
* **Native Apps & Screen Readers:** iOS/Android native apps and VoiceOver/TalkBack native screen readers are **not covered in the video** (focuses on web accessibility and responsive web).
* **Mobile Mentions:**
  * **Input Mode / Mobile Keyboard [48:38]:** *"This is more relevant for mobile users than anything else. But if I enter... if I'm filling out this form on my iPhone and I hit name, I want to see the actual keyboard pop up. So I want that to be text. But if I'm entering in a phone number... I want the number keyboard to pop up. And that is what input mode is referring to."*
  * **Responsive Viewports & Components [103:59]–[108:35]:** Addresses desktop responsive collapsing to mobile viewports (collapsing sidebars into drawer/tab menus). Warns against duplicate mobile components: *"don't force a mobile component if you don't need it. Like these buttons as an example, would these work on mobile? Absolutely. So why do you need a mobile button? Just use your desktop buttons on mobile... only build out mobile components for the ones that like don't condense down nicely... you are going to need a mobile navigation"* ([106:47]–[107:56]).

---

### 7. Mistakes Warned Against
* **Over-annotating [27:49]:** Stamping every single element causes visual clutter for developers.
* **Confusing visuals with semantics [09:14], [24:44]:** Mislabeling links as buttons or skipping heading levels to match visual font sizes breaks code semantics.
* **Ambiguous disabled logic [50:18]:** Disabling fields without defining the exact unlock trigger.
* **Unannotated focus & reading orders [33:41], [42:52]:** Leaving Tab/reading sequences to developer guesswork causes post-QA rework.
* **Cluttered canvas without archives [64:42]:** Handing off exploratory clutter leads devs to build outdated frames.
* **Distant error states [73:35]:** Placing error states on separate distant pages instead of right under primary screens.
* **Generic loading spinners [75:49]:** Dropping a lone spinner instead of structured skeleton loaders.
* **Silent prototype links [101:20]:** Sending prototype links without walking developers through interactions.
* **Redundant mobile components [106:15]:** Creating duplicate mobile buttons or inputs over trivial 2px height differences.

---

### Implications for Deepak (NETGEAR Insight Mobile Case Study)
* **Translate Web Kit to Mobile Accessibility:** The CVS kit uses web tags (`<h1>`, `<nav>`, HTML inputs). For Deepak's mobile app, map headings to Accessibility Trait Header, buttons/links to Accessibility Trait Button/Link, and document native Accessibility Labels for VoiceOver/TalkBack.
* **Stamps on Screens, Detail Cards Beside:** On Deepak's 4–5 mobile screens, keep UI clean by placing compact numbered stamps (reading order, focus sequence, heading traits) directly on elements, and docking CVS Detail Cards (Button, Input, Landmark) in a neat column to the right.
* **Anchor Error & Loading States Below Screens:** For onboarding (Device Discovery, SSID Setup, Login), place the corresponding error screen ("Device Not Found", invalid passphrase) and skeleton loader directly beneath each primary screen.
* **Specify Mobile Keyboard Types & Unlock Rules:** For setup inputs (IP address, WiFi password), explicitly annotate `inputMode` (`numeric` vs `text`) and clear unlock criteria on primary buttons (e.g. "Continue disabled until 8-character passphrase entered").
* **Package Clean Canvas with "Ready for Dev":** Group the 4–5 onboarding screens in a dedicated section marked "Ready for dev", move exploratory variants to an `Archive` section, and include a concise Dev Handoff Checklist card.
