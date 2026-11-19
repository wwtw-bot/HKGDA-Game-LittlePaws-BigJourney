# Little Paws, Big Journey — GitHub Pages export

## Deploy
1. Extract this ZIP. Upload its CONTENTS to your GitHub repository root. `index.html` must be at the root, not inside another folder.
2. In repository Settings → Pages, select Deploy from a branch, select your branch (usually main), select /(root), and Save.
3. Open the Pages URL GitHub shows after deployment. Project subpaths are supported; no custom domain is required.

No npm, build step, backend, API keys, or database is required. `.nojekyll` is included; retain it when uploading.

## Files
- index.html: entry point; classic scripts in dependency order.
- style.css: full responsive styling and animation definitions.
- questions.js: all 80 bilingual questions and source references, embedded directly in JavaScript.
- events.js: all 44 bilingual events, embedded directly in JavaScript.
- app.js: complete engine, board rendering, avatar artwork, interactions and animations.
- assets/: all three required images, included unchanged.

## Storage and compatibility
Language preference uses localStorage with graceful failure handling. Current game progress and scores remain in memory, as in the original game; refreshing resets play. No progress or high-score persistence is claimed.
Open index.html directly for local use; question data does not use fetch. Modern browsers supporting HTML dialog are required. Narrow screens retain a horizontally scrollable board and fixed turn controls.
Google Fonts are loaded over HTTPS; system font fallbacks remain available if offline. Source/reference links are external HTTPS links. No externally hosted JavaScript or ChatGPT/Sites runtime is needed. Animated artwork is inline SVG/CSS; there are no audio files.

## Export scope and known limitation
This is a hosting migration of the existing game, not a gameplay redesign. The optional ChatGPT modelContext integration was removed. Internal image and script paths are explicit relative paths. Existing content and rules are preserved.
Question cards are not reshuffled during a game. If a stage deck is exhausted before a player passes its compulsory exam, the game can stall at that exam. A rule decision is still needed for that edge case; this export does not silently change the agreed rules.
Some question concepts overlap even though individual cards are not drawn twice. The earlier educational content review is in CONTENT-AND-RULES-NOTES.md.
Validation: JavaScript syntax and static asset/path checks only; no new gameplay or browser trial was performed for this export.

## Asset inventory
- `assets/hkgda.png` — 2480 × 634 px; PNG.
- `assets/labrador.jpeg` — 1599 × 1066 px; JPEG.
- `assets/partnership.jpg` — 547 × 365 px; JPEG.

Image rights and the association logo are unchanged from the supplied project.
