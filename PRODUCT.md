# Link Style Studio

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

The primary audience is social visitors looking for the right Jainil Prajapati profile or project. Their main job is to identify the relevant destination and open it quickly. This audience and outcome were confirmed by Jainil during initialization.

## Product Purpose

Link Style Studio is Jainil Prajapati's personal link-in-bio hub, project directory, and portfolio launcher at https://links.jaainil.com. It gives visitors one place to find his portfolio, developer profiles, social accounts, and email contact.

Success means visitors can distinguish the destinations and reach the profile or project they intended to find. No numerical conversion target or measurement requirement has been established.

## Operating Context

- The public home page is a single directory of outbound links with short descriptions.
- Visitors can open the portfolio, GitHub, npm packages, LinkedIn, two Instagram accounts, or Reddit. The descriptions distinguish the main Instagram account from the account focused on AI and development commentary.
- Directory links open in a new tab. The contact action opens the visitor's email client.
- An unavailable route presents a 404 page with a return link to the hub.
- The site supports desktop and mobile browsers, including narrow screens.

## Capabilities and Constraints

- Preserve the pure static Astro architecture: pre-rendered HTML and CSS, with minimal vanilla JavaScript or TypeScript only when needed. Do not introduce React or another client-side framework.
- Bun is the preferred package manager. Run `bun run build` to verify changes.
- Keep the production domain, canonical URLs, sitemap, crawler assets, social metadata, and structured data consistent with https://links.jaainil.com.
- The directory's current content and destinations live in `src/pages/index.astro`. Changes to identity, availability, biographical claims, or contact information require factual support from Jainil.
- The existing page identifies Jainil as a product-minded developer in Anand, Gujarat, India, and currently says he is available for builds. Treat availability as time-sensitive content rather than a permanent product promise.

## Brand Commitments

The product belongs to Jainil Prajapati and is named Link Style Studio. The user has explicitly committed to “The Instruction Booklet” identity. Follow `DESIGN.md` and `AGENTS.md` for its visual rules; preserve the identity during refinement.

Existing copy uses a personal voice and the language of building and pieces. Destination names and descriptions must remain clear enough for visitors to choose the right link.

## Evidence on Hand

- `src/pages/index.astro`: current profile copy, seven outbound destinations, email address, and structured data.
- `src/components/BrickPortrait.astro` and `src/components/Icon.astro`: existing portrait artwork and icon components.
- `public/favicon.svg`, `public/og-image.png`, and `public/og-image.jpg`: existing identity and social-preview assets.
- `DESIGN.md`: established visual system.
- `AGENTS.md`: binding architecture, design, accessibility, verification, and deployment constraints.

Linked external profiles are destinations, not evidence of unverified achievements. Do not invent testimonials, usage metrics, project outcomes, or professional claims.

## Product Principles

1. Help social visitors find their intended destination quickly.
2. Use specific names and descriptions to distinguish profiles, especially accounts on the same platform.
3. Keep the hub lightweight, accessible, and useful across screen sizes.
4. Preserve truthful personal content and the established booklet identity.

## Accessibility & Inclusion

Maintain high text contrast, visible keyboard focus, descriptive accessible names for icon-only links, and hidden decorative icons. Respect reduced-motion preferences and keep content and navigation usable on screens at or below 520px wide. These requirements come from the project's operating instructions.
