> **Claude verification (11 Oct):** about 20 quotes were checked against the extracted PDF text, and all are real. Page numbers: 007 uses PDF pages. 007b uses PDF pages in §1–2 but **printed pages (PDF − 11) from §2 'Resetting…' onward**. Use `research/insight-knowledge/insight_verified_facts.md` as the canonical source.

# NETGEAR Insight PDF Digest

## TL;DR: How Insight Works
1. **Target User:** IT admins, small business owners, and MSPs managing networks across multiple sites.
2. **Version:** Insight 10.0 (August 2026), featuring a modernized MUI-based web portal and single-tier subscription.
3. **Core Concept:** Cloud-managed networking where devices (switches, routers, APs, hotspots) are organized into Locations within Organizations.
4. **Onboarding:** Zero Touch Provisioning (ZTP) allows devices to be added via serial number or barcode, instantly fetching their config from the cloud.
5. **WiFi Management:** SSIDs can be deployed globally across an organization or customized per location with features like Captive Portals and MAC ACLs.
6. **Wired & Routing:** Supports advanced switch port management (VLANs, PoE, LAG) and complex routing (Dual WAN failover, VPNs, Firewall schedules).
7. **Security:** Integrates Exium Secure Access Service Edge (SASE) for unified policy enforcement, plus traditional IPSec/OpenVPN/WireGuard tunnels.
8. **Visibility:** Includes visual floorplan heatmaps, topology maps, and real-time alerts. 
9. **Subscriptions:** Operates on a single unified plan per device, eliminating legacy Basic/Premium/Pro tiers, with auto-allocation tools for MSPs.
10. **The Catch:** While it aims for simplicity, advanced network concepts (VLAN tagging, VPN subnets) still require significant networking knowledge to avoid lockouts.

---

## 1. VERSION CHECK
* **Version covered:** Insight 10.0 (August 2026) (Manual p.1).
* **Tier structure:** It describes the new single unified subscription model. It explicitly states that "Legacy subscription types are discontinued" (Manual p.13), replacing the older Premium/Pro tiers.
* **Differences from the Data Sheet:** 
  * The manual covers the single-tier subscription, hierarchy tree, and heatmaps mentioned in the data sheet.
  * *Missing:* The manual does **not** mention the "AI-defined networking (BETA)" feature highlighted in the data sheet.

---

## 2. OBJECT MODEL
* **Hierarchy:** Account → Organization → Location → Device Group → Device → Client (FAQ p.2, Manual p.21-24, p.59).
* **User Roles and Permissions (Manual p.20, p.32):**
  * **Admin:** The Insight account holder (VAR, MSP, or business owner). Can perform all functions, including setting up locations, adding devices, and handling payments.
  * **Secondary Admin:** Has the exact same permissions as the Admin, but cannot handle payment methods.
  * **Manager:** Receives read and write credentials from the admin to manage devices for one or more organizations. Can add, configure, monitor, and maintain locations/devices but handles day-to-day operations rather than billing.
  * **Insight Manager (Read/Write):** Can manage assigned organizations.
  * **Insight Manager (Read Only):** Can only monitor the assigned organizations; cannot make changes.

---

## 3. NAVIGATION MAP
*(Note: The provided manual exclusively covers the Insight Cloud Portal and does not document the mobile app screens. Therefore, only the web portal navigation is mapped below. Not in sources: Mobile App map.)*

