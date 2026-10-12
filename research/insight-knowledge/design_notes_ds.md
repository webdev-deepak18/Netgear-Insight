# Insight 10.0: first design notes (from the data sheet)
Source: `Insight_DS.pdf` (6 pages, NG_DS_ENT_INSIGHT_062526, June 2026). Claude read it on 11 Oct 2026.
These are only first impressions, taken from small product renders. We'll go deeper when we build the design system.

## Verified from the text
- **"Modern MUI-based interface built on extensive user research"** (p.3). The platform interface is an "MUI-based web portal (browser) and Insight mobile app (iOS & Android)" (p.5). → This confirms the React/MUI guess from Gemini 004.
- **What's new in 10.0:** a single subscription tier (Pro SKUs), **2-step customer sign-up**, faster device onboarding, a hierarchy tree for multi-site/MSP, RBAC, WiFi heatmaps, map-based reporting, a better topology view, and **AI-defined networking (BETA)**. That last one means "provision networks from a plain-language description" and "auto-generates a network topology diagram from spoken or written requirements" (p.3).
- **Tables:** search on the server, control over columns, saved views (p.3).
- **Quote:** "Every detail, from a refreshed theme and modern UI to AI-defined networking and visual heatmap, is designed to make network administration faster, smarter, and more intuitive." From Nat Chudambaram, PLM (p.4).
- **Who it's for:** end users and IT teams (multi-location SMEs, retail, hospitality, healthcare) and MSPs, VARs and integrators (p.4).

## Visual read (an estimate from the renders, not measured)
- **Brand:** the NETGEAR **Enterprise** lockup. The mark has a dark navy shape, a bright green shape and a teal shape.
- **Primary colour:** teal/green-teal, roughly #00A99D–#1FB5A0. It's used for headings, table header rows, active nav and buttons. Light mint (#A8E3D9-ish) appears as a decorative diagonal shape.
- **Dark accent:** deep navy/slate, used on the "Welcome John!" summary card and the dark mobile screens.
- **Type:** a geometric sans, probably *Outfit* or similar (unverified). Headings are bold, body text is light.
- **Web portal layout:** a white top bar with the INSIGHT logo, global search and icons → a **left sidebar** with an org picker at the top (Dashboard, Organizations, Locations, Devices, Security, Administration, Alarms). The active item has a mint pill. → The content area is on light grey with white cards. The cards show summary counts (Organizations / Devices / Subscriptions, with coloured status dots), then horizontal bar charts ("Top Organizations by Devices / New Devices / Critical Alarms"), a floor-plan heatmap and a port-grid device view.
- **Mobile:** a location header ("Guest Coffee") with a large teal status card ("Everything OK") → tabs (Routers / Wireless / Wired) → an IPSec VPN topology view. There's a **bottom nav with 4 tabs**. The org list has avatars and status counts. Device onboarding offers **"Scan barcode / Scan QR code"** and "Add multiple devices", on a dark background.
- **Status colours:** green (online), orange/amber (warning), red (critical), grey (offline) are visible on the heatmap and count chips.

## Questions to come back to (design-system phase)
- Get exact colours and type from real screenshots of the app or portal, not from data-sheet renders.
- Is the dark onboarding screen a dark mode or a one-off?
