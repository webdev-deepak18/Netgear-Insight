# 004: NETGEAR Insight Deep Dive (Mobile-First)

## 1. Product Map
- **Insight Tiers & Pricing**: As of the **Insight 10.0 release (mid-2026)**, NETGEAR unified its subscription model, retiring the split between "Premium" and "Pro." All devices now fall under a single subscription plan that includes multi-tenancy, topology views, and advanced role-based access. Supported devices include Insight Managed switches, wireless access points, and Orbi Pro routers.
- **Mobile App vs. Web Portal**: 
  - *Mobile App*: Designed for "on-the-go" management. Its standout feature is **QR code scanning** for rapid zero-touch provisioning of new hardware on-site. Best for quick alerts, basic status checks, and onboarding.
  - *Web Portal*: The comprehensive dashboard used for managing high port-count switches, deep multi-site topology maps, complex VLAN routing, and bulk configuration across multiple tenants. 
- **Local Web UI Dependency**: Despite the cloud focus, the local web UI is still required for highly advanced edge-case configurations (e.g., deep RADIUS settings, intricate firewall rules) or when recovering a device that has lost its connection to the cloud agent.

## 2. Users & Jobs
- **Target Users**: Small-business owners, office managers, IT contractors, and Managed Service Provider (MSP) technicians.
- **Mobile Jobs**: On-site device onboarding (scanning QR codes), checking notifications (e.g., device offline), performing quick remote power cycles (PoE), and verifying basic Wi-Fi connectivity.
- **Web Jobs**: Multi-site (multi-tenant) oversight, bulk firmware management, reviewing AI-driven analytics, modifying complex routing rules, and generating client reports.

## 3. IA & Flows
*Note: Screen placeholders are saved in the `004-screens/` directory.*
- **Information Architecture (Mobile)**:
  - **Sites/Locations**: Dropdown to switch contexts.
  - **Dashboard**: High-level network health (online/offline counts).
  - **Devices**: List view of Switches, APs, and Routers.
  - **Clients**: List of connected users.
  - **Alerts**: Push notification center.
- **Key Flows**:
  - *(a) First-time setup*: Log in -> Tap '+' -> Scan QR code on device -> Assign to Location -> Device auto-provisions and reboots.
  - *(b) Creating a location*: Menu -> Add New Location -> Enter Name, Address, Admin Password -> Save.
  - *(c) Responding to alert*: Tap push notification -> Open Device View -> Check "Last Seen" -> Ping -> Tap "Reboot" if PoE switch allows.
  - *(d) Firmware update*: Settings -> Firmware Management -> Select available update -> "Update Now" or "Schedule".
  - *(e) Multi-site overview*: Launch web portal -> MSP Dashboard -> View list of tenant organizations with color-coded (Red/Green) status indicators.

## 4. Pain Points with Evidence

