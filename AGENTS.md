# Portfolio Project Rules

## North star

- Build one polished paper-collage portfolio told through three scenic, nature-led worlds.
- The landscape is the background system. Content lives on tactile paper pieces in the foreground.
- Keep the work personal, editorial, warm, and easy to scan.

## Information architecture

- Meadow chapter: computer science identity, projects, skills, and technical interests.
- Mountain chapter: clothing, personal style, design thinking, and garment process.
- Sunset-garden chapter: photographs, music, films, everyday interests, and contact.
- Navigation remains global and uses the labels Code, Clothing, Life, and Contact.
- Each chapter may contain multiple viewport-length panels, but the page remains one continuous document.

## Avoid

- Generic tech-portfolio patterns, dashboard UI, bento grids, glassmorphism, neon gradients, and pixel-game styling.
- Cute clutter, novelty cursors, fake tape on every object, or random rotations that hurt readability.
- Decorative labels that do not help navigation or comprehension.

## Visual system

- Use one consistent paper family and accent color across all three worlds.
- Favor asymmetric composition on desktop and a calm single-column flow below 768px.
- Treat tears, tape, stamps, doodles, and shadows as hierarchy cues, not filler.
- Keep body copy on stable, high-contrast paper surfaces.
- Theme changes happen only at chapter boundaries and must feel like an intentional landscape transition.

## Interaction

- Motion must communicate depth or feedback: slow cloud drift, subtle background parallax, paper lift, and small doodle reveals.
- Animate only transform and opacity.
- Honor `prefers-reduced-motion`; the static experience must remain complete.

## Accessibility

- Use semantic landmarks and heading order.
- Keep keyboard focus visible and hit targets at least 44px.
- Maintain WCAG AA contrast for text and controls.
- Provide useful alt text, a skip link, and readable mobile type.

## Engineering

- React + TypeScript + Vite, with native CSS tokens and small reusable components.
- Keep concept content in `src/data` and shared UI in `src/components`.
- Avoid scroll listeners. Prefer CSS scroll-driven effects with safe fallbacks.
- Optimize generated imagery before production and reserve image dimensions to prevent layout shift.
- Run typecheck and production build before handoff.
