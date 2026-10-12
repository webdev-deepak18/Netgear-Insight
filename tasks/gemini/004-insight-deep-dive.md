# 004: NETGEAR Insight Deep Dive (Pass 2, mobile-first)
status: done
output: research/gemini/004-insight-deep-dive.md (+ screenshots/frames in research/gemini/004-screens/)

## Goal
Deepak chose **NETGEAR Insight, mobile-first** (Insight mobile app + responsive web portal) for a full UX case study: design system → components → screens → prototype. We need **verifiable evidence** to ground every design decision. 003 was directionally good but cited generic forum homepages with no quotes. **This pass must cite specific threads and reviews, with direct quotes and dates.**

## Questions to answer
1. **Product map:**
   - Insight tiers (Basic / Premium / Pro for MSPs), pricing model, supported devices.
   - Mobile app vs web portal: what each can and can't do.
   - What still requires the device's local web UI.
2. **Users & jobs:**
   - Who uses Insight: the small-business owner, office manager, IT contractor or MSP technician.
   - Their top jobs on **mobile** (on-site device onboarding by QR, checking alerts, quick fixes) vs on **web** (multi-site overview, bulk config, reports).
   - Back this with NETGEAR's own docs and user posts.
3. **IA & flows:**
   - Reconstruct the information architecture of the mobile app and the web portal: nav, main sections, screens.
   - Walk through key flows step by step, using KB articles and YouTube walkthroughs:
     - (a) first-time setup and adding a device,
     - (b) creating a network/location,
     - (c) responding to a device-offline alert,
     - (d) firmware update,
     - (e) multi-site overview (Pro).
   - Save representative screenshots or video frames to `004-screens/`.
4. **Pain points with evidence:** at least 12 specific user complaints. For each:
   - quote, source URL (the specific thread or review), date, platform,
   - theme tag (alerts/false offline, onboarding, cloud vs local, firmware, performance, navigation, pricing, other).
   - Sources: Play Store, App Store, community.netgear.com threads, Reddit threads (r/networking, r/msp, r/NETGEAR, r/sysadmin).
   - Prefer posts from the last 18 months.
5. **Telemetry & alerts:** what metrics, charts, alerts and notifications Insight shows today. How are offline and alert states communicated? Any "AI-driven analytics" features? (Verify. 003 claimed it.)
6. **Current UI style:** colors, type, components, any Material UI signs (003 claimed "React/Material-UI", so **verify or mark unverified**).
7. **Competitor benchmark (mobile + web):** UniFi (app + Site Manager), Cisco Meraki (Meraki Go app + Dashboard), TP-Link Omada (app + cloud).
   - For each, compare onboarding, alert handling, multi-site overview and mobile UX. Note 2–3 specific patterns worth learning from (Mobbin-style references welcome).
8. **Recent changes:** Insight releases, redesigns or news in the last 12 months.

## Scope & sources
- Sources: netgear.com/business/services/insight, insight.netgear.com, kb.netgear.com, the NETGEAR YouTube channel, app stores, community.netgear.com, Reddit, reputable reviews.
- Use public material only.
- Mark anything unverified, or older than 18 months, clearly.

## Output format
- About 2500–3500 words, organized by question number, in bullets and tables.
- Q4 as a **table**: # | Quote | Theme | Platform | Date | Link.
- Q7 as a **comparison table**.
- End with **"Implications for Deepak"** (5–7 bullets):
  - the strongest problem statements, ranked by evidence,
  - the mobile vs web split of jobs,
  - patterns to borrow,
  - risks or gaps in the public material.
