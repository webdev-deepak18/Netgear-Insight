# 009 — Insight web portal: design-token extraction
status: open
output: research/gemini/009-insight-portal-tokens.md

## Goal
Get the real visual tokens (colour, type, spacing, radius, shadow, status colours) of the live Insight 10.0 Cloud Portal, so our case-study design system starts from NETGEAR's actual UI, not guesses from the data sheet.

## Method (Deepak is logged in at insight.netgear.com)
- Use the Antigravity browser. Deepak logs in there himself; never type or store credentials.
- Pages to visit (read only, no clicks that change settings): Dashboard, Organizations list, one Location, Devices list, one device detail, Alarms/Notifications, Add device dialog (open then cancel).
- On each page, in DevTools console, run the extraction script in the prompt. It reads only computed styles and CSS variables.
- Check for MUI CSS variables (`--mui-*`) and the MUI theme if exposed.
- Take one screenshot per page to `research/gemini/009-screens/` and blur/crop anything account-specific.

## Privacy rules (strict)
- Do NOT record device names, serials, MACs, IPs, emails, org/location names, or any account data. Styles only.
- No API calls, no crawling, no saving of HTML or network responses.

## Output format
- Tables: colour (hex, count, where used, likely role), font families/weights, type scale (size/line-height/weight per role), spacing values, radii, shadows, breakpoints, status colours (online/offline/warning/critical/unmanaged).
- Each row says which page/element it came from.
- "Not found" when not found. No guessing.
- End with "Implications for the design system" (3–5 bullets).
