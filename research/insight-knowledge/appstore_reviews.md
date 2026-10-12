# NETGEAR Insight: App Store user voice (real, verbatim)
**Source:** Apple's public customer-review RSS feed for app id **1186392308**, e.g. `https://itunes.apple.com/us/rss/customerreviews/page=1/id=1186392308/sortby=mostrecent/json`. Claude pulled it on 11 Oct 2026 from the US, GB, IN, AU and CA stores. The raw data is in `appstore_reviews_raw.json`.
**App page:** https://apps.apple.com/us/app/netgear-insight/id1186392308. The current version is 10.2.207 (29 Sep 2026), rated **4.28★ from 4,557 ratings**.
**Sample:** 190 written reviews (2017 to May 2026). Stars: 1★ 127 · 2★ 22 · 3★ 12 · 4★ 8 · 5★ 21.
**Caveat:** written reviews lean heavily negative. Most people who rate never write a review, which is why the overall average is still 4.3★. Use these quotes to show *where* people struggle, not *how many* struggle.
Gemini 008 couldn't get any of this (bot blocks). Google Play and community.netgear.com weren't covered.

## Onboarding themes (2024–2026 quotes are word for word)

### 1. Sign-up and password friction blocks people at step 1
- "I tried making an account on the app and it keeps saying that my password is weak. I put a 20 long password with cap letters and numbers and every symbol that's allowed and still says it's weak" (ZachZentron, 1★, 2025-06-06, v7.7.4)
- "How do you get your app to take a password? … I have been doing this for a long time and have never not been able to register" (™️Renovations.m1-f2, 1★, 2025-04-25)
- "After forcing me to make an account (which it made very hard because of password requirements and no 1P integration) it auto-enrolls me in some premium service that I don't see the use of? All I wanted is to register my switch." (Harry_nt, 1★, 2024-11-08)

### 2. Adding devices: discovery fails, or the serial number isn't accepted
- "It can't even find devices made by Netgear. If it finds the devices, it will list them, however it can't communicate with them." (True story no lie, 1★, 2026-05-29, **v10.0.0**)
- "The first axis point was easy to set up ever since then I have not been able to find the others." (Jeaux703, 1★, 2024-09-12)
- "once you have set up the app and registered the account the serial number is not supported by the app." (Chatham1667, 1★, 2024-05-27)

### 3. Bouncing between the app and the browser breaks the flow
- "got a code to the continue in a web browser... this odd back and forth between native app and use a seperate web browser!!! Not only did the password not get set but the app is stuck not communicating to the switch. Talk about poorly designed workflow" (Scibidoo, 1★, 2024-06-03)
- "It's always been lacking certain functionality only available in the browser version" (B17bct, 1★, 2026-04-28, v10.0.0)

### 4. Accessibility: scanning-first onboarding excludes blind users ⭐
- "It takes somebody with eyesight to aim at the barcode, and then when I do try to register the product, it won't let me continue past the, naming of the office network and inputting the password. I can't change the time zone … the please search for the barcode pop over keeps coming back up which steals focus away from the rest of the app when the screen reader is in use" (eric oyen, 2★, 2024-10-01)
- → This is direct evidence for an edge case: **scanning must never be the only way to add a device**, the time-zone picker must work with a screen reader, and focus must be managed properly.

### 5. Subscription and trial surprises during setup
- "Not quite sure what the app is talking about where I need to have a Subscription? Don't see it listed anywhere to purchase" (2025-06-24)
- "The app is just a cynical attempt to lock you into a paid premium subscription." (Chatham1667, 2024-05-27)
- "it's difficult to get a pro license in order to manage these access points remotely after the first initial year" (GeoConsumer, 4★, 2024-02-27)
- (This matches Manual p.20: the trial starts silently when you add your first device.)

### 6. Hard to find your way around; the app doesn't match what's really happening
- "Lots of blind alleys, not easy to navigate." (Rtonn$fdr, 1★, 2025-09-19)
- "I find it one of the least intuitive platforms I have ever used" (Ben Meek, 1★, 2025-10-26, experienced with networking)
- "It's only Insight that thinks there's a problem!" (trax303, 2★, 2025-01-27). The app showed a false "disconnected" status. This supports the earlier false-offline / alert-fatigue idea.

### 7. Counter-evidence (positive, report honestly)
- "Setting up and maintaining a network with multiple access points and SSID's is a breeze with the insight app!" (OJCJr, 5★, 2024-03-28)
- "these access points are quite easy to set up. Easier than most" (GeoConsumer, 4★, 2024-02-27)
- "For IT Admin by IT Admin and just enough permissions to learn as you go." (imatthewtanner, 5★, 2024-02-28)
- → Experienced IT admins cope fine. The pain falls on **first-time / small-business users**.

## The 10.0 launch (8 reviews, Apr–May 2026, v10.0.0). These are bugs after the update, not onboarding
- Since the update people report missing client lists, mesh not showing, firmware updates failing, and the Health section unusable. Example: "Since I got the v10.0.0 update I can no longer see any clients in the app" (Sephro81, 2026-04-27).
- Interview caution: **don't lead with this.** Manish's team shipped 10.0, and the newer v10.2 has probably fixed these. Use it at most as "trust in status data matters", which feeds the Home "Everything OK" card.

## Gemini 008 Part C (competitors): UNVERIFIED
Gemini's summary of eero / UniFi / Meraki Go / Omada has **no source links**. Use it only as background (QR-first in Meraki Go, auto-discovery in eero, "Pending adoption" in UniFi/Omada) until we check it.