* **Insight Cloud Portal (Web)**
  * **Dashboard** (Manual p.15)
  * **Organizations** (Manual p.21)
    * Map (Manual p.46)
  * **Locations** (Manual p.22)
    * Clients (Manual p.47)
  * **Devices** (Manual p.59)
    * Dashboard [per device] (Manual p.256)
  * **Clients** (Manual p.47)
    * Wireless Clients (Manual p.234)
  * **Troubleshooting** (Manual p.258)
    * Ookla Speedtest (Manual p.258)
    * Ping Test (Manual p.259)
    * DNS Lookup (Manual p.260)
    * Traceroute (Manual p.261)
    * Diagnostic (Manual p.261)
  * **Administration** (Manual p.21)
    * Users (Manual p.32)
    * Policy (Manual p.34)
    * Manage Subscriptions (Manual p.35)
      * Organization Pools (Manual p.36)
    * Reports (Manual p.136)
  * **Settings (Location context)**
    * Device Groups (Manual p.72)
    * RADIUS (Manual p.48)
    * mDNS Gateway (Manual p.49)
    * Syslog Configuration (Manual p.50)
    * LED Settings (Manual p.51)
    * Configuration Backup and Restore (Manual p.52)
    * Routing
      * Static Route (Manual p.55)
      * VLAN (Manual p.55)
    * Wi-Fi
      * SSID (Manual p.87)
      * Advanced (Fast Roaming, Multi PSK, Traffic Policies, Wireless Settings, URL Filtering, Network Settings, Mesh Settings) (Manual p.110-123)
      * Load Balancing (Manual p.103)
      * Profiles (Customer Profiles, RF Profiles) (Manual p.106-108)
      * Instant WiFi (Manual p.99)
      * Schedules (Manual p.101)
      * Management VLAN (Manual p.102)
    * Wired
      * DHCP L2 Relay (Manual p.55)
      * DHCP Snooping (Manual p.56)
      * PoE Downtime Schedules (Manual p.127)
      * LAG (Manual p.125)
      * Spanning Tree (Manual p.126)
      * RADIUS Configuration (Manual p.129)
    * WAN
      * WAN1 (Manual p.155)
      * Dual WAN (Manual p.166)
      * Dual WAN Rules (Manual p.168)
    * Security
      * Security Center (Manual p.197)
      * Firewall (Basic Settings, Schedule, Outbound NAT, Traffic Rules) (Manual p.197-203)
      * Port Triggering (Manual p.205)
      * Port Forwarding (Manual p.207)
      * Service Management (Manual p.209)
      * Dynamic DNS (Manual p.211)
    * VPN
      * OpenVPN (Manual p.176)
      * IPSec (Site-to-Site, Client-to-Site, Profiles) (Manual p.178-187)
      * VPN User (Manual p.190)
      * WireGuard (Settings, Clients) (Manual p.192-194)
    * General
      * LLDP (Manual p.140)
      * SNMP (Configuration, Trap, MIBs) (Manual p.141-148)
      * Certificate Authority (Manual p.149)

---

## 4. FEATURE INVENTORY
* **Onboarding**
  * Zero Touch Provisioning (ZTP) (FAQ p.3)
  * Bulk device upload via CSV template (Manual p.49)
  * Insight Instant Mesh AP onboarding (Manual p.112)
  * Floor plan map uploads for heatmaps (Manual p.43)
* **Devices**
  * Remote device reboot and scheduled restarts (Manual p.53)
  * Device Locate via blinking power LED (Manual p.222)
  * Move device between locations (Manual p.55)
  * Group devices for shared config (Manual p.59)
  * Cloud configuration backup and restore (Manual p.56)
  * Replace faulty device (RMA) from backup (Manual p.69)
  * Hardware assisted datapath offloading (Manual p.218)
* **WiFi/SSIDs**
  * Organization-wide or Location-specific SSIDs (Manual p.75)
  * WPA3 encryption and 6GHz band support (Manual p.88)
  * Captive portal (Free and External integration) (Manual p.93)
  * WiFi availability scheduling (Manual p.101)
  * MAC ACL (Local and RADIUS) (Manual p.96)
  * Rate limiting (Upload/Download bandwidth caps) (Manual p.98)
  * Instant WiFi (Auto RRM for channel/power optimization) (Manual p.99)
  * Multi Pre-Shared Key (MPSK) for VLAN assignment (Manual p.111)
  * Multi-link operation (MLO) for WiFi 7 clients (Manual p.91)
  * Client isolation for open networks (Manual p.91)
  * Fast Roaming (802.11k/v/r) (Manual p.110)
* **Switches**
  * Individual port config (Speed, Duplex, PoE limits) (Manual p.203)
  * Link Aggregation Groups (LAG) and LACP (Manual p.124)
  * Spanning Tree Protocol (STP/RSTP) (Manual p.126)
  * PoE downtime scheduling (Manual p.127)
  * Remote power-cycling of PoE ports (Manual p.206)
  * Port mirroring for traffic analysis (Manual p.223)
  * Port-level RADIUS authentication (802.1X) (Manual p.129)
  * Jumbo frames support (Manual p.210)
  * DHCP Snooping and L2 Relay (Manual p.55-56)
  * Broadcast storm rate limiting (Manual p.218)
* **Routers/VPN**
  * Dual WAN failover and load balancing (Manual p.159)
  * Dual WAN traffic routing rules (Manual p.167)
  * Smart Queue Management (SQM) speed tests (Manual p.170)
  * Static IPv4 routing (Manual p.173)
  * OpenVPN server setup (Manual p.176)
  * IPSec Site-to-Site tunnels with Dead Peer Detection (Manual p.178)
  * WireGuard VPN server and client management (Manual p.191)
