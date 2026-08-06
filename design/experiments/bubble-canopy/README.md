# Bubble Canopy prototype

A homepage direction study: the three artwork previews become organic pods hung
across the whole hero field, one per category, instead of a row of rectangles.

Source of the idea: the `watercolor-greenhouse` direction mock — *"the
watercolor's veins grow into a navigable canopy. Projects hang as living pods."*

The prototype is standalone and is not imported by the production Astro site.
Media is referenced from the canonical files in `src/assets`, and the palette,
type, spacing, and easing come from the real `src/styles/tokens.css`, so the
study cannot drift from the design system.

## What it tests

- **Organic silhouettes.** Each pod uses a different eight-value `border-radius`
  so no two read as the same shape.
- **Translucent integration.** A radial-gradient mask feathers each pod's edge
  into the paper, so artwork dissolves into the watercolor rather than sitting in
  a frame. No frame, no shadow, no glass.
- **Surface tension on hover.** The feather tightens, opacity lifts to full, the
  silhouette relaxes toward round, and the pod swells 3%. All CSS, no script.
- **Tethered labels.** A hairline Name Red vein runs from each pod to a small
  circular category label, as in the mock.

## Deliberate departures from the current design system

Both need a ruling before any of this ports to `src/`:

1. **Curves.** DESIGN.md's Shapes rule says every surface uses square corners and
   no radius tokens exist. The pods are nothing but curves.
2. **Jost 600.** The type system loads Light 300, Book 400, and Medium 500 only.
   The category name uses 600, so porting means either adding a sixth weight to
   the font link and DESIGN.md, or dropping the name back to 500.

3. **A symmetric easing.** The hover wobble loops, and a loop needs an in-out
   curve or it lurches at every seam. `tokens.css` has only `--ease-out`, so the
   wobble carries its own `cubic-bezier(0.45, 0, 0.55, 1)`. Porting means adding
   an `--ease-in-out` token.

The pods do stay inside the Flat Field rule: depth comes from translucency and
overlap, never from shadow.

## View locally

From the repository root, run:

```sh
python3 -m http.server 49168 --bind 127.0.0.1
```

Then open:

```text
http://127.0.0.1:49168/design/experiments/bubble-canopy/
```

## Not yet built

- Pods pull a random piece from their own category each build, the way
  `src/data/home-previews.js` shuffles the current trio.
- Narrow-viewport treatment is a plain stacked column; it has not been designed,
  only kept from breaking.
