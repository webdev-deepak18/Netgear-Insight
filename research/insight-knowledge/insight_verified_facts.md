# Insight: verified facts for the case study
Claude checked these on 11 Oct 2026 against text extracted from the PDFs. Sources: Gemini 007 + 007b, condensed.
**Page numbers = PDF page numbers** (the manual's printed number is PDF − 11). Gemini 007b mixes the two systems after its section 2.
- Manual = *Insight Cloud Portal User Manual*, 202-12915-01, **August 2026**, 278 PDF pages. **It covers the web portal only.** It has no mobile-app screens and doesn't mention AI-defined networking.
- FAQ = *NETGEAR Insight 10.0 FAQs*, 3 pages.

## The core tension (case-study hook)
- FAQ p.1 promises a **"Simplified two-step sign-up and accelerated zero-touch device onboarding"**, built on **MUI (Material UI)** and "informed by real-world customer feedback, UX research".
- The portal manual still documents a long route to the first device:
  1. **Sign up** (p.19–20): 7 inputs (email, password, first and last name, country, phone, terms), then **email verification**. After that, Insight "prompt[s] to create an organization and location".
  2. **Organization** (p.21): name, ISO country, address (type it / detect it / drop a map pin), optional image.
  3. **Location** (p.22): name, **Device Admin Password** ("replaces the existing admin password on each device"), country, time zone, address, optional image.
  4. **Add device** (p.24–25): location, **serial number, device name, MAC address**.
  - In total that's **about 18 inputs across 4 stages** before a device appears. The first device also silently starts the **90-day trial** (p.20, "NOTE: A 90-day free trial for Insight automatically starts once you add your first device").
- The app's 4 ways to add a device are network scan, QR scan, barcode scan and serial number (p.14). The manual doesn't document the steps for any of them.

## Statuses (p.25)
- Green = connected to Insight.
- Red = disconnected.
- Orange = **unmanaged**.
- Gray = **waiting for first connection**.
- "Critical" = offline, restarting, IP conflict or similar (p.15).
- Alarm severities: Critical / Warning / Info.
- Subscription states: Active, In Grace, Expiring Soon, Expired, Unallocated, Allocated, Scheduled, Bundled.
- The portal has a **light/dark theme + font-size setting** (p.25).

## Evidence for edge cases (verified quotes)
| Edge case | Evidence |
|---|---|
| Changes take time to show up | "Synchronization between the device UI and Insight might take up to 15 minutes" (p.18) |
| Onboarding overwrites the device's existing settings | "any pre-existing device configuration … is overwritten by the configuration in the Insight Cloud" (p.25) |
| Trial ends / not enough licences | "If there are not sufficient keys, some devices might move to an unmanaged state" (p.38); grace period → "expired state and remote management is no longer available" (p.13) |
| Factory reset removes the device from Insight | "After you return the device to factory default settings, it is removed from Insight. You need to manually re-add the device" (p.64, printed 53) |
| Moving a device wipes its settings | "it wipes all existing configuration" (p.67) |
| Cloud lockout | "Configuring a VLAN on the network uplink port … might disconnect your device from the Insight cloud" (p.80) |
| Firmware update chain failure | "the Internet access of another device may stop, which can cause its firmware update to fail" (p.62) |
| Cloud outage | Devices keep working; management resumes automatically (FAQ p.3) |

## Home / Dashboard contents (Manual dashboards section, about p.262–271)
- **Org level:**
  - **General Summary:** Devices online/offline/critical, Subscription status, Alarms, What's New.
  - **Device Summary** by type: switches, routers, APs, hotspots.
  - **Wireless Summary:** band distribution, client trend, top APs, top SSIDs.
  - **Wired Summary:** top switches by uplink, port errors and PoE; top routers.
  - **Location Summary:** top locations by traffic, clients, critical alarms and devices.
- **Location dashboard:** the same sections, scoped to one location.
- **Device dashboards:** separate per device type.
- → It's dense and built for IT. There's nothing that answers "is everything OK?" for a small-business owner. (The 10.0 mobile render in the data sheet does show an "Everything OK" card.)

## Roles (p.31–32)
Admin (incl. payments) · Secondary Admin (no payments) · Manager / Insight Manager Read-Write · Read-Only.

## Gaps (need Deepak's walkthrough or a mock)
- Mobile-app onboarding screens and steps.
- What 10.0's "two-step sign-up" actually looks like.
- Where AI-defined networking appears in the UI.