* **Security**
  * SASE integration via Exium Security Cloud (Manual p.197)
  * Basic firewall (DoS protection, Port Scans, DMZ) (Manual p.197)
  * Time-based firewall schedules (Manual p.199)
  * Outbound NAT rules (Manual p.201)
  * Port triggering and forwarding (Manual p.205-207)
  * Certificate Authority creation and import (Manual p.149)
* **Clients**
  * Real-time connected client lists (Wired & Wireless) (Manual p.225)
  * Unrestricted device bypass list for mobile hotspots (Manual p.245)
* **Alerts/notifications**
  * Push and email notifications based on severity (Manual p.35)
  * Filter alarms by type, time, and device (Manual p.131)
  * Export alarm logs to CSV (Manual p.133)
* **Reports**
  * Custom metric reporting (Manual p.136)
  * Scheduled automated email reports (Manual p.137)
  * Custom branding with VAR/Organization logos (Manual p.137)
* **Firmware**
  * Scheduled location-wide firmware upgrades (Manual p.62)
  * Target specific firmware versions for downgrade/upgrade (Manual p.63)
* **Subscriptions/licences**
  * Single-tier Pro subscription mapping (Manual p.1)
  * Organization-level Auto Allocation of licenses (Manual p.38)
  * Activation of NETGEAR Partner (LMS) keys (Manual p.37)
* **Account/users**
  * Two-step verification (Email/SMS/Trusted Device) (Manual p.27)
  * Read-only remote access for Technical Support (Manual p.30)
* **MSP tools**
  * Multi-organization hierarchy map and device allocation (Manual p.46, FAQ p.2)

---

## 5. KEY FLOWS
**a. Sign up and create an account** (Manual p.19-20)
1. Visit insight.netgear.com and click "Create one".
2. Enter Email Address, Password, First/Last Name, Country, and Phone Number.
3. Accept terms and click Sign Up.
4. Verify the confirmation email.

**b. Add the first location/network** (Manual p.22-23)
1. Go to Locations tab and click Add.
2. Select "Single Location" radio button and select the Organization.
3. Enter Location Name and Device Admin Password.
4. Enter Location Address (manual entry, auto-detect, or map pin drop).
5. Click Save.

**c. Add a device (QR/barcode scan, serial number, ZTP)** (Manual p.24-25, DS p.2)
1. Go to Devices tab > Add.
2. Select "Single Device" and choose the target Location.
3. Enter Serial Number, Device Name, and MAC Address. *(Note: QR/Barcode scanning is mentioned in the UI overview but detailed steps are "not in sources" for the web portal).*
4. Click Add. The device automatically connects (ZTP) when powered on.

**d. Create or edit a WiFi network (SSID) and a guest/captive portal** (Manual p.87, p.93-94)
1. Go to Locations > [Location Name] > Wi-Fi > SSID and click Add.
2. Enter SSID Name, select Authentication Type, and enter Password.
3. Under Advanced Settings, select "Customize".
4. Go to Captive Portal section and click "Add Captive Portal".
5. Select "Insight Captive Portal (Free)", configure Welcome Message, Logo, and Background.
6. Click Save.

**e. Troubleshoot an offline device** (Manual p.70, p.258)
1. Go to Devices tab and select the offline device.
2. In the Summary tab, click the More menu > Share Diagnostics.
3. Enter an email address to send a `.tar.gz` diagnostic file.
4. Alternatively, go to Troubleshooting > Ping Test / Traceroute to test connectivity.

**f. Act on an alert or notification** (Manual p.131-134)
1. Go to the Alarms tab.
2. Click the filter icon to isolate by Type (Critical/Warning/Info) or Time Range.
3. Select the check box next to an alarm.
4. Click Share to email the alarm details, or click Mark All As Read.

**g. Update firmware** (Manual p.61-62)
1. Go to Locations > [Location Name] > Settings > Firmware.
2. In the Firmware Management tab, select the device check box.
3. Click Update.
4. Select the target version from the Upgrade To Version menu and click Update Now.

**h. Buy or assign a subscription/licence** (Manual p.37-39)
1. Go to Administration > Manage Subscriptions.
2. Click "Choose Plan" and select Monthly, 1 Year, or 3 Years.
3. Enter payment details to purchase.
4. To assign, go to the Organization Pools tab.
5. Click Allocate, set the number of subscriptions, and click Allocate.

