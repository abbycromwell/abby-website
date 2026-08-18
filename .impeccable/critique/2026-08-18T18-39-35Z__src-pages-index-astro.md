---
timestamp: 2026-08-18T18-39-35Z
slug: src-pages-index-astro
---
⚠️ DEGRADED: single-context (sub-agents spawned but never delivered; unreachable via ping, ListAgents, transcript, and TaskOutput)

# Critique — Abby Cromwell portfolio (whole site)

Target: src/pages/index.astro and the four sibling routes. Mode: **Experience**.
Live: https://studio-starter-abbysleepy.vercel.app/
Audience per PRODUCT.md: entertainment-industry hiring teams; the site's primary job
is to get them to view Abby's work.

## Design specificity: HIGH

This could not be lifted onto another portfolio. The watercolour membrane world, the
plate/chapter folio vocabulary, the vein rail that tracks scroll position, and the
pod morphology are all grounded in Abby's own material. No template smell anywhere.
That verdict was formed before any detector output was read.

## Heuristic scores (0-4)

| # | Heuristic | Score |
|---|---|---|
| 1 | Visibility of system status | 3 |
| 2 | Match with the real world | 4 |
| 3 | User control and freedom | 3 |
| 4 | Consistency and standards | 4 |
| 5 | Error prevention | n/a — no forms, entry, or destructive actions |
| 6 | **Recognition rather than recall** | **2** |
| 7 | Flexibility and efficiency | 3 |
| 8 | Aesthetic and minimalist design | 4 |
| 9 | Recognise/diagnose/recover from errors | n/a — static folio, no error states |
| 10 | Help and documentation | n/a — Experience mode |

Heuristic 6 is the outlier and it drives the P0 below.

## Strengths

1. **Own-world design.** The composition earns its atmosphere; the wash is the work,
   not decoration applied to a grid.
2. **The /work/ gallery.** Dark oxblood ground, plates at real scale, the vein rail
   as chapter navigation. This is the portfolio-grade surface.
3. **Craft discipline underneath.** Tokens throughout, detail rows shared across
   About/Resume/SongBook so interior pages read as kin, reduced-motion paths, and
   source comments that record why rather than what.

## P0 — The desktop homepage hides its only route into the work

Measured. Each pod screenshotted with and without itself, mean per-pixel delta:

| pod | size | pixels clearly changed |
|---|---|---|
| Illustration | 305×305 | 36% |
| Typography | 183×183 | 28% |
| **Animation** | 256×256 | **10%** |

The pods carry `mask-image` feathering at 57%, a `mix-blend-mode: color` sampler at
50% opacity that tints them to the wash's own hue, and `.pod__title` at `opacity: 0`
until hover. Together those make the three routes into the work read as part of the
ground. The Animation pod at 10% is functionally camouflage.

The desktop homepage is exactly one viewport tall — 900px at 1440×900, no scroll. So
there is no second screen to recover in. A visitor who does not sweep the cursor
across the wash sees a name, a discipline line, and a gradient.

This is a deliberate choice — the source says "at rest they read as part of the
wash" — but it is in direct tension with PRODUCT.md's stated primary job.

## P1 — Mobile outperforms desktop at the actual job

At 390×844 the Illustration pod is 304×340, moves 39% of its pixels, and carries a
permanent "ILLUSTRATION" label beneath it. It reads immediately as artwork you can
tap. The mobile treatment already solves P0; the desktop composition is the one
withholding.

## P2 — No Resume in the primary navigation

Nav is Work / SongBook / About. For a hiring audience the resume is a primary
artifact, and it is reachable only by going to About first and finding a detail row.

## P3 — SongBook holds the same nav weight as Work

One project sits level with the entire body of work. A hiring manager reading the
nav cold cannot tell that Work is the destination and SongBook is one piece inside it.

## P4 — No contact affordance outside /about/

The email lives in one detail row on one page. Nothing on the homepage or the work
gallery tells a visitor who has just been impressed how to reach her.

## Persona red flag

Hiring manager, 90 seconds, desktop, arrives from a link, does not move the mouse
into the wash: leaves having seen zero pieces of art. Every other persona path is
fine — mobile visitors, keyboard visitors, and anyone who reaches /work/ get a strong
experience.

## Cognitive load

No decision point exceeds four visible options — but only because three of the six
homepage routes are not visible. That is the finding, not a pass.

## Emotional journey

Peak is the /work/ gallery reveal. The valley is the homepage, which is beautiful and
inert. /about/ closes at one quiet screen, which is the restrained pace PRODUCT.md
asks for. Peak-end holds *if* the visitor reaches /work/, which is what P0 puts at
risk.

## Assessment B — detector and browser evidence

`detect.mjs` over nine UI targets: **6 findings, all false positives.**

- 3 × `broken-image` — the literal string `<img>` inside explanatory code comments
  (work/index.astro:423, SongBook.astro:220 and :345).
- 1 × `design-system-color` — `#000` as an alpha stop inside
  `mask-image: radial-gradient(...)` at index.astro:295. A mask stop, not a colour.
- 2 × `bounce-easing` — `pod-wobble` at index.astro:423 and :436. Checked the
  keyframes: scale runs 1 → 1.09 → 1.04 → 1.08 → 1 over 7s on
  `cubic-bezier(0.45, 0, 0.55, 1)`, a symmetric curve chosen deliberately because
  ease-out lurches where a loop wraps. No overshoot, no elastic. The detector is
  matching a multi-peak keyframe, not real bounce easing.

Browser evidence, live site, 1440×900 and 390×844:

- Horizontal overflow: none on any of the five routes at either width.
- Console errors and warnings on desktop: none.
- Failed requests: only `ERR_ABORTED` on `.mp4` streams, which is playback being
  cancelled on navigation, not a broken asset.
- Document heights: home 900 / 1600, work 3704 / 5356, songbook 5758 / 6915,
  about 900 / 956, resume 1539 / 3073 (desktop / mobile).

## Provocative questions

1. If the pods are meant to be discovered rather than presented, what does the site
   owe the visitor who does not discover them — and is a 90-second hiring manager
   the visitor this composition was tuned for?
2. Mobile already shows the labels. What is desktop protecting that mobile is not?
3. If /work/ is the strongest surface, why does the homepage stand in front of it
   rather than being it?
