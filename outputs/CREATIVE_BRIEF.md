# Creative brief: Three sides of one person

## Project idea

Viraj's portfolio should feel like opening a thoughtfully assembled travel journal with three chapters. Each landscape represents a different part of his identity. Torn notes, clipped photographs, tape, stamps, and drawn marks create the interface in front of it. Every handmade detail has a job: frame a project, clarify a link, guide the eye, or reveal personality.

The result should feel tactile and authored, but never chaotic. It is one continuous editorial portfolio, not three disconnected microsites.

## Working audience

Design-conscious collaborators, hiring teams, studio leads, and curious peers who need to understand the work quickly while remembering the person behind it.

## Experience principles

1. **The background is a place.** Each concept uses a continuous landscape with sky, terrain, atmosphere, and depth.
2. **Paper carries information.** Navigation, project stories, biography, experiments, and contact details live on legible physical surfaces.
3. **Imperfection is controlled.** Slight rotation, irregular edges, and visible grain are composed deliberately around a stable reading grid.
4. **Details reward attention.** Small stamps, arrows, pressed plants, and pencil marks appear sparingly.
5. **Motion preserves calm.** Clouds drift, depth layers separate, and paper lifts on hover. Nothing competes with the work.

## Visual language

- Scenic, softly surreal nature imagery with believable light
- Screen-printed grain, halftone dots, paper fibers, and sun-faded color
- Off-white and lightly colored stocks, never one uniform beige wash
- Paper shadows tinted by the surrounding landscape
- Editorial type paired with restrained handwritten annotations
- Crisp navigation and body copy inside intentionally irregular silhouettes

## Content architecture

- **Code / Meadow:** name, CS positioning, flagship software projects, toolkit, and technical interests
- **Clothing / Mountains:** outfits, garments, design process, styling principles, and why clothing matters
- **Life / Sunset garden:** personal photographs, songs, films, observations, and contact

## Motion model

- Background layers move at different speeds only where browser support is safe
- Clouds use slow, low-amplitude drift
- Project papers rise 3-6px and settle with a soft shadow on hover
- Doodles reveal with short opacity or scale transitions
- Reduced-motion mode removes all automatic movement

## Accessibility and mobile

- Desktop asymmetry collapses into a single reading column below 768px
- Paper pieces become wider, straighter, and less overlapped on small screens
- All text sits on high-contrast paper or a protective scrim
- The visual story survives without motion, hover, or color alone
- Navigation remains compact, keyboard accessible, and available throughout

## The three scroll chapters

### 1. Sunroom Meadow: Code

A bright wildflower hillside under an expansive cornflower sky. White sketchbook papers, translucent yellow tape, and tomato-red pencil marks hold computer science projects and technical details. The atmosphere makes the technical work feel curious, clear, and human.

Content: CS identity, projects, skills, tools, coursework, and experiments.

### 2. High Country Postcard: Clothing

Layered alpine ridges, cool blue air, and strong travel-poster geometry. Clothing photographs and design notes appear as oversized postcard fragments, garment studies, and precise cobalt typography. This chapter feels graphic, confident, and considered.

Content: outfits, personal style, design sketches, alterations, materials, and visual principles.

### 3. Afterglow Garden: Life

A lavender-blue landscape at the edge of evening, with rain-washed foliage, coral clouds, and warm light across the water. Peach, lilac, and soft sage paper scraps hold photographs, music, films, and everyday interests. This is the happiest, warmest, and most relaxed chapter while still feeling distinctly like dusk.

Content: personal photographs, current songs, favorite movies, hobbies, memories, and contact.

## Initial content assumptions

Until final content arrives, the site uses explicit prompts for projects, clothing photographs, personal photographs, songs, and films. All placeholder content is centralized in `src/data/portfolio.ts` so it can be replaced quickly.
