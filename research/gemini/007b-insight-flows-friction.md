> **Claude verification (11 Oct):** about 20 quotes were checked against the extracted PDF text, and all are real. Page numbers: 007 uses PDF pages. 007b uses PDF pages in §1–2 but **printed pages (PDF − 11) from §2 'Resetting…' onward**. Use `research/insight-knowledge/insight_verified_facts.md` as the canonical source.

# 007b — Insight Exhaustive Flows and Friction

## 1. Onboarding and Setup Procedures

### Account sign-up
1. Visit insight.netgear.com.
2. Select **Account Log In**. The Account Log In page displays.
3. Click the **Create one** link.
4. In the **Email Address** field, enter your email address.
5. In the **Password** field, enter a password.
6. In the **First Name** field, enter your first name.
7. In the **Last Name** field, enter your last name.
8. From the **Country** menu, select a country.
9. In the **Phone Number** field, enter your phone number.
10. Select the check box to accept NETGEAR's terms and conditions.
11. Click the **Sign Up** button. A confirmation email is sent to you. If you did not receive an email, click the **Resend Confirmation Email** link.
12. Verify the email to complete Insight registration. After you verify your email, your Insight account becomes active, and you are prompted to create an organization and location.
13. Create an organization. 
14. Create a location. 
15. Click the **Next** button. A page displays to advise your Insight account is successfully created.
16. Optional: Click the **Start Guided Tour** button to learn more about the Insight Cloud Portal.
*(Manual p.19-20)*

### Creating an organization
1. Access the Insight Cloud Portal. The Insight Dashboard displays.
2. Select the **Organizations** tab. The Organizations page displays.
3. Click the **Add** button. The Add New Organization page displays.
4. In the **Organization Name** field, enter an organization name.
5. From the **ISO Country** menu, select the country that the organization is in.
6. In the **Location Address** field, do one of the following: enter an address for the location or click the navigation icon to detect the location automatically.
   * In the **Location Address** field, enter any part of the address (such as street, building, area, or postal code) to detect the full address.
   * Click the navigation icon to detect the location address automatically.
   * Drag and drop the red pin on the map. The address automatically displays in the address fields based on the location of the pin.
7. In the **Organization Image** section, do the following:
   a. Click the **Upload** button to add an organization image.
   b. Select the image you want to upload.
8. Click the **Save** button. Your organization is created. A pop-up displays to ask if you want to create locations automatically.
9. Click the **Yes** button.
*(Manual p.21)*

### Creating a single location
1. Access the Insight Cloud Portal. The Insight Dashboard displays.
2. Click the **Locations** tab. The Locations page displays.
3. Click the **Add** button. The Add New Location page displays.
4. Select the **Single Location** radio button.
5. From the **Organization** menu, select an organization.
6. In the **Location Name** field, enter a location name.
7. In the **Device Admin Password** field, enter a new password for the device. This password replaces the existing admin password on each device that you add to the network location.
8. From the **ISO Country** menu, select the country that the location is in. Your browser automatically populates this field. The **Time Zone** field automatically displays that of the ISO country you select.
9. If there are multiple time zones in that ISO country, from the **Time Zone** menu, select the correct time zone.
10. In the **Location Address** section, do one of the following:
    a. In the **Location Address** field, enter any part of the address to detect the full address.
    b. Click the navigation icon to detect the location address automatically.
    c. Drag and drop the red pin on the map.
11. In the **Location Image** section, do the following:
    a. Click the **Upload** button to add a location image.
    b. Select the image you want to upload.
12. Click the **Save** button. The new location is created.
*(Manual p.22)*

### Creating multiple locations
1. Access the Insight Cloud Portal.
2. Click the **Locations** tab.
3. Click the **Add** button.
4. Select the **Multiple Locations** radio button.
5. From the **Organization** menu, select an organization.
6. In the **Number of Locations** field, enter how many locations you want to create.
7. In the **Device Admin Password** field, enter a new password for the device.
8. From the **ISO Country** menu, select the country that the location is in.
9. If there are multiple time zones in that ISO country, from the **Time Zone** menu, select the correct time zone.
10. Click the **Next** button. The Add Location pop-up page displays.
11. In the **Review Locations** section, do one of the following to set the address for each location:
    * In the **Location Address** field, enter any part of the address to detect the full address.
    * Click the navigation icon to detect the location address automatically.
    * Drag and drop the red pin on the map.
12. Click the **Select** button.
13. Click the **Add** button. A pop-up displays to ask if you want to copy configuration from an existing location after adding the new locations.
14. Click the **Yes** or **No** button.
15. If you select the **Yes** button, do the following:
    a. In the Add Location pop-up page, select the source location to copy the configuration from.
    b. Select one or more of the new locations where you want to apply this configuration.
    c. Click the **Apply** button. The new locations are created.
