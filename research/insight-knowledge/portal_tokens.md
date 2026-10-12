# Insight Cloud Portal: real tokens (extracted live)

Source: Deepak ran the 009 extraction script in his own logged-in browser (styles only, no account data). Started 2026-10-11.

## Pages captured
- [x] /dashboard (desktop)
- [ ] Devices list (status chips)
- [ ] Device detail
- [ ] Add device dialog (buttons, inputs, focus)
- [ ] Dashboard at ~390px (mobile breakpoint)
- [ ] Mobile app screenshots (script can't read the app)

## Dashboard findings
- **Font:** Outfit 400/500 (300 once). Free Google font → use the real font in Figma. Arial ×103 is likely chart labels or a fallback.
- **Primary:** MUI stock Teal: 500 `#009688`, 700 `#00796B`, 800 `#00695C`, 50 `#E0F2F1`. Corrects the data-sheet guess (#00A99D).
- **Text:** MUI greys: `#616161` body (×706), `#212121` headings, `#757575`, `#9E9E9E`, `#BDBDBD`, `rgba(0,0,0,.54)`.
- **Dark surface:** `#2B3749`. Background + text, probably the top bar or sidebar.
- **Page background:** `#ECEFF1`. Cards `#FFFFFF`. Dividers `#E0E0E0` / `#E3E8EF`. Also `#F9F9F9`.
- **Radius:** 8 (×67, default) · 12 · 16 · 50% for dots and avatars · 2 / 4 small.
- **Shadow:** only an MUI elevation-16 (drawer or dialog). Flat UI.
- **Chart colours:** `#00E676` `#1DE9B6` `#C0CA33` `#5CBAC8` `#A7E9E2` `#B9F6CA` (MUI accents).
- **Type sizes:** 12 / 14 / 16 / 18 / 20. Line heights are messy: 18.676 (≈1.334×14), 15, 19.76, 20.125, 24.5.
- **Spacing:** 6, 24, 8, 4, 16, 3, 2, 20, 5, 18, 15, 12, 10. Plus 15.2 / 4.8 / 5.6 / 6.4, which come from rem/em. Not on an 8-pt grid.
- **CSS variables:** none. The theme lives inside MUI (no CssVarsProvider).

## /locationDevice findings (low element count → probably an empty or small location; no status colours)
- New page grey: `#F4F6F8`. The dashboard uses `#ECEFF1` → **two page greys**.
- `#FBFCFD` = text on the `#2B3749` navy bar.
- MUI disabled `rgba(0,0,0,.26)` and divider `rgba(0,0,0,.12)`.
- Radius 4 ×10 plus `4 4 0 0` → **4 for controls, 8 for cards**.
- Overline/table header: 12px, letter spacing 1px. Lists use body line height 21 (1.5).
- The teal core and the elevation-16 drawer match the dashboard.
- Script gap: it doesn't read SVG `fill`. The status dots are probably SVG, so a fill-reading script was sent to Deepak.

## /clients findings (shell only, looks empty)
- 13px / lh 22.75 / w500 = MUI small button. 14 / 24.5 / 500 = medium button.
- Radius 6 ×3 → a third control radius (4 / 6 / 8).
- Spacing 7px, still off-grid.
- **Diminishing returns:** these pages repeat the shell. Deepak's account may have no devices. Still missing: status hex values, button/input states (Add device dialog + an invalid serial), mobile app screenshots.

## App Store screenshots (US listing, v10.2.207, checked 11 Oct) → `appstore-screens/iphone_1-5.png`
- **They're outdated:** purple theme (#8A2BC2-ish), dark gradient headers, an old iPhone status bar, and the date "January 19". This is the pre-10.0 UI, while the portal and data sheet are teal. **Don't use them for current tokens.**
- Still useful for status: "Connected" is a bright green dot plus a green label (close to `#00E676`, which also appears in the portal). Unverified.
- Old IA: bottom tabs Devices / Health / Networks / Notifications, location switcher in the header, + to add.
- Possible talking point (be gentle): the store listing still shows the old UI, so new users see a different product before they download.

## Deepak's account (11 Oct)
Brand-new and empty: no devices, no location, no plan. He signed up with email + location only. → He's a genuine first-time user. Capture his first impressions before he learns the product.

## Add device: serial error (Deepak tried `ABC123`, 11 Oct)
- Inline text under the field: **"Please enter a valid Serial Number"**. No pop-up. ✅ The pattern is right (it matches Q&A §5).
- ❌ The message doesn't say *what valid looks like* (length/format) or *where to find it* (label on the device or box). It also says nothing about a scan option. For a first-timer that's a dead end. → A concrete friction for the case study (it matches the "serial failure" theme in the App Store reviews).
- The big script wasn't run on the dialog yet. Optional, low priority.

## Talking points (observations, phrase gently)
1. Tailwind slate values (`#64748B`, `#F1F5F9`, `#E3E8EF`) sit next to MUI greys → two colour systems side by side, maybe a migration. This supports one token layer.
2. Spacing is off-grid (decimal rem values) → our system snaps to 4/8.
3. Contrast (hand-calculated):
   - White on Teal 500 is ≈3.7:1, which fails AA for normal text. Teal 700 is ≈5.3:1 and passes, so use it for action.
   - `#9E9E9E` ≈2.7:1 and `#BDBDBD` ≈1.9:1 fail **if** they're used on real text.
   - **Verify** what the primary button uses before claiming any of this.

## Production CSS :export block (verified by Claude, 2026-10-11, chat 22)
Source: https://insight.netgear.com/assets/index-IGcSs3xZ.css (downloaded and grepped; Gemini digest = research/gemini/009-insight-portal-css-tokens.md).
- Verified values: primaryMain #2B3749 · secondaryMain #004D40 · teal50 #F6FAFB · teal100 #BAEAE2 · teal500 #009688 · teal600 #116F60 · teal700 #00BFA5 · teal800 #00695C · teal900 #004D40 · grey150 #F4F6F8 · grey200 #e3e8ef · grey300 #E0E0E0 · grey700 #616161 · grey900 #212121 · successMain #00e676 · successDark #0db558 · errorMain #E53935 · errorDark #C62828 · orangeMain #ffab91 · orangeDark #d84315 · warningDark #E65100 · darkPrimaryMain #1CB9A0 · darkPaper #1E1E1E.
- Gemini overclaims (NOT in the CSS): "teal500 = primary CTA" (in this file #009688 only colours switch-port icons) and "Inter body / Poppins headings" (the bundle has @font-face for Inter, Roboto, Outfit and Poppins; it doesn't show which one renders). The live computed style above (Outfit) stays the source.
- Status colours now have a source: successMain/errorMain/orangeMain. White text fails on #00e676, so chips need the dark shades for text.
