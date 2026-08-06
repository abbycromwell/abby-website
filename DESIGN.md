---
name: Abby Cromwell Portfolio
description: An atmospheric portfolio for illustrative art, character design, and storytelling.
colors:
  paper: "#F6F0E7"
  deep-brown-red: "#241210"
  dried-oxblood: "#5A201D"
  name-red: "#570000"
  wet-red: "#A93631"
  watercolor-edge: "#C9A995"
  paper-wash: "rgb(246 240 231 / 84%)"
  pooled-dark: "rgb(36 18 16 / 72%)"
  pooled-dark-soft: "rgb(36 18 16 / 32%)"
typography:
  display:
    fontFamily: "Jost, Futura, Century Gothic, sans-serif"
    fontSize: "clamp(2.25rem, 9vw, 6rem)"
    fontWeight: 300
    lineHeight: 1.05
    letterSpacing: "0.14em"
  headline:
    fontFamily: "Jost, Futura, Century Gothic, sans-serif"
    fontSize: "clamp(4rem, 9vw, 6rem)"
    fontWeight: 400
    lineHeight: 0.82
    letterSpacing: "-0.04em"
  title:
    fontFamily: "Jost, Futura, Century Gothic, sans-serif"
    fontSize: "clamp(1.5rem, 4vw, 4rem)"
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: "-0.04em"
  body:
    fontFamily: "Jost, Futura, Century Gothic, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "Jost, Futura, Century Gothic, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 400
    letterSpacing: "0.14em"
spacing:
  2xs: "4px"
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "24px"
  xl: "48px"
  2xl: "96px"
  edge: "clamp(1rem, 3vw, 2.5rem)"
  section: "clamp(4rem, 9vw, 9rem)"
  hero-top: "clamp(5.5rem, 14vh, 8rem)"
  page-top: "clamp(6rem, 12vw, 12rem)"
components:
  nav-link:
    textColor: "{colors.deep-brown-red}"
    typography: "{typography.label}"
  nav-link-hover:
    textColor: "{colors.wet-red}"
  kicker:
    textColor: "{colors.wet-red}"
    typography: "{typography.label}"
  plate:
    borderColor: "{colors.watercolor-edge}"
    backgroundColor: "{colors.deep-brown-red}"
    rounded: "0"
---

# Design System: Abby Cromwell Portfolio

## Overview

**Creative North Star: "The Meninges"**

The portfolio feels like artwork placed on warm paper beside a translucent
watercolor anatomy study. Its visual world is spacious, organic, intimate, and
slightly uncanny without becoming clinical or gory. Abby's real work supplies
the detail and color; the interface remains restrained enough to frame it.

The homepage is one continuous paper field and nothing else: a coral watercolor
wash carries a monumental left-anchored name, and three artwork pods hang in the
right half as the entrances to Illustration, Animation, and Typography. The deep
dried-oxblood gallery lives on the Work page, where framed artwork hangs on
the dark ground beneath a large-type contents table. The Case Study page holds
the SongBook flipbook; About shares the quieter paper field.

**Key Characteristics:**

- Pale paper fields crossed by one authored coral watercolor image
- Geometric display lettering with a compressed, poster-like rhythm
- Asymmetrical compositions and deliberate shifts between light and dark
- Real artwork used at meaningful scale, never decorative placeholders

## Colors

The palette is three watercolor families — paper, coral, and red — resolving to
six source values. Aliases and derived washes cover every remaining role, and
the corals of the world live in the artwork itself, not in interface pigment.

### Primary

