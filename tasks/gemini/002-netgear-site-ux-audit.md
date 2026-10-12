# 002: NETGEAR Website UX & Visual Style Audit
status: open
output: research/gemini/002-netgear-site-ux-audit.md (+ screenshots in research/gemini/002-screens/)

## Goal
Deepak (UX Designer candidate) needs to understand NETGEAR's information architecture, user journeys and visual language. He can then:
- discuss their UX intelligently in the interview, and
- build a case study that looks native to the NETGEAR brand. The JD says designs must align with "NETGEAR's brand and component libraries".

Do a **targeted sweep, not a full crawl**. Go for one representative page per template.

## Site
Primary: https://www.netgear.in. If netgear.com is reachable from your browser, note any big differences, but don't audit it twice.

## Tasks
1. **IA / navigation map:**
   - Top nav, mega-menu categories, footer groups, and how home vs business products are split.
   - Present this as an indented tree.
   - Note where the site map is (/sitemap.xml) and the rough page count per section.
2. **Page templates:** visit about 15–20 representative pages: home, a category listing, a product page (Orbi, Nighthawk, a business switch), a comparison page if one exists, the support/KB article, the app download page, the Insight/business landing page, search results, and the cart/where-to-buy page. For each one, note:
   - its purpose,
   - its section layout from top to bottom,
   - its key components,
   - and save **one full-page screenshot** to `research/gemini/002-screens/NN-name.png`.
3. **Visual style / design tokens:** use DevTools/computed CSS and CSS custom properties (variables) to extract:
   - **Colors:** primary, secondary, neutrals, backgrounds, and states (hover, error, success), with hex values and where each is used.
   - **Typography:** font families, the type scale (sizes and weights for H1–H6, body, captions), and line heights.
   - **Spacing and layout:** grid width, gutters, common spacing values, breakpoints.
   - **Components:** buttons (variants and states), cards, badges, form fields, tabs, accordions, the nav. Give a short spec for each: radius, padding, border, shadow.
   - **Iconography and imagery style:** product photography, illustration, icon style.
   - Note whether the site seems to use a design system or framework (class names, AEM, etc.).
4. **Key journeys:** walk through each one and list its steps and friction points:
   - (a) A home user picks a mesh WiFi system: browse → compare → buy.
   - (b) A user needs setup help for an Orbi.
   - (c) A small business explores Insight.
5. **Mobile:** check the home page and one product page at about 390px width. Note what changes and any problems.
6. **Accessibility quick check:** color contrast on the main CTAs and text, alt text, keyboard focus visibility, and heading structure.

## Output format
- About 1500–2500 words in total, bullets and tables, organized by section number.
- Put the design tokens in a **table** with a hex/value column.
- Screenshots go in the 002-screens folder. Reference each by filename.
- Source URL for each page.
- End with **"Implications for Deepak"** (5–7 bullets):
  - the top UX/IA problems, with suggested fixes,
  - the brand traits to reuse in a case study,
  - any conversation starters for the interview.