*(Manual p.23-24)*

### Adding a single device (Serial & MAC)
1. Access the Insight Cloud Portal.
2. Select **Devices > Add**. The Add Device page displays.
3. Select the **Single Device** radio button.
4. From the **Select Location** menu, select a location you want to add the device to.
5. In the **Serial Number** field, enter the serial number of the device.
6. In the **Device Name** field, enter a device name.
7. In the **MAC Address** field, enter the MAC address of the device.
8. Click the **Add** button. The device is added to the organization.
*(Manual p.24-25)*

### Adding multiple devices (Bulk / CSV)
1. Access the Insight Cloud Portal.
2. Select **Devices > Add**. The Add Device page displays.
3. Select the **Multiple Devices** radio button.
4. From the **Select Organization** menu, select an organization you want to add the device to.
5. In the **Device List** file section, click the **Click here** button to download the device template.
6. Complete the following details for each device in the device template:
   * Serial number
   * Device name
   * MAC address
   * Location
   * Profile Name (If adding a mobile hotspot)
   * IMEI number (If adding a mobile hotspot)
7. Click the **Open file** link to upload the completed device list file or drag and drop the file.
8. Click the **Next** button.
9. Select the check boxes next to the new devices you want to add.
10. Click the **Update Device List** button. The devices are added to the organization and location.
*(Manual p.49-50)*

### ZTP and App Scan
* **ZTP (Zero Touch Provisioning):** "NETGEAR managed devices automatically connect to your Insight account when powered on and connected to the internet. No manual configuration at the device level is required." *(FAQ p.3)*
* **App Scan:** "Four different ways to add a device to a network location, including scanning your network, scanning the device QR code, scanning the device barcode, and entering the device serial number." *(Manual p.14)* *(Note: Exact step-by-step screens for App Scan are not in sources because the manual exclusively covers the web portal).*

### First-time device setup per device type
*(Note: There is no distinct first-time wizard in the cloud portal after adding a device. All devices (APs, switches, routers, hotspots) immediately sync and inherit the configurations assigned to their parent Location).*
"When you onboard a device to Insight, or enable the Insight management mode, any pre-existing device configuration or changes to the device settings through the device UI is overwritten by the configuration in the Insight Cloud." *(Manual p.25)*

---

## 2. Errors, Warnings, Edge-Cases & Troubleshooting

### Subscription, Licenses & Trial Edge-Cases
* **NOTE:** "Legacy subscription types are discontinued. All pre-existing subscriptions are honored until their original expiry date." *(Manual p.13)*
* **NOTE:** "When you purchase a subscription, the Insight free trial ends immediately and the paid subscription becomes active." *(Manual p.13)*
* **NOTE:** "Prepaid annual and postpaid monthly subscriptions are not available in all countries. To view the list of supported countries, see Supported Countries in Insight on page 261. If Insight is not supported in your country, you must purchase these subscription types through a third‑party vendor. You can also purchase a NETGEAR Partner (License Based) subscription through a third‑party vendor." *(Manual p.13)*
* **NOTE:** "Both monthly and annual subscriptions offer an auto-renewal (AR) service. Ensure you deactivate this setting before you terminate your subscription, otherwise no grace period is provided. For more information, see Manage Insight Subscriptions on page 24." *(Manual p.14)*
* **NOTE:** "A 90-day free trial for Insight automatically starts once you add your first device." *(Manual p.20)*
* **NOTE:** "When you purchase your first Insight subscription plan, your Insight free-trial ends." *(Manual p.37)*
* **NOTE:** "When you activate or schedule a subscription key, your Insight free-trial ends. Ensure you have enough keys for activation to keep all your devices managed before proceeding. If there are not sufficient keys, some devices might move to an unmanaged state." *(Manual p.38)*
* **What happens when out of licenses?** "When you decide to end a subscription, it is important to be aware of the following Insight grace periods for your specific plan. A grace period is a short window after your subscription expires during which your devices remain in the Insight system but are flagged for attention. This gives you time to renew before losing remote management access. If you renew within the grace period, your devices are automatically restored to managed status. If the grace period ends without renewal, your devices move to an expired state and remote management is no longer available." *(Manual p.13)*

