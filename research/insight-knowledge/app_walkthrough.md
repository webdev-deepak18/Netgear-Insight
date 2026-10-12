# Insight Android app: first-time walkthrough (Deepak, 11 Oct 2026)

Source: Deepak installed the app and signed up as a brand-new user, with no devices and no networking background. 19 screenshots in `assets/live-app-screenshots/` (01–19).
⚠️ 09 shows his email and phone number. 11 shows his password in plain text. **Never use them unredacted.**
Framing: a designer's expert walkthrough as a non-expert, NOT user research.

## Flow (status-bar times 1:27 → 1:37 ≈ 10 min, 19 screens, ends with zero devices)
| # | Screen | Note |
|---|---|---|
| 01 | Splash | Purple→blue gradient (`#A10DFF` → `#1A6CFC`) + network-node mark. Matches no other screen. |
| 02 | Notification permission | Asked at launch, before the app has shown any value. |
| 03–06 | 5-slide intro | Dark slate `#30374A`, thin light headings, green line art `#00D66F`. Copy still says "access points, switches **and NAS**". Slide 4 adds a second CTA ("Scan Network"). |
| 07 | Scan result | "No devices found… An example of a scan result is shown below." The example devices (WAX630, GSS123, Orbi) look like real results → confusing. |
| 08 | NETGEAR account hub | "One Account. Any App." (Nighthawk / Orbi / Insight / Meural). White screen, navy button. A different visual world from 03–07. |
| 09 | Sign-up | Email, first name, last name, password, **confirm password**, country, phone, 2 checkboxes (promo + T&C). Underline inputs. |
| 10 | Login + green banner | "Please check your inbox to verify…". Has to leave the app for email. Log in disabled. |
| 11–12 | Login + red banner | "Please verify your email and activate your account first." He tried before verifying → a loop. |
| 13 | Enable 2-step? | Interruption + generic stock illustration. "Maybe later" / "Enable now". |
| 14 | Choose method | SMS greyed out with **no reason given**. |
| 15 | Success | "Email added as a Primary method…". **Continue button clipped** by the bottom edge (layout bug). |
| 16–17 | What's new modal | "We've updated Insight for you!" shown to a user who has never used it. Content = "Bug Fixes / General bug fixes". v10.0.0, Apr 18 2026. |
| 18 | Verify identity | A 6-digit email code: a **second** email check right after the verification link. |
| 19 | Organizations | **"No organizations available."** No explanation, no next step, only a small + in the header. Dead end. |

## Top frictions (case-study evidence)
1. **About 10 min and 19 screens to reach an empty screen.** Value comes last, after permission, intro, sign-up, 2 email checks, 2FA and a what's-new modal.
2. **Empty state is a dead end** (19). The next step ("create an organization → add a location → add a device") isn't explained. Same as the portal.
3. **Order of interruptions:** notifications before value, 2FA and what's-new before the first task.
4. **Two leaving-the-app email checks** (link at 10 + code at 18).
5. **Three visual languages in one flow:** purple gradient (01) → dark slate + green (03–07) → white + navy + teal (08–19).
6. **Unexplained states:** SMS disabled (14), example devices that look real (07), generic "valid serial" error (portal).
7. **Layout bug:** Continue button clipped (15).

## Colours sampled (full-res pixels)
| Use | Hex | Note |
|---|---|---|
| Primary button / header bar | `#2D3945` / `#2B3648` | ≈ portal navy `#2B3749`. **The real CTA colour is navy, not teal.** |
| Link / selected (teal) | `#1EB8A0`, `#3BBCA6` | ≈ data-sheet teal. Differs from portal MUI teal `#009688`. **White bg + teal text ≈ 2.5:1 → fails AA** ("Forgot password", "Maybe later", "I don't have an account") |
| Disabled button | `#979CA2` | |
| Success banner | `#25991A` | White text ≈ 3.7:1, fails AA at its small size |
| Error banner | `#FB3858` | White text ≈ 3.6:1, fails AA |
| Intro bg / accent | `#30374A` / `#00D66F` | |
| What's-new header | `#D4F3F6` | |
| Splash gradient | `#A10DFF` → `#1A6CFC` | |

Fonts: account screens look like a rounded sans (Nunito-like) for headings plus Roboto (Android default) for inputs. The org screen is Roboto. The portal is Outfit. → **There's no single typeface across the product.** (Visual judgement, not verified.)
