# AGENTS.md — Link Style Studio (Jainil Prajapati)

Operating guide and technical handbook for autonomous AI coding agents working on **Link Style Studio**. Follow all conventions, architectural constraints, and visual design rules strictly.

---

## 1. Project Overview & Identity

- **Project**: Link Style Studio (`link-style-studio`)
- **Author**: Jainil Prajapati (Product-minded developer, Anand, Gujarat, India)
- **Purpose**: High-craft link-in-bio hub, project directory, and portfolio launcher.
- **Creative North Star**: **"The Instruction Booklet"** — a tactile, printed toy build-instruction manual with sky-blue pages, black keylines, bold Rubik typography, and colored brick pieces with dedicated roles.

---

## 2. Technical Stack & Architecture

### Core Principles: Pure Astro & Zero-React

- **Framework**: **Astro 7.x** (`astro: "7.3.2"`), configured for pure static site generation (`output: "static"`).
- **Domain & Canonical URL**: Production domain is **`https://links.jaainil.com`**, configured via `site: "https://links.jaainil.com"` in `astro.config.mjs`.
- **Zero React Runtime**: **Do NOT introduce React, `@astrojs/react`, `react-dom`, or any client-side JavaScript framework.**
  - The entire site runs as lean, pre-rendered static HTML and CSS.
  - Interactivity and animations are driven by CSS and minimal vanilla TypeScript/JavaScript where essential.
- **Styling**: **Tailwind CSS v4** (`tailwindcss: "^4.3.3"`) integrated via `@tailwindcss/vite` in `astro.config.mjs`.
  - Base configuration lives in `src/styles.css` using `@import "tailwindcss" source(none);` and `@source "../src";`.
  - CSS Custom Properties use modern `oklch()` color tokens under `@theme inline` and `:root`.
- **Astro Integrations & SEO Architecture**:
  - **`@astrojs/sitemap`**: Active integration in `astro.config.mjs` (`integrations: [sitemap()]`). Automatically builds `sitemap-index.xml` and `sitemap-0.xml` during static build without error pages.
  - **`astro-seo`**: Standardized `<SEO />` component in `src/layouts/Layout.astro` providing automated canonical URLs, Open Graph tags (`og:title`, `og:image`, `og:url`, `og:site_name`), Twitter Card metadata (`summary_large_image`), and robot indexing controls.
  - **JSON-LD Structured Data**: Schema.org graph markup (`ProfilePage`, `Person`, `WebSite`) passed via `structuredData` prop in `Layout.astro` and declared in `src/pages/index.astro`.
  - **Crawler Assets**: `public/robots.txt` points to `https://links.jaainil.com/sitemap-index.xml`. Social previews use `public/og-image.png` (16:9 ratio).
- **Typography**: Single typeface family: **Rubik Variable** (`400`, `500`, `700`, `800`, `900`). Loaded via Google Fonts in `src/layouts/Layout.astro`.
- **Icons & Graphics**: Pure inline SVG components (`src/components/Icon.astro`) and handcrafted dimetric SVG brick artwork (`src/components/BrickPortrait.astro`). No heavy icon packages.
- **Package Manager / Runtime**: **Bun** is the primary package manager (`bun.lock`), though standard `npm` commands remain supported.

---

## 3. Impeccable Design System ("The Instruction Booklet")

All UI modifications MUST adhere to the design rules defined in `DESIGN.md`:

### Palette & Color Roles (The Piece Rule)

Every color in the system has exactly **one job**. Never borrow another color's responsibility:

- **Page Sky** (`var(--background)` / `oklch(0.88 0.09 229)` / `#aee1ff`): The booklet page background in light mode.
- **Paper White** (`var(--card)` / `oklch(1 0 0)` / `#ffffff`): Cards, containers, sheets, and callouts.
- **Keyline Ink** (`var(--keyline)` / `oklch(0.15 0.015 248)` / `#111111`): The 2px crisp border on every interactive element and container.
- **Action Blue** (`var(--primary)` / `oklch(0.58 0.18 248)` / `#147bd1`): Interactive controls, navigation links, and primary focus rings.
- **Piece Red** (`var(--piece-red)` / `oklch(0.59 0.22 27)` / `#e53935`): Marks added pieces, step markers, logo brick, and the primary email button.
- **Marker Yellow** (`var(--piece-yellow)` / `oklch(0.86 0.18 88)` / `#ffcd00`): Position marker, "AVAILABLE FOR BUILDS" badge, text selection highlight (`::selection`). Never used for body text on sky backgrounds.
- **Plate Gray** (`var(--piece-gray)` / `oklch(0.84 0.01 250)` / `#d9d9d9`): Baseplate tone, neutral cards, secondary badges.

### Elevation, Depth & Geometry (The Keyline Rule)