**i. Invite a team member or set roles** (Manual p.32-33)
1. Go to Administration > Users > Add.
2. Enter Name, Email, and Phone Number.
3. Select Role (Secondary Admin, Insight Manager Read/Write, etc.).
4. Select the check boxes for the organizations to assign them to.
5. Click Invite.

**j. MSP: add a customer organization and switch between orgs** (Manual p.21, FAQ p.3)
1. Go to Organizations tab > Add.
2. Enter Organization Name, ISO Country, and Location Address.
3. Click Save.
4. To switch contexts, click the Organizations tab to view the list and select the desired organization's dashboard.

---

## 6. STATES
* **Device / Network Statuses:** 
  * Online (Green) (Manual p.25)
  * Offline (Red) (Manual p.25)
  * Unmanaged (Orange) (Manual p.25)
  * Waiting for first connect (Gray) (Manual p.25)
  * Critical (Offline or experiencing issues like IP conflicts/restarting) (Manual p.15)
  * Restarting / "Device is rebooting" (Manual p.65)
* **Alert Types & Severities:** Critical, Warning, Info (Manual p.132).
* **Port Statuses (Switches):** Available, Assigned, Connected and Powered, Disabled, Error, PoE, PoE Disabled, LAG, 1G/10G/25G/50G/100G Fiber Port, Uplink Port, Authorized, Unauthorized, Admin Down, Block, Auto-Trunk, Always Active, Protected port (Manual p.260).
* **Subscription Statuses:** Active, In Grace, Expiring Soon, Expired, Unallocated, Allocated, Scheduled, Bundled (Manual p.36).
* **Empty/Error States mentioned:**
  * "Input validation error displays" (Manual p.111)
  * "No matching route" (Manual p.173)

---

## 7. GLOSSARY
* **Location:** A collection of devices in the same physical location that use the same admin password (Manual p.22).
* **Network:** A virtual LAN (VLAN) mapping devices on a basis other than geographic location (Manual p.76).
* **ZTP (Zero Touch Provisioning):** Devices automatically connect and fetch configs from the cloud when powered on and connected to the internet (FAQ p.3).
* **PAYU:** Pay As You Use subscription model for MSPs (DS p.3).
* **MPSK (Multi Pre-Shared Key):** Allows multiple unique passwords on a single SSID, automatically assigning users to different VLANs based on the password used (Manual p.111).
* **Captive Portal:** A splash page that requires users to log in, accept terms, or authenticate before getting network access (Manual p.93).
* **OWE (Enhanced Open):** Automatically encrypts each client's wireless traffic on an otherwise open (password-less) SSID (Manual p.89).
* **MLO (Multi-Link Operation):** Allows WiFi 7 clients to use multiple frequency bands simultaneously for better speed and reliability (Manual p.91).
* **SQM (Smart Queue Management):** A QoS feature that keeps latency low across all types of traffic on WAN interfaces (Manual p.170).
* **Hardware Assisted Datapath:** Offloads packet processing from the CPU to specialized hardware on APs to increase maximum throughput (Manual p.218).

---

## 8. FRICTION POINTS
* **Sync Delays:** "NOTE: Synchronization between the device UI and Insight might take up to 15 minutes." (Manual p.18).
* **Configuration Wipe on Move:** "NOTE: When you move a device to another location, it wipes all existing configuration, then inherits the new location's configuration after it resets and restarts." (Manual p.67).
* **Firmware Update Outages:** "NOTE: During an update, the Internet access of another device may stop, which can cause its firmware update to fail." (Manual p.62).
* **VLAN Cloud Lockout:** "CAUTION: Configuring a VLAN on the network uplink port (the port that connects your device to the Internet) might disconnect your device from the Insight cloud." (Manual p.80).
* **VPN Subnet Conflicts:** "CAUTION: The remote LAN IP addresses and the local LAN IP addresses cannot be in the same subnets... cannot be 192.168.1.x." (Manual p.179).
* **Tedious MPSK Setup:** To add multiple users to an MPSK, admins must manually upload a CSV file instead of having a modern batch generation tool (Manual p.114).
* **Physical Device Location:** "Physically identify the device in your rack by looking for the blinking blue LED" (Manual p.234) — requires walking the floor.

---

