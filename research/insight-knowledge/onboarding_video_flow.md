# Insight Android onboarding: screen-recording flow (Deepak, 11 Oct 2026, 12:00–12:07)

Source: `assets/insight-mobile-app-onboarding-video.mp4` (6:30, 576×1280). 78 scene-change frames → `assets/onboarding-video-frames/f_NNN.jpg`, timestamps in `_times.txt` (line = frame index − 1, seconds).
Method: Claude read the frames on 4 contact sheets (small size). **Copy below was read at low resolution. Open the full frame before quoting any text in Figma.**
New account this time (dpoo.bang@…), a different one from the 19-screenshot walkthrough (`app_walkthrough.md`).

## Privacy (Deepak: fine to use as-is, 11 Oct)
* Deepak's **daughter** is in the phone wallpaper (f_002–f_005, f_048–f_051, app-switcher frames in f_068–f_076).
* **Other people's emails** in the Google account picker (Jayasri, other Deepak accounts): f_027, f_032–f_033, f_061.
* His email and phone in sign-up (f_021–f_026), and a reset code in Gmail (f_052–f_054).
* An unrelated Gemini ad on f_077. Frames f_001–f_009 are screen-recorder setup, not the app.

## Flow (frame → screen)
| Frames | Screen | New vs the 19 screenshots? |
|---|---|---|
| f_010 | Splash + notification permission dialog | same as 01–02 |
| f_011–f_013 | Splash, light "Please wait" overlay | new: a loading state |
| f_014–f_015 | Intro slide 1 | same as 03 |
| f_016–f_020 | Blank/grey "Please wait" spinners | new: several loading screens in a row |
| f_021–f_026 | Sign-up form: email, first/last name, password, confirm, country, phone, 2 checkboxes. Inline "Password cannot be blank" errors. Google Password Manager sheet. Green "Your account has been created" banner | same as 09; validation errors + success banner newly visible |
| f_027–f_028 | Login with a "check your inbox to verify" banner + Google "Continue with" account picker | same as 10; picker is new |
| f_028 | Gmail: "Verify your email address", link valid 24 h | new: the email itself |
| f_031–f_036 | Login: Log in / Log in with one-time code / Create account. Account picker again | new: one-time-code option |
| f_035, f_045–f_046 | **Reset Password** modal ("We'll send a verification code…", "Use One Time Password instead") | **new path: forgot password** |
| f_037, f_047 | "Password cannot be blank" on login | new |
| f_048–f_054 | Leaves the app → Gmail "Let's Reset Your Password" email with a 6-digit code → back | new: a third trip out to email |
| f_055–f_059 | **Update Password**: code + new password + confirm, Submit. Password Manager sheet | new |
| f_060–f_064 | Login again; Insight asks "Use your saved password for accounts2.netgear.com?" | new |
| f_065 | **Enable two-step verification?** (Maybe later / Enable now) | same as 13 |
| f_066 | Select verification method: Email (default) / SMS Text Message | same as 14 |
| f_067 | **Organizations: "No organizations available"**, + in the header | same as 19 (dead end) |
| f_068–f_071 | Side menu: Account Management, About, REGISTER ANY NETGEAR DEVICE, More from NETGEAR, Technical Support (+ Grant Access to Support), INSIGHT KNOWLEDGE BASE, Play Intro, INSIGHT CLOUD PORTAL, What's New in Insight?, Log Out | **new: navigation** |
| f_069–f_070 | Account Management: Manage Notifications, Credit Allocation, Purchase History, Manage Insight Subscriptions, Captive Portal Services, Manage Profile, View Managers | **new** |

Not seen this time: the "What's new" modal (16–17) and the verify-identity code (18).

## Leads to check with Deepak (his observations; nothing here is decided)
* Forgot-password path = another trip out of the app to email (a code), on top of the verify link.
* Several back-to-back "Please wait" loading screens. Don't claim durations: the timestamps can't tell waiting from typing.
* Side menu mixes ALL CAPS and Title Case items. "Register any NETGEAR device" sits in the menu, not on the empty Organizations screen where the user is stuck.
* "accounts2.netgear.com" shown to the user in the saved-password prompt.