### Device Connection & Cloud Outage Edge-Cases
* **NOTE:** "Synchronization between the device UI and Insight might take up to 15 minutes. During the synchronization period, do not make the same changes on both the device UI and Insight or conflicting changes on the device UI and Insight." *(Manual p.18)*
* **What happens when a device is offline?** "A device displays as Critical when it is offline or experiencing issues like connectivity, restarting, IP conflicts, or similar problems." *(Manual p.15)* It is listed under "Offline Devices" meaning disconnected from Insight *(Manual p.251)*.
* **What happens when a cloud connection is lost?** "NETGEAR devices continue to operate normally during any cloud connection interruption. Traffic continues to flow, configured settings remain active, and previously applied policies stay in effect. The Insight management platform resumes full monitoring and management capability automatically when connectivity is restored — with no manual intervention required." *(FAQ p.3)* Additionally, if Auto Rollback is enabled on mobile profiles: "When activated, device settings automatically revert if connectivity is lost." *(Manual p.227)*
* **CAUTION:** "Configuring a VLAN on the network uplink port (the port that connects your device to the Internet) might disconnect your device from the Insight cloud. We recommend that you do not configure a VLAN on the cloud uplink port until you configure an alternate network cloud uplink." *(Manual p.69)*

### Firmware & Updates Edge-Cases
* **What happens when a device needs firmware?** "If firmware updates are available for managed devices, Insight detects and lists the updates, and lets you update the firmware on individual devices... The Upgrade Status column advises if there is a firmware upgrade available." *(Manual p.50)*
* **NOTE:** "During an update, the Internet access of another device may stop, which can cause its firmware update to fail. To reduce this risk, Insight updates the firmware on all edge devices (access points, Orbi Pro, routers) at the same time, then updates switches, and then business routers. Review the status of all devices and manually update the firmware of any devices that were not included during the scheduled window." *(Manual p.51)*
* **NOTE:** "You can upgrade a device to any target firmware version, but you can downgrade to an earlier version on access points only." *(Manual p.52)*

### Resetting, Moving, and Hardware Limitations
* **NOTE:** "When you move a device to another location, it wipes all existing configuration, then inherits the new location's configuration after it resets and restarts." *(Manual p.56)*
* **NOTE:** "To move an access point, the new location must be in the same wireless region (RF domain) that the AP is already in. You can move all other devices to different wireless regions." *(Manual p.56)*
* **NOTE:** "After you return the device to factory default settings, it is removed from Insight. You need to manually re-add the device to Insight. For more information, see Add a device on page 13." *(Manual p.53)*
* **NOTE:** "Returning your device to factory default settings erases all configured settings. Do not follow this procedure unless you are sure that you want to return all settings to their factory defaults" *(Manual p.53)*
* **NOTE:** "We recommend that you export and save the configuration file before you reset the device to factory default settings. For more information, see Share Device Diagnostics on page 59." *(Manual p.53)*
* **NOTE:** "Each selected device becomes unreachable for one to two minutes. Connected clients might disconnect and might need to reconnect." *(Manual p.55)*
* **NOTE:** "Overlapping restart schedules for the same device are not allowed." *(Manual p.55)*
* **NOTE:** "The device upload limit is 1000." *(Manual p.50)*
* **CAUTION:** "Selecting a PoE standard that exceeds the capability of your switch port may cause the access point to power cycle or operate in a reduced-power mode. Verify the PoE budget of the connected switch port before changing this setting." *(Manual p.230)*

### Routing, VPN, and Traffic Rules Edge-Cases
* **CAUTION:** "You need some networking knowledge to set up traffic rules, because incorrectly configured traffic rules might block communication on the Insight." *(Manual p.156)*
* **CAUTION:** "The remote LAN IP addresses and the local LAN IP addresses cannot be in the same subnets. For example, if the local subnet specified in the previous step is 192.168.1.x, the remote subnet must be a different subnet such as 192.168.2.x, and cannot be 192.168.1.x." *(Manual p.168)*
* **NOTE:** "The IP address range for VPN clients must not overlap with any WAN, VLAN, or VPN subnet. Express the range in network address and subnet mask format, for example 10.0.8.0/255.255.255.0. The OpenVPN server is allocated the first usable address within the network; the remaining usable addresses are allocated to clients." *(Manual p.165)*
* **NOTE:** "A dual WAN traffic rule takes priority over a WAN failover. Therefore, after a WAN failover, traffic that is subject to a traffic rule for a specific WAN interface might stop if that WAN interface is down. That is, the traffic might not failover to the other WAN interface. For more information, see Manage dual WAN traffic rules on page 156." *(Manual p.154)*
* **NOTE:** "A separate Internet connection is required for each WAN port. You must have two active ISP connections to use dual WAN with failover." *(Manual p.149)*

---

## 3. Home/Dashboard Screen Structure

The Insight Cloud Portal Dashboards provide tiered visibility from global status down to individual device health. 

