# NETGEAR Insight Cloud Portal: Official CSS Tokens & Design System

> **Source:** Extracted directly from `https://insight.netgear.com/assets/index-IGcSs3xZ.css` (compiled Vite/React/Material-UI stylesheet referenced in `insight.netgear.com` production HTML head).  
> **Extraction Date:** 2026-10-11  
> **Target Consumer:** Claude (for design system tokens, Figma variables, and UI component styling)

---

## 1. High-Level Architecture & Tech Stack

*   **UI Framework:** React with Material-UI (MUI v5)
*   **Theme Color (`<meta name="theme-color">`):** `#1a223f` (Deep Navy)
*   **Data Grid:** MUI X DataGrid (`.custom-data-grid`, `.MuiDataGrid-root`)
*   **Charts & Telemetry:** ApexCharts (`.apexcharts-*`)
*   **Mapping:** Mapbox GL (`.mapboxgl-*`)
*   **Scrollbars:** PerfectScrollbar (`.ps`) + Custom webkit scrollbars
*   **Sliders:** Slick Carousel (`.slick-*`)
*   **Toasts/Snackbars:** Notistack (`.notistack-MuiContent-*`)

---

## 2. Typography

*   **Primary Body / UI Font:** `Inter` (Bundled weights: 400 Regular, 500 Medium, 600 SemiBold, 700 Bold)
*   **Headings / Display Font:** `Poppins` (Bundled weights: 200 Thin, 400 Regular, 500 Medium, 600 SemiBold, 700 Bold)
*   **Proprietary Icon Font:** `netg`
    *   Glyphs include: `icon-ethernet`, `icon-port-bg`, `icon-port-outer`, `icon-portutilizationicon`, `icon-port-outer-wan`, `check`, `bold`, `icon-checked`, `icon-close`, `icon-bar`, `guest-employee-net`, `custom-voce-setup`, `create-data-network`, `icon-expand`, `icon-collapse`, `video-vlan`, `voice-vlan`.

---

## 3. Official Color Tokens (The `:export` Block)

Extracted verbatim from the SCSS `:export` compilation block used in the MUI theme generator:

### A. Primary & Brand (Slate / Navy)
| Token Name | Hex Value | Role / Usage |
|---|---|---|
| `primaryMain` | `#2B3749` | Primary Charcoal/Navy (Top bar, active borders, brand header) |
| `primaryDark` | `#19212e` | Dark surface / hover state |
| `primaryLight` | `#B0BEC5` | Light blue-grey |
| `primary200` | `#90caf9` | Accent light blue |
| `primary800` | `#1565c0` | Deep classic blue |

### B. Secondary & Teal Scale (Actions & Connectivity)
| Token Name | Hex Value | Role / Usage |
|---|---|---|
| `secondaryMain` | `#004D40` | Deep Pine / Teal |
| `secondaryDark` | `#085D4E` | Darker Pine hover |
| `secondaryLight` | `#B9F6CA` | Light accent mint |
| `teal500` | `#009688` | Standard MUI Teal (Buttons, toggles) |
| `teal600` | `#116F60` | Deep Teal |
| `teal700` | `#00BFA5` | Bright Teal |
| `teal800` | `#00695C` | Active / Pressed Teal |
| `teal900` | `#004D40` | Darkest Teal surface |
| `teal100` | `#BAEAE2` | Subtle Teal chip background |
| `teal50` | `#F6FAFB` | Very light tint |

### C. Status & Telemetry Indicators
| Token Name | Hex Value | Role / Device Status |
|---|---|---|
| `successMain` | `#00e676` | **Connected / Online** (Bright green chip / dot) |
| `successDark` | `#0db558` | Connected hover / border |
| `success900` | `#00C853` | Solid forest green |
| `success200` | `#69f0ae` | Light success accent |
| `successLight` | `#b9f6ca` | Success pill background |
| `errorMain` | `#E53935` | **Disconnected / Offline** (Alert red) |
| `errorDark` | `#C62828` | Error dark |
| `error900` | `#D32F2F` | Critical red |
| `error400` | `#FF1744` | Vivid coral red |
| `error200` | `#EF5350` | Error chip accent |
| `errorLight` | `#ef9a9a` | Soft error background |
| `error50` | `#FEEBEE` | Error alert banner fill |
| `warningDark` | `#E65100` | Deep amber/orange |
| `warningMain` | `#fef4eb` | Warning alert banner background |
| `warningLight` | `#fff8e1` | Light amber |
| `criticalMain` | `#FFB300` | Critical amber/gold |
| `orangeMain` | `#ffab91` | **Unmanaged / Waiting** orange |
| `orangeDark` | `#d84315` | Dark orange |
| `orangeLight` | `#fbe9e7` | Orange chip background |

