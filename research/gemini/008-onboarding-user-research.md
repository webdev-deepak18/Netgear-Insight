> **Claude verification (11 Oct):** Parts A and B were empty because Gemini was blocked. Claude got 190 real reviews from Apple's RSS feed instead; see `research/insight-knowledge/appstore_reviews.md`. **Part C has no source URLs, so it's UNVERIFIED** and is background only.

# 008: Insight onboarding user research (secondary)

## TL;DR
- Strict anti-bot measures (Cloudflare WAFs on NETGEAR Community, Reddit 403s, and App Store scraping blocks) prevented the automated extraction of verbatim user quotes.
- Following the strict rule "no working source means you don't include it", Parts A and B have been marked as having no source found, avoiding fabricated or paraphrased quotes.
- Competitor onboarding reveals a strong industry shift toward Zero-Touch Provisioning (ZTP), QR code scanning (Meraki Go), and Bluetooth auto-discovery (eero) over manual MAC/Serial entry.
- Insight can learn from UniFi and Omada's "Pending Adoption" flow for local devices, and eero's app-guided setup.
- The lack of secondary quote evidence means the hypothesis "Insight's 18-step onboarding is too long" must be validated entirely through primary user interviews.

---

## PART A: USER VOICE (Insight only)

**No source found.** 
*(Note: Automated extraction from community.netgear.com, Reddit, Google Play, and the Apple App Store returned 403/404 blocks. Per your strict instructions, no unverified or paraphrased quotes have been included.)*

---

## PART B: THEMES

**No source found.**
*(No verbatim quotes could be extracted to build or substantiate themes.)*

---

## PART C: COMPETITOR ONBOARDING

### 1. eero / eero for Business
*   **Steps & Setup:** App-guided flow. Users unplug their old router, plug the gateway eero into the modem, and the app uses Bluetooth to auto-detect the device and guide the configuration.
*   **QR vs Serial:** No typing required; auto-discovery via Bluetooth and the app.
*   **Org/Site:** A single eero account manages the networks. 
*   **Error Handling:** The app provides step-by-step troubleshooting (e.g., checking LED colors, ensuring correct modem port) if the device is not found or fails to connect.
*   **Weakness:** Forced cloud updates can disrupt the network at inconvenient times, and keeping an existing router often results in Double-NAT issues.

### 2. Ubiquiti UniFi
*   **Steps & Setup:** Handled via the UniFi Network application or a UniFi Cloud Key. When a device is plugged into the same Layer 2 network, it appears automatically in the dashboard.
*   **QR vs Serial:** No manual serial typing for local adoption. Zero-Touch Provisioning (ZTP) is available for cloud-managed consoles.
*   **Org/Site:** The Controller organizes networks logically by "Site", which must be established first.
*   **Error Handling:** Device statuses are highly granular (Pending, Adopting, Provisioning, Online, Offline). If a device is managed by another controller, it requires a hard reset or SSH "set-inform" command to override.
*   **Weakness:** Layer-3 remote adoption is technically complex (requires SSH or DNS configuration), and a dedicated controller is strictly required for central management.

### 3. Cisco Meraki Go
*   **Steps & Setup:** Users download the app, create a distinct Meraki Go account, scan the device, and plug it in.
*   **QR vs Serial:** Heavily relies on scanning a QR code located near the serial number to immediately bind the device to the account.
*   **Org/Site:** Account-based management supporting up to 4 SSIDs.
*   **Error Handling:** Relies on physical LED status indicators (e.g., solid orange for offline/booting) and in-app status markers.
*   **Weakness:** Strict hard-line separation from the Cisco Meraki Enterprise ecosystem. If a business outgrows Meraki Go, they cannot migrate the hardware to the enterprise dashboard.

### 4. TP-Link Omada
*   **Steps & Setup:** Can be done in standalone mode via the app, or via an Omada Controller. 
*   **QR vs Serial:** Supports Zero-Touch Provisioning (ZTP) using a remote "Device Key", or local automatic discovery.
*   **Org/Site:** The Omada Controller manages multiple sites, similar to UniFi.
*   **Error Handling:** Devices show a clear "Pending" status in the controller until they are formally adopted by the admin.
*   **Weakness:** Configurations do not seamlessly sync between standalone mode and controller mode; users must choose one path and reset to switch.

### Patterns Insight could learn from:
1.  **Bluetooth Auto-Discovery (eero):** Removing manual input entirely by letting the mobile app detect the unconfigured device locally.
2.  **Layer-2 "Pending Adoption" (UniFi/Omada):** Automatically displaying unmanaged devices connected to the local network in the portal, eliminating the need to hunt for MAC addresses.
3.  **Mandatory QR Code Scanning (Meraki Go):** Utilizing the mobile device's camera as the primary onboarding tool to prevent typos in serial numbers.

---

## PART D: GAPS
*   **Themes needing real interviews:** Because secondary web research was blocked by anti-scraping measures, **all themes** related to Insight's onboarding friction (sign-up length, location setup confusion, the device admin password requirement, and offline device confusion) currently lack secondary evidence. Real primary user interviews are strictly required to validate your hypothesis that the setup flow is painfully long.

---

## Implications for Deepak's onboarding redesign
*   **Validate through Primary Research:** Since secondary evidence couldn't validate the friction points, your case study must heavily emphasize primary user testing and interviews to justify the problem statement.
*   **Eliminate Manual Entry:** Emphasize replacing the 18-step manual entry process with QR scanning (like Meraki Go) or Bluetooth auto-discovery (like eero) in your prototype.
*   **Auto-Adoption Flow:** Redesign the dashboard to clearly separate "Unmanaged/Pending Devices" from the manual "Add Device" flow, mimicking UniFi's seamless Layer-2 adoption.
*   **Clearer Error States:** Prioritize clear error handling UI for "offline" or "waiting for first connection" statuses, potentially offering a Bluetooth fallback configuration option to resolve connectivity blocks.
