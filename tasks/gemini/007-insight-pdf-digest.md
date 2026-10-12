# 007 — Insight PDF digest (how the app really works)
status: done        <!-- open | done -->
output: research/gemini/007-insight-pdf-digest.md

## Goal
We are designing our own version of the NETGEAR Insight app (mobile-first, plus the web portal) as Deepak's case study for the NETGEAR UX Designer role. Before designing, we need a complete, accurate picture of how Insight works: its structure, screens, flows, settings and terms. The source is 3 official PDFs. Then add creative, evidence-based ideas for improvement.

## Sources (read every page; no web search needed)
1. `research/insight-knowledge/insight-user-manual.pdf`: about 270 pages. This is the main source. Read every page.
2. `research/insight-knowledge/insight-cloud-management-faq.pdf`: the FAQ.
3. `research/insight-knowledge/Insight_DS.pdf`: the 6-page Insight 10.0 data sheet (June 2026). Claude has already read it. Use it to check whether the manual describes an older version.

## Questions to answer
1. **Version check:** which Insight version and date does the manual cover? Does it describe 10.0 (single subscription tier, hierarchy tree, AI-defined networking, heatmaps), or an older version (Basic/Premium/Pro tiers)? List what is different.
2. **Object model:** what is the hierarchy (Account → Organization → Location/Network → Device → Client, or something else)? What belongs to each level? What are the user roles and their permissions (Owner, Admin, Manager, Viewer, MSP)?
3. **Navigation map / information architecture:** list every menu, tab and screen for the mobile app and the web portal separately. Write it as an indented tree, with page numbers.
4. **Feature inventory:** group the features by area (onboarding, devices, WiFi/SSIDs, switches, routers/VPN, security, clients, alerts/notifications, reports, firmware, subscriptions/licences, account/users, MSP tools). Give 1 line per feature and a page number.
5. **Key user flows, step by step** (numbered steps, the screens involved, page numbers):
   a. Sign up and create an account
   b. Add the first location/network
   c. Add a device (scan a QR/barcode, enter a serial, ZTP)
   d. Create or edit a WiFi network (SSID) and a guest/captive portal
   e. Troubleshoot an offline device
   f. Act on an alert or notification
   g. Update firmware
   h. Buy or assign a subscription/licence
   i. Invite a team member or set roles
   j. MSP: add a customer organization and switch between orgs
6. **Statuses and states:** every device/network status (online, offline, provisioning, firmware pending, and so on), every alert type and severity, and the empty or error states the manual mentions.
7. **Glossary:** each Insight term (location, network, ZTP, PAYU, MPSK, captive portal, and so on) with a plain-English meaning in 1 line.
8. **Friction points:** where the manual itself shows complexity, such as long step lists, warnings, "note:" caveats, things that differ between app and portal, or limits. Quote the manual and give a page number.
9. **FAQ themes:** what questions do customers ask most? Group them, and say what each group shows about user confusion.
10. **Creative solution ideas (8–12):** for each one, give the problem (with the friction point or FAQ evidence and a page number), the idea, which user it helps (small business owner / IT admin / MSP), and why it fits Insight 10.0's direction (simple onboarding, AI-defined networking, mobile-first). Mark any idea that is pure speculation.

## Rules
- Every fact needs a source: **file name + page number**, e.g. (Manual p.42). If something isn't in the PDFs, write "not in sources". Don't fill gaps from memory or the web.
- Quote word for word when you use quote marks.
- Keep mobile app and web portal separate wherever the PDFs distinguish them.
- Don't invent screen names. Use the manual's exact labels.

## Output format
- Markdown, with one section per question (1–10) in the order above.
- Bullets and trees, easy to scan. Length is up to about 7,000 words, because this is a reference doc.
- Start with a 10-line "TL;DR: how Insight works".
- End with "Implications for Deepak's case study" (3–5 bullets).