### D. Neutral Grayscale & Surfaces
| Token Name | Hex Value | Role / Usage |
|---|---|---|
| `paper` | `#ffffff` | Card & modal background |
| `grey50` | `#F9F9F9` | Table alternate row / subtle surface |
| `grey100` | `#eef2f6` | Section background |
| `grey150` | `#F4F6F8` | Page body background (cleaner slate) |
| `grey200` | `#e3e8ef` | Card border / table row stroke |
| `grey250` | `#EDEDED` | Border secondary |
| `grey300` | `#E0E0E0` | Standard divider stroke |
| `grey350` | `#94A3B8` | Subdued icons / metadata |
| `grey500` | `#9E9E9E` | Secondary body text / disabled icons |
| `grey600` | `#757575` | Regular secondary text |
| `grey700` | `#616161` | Main body text |
| `grey800` | `#4D4D4D` | Sub-headers |
| `grey900` | `#212121` | Primary headings / high emphasis |

### E. Dark Mode Theme (Insight Dark Theme)
| Token Name | Hex Value | Role / Usage |
|---|---|---|
| `darkBackground` | `#000000` | Canvas base |
| `darkPaper` | `#1E1E1E` | Dark card surface |
| `darkHeader` | `#252525` | Top header bar |
| `darkLevel1` | `#29314f` | Navy tinted card / panel surface |
| `darkLevel2` | `#141414` | Secondary dark background |
| `darkPrimaryMain`| `#1CB9A0` | **Vibrant Mint/Teal** (Dark mode primary CTA!) |
| `darkPrimaryDark`| `#0c9781` | Dark mode primary hover |
| `darkSecondaryMain`| `#1C784F`| Dark mode secondary accent |
| `darkTextTitle` | `#d7dcec` | Dark mode titles / high emphasis |
| `darkTextPrimary`| `#FFFFFF` | Primary white text |
| `darkTextSecondary`| `#9E9E9E`| Secondary muted text |
| `darkGradient` | `linear-gradient(90deg, #141318 27.67%, #173E31 167.91%)` | Hero / card gradient |

---

## 4. Component Radii, Elevations & Spacing Rules

*   **Controls & Text Inputs (`.MuiOutlinedInput-notchedOutline`):**
    *   Radius: `4px`
*   **Search Bar Header (`#input-search-header + .MuiOutlinedInput-notchedOutline`):**
    *   Radius: `10px`
*   **Dropdown Buttons (`#org-dropdown-button-addDeviceAllOrg`):**
    *   Radius: `4px`, Padding: `5px 15px`, Border: `1px solid #bdbdbd`
*   **Data Grid / Tables (`.custom-data-grid`):**
    *   Card corners: `border-bottom-left-radius: 8px; border-bottom-right-radius: 8px;`
    *   Focused Cell / Column Header: `border: 1px solid #2B3749; outline: none;`
    *   Menu Shadow: `box-shadow: 0 2px 4px rgba(0,0,0,0.2), 0 1px 3px rgba(0,0,0,0.14) !important;`
*   **Hardware Port Icons (`.port-summary-icon-container`):**
    *   Dimensions: `110px x 110px`
    *   Radius: `8px`
    *   Background: `#eceff1`
*   **Port Status Badges (`.switch-badge`):**
    *   Dimensions: `14px x 14px; border-radius: 50%; font-size: 12px; font-weight: 500; background: #fff;`
*   **Checkmarks / Status Badges (`.iconCheckBlock`):**
    *   Dimensions: `16px x 16px; border-radius: 100%;`
*   **Scrollbars:**
    *   Width: `8px` (horizontal `4px`), Thumb radius: `10px`, Thumb color: `#aaa` (hover: `#697586`)

---

## 5. Key Design System Takeaways for Claude & Deepak

1.  **Primary Brand Distinction:** The primary brand foundation is **`#2B3749`** (Dark Slate Navy), not generic blue or teal. All key containers, top bars, and focused controls anchor to `#2B3749`.
2.  **Interactive Accent:** Teal (`#009688` / `#00BFA5`) is the secondary/interactive color in light mode. In **Dark Mode**, it switches to a vibrant mint (`#1CB9A0`).
3.  **Real Status Colors:**
    *   Online / Connected: `#00e676` (background `#b9f6ca`)
    *   Offline / Disconnected: `#E53935` (background `#FEEBEE`)
    *   Warning / Attention / Unmanaged: `#ffab91` / `#fef4eb` / `#E65100`
4.  **Fonts:** Use **Inter** for all UI body and table data; use **Poppins** for page titles and section headers.