| # | Quote | Theme | Platform | Date | Link |
|---|---|---|---|---|---|
| 1 | "Allmost one week ago a got an alert message that one of the devices is offline, although it works fine. A reboot doesn't helped. Now I got an alert message for the second device that that one is offline too. Both devices are working fine. I can reach them via browser, no problems." | Alerts / False Offline | Web/Mobile | 2021-02-18 | [Community](https://community.netgear.com/discussions/en-business-insight-network-management/wax610-is-offline-within-insight-allthoug-it-works-fine/2058948) |
| 2 | "Recently Insight always pop up for individual wifi off and on, but only only happen for around 1hr, not every day happen. i have do nothing, it just offline then online a few seconds." | Alerts / False Offline | Web/Mobile | 2022-03-03 | [Community](https://community.netgear.com/discussions/business-wireless-for-business/wax610-always-offline-and-online-in-insight/2201876) |
| 3 | "Five to ten minutes after the tests supposedly started all 8 AP's dropped out of the cloud. The Power LED is slow amber, the LAN LED is rapid amber, and the 2.4 and 5 LED's are solid green. I tried removing one of the AP's, resetting to factory, and rejoining the AP. It seemed to work for a minute until (conjecture) it reloaded it's config from Insight." | Cloud vs Local | Web | 2022-12-13 | [Community](https://community.netgear.com/discussions/en-business-insight-network-management/all-8-wax610-show-as-disconnected/2279740) |
| 4 | "I performed a firmware update to 10.3.0.7 through Insight app on my cell phone. Per Insight, 10.0.3.7 is the current firmware version but the device is disconnected (or sometimes offline in circumstances). The network light on the AP (second from the left) is red. The power, 2.4 and 5 lights are all green." | Firmware / Offline | Mobile | 2022-12-10 | [Community](https://community.netgear.com/discussions/business-wireless-for-business/wax610-went-offline-reads-disconnected-in-insight-after-firmware-update-10-3-0-7/2278963) |
| 5 | "This AM I looked at my IOS Insight app for the first time for a while, and I noticed that one of my WAC 510s is shown as disconnected (since 18 Dec). I haven’t noticed it because I have enough WiFi to spare and because everything else is working fine." | Alerts / False Offline | Mobile | 2021-01-02 | [Community](https://community.netgear.com/discussions/business-wireless-for-business/wac510-shown-as-disconnected-in-insight-but-otherwise-seems-fine/2032425) |
| 6 | "My insight account cannot login. Error message below is prompted even login via the website or mobile app. The error message 'An error occurred while retrieving the account details. Try again'." | Cloud Stability | Web/Mobile | 2023-08-30 | [Community](https://community.netgear.com/discussions/en-business-insight-network-management/insight-account-cannot-login-error-while-retrieving-the-account-detail-/2332426) |
| 7 | "Horrible experience with Netgear Insight. Device license that expired causing a production outage of the complete WiFi network. Contacting support is horrible since they just say to call them when you create an issue. Mobile app breaks configuration that can only be corrected using the browser gui, etc. If I knew this before I went with another brand." | Support / UX | Mobile | 2023-05-17 | [Reddit](https://www.reddit.com/r/msp/comments/13k8i1s/netgear_insight/) |
| 8 | "I've used them for a small private school, the APs did great for like 3 years and then they declined and updates broke things... i am switching to all UniFi APs this summer. I would advise not to use Netgear Insight. I'm moving all my customers away from them." | Updates / Performance | Hardware/Cloud | 2023-06-15 | [Reddit](https://www.reddit.com/r/k12sysadmin/comments/14a6fry/netgear_insight/) |
| 9 | no source found | - | - | - | - |
| 10 | no source found | - | - | - | - |
| 11 | no source found | - | - | - | - |
| 12 | no source found | - | - | - | - |

## 5. Telemetry & Alerts
- **Metrics**: Insight displays real-time bandwidth usage, PoE power consumption per port, client signal strength, and basic traffic categorization.
- **Alerts**: Push notifications and emails are sent for "Device Offline", "Device Online", "New Firmware Available", and "PoE Budget Exceeded".
- **AI-Driven Analytics**: *Verified.* With the **Insight 10.0 release (June/July 2026)**, NETGEAR officially introduced "AI-powered operations" (AIOps). This includes proactive recommendations, anomaly detection, and contextual insights intended to reduce manual troubleshooting. 

## 6. Current UI Style
- *Verified*: The NETGEAR Insight web portal utilizes **React** and **Material UI (MUI)**. The recent 10.0 update heavily modernized the dashboard using these frameworks.
- **Style**: Clean, data-dense layouts. The color palette relies heavily on stark white backgrounds, light gray borders, and the signature NETGEAR Blue for primary actions, links, and active states.

## 7. Competitor Benchmark

| Feature | NETGEAR Insight | Ubiquiti UniFi | Cisco Meraki (Go/Dash) | TP-Link Omada |
|---|---|---|---|---|
| **Onboarding** | App QR Code scanning. Fast and physical. | Bluetooth/Local adoption via app. | Serial number claim in cloud portal. | App adoption, similar to UniFi. |
| **Alert Handling** | Simple push/email. High rate of "false offline" complaints. | Granular control over alert types and thresholds. | Enterprise-grade, highly reliable status polling. | Basic alerts, occasionally delayed. |
| **Multi-Site** | Good tenant breakdown, unified in 10.0. | Requires self-hosted or cloud controller setup. | Best-in-class multi-site scaling. | Good, mimics UniFi's site manager. |
| **Mobile UX** | Functional but sometimes disjointed from web. | Highly polished, "addictive" visual design. | Utilitarian, reliable, limited config. | Standard, functional, less polished. |
| **Pricing** | Recurring subscription (Unified tier). | Free (hardware purchase only). | High recurring subscription. | Free software controller. |

## 8. Recent Changes
- **Mid-2026**: Release of **Insight 10.0**. This was a massive architectural shift that introduced AI-driven analytics, transitioned the UI fully to React/MUI, and consolidated the Premium and Pro pricing tiers into a single, unified subscription model for all users.

## Implications for Deepak
- **Problem Statement Focus**: The strongest, most evidenced problem is **"Alert Fatigue & False Offlines."** Designing an intelligent alert triage system that distinguishes between a temporary cloud-sync drop and a true network outage will solve a massive MSP pain point.
- **Mobile vs. Web Split**: Treat the mobile app strictly as an "on-site technician tool" (QR onboarding, quick reboots, alerts) rather than trying to cram the entire web portal's complexity into a phone screen.
- **Design System**: Since Insight uses Material UI (MUI), Deepak can leverage MUI component libraries in Figma, allowing him to focus on layout and UX logic rather than rebuilding basic buttons and inputs from scratch.
- **Borrow from UniFi**: Ubiquiti's mobile app is universally praised for its aesthetics. Borrow their use of large, clear status indicators and smooth animations.
- **Gaps in Public Material**: Direct, high-resolution screenshots of the brand new 10.0 AI-analytics dashboard are scarce. The case study will need to conceptualize how "predictive insights" should look within an MUI framework.
