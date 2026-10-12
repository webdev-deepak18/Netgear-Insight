# Link colour contrast: evidence (chat 24, 2026-10-11)

Claim for the interview: "The live app's text links fail WCAG AA contrast, so I used teal800 #00695C from your own palette instead."

## 1. The colour is in their production code
- `darkPrimaryMain #1CB9A0` is in the portal's production CSS :export block: https://insight.netgear.com/assets/index-IGcSs3xZ.css (downloaded and grepped by Claude, chat 22; see portal_tokens.md).
- `teal800 #00695C` is in the same file, so our link colour is theirs too.

## 2. The live app renders links in that teal
Screenshot `assets/live-app-screenshots/10.jpg` (Deepak's phone, Insight v10, 11 Oct 2026), crop `assets/evidence/10_links_crop.jpg`.
Pixel sampling (the darkest 4% of each text area, i.e. the most generous case for them; JPEG):

| Element | Measured text colour | Contrast on white |
|---|---|---|
| "Forgot password" link | #42A696 | 2.95:1 |
| "resend email" link | #39AB99 | 2.82:1 |
| Back arrow (icon) | #66A6A1 | 2.79:1 (non-text minimum is 3:1) |

## 3. The maths (WCAG 2.x relative luminance)
| Colour | On white | AA normal text (4.5:1) |
|---|---|---|
| #1CB9A0 (their link teal, CSS) | **2.47:1** | ❌ fails (also fails 3:1 for large text) |
| #00695C (our link, their teal800) | **6.61:1** | ✅ passes |
| #2B3749 (their primaryMain, our CTA) | 12.03:1 | ✅ |
| #616161 (their grey700, our secondary text) | 6.19:1 | ✅ |

Independent check: https://webaim.org/resources/contrastchecker/?fcolor=1CB9A0&bcolor=FFFFFF and https://webaim.org/resources/contrastchecker/?fcolor=00695C&bcolor=FFFFFF

## 4. Bonus finding (same screen)
The grey "Can't find the email? Check your spam folder or" text: even its darkest pixels (#808080) reach only 3.95:1, so it fails AA too. (JPEG, so say "measured from a screenshot".)

## Limits (say these honestly if asked)
- Mobile app only. Web-portal link colour not yet checked live (console snippet given to Deepak, chat 24).
- Screenshot pixels are JPEG and anti-aliased, so the measured values vary a little from #1CB9A0. Every sample fails 4.5:1, and the CSS value fails even more.
