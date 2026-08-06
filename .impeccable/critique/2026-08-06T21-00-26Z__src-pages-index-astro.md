---
target: homepage (src/pages/index.astro)
total_score: 14
max_score: 32
na_heuristics: 7,10
p0_count: 3
p1_count: 3
timestamp: 2026-08-06T21-00-26Z
slug: src-pages-index-astro
---
Method: dual-agent (A: design review · B: detector + browser evidence)

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 1 | Nothing at rest signals the pods are navigation; `.pod__title { opacity: 0 }` |
| 2 | Match System / Real World | 3 | Membrane metaphor is coherent; "Typography" promises a category, delivers one case study |
| 3 | User Control and Freedom | 3 | Nothing traps; no way to preview a destination before committing |
| 4 | Consistency and Standards | 1 | Two taxonomies for the same practice; clip cropped against DESIGN.md; identical affordances, different destinations |
| 5 | Error Prevention | 2 | Hit area is the bounding square, not the blob — ~21% is transparent paper that navigates |
| 6 | Recognition Rather Than Recall | 0 | The only route into the work is invisible until hovered; unavailable to touch |
| 7 | Flexibility and Efficiency | n/a | Five links on one screen; no novice/expert split exists |
| 8 | Aesthetic and Minimalist Design | 3 | Real restraint, docked for a 4.8MB video on the "minimal" page |
| 9 | Error Recovery | 1 | Silent unrecoverable display failure: "CROMWELL" clipped on every phone |
| 10 | Help and Documentation | n/a | Experience surface; none warranted |
| **Total** | | **14/32** | **Poor (44%)** |

## Design Specificity Verdict

Specific in its surface, category-interchangeable in its structure. The authorship is spent on the frame instead of on the work.

Genuinely authored: the coral capillary wash as one field; Name Red sampled from an approved reference; three hand-authored eight-value silhouettes per pod per state; the -0.07em optical kern; the 40/60 grid chosen because that is where the pods hang; a pinned spread because darker ones were tested and rejected.

Portable to any portfolio unchanged: everything structural. "Three organic blobs that float, wobble on hover, deform under pointer velocity, and reveal a label" is a 2020s agency-site genre. Nothing about the composition depends on which images are in it, because at 0.8 multiply and 0.4 on hover the pieces are unrecognizable at pod scale.

The most Abby-specific asset on the page is the artwork, and the treatment suppresses it harder than anything else.

Deterministic scan: 3 findings, all false positives. Both `bounce-easing` hits fired on the string "wobble" inside the animation's name, not on a curve — confirmed against the rule's regex. `#000` is a mask alpha stop that never paints.

## Priority Issues

### P0 — "CROMWELL" is clipped on every phone
`--text-display` floors at 4rem; 9vw only exceeds that above ~711px. Overflow past the padding edge: 112px @320, 57px @375, 42px @390, 18px @414. `.hero { overflow: hidden }` cuts it with no horizontal scroll and no signal. `h1 { max-width: 10ch }` does nothing — the constraint is the glyph run, not the box.

### P0 — The Typography pod collides with the name from 768px to ~1360px
`right: 38%` is percentage-anchored and walks left as the viewport narrows; `.hero__discipline` is a fixed 608px that does not. Overlap: 107px @768, 126px @1024, 37px @1280. Clean only at ≥1440. `mix-blend-mode: multiply` means the artwork prints through the letterforms.

### P0 — Pod titles fail WCAG AA, and the failure moves every second
Measured across six phases of the loop: Illustration 2.37–2.59:1, Animation 2.76–3.01:1, Typography 4.03–5.44:1, against a 4.5:1 requirement. The darkest pixels under the words are the wash's own red veins. The 1px focus ring is ~2.4–2.8:1 against a 3:1 requirement.

### P1 — The only navigation into the work is invisible until hovered
Three pods at 0.8 multiply sit inside the wash at the same visual weight as the wash, occupying ~5% of the field as its lowest-contrast marks. A scanning visitor sees a wash, a name, and no work.

### P1 — Hovering fades the artwork to 40%
The reward for engaging is that Abby's work becomes harder to see. Interaction and goal point in opposite directions.

### P1 — The Animation pod crops 57% of every frame
1280x550 into a 1:1 pod with `object-fit: cover`. DESIGN.md says animation plates are "letterboxed, never cropped." The file is 4.8MB/36s, eager, ~97% of page weight; ~3MB still transfers under reduced motion, and the reduced-motion path gives no controls and no poster, against DESIGN.md's stated contract.

### P2 — The page names Abby's practice twice, in two vocabularies
Tagline says "Illustrative art · Character design · Storytelling". Pods say "Illustration · Typography · Animation". Neither set contains the other.

## Persona Red Flags

**Jordan (first-timer)**: reads the pods as watercolor blotches, not navigation; most likely first action is clicking WORK in the header, so the pods and the entire case-study route never happen. The most legible mark in the Typography pod at every width is `mariko goto` — someone else's name, darker than anything else in the pod, 100px from "ABBY CROMWELL".

**Sam (keyboard/screen reader)**: tab order and accessible names are genuinely well built. But the focus ring is 1px at ~2.4–2.8:1, focus triggers the same 7s wobble so the target will not hold still, and a reduced-motion user can never see the animation work at all.

**Casey (mobile)**: nav links are 18px tall, under WCAG 2.5.8's 24px floor, in the top-right corner. 4.9MB of video loads before scrolling near the pod. The hero image crops to a near-flat cream — the signature wash is effectively absent on the phone. Everything justifying this design is gated behind `(hover: hover)`.

## Minor Observations

- Three duplicate rule sets set `.pod__title { opacity: 1 }`; one sits outside the `(hover: hover)` query, partly defeating the phantom-hover gate.
- `640ms` and `7s` are hardcoded against a CLAUDE.md rule requiring tokens.
- The middot separators have no `aria-hidden`; screen readers announce "middle dot" between every discipline.
- `spread-07.webp` carries a hard vertical page-gutter edge running through a shape whose premise is that it has no straight edges.
- PRODUCT.md still describes the homepage as "a concise overview of selected artwork and recent projects" plus "a background 3D model designed by Abby." Neither exists. DESIGN.md was updated for the pods; the product brief was not.

## Questions to Consider

1. The pods hide the work behind a hover and then fade it to 40% when you find it. If the reward for engaging is that the art gets harder to see, what is the interaction for?
2. The wash is the largest, most memorable thing on a page whose job is to make Abby's work central — and it is the one image that is not a portfolio piece. Whose portfolio is this homepage showing?
3. If a hiring manager's first and only look happens on a phone, has this design been seen at all?