### **Organization Dashboard** *(Manual p.251-253)*
**General Summary Section (Tiles):**
* **Devices:** Shows numbers of Online, Offline, and Critical devices. (Critical = offline, restarting, IP conflicts, or similar problems).
* **Subscription Status:** Displays Active, In Grace, or Expiring Soon. 
* **Alarms:** Displays Online and Warning counts.
* **What's New / Subscription Update:** Tile displaying platform news.

**Device Summary Section (Status by Type):**
* **Switches:** Online, Offline, Critical
* **Routers:** Online, Offline, Critical
* **Access Points:** Online, Offline, Critical
* **MHS (Mobile Hotspots):** Online, Offline, Critical

**Wireless Summary Section (Widgets/Graphs):**
* **WiFi Distribution:** Breakdown of connected clients by 2.4 GHz, 5 GHz, and 6 GHz.
* **Connected Client Trend:** Graph of client counts over time by band.
* **Top APs by Traffic:** List of APs ranked by usage.
* **Top SSIDs by Traffic:** Graph of SSID usage over time.

**Wired Summary Section (Widgets):**
* **Top Switches by Uplink Utilization**
* **Top Switches by Port Errors**
* **Top Switches by PoE Utilization**
* **Top Routers by Traffic**
* **Top Router WAN Port Errors**

**Location Summary Section (Widgets):**
* **Top Locations by Traffic**
* **Top Locations by Clients**
* **Top Locations by Critical Alarms**
* **Top Locations by Devices**

### **Location Dashboard** *(Manual p.254-256)*
Contains all the same sections as the Organization Dashboard (Network Summary, Device Summary, Wireless Summary, Wired Summary) but scoped exclusively to the devices residing in the specific Location.

### **Individual Device Dashboards** *(Manual p.256-260)*
**Device Details (Applies to all):**
* Device Name, Serial Number, MAC Address, Model, Up Time, Status, Last Seen, IP Address, Firmware Version, Admin Password (viewable via eye icon).

**Router Dashboard (Summary Tab):**
* **Ports:** Graphic showing connected/disconnected physical ports.
* **Traffic Summary:** Data flowing (upload/download) across all interfaces.
* **Speed:** LAN port speeds in Kbps.
* **Client:** Connected clients filtered by VLAN/duration.
* **Connectivity Status:** When the router is connected/disconnected.
* **Network Usage:** Network usage on each WAN in Kbps.

**Switch Dashboard (Summary Tab):**
* **Ports:** Graphic showing port statuses (Available, Assigned, Connected/Powered, LAG, Fiber modes, PoE, Error, Blocked, etc.).
* **Statistics:** Current Power Consumption, Temperature, CPU Usage, Fan State, Tx/Rx Data.
* **Traffic:** Amount of data flowing through the switch's ports.
* **VLANs in use:** List of configured VLANs.

**Access Point Dashboard (Summary Tab):**
* **Client OS:** Status of each wireless radio and band in use.
* **Channel Utilization:** Wireless channel capacity currently in use.
* **Statistics:** Configured wireless networks, connected clients, and traffic usage.

**Mobile Hotspot Dashboard (Summary Tab):**
* **Traffic:** Monthly usage and daily/weekly traffic usage.
* **Device Details:** Battery Level, Country/Region, Clients, 2.4/5/6 GHz Clients, Mobile Number, USB/LAN Clients.

---

## 4. FAQ Setup Problem Themes

**Q: Do existing Insight customers need to take any action to upgrade to 10.0?**
* **Answer Summary:** No action needed. The update happens automatically, and all settings and configurations are preserved. *(FAQ p.1)*

**Q: Will my current NETGEAR devices still work with Insight 10.0?**
* **Answer Summary:** Yes, the new version is fully backward-compatible with older hardware. No hardware replacement is necessary to use the new dashboard. *(FAQ p.1)*

**Q: What happens to my network if the cloud connection is temporarily interrupted?**
* **Answer Summary:** Devices continue routing and switching normally using their last known configuration. Management and monitoring functions pause until the internet reconnects, at which point the platform automatically resumes. *(FAQ p.3)*

**Q: How do I get started with NETGEAR Insight 10.0?**
* **Answer Summary:** Create a NETGEAR account, log in, and follow the onboarding flow to add your first device. Existing accounts are already updated. *(FAQ p.3)*

**Q: How does zero-touch device onboarding work?**
* **Answer Summary:** Devices automatically connect to Insight when plugged into the internet. Configs are pushed instantly without requiring local device setup. *(FAQ p.3)*

**Q: How long does it typically take to set up a new site?**
* **Answer Summary:** Thanks to Zero Touch Provisioning (ZTP) and bulk templates, a 50-device deployment can be operational in a single afternoon. *(FAQ p.3)*