## 9. FAQ THEMES
* **Upgrade & Compatibility Fears:** Questions like "What is Insight 10.0?", "Do existing customers need to take action?", and "Will current devices work?" reveal that users are highly anxious about forced hardware upgrades and migration disruptions causing network downtime.
* **Pricing & Licensing Confusion:** Questions regarding the new "single-tier" and "What happens to my existing Premium/Pro tier?" show that users have historically been frustrated by confusing, multi-tiered billing models and want predictable pricing without hidden paywalls.
* **Complex Capabilities Needing Explanation:** "What are WiFi heatmaps?", "What is RBAC?", and "What is AI-defined networking?" highlight that while NETGEAR is adding enterprise-grade features, the target audience (small business owners / hybrid MSPs) needs these concepts translated into plain English.
* **Operations & Resiliency:** Questions about ZTP, MSP multi-client support, and "What happens if cloud connection is temporarily interrupted?" indicate a strong focus on practical, day-to-day reliability and multi-tenant scaling.

---

## 10. CREATIVE SOLUTION IDEAS
1. **Real-time Sync Indicator:**
   * *Problem:* Changes made via local UI take up to 15 minutes to sync with the Cloud (Manual p.18), risking conflicting edits.
   * *Idea:* Add a global header indicator (e.g., "Cloud syncing... 2 changes pending") that pulses until the device confirms parity. 
   * *Helps:* IT Admins. Fits Insight's mobile-first UI by providing immediate visual feedback.
2. **"Preserve Settings" Move Wizard:**
   * *Problem:* Moving a device wipes its config entirely (Manual p.67).
   * *Idea:* When dragging a device to a new location, offer an AI-assisted mapping wizard that ports over compatible VLANs/SSIDs instead of a hard factory reset.
   * *Helps:* MSPs. Fits AI-defined networking and streamlined onboarding.
3. **Auto-Sequenced Firmware Updates:**
   * *Problem:* Updating a router before a switch can drop the internet and fail the switch's update (Manual p.62).
   * *Idea:* A "Smart Update" button that visually diagrams the safe upgrade order (Edge → Switch → Router) and executes it automatically in stages.
   * *Helps:* Small Business Owners. Fits AI-defined networking.
4. **QR-code MPSK Generator:**
   * *Problem:* Setting up multiple pre-shared keys requires tedious CSV uploads (Manual p.114).
   * *Idea:* In the mobile app, allow admins to scan a batch of QR codes on IoT devices to instantly generate and assign MPSKs to the correct VLAN.
   * *Helps:* IT Admins. Fits mobile-first onboarding.
5. **Uplink "Pre-flight" Check:**
   * *Problem:* Misconfiguring the uplink VLAN can lock the device out of the cloud (Manual p.80).
   * *Idea:* An AI simulation check. If the user tries to tag the uplink port, the app simulates the route and warns "This will break your cloud connection" before allowing the save.
   * *Helps:* Small Business Owners. Fits AI-defined networking.
6. **Subnet Collision Resolver:**
   * *Problem:* Setting up Site-to-Site VPNs fails if both sides use `192.168.1.x` (Manual p.179).
   * *Idea:* An AI-defined VPN wizard that automatically queries both ends, highlights the conflict, and auto-suggests an available `/24` subnet.
   * *Helps:* MSPs. Fits AI-defined networking.
7. **Local Fallback Cache *(Speculative)*:**
   * *Problem:* Users worry about losing control during cloud outages (FAQ p.3).
   * *Idea:* A "Local Fallback" toggle in the mobile app that uses Bluetooth/Local WiFi to cache recent logs and allow basic rebooting when the cloud is down.
   * *Helps:* Small Business Owners. Fits mobile-first reliability.
8. **Augmented Reality (AR) Device Locator *(Speculative)*:**
   * *Problem:* Finding a specific AP currently requires looking for a blinking LED (Manual p.234).
   * *Idea:* Using the Heatmap floorplan data, provide an AR view in the mobile app where holding up the camera overlays AP health and names on the real-world view.
   * *Helps:* IT Admins. Fits mobile-first and visual topology trends.

---

## Implications for Deepak's Case Study
* **Simplify the Hierarchy:** The Account → Org → Location → Device Group model is powerful but overwhelming. The mobile app redesign should default to the "Location" view for small businesses, hiding the MSP-level complexity unless needed.
* **Abstract the Networking Jargon:** Features like "MPSK" and "Hardware Assisted Datapath" need plain-English translation in the UI (e.g., "Unique Passwords per Device" and "Performance Boost").
* **Proactive Error Prevention:** The design must incorporate "guardrails" (like the Uplink Pre-flight Check or Subnet Resolver) because mistakes in a cloud-managed system can physically lock the user out of their own hardware.
* **Focus on the 10.0 Value Proposition:** Ensure the UI prominently features the "Single Subscription" health and the "AI-defined networking" prompts, as these are the major selling points of the June 2026 launch.