- **Depth is printed, not lit**: The ONLY shadow vocabulary is a hard offset shadow with **zero blur**:
  - Small controls / chips: `box-shadow: 0 2px 0 var(--keyline);`
  - Buttons / CTA: `box-shadow: 0 3px 0 var(--keyline);`
  - Cards / Link pieces: `box-shadow: 0 4px 0 var(--keyline);`
- **Hover Motion**: Hover physically lifts elements off the page (`transform: translateY(-2px)` or `-3px`) while the shadow expands (`0 7px 0 var(--keyline)`), simulating a physical plastic brick rising from the booklet.
- **Borders**: All cards, inputs, and buttons carry `border: 2px solid var(--keyline)`.
- **Dashed Keylines**: `2px dashed var(--keyline)` or `2px dashed var(--muted-foreground)` denote guides, compartments, and empty seats (e.g. `.contact-sheet`, icon circles).

### Typography (The One Family Rule)

- **Rubik only**: Weight does all hierarchy work.
  - Headings: `font-black` (`900`), tight tracking (`-0.025em`), leading `0.92` to `1.1`.
  - Step / Piece Numerals: `font-black` (`900`), large numerical displays.
  - Titles & Card Headers: `font-extrabold` (`800`) or `font-black` (`900`).
  - Body Copy: `font-medium` (`500`) or `font-normal` (`400`).
  - Labels & Chips: `font-black` (`900`), uppercase, small sizing (`10px`–`11px`).

### Explicit Anti-Patterns & Bans

- ❌ **NO soft / ambient blur shadows** (`shadow-md`, `shadow-xl`, blurred glows).
- ❌ **NO monospace / terminal slop** (no `//` prefixes, no fake hacker cursors, no `STATUS: ACTIVE` rows).
- ❌ **NO secondary font families or serif fonts**.
- ❌ **NO gradient text or glowing neon borders**.
- ❌ **NO React / JSX client bundles**.

---

## 4. Repository Structure & Key Files

```
link-style-studio/
├── AGENTS.md                  # This file: agent operating manual & design handbook
├── DESIGN.md                  # Full Impeccable design system token reference
├── README.md                  # Human developer documentation
├── package.json               # Project dependencies and npm scripts
├── astro.config.mjs           # Astro config: @tailwindcss/vite + @astrojs/sitemap + site URL
├── tsconfig.json              # Strict TypeScript config (@/* path alias)
├── public/
│   ├── favicon.svg            # Handcrafted brick vector favicon
│   ├── robots.txt             # Crawler instructions + sitemap pointer
│   ├── og-image.png           # 16:9 instruction booklet social share card
│   └── og-image.jpg           # Fallback JPEG social share image
├── src/
│   ├── layouts/
│   │   └── Layout.astro       # Root HTML document, SEO integration (<SEO />), JSON-LD
│   ├── pages/
│   │   ├── index.astro        # Home / Link Hub page with ProfilePage structured data
│   │   └── 404.astro          # Custom 404 instruction error sheet (noindex/canonical null)
│   ├── components/
│   │   ├── BrickPortrait.astro# Interactive dimetric SVG brick avatar
│   │   └── Icon.astro         # Type-safe inline SVG icons (map-pin, github, etc.)
│   ├── styles.css             # Tailwind v4 directives, OKLCH variables, custom classes
│   └── lib/
│       └── utils.ts           # Utility helpers (clsx/tailwind-merge)
└── .agent/skills/impeccable/  # Impeccable design & auditing tools
```

---

## 5. Development & Verification Workflow

### Commands

Run with `bun` (preferred) or `npm`:

```bash
# Start local development server (http://localhost:4321)
bun run dev

# Build production static assets to dist/
bun run build

# Preview production build locally
bun run preview

# Format code with Prettier
bun run format
```

### Verification Standard for Agents

Before concluding any task:

1. **Always run build verification**:
   ```bash
   bun run build
   ```
   Ensure static compilation completes with code `0` and 0 errors.
2. **Design System Consistency**:
   Verify every new component or UI tweak honors the 2px keyline border, zero-blur hard shadow, Rubik typography, and 4-color piece palette.
3. **Responsive Verification**:
   Ensure layouts handle mobile screen sizes (≤ 520px) gracefully as modeled in `src/styles.css`.
4. **Preserve Accessibility**:
   - Maintain high text contrast.
   - Include `aria-hidden="true"` on decorative icons and provide descriptive `aria-label`s on interactive icons or image-only links.
   - Maintain visible focus rings (`a:focus-visible` with `outline: 3px solid var(--primary); outline-offset: 3px;`).
   - Respect `prefers-reduced-motion: reduce`.

---

## 6. Git & Deployment Standards

- Keep commits atomic, descriptive, and clean.
- Ensure all builds succeed before pushing to `main`.
- Avoid rewriting published git history.