- **Wet Red** (#A93631, `--color-accent`): Interactive emphasis: link hover and
  focus, the active nav item, kicker labels, and the most concentrated
  watercolor marks.
- **Name Red** (#570000, `--color-hero-name`): A pure dark red sampled from the
  approved homepage reference, distinct from the browner Dried Oxblood. Carries
  the hero name and the homepage's small uppercase labels.

### Secondary

- **Dried Oxblood** (#5A201D, `--color-text-secondary`): Supporting copy,
  captions, and darker watercolor passages.

### Neutral

- **Meninges Paper** (#F6F0E7, `--color-bg`): The default light field.
  `--color-text-on-dark` aliases it for paper text on dark surfaces.
- **Deep Brown-Red** (#241210, `--color-bg-dark`): The immersive dark gallery
  ground behind work cards. `--color-text` aliases it for primary text on
  paper.
- **Watercolor Edge** (#C9A995, `--color-border`): The coral family's sole
  token: dividers, table rules, the work grid's hairline seams, and the
  scrollbar thumb.

### Overlays

All three washes derive from their parent color with relative color syntax, so
each family has exactly one source hex.

- **Paper Wash** (`--color-bg` at 84%, `--color-paper-overlay`): Translucent
  paper field; grounds the case-study artwork placeholder.
- **Pooled Dark** (`--color-bg-dark` at 72%, `--color-dark-overlay`): The
  resting wash over work-card artwork that keeps paper text legible.
- **Pooled Dark Soft** (`--color-bg-dark` at 32%, `--color-dark-overlay-soft`):
  The lifted state of the same wash on hover and focus, letting the artwork
  through.

**The Watercolor Concentration Rule.** Use the palette as material: broad pale
fields, concentrated dark regions, and small wet-red points of interaction.

**The Six Pigments Rule.** The palette owns exactly six source values. A new
role gets an alias or a derived wash of an existing pigment before it ever gets
a new hex. One deliberate exception sits outside the palette: the browser
chrome (`theme-color` meta) is black; it frames the site and is not surface
pigment.

## Typography

**Font:** Jost (Light 300 for the hero name, Book 400 elsewhere, Medium 500 for
navigation and kickers, Semibold 600 for the homepage pod's category name and
nothing else), with Futura and Century Gothic as local geometric fallbacks, as
the single `--font-sans` stack. Fallbacks exist only for the instant before the
webfont loads, so the stack stays short.

600 exists because the pod name sits on artwork with nothing behind it: at 500
it read as a caption rather than a destination. If it stops earning its place,
drop it from the font link and take `--weight-semibold` with it.

Jost is loaded from Google Fonts as the open stand-in for Futura PT, which the
system stack never actually served. If an Adobe Fonts kit for Futura PT becomes
available, swap the font link and lead `--font-sans` with it instead.

**Character:** The type is clean and constructed, creating tension with the
organic watercolor image. Display lettering can become monumental; supporting
copy stays small, open, and calm.

### Hierarchy

Display and Headline share one size token (`--text-display`); weight, leading,
tracking, and role keep them distinct.

- **Display** (Light 300, clamp(2.25rem, 9vw, 6rem), line-height 1.05,
  tracking 0.14em, uppercase): The hero name, plus the title of standalone
  document pages (Resume), where it acts as a letterpress cover. Wide-tracked
  and airy where everything else is compressed. The One Monument Rule still
  holds: one Display element per view, and interior section pages (Work, About,
  Case Study) keep the compressed Headline. The floor is 2.25rem, not 4rem: at
  4rem "Cromwell" ran past the viewport on every phone and was silently clipped.
- **Headline** (Book 400, clamp(4rem, 9vw, 6rem), line-height 0.82,
  tracking -0.04em, uppercase): Page titles on Work, About, and Case Study;
  stacked short lines with poster-like compression.
- **Title** (Book 400, clamp(1.5rem, 4vw, 4rem), line-height 1.2,
  tracking -0.04em, uppercase): Artwork titles inside work cards.
- **Body** (Book 400, 1rem, line-height 1.5): Default copy. Ledes may step up
  to 1.25rem; the About introduction uses 1.5rem with tight leading.
- **Label** (Book 400, 0.75rem, tracking 0.14em, uppercase): Navigation,
  and card metadata. Navigation and kickers use Medium 500.

**The One Monument Rule.** Only one typographic element per view may dominate
the composition.

## Layout

Layouts are mobile-first, image-led, and spacious, with a single min-width
breakpoint at 48rem. The homepage is an immersive page: the header overlays a
full-width paper hero, the name anchors left, and art previews gather near the
lower edge. Interior pages share an atmospheric mode where the hero watercolor
sits behind the whole page at 70% opacity.

Widths come from three containers: `--max-width-wide` (1440px) for the header
and interior pages, and `--max-width-copy` (72ch) and `--max-width-prose`
(38rem) for reading measures.
Horizontal rhythm uses `--space-edge` (clamp(1rem, 3vw, 2.5rem)); vertical
rhythm uses `--space-section` (clamp(4rem, 9vw, 9rem)) between blocks and
`--space-page-top` (clamp(6rem, 12vw, 12rem)) above interior page titles. The
fixed spacing scale runs 4px–96px in named steps.

## Elevation & Depth

The system is flat: no shadow tokens exist. Depth comes from watercolor
translucency, overlap, scale, and the shift between paper and deep oxblood.
Containers never imitate floating application cards.

The homepage pods are the live example: `mix-blend-mode: multiply` and a
feathered mask sink artwork into the wash with no frame and no shadow at all.

`--color-dark-overlay` and `--color-dark-overlay-soft` are currently unused. They
described a Pooled Dark wash that sat over work-card artwork and thinned on
hover, which the framed-plates redesign removed. They are kept because the
pattern is still the right answer if artwork ever needs text over it, but no
surface uses them today.

**The Flat Field Rule.** Surfaces rest flat on the paper. Depth is earned by
material (washes, overlap, scale), never by box shadows.

## Shapes

Artwork and interface geometry are sharp: every surface uses square corners and
hairline 1px borders, and no radius tokens exist. Gallery grids hang framed:
each plate carries its own Watercolor Edge hairline frame with the dark ground
showing in the gaps between plates. If a genuinely compact control ever needs
rounding, a radius token gets added deliberately at that moment.

**The one curved exception.** The homepage artwork pods are entirely curves, by
Abby and Vivian's explicit ruling. They are membranes, not surfaces: their
silhouettes come from eight-value `border-radius` declarations authored per pod
and per state, which is why they take no radius token and never will. The rule
holds everywhere else on the site.

## Components

Motion across all components is quiet: color fades at 150ms, image zooms and
wash fades at 240ms, both on an exponential ease-out
(cubic-bezier(0.16, 1, 0.3, 1)). Nothing moves position, with three authored
exceptions native to their content: the case-study flipbook page turn (640ms
ease-in-out leaf rotation around the spine), animation clips that play muted
while in view and pause when scrolled away, and the homepage pods, which drift
and deform under the pointer. Looping motion uses `--ease-in-out`
(cubic-bezier(0.45, 0, 0.55, 1)) rather than `--ease-out`, which lurches where a
loop wraps. Under `prefers-reduced-motion` all movement is removed; color fades
remain, the flipbook swaps spreads instantly, clips wait with native controls
except the homepage pod, whose clip sits inside a link and so holds a still
frame instead, and the pods hold their resting shape.

### Navigation

The name and the Work and About links use small geometric uppercase lettering
with wide tracking, all in Medium 500 — on immersive pages the links carry the
header alone over the watercolor, and Book 400 read too faint against it. On immersive pages the header overlays
the hero and the name is dropped, leaving only right-aligned links. Hover and
focus shift to Wet Red; the current page holds Wet Red via `aria-current`.
Focus adds a 1px outline offset by 4px. A skip link sits fixed top-left,
sliding into view on keyboard focus. Email lives on the About page, not in the
navigation.

### Kicker label

A small Wet Red uppercase label (`.eyebrow`) that opens interior page intros
and titles the case-study detail columns. One per block, always paired with a
headline or value below it.

### Artwork pods

The homepage's only navigation into the work. Three pods (`.pod`) hang in the
right half of the hero at uneven heights and unequal sizes, clear of the name
and of the Work/About links: Illustration largest at the top, Typography
smallest in the middle, Animation low in the densest part of the wash, where a
moving clip holds up better than a still would.

Each pod is a membrane rather than a card. An eight-value `border-radius` gives
it its own silhouette, a radial-gradient mask feathers its edge into the paper,
and `mix-blend-mode: multiply` at 80% opacity sinks the artwork into the wash
the way layered pigment would. No frame, no shadow, no plate. The blend lives on
the transformed wrapper (`.pod__drag`), not the skin: a transform creates a
stacking context, and on the skin the blend would have nothing to multiply
against.

On hover the pod comes alive three ways at once. The silhouette drifts between
three authored shapes over 7s so it never settles; the artwork drops to 40%
opacity so the category name owns the pod; and pointer velocity stretches the
membrane along the drag axis, squashing it by the inverse across that axis and
trailing it behind the cursor, then letting surface tension pull it back. The
category name fades in centred, in Jost 600 Name Red, with nothing behind it.

Sources sit in `src/data/home-previews.js`. Illustration and Animation shuffle
within their own chapter of `work.js` once per build, so each deploy deals a
different face. Typography holds a fixed SongBook spread; the darker spreads
were tried against the watercolor and rejected.

Below 48rem the pods stack in a plain centred column and the category names sit
statically beneath them, since there is no hover to reveal them.

### Work page — Table of Plates

The work page opens on paper: a hero-style "Selected work" line, then a
contents table (`.plate-index`) of large-type rows — number, category, count —
each rule anchoring to its chapter in the gallery. The dark gallery hangs
framed plates (`.plate`): artwork inside a Watercolor Edge hairline frame, the
dark ground showing between plates, and no text over the artwork. Chapter
rules carry the number, title, and count. The featured Typography chapter
shows the SongBook cover as a single full-width plate linking to the case
study, with a small corner cta. Animation plates hold muted looping clips that
play in view (letterboxed, never cropped); a plate awaiting artwork shows the
translucent Paper Wash membrane with a small "Forthcoming" label.

### Case study — SongBook

The case study opens with detail rows (Role, Medium, Year: Watercolor Edge top
rule, kicker, large value), a premise section quoting the book's own essay,
then the flipbook: one open spread inside a hairline frame, pages turning
around the spine via buttons, arrow keys, edge clicks, or swipe, with a
tabular "N / 24" counter. Content still to come (the song-animation clip)
keeps the labeled Paper Wash placeholder treatment.

## Do's and Don'ts

### Do:

- **Do** let Abby's original artwork provide the visual complexity.
- **Do** use the watercolor hero image as one atmospheric field.
- **Do** keep the case-study placeholder clearly labeled until Abby supplies
  its content.
- **Do** preserve direct access to Work and About.
- **Do** check every composition at narrow and wide viewport sizes.

### Don't:

- **Don't** use stock imagery or generated imitations of Abby's work.
- **Don't** use literal anatomy labels, gore, glossy effects, or glass panels.
- **Don't** introduce new category menus or explanatory sections beyond the
  selected source pages.
- **Don't** place artwork inside generic white application cards.
- **Don't** add a seventh pigment; extend the palette with aliases and washes
  of the six source values.
