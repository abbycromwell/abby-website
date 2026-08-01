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
    fontSize: "clamp(4rem, 9vw, 6rem)"
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
  scroll-cue:
    textColor: "{colors.name-red}"
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

The homepage is one continuous paper field: a coral watercolor wash carries a
monumental left-anchored name, three artwork previews gather low, and a slim
"Recent project" panel of three SongBook pages closes the page. The deep
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
  the hero name, the scroll cue, and the homepage's small uppercase labels.

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
the nav name), with Futura and Century Gothic as local geometric fallbacks, as
the single `--font-sans` stack. Fallbacks exist only for the instant before the
webfont loads, so the stack stays short.

Jost is loaded from Google Fonts as the open stand-in for Futura PT, which the
system stack never actually served. If an Adobe Fonts kit for Futura PT becomes
available, swap the font link and lead `--font-sans` with it instead.

**Character:** The type is clean and constructed, creating tension with the
organic watercolor image. Display lettering can become monumental; supporting
copy stays small, open, and calm.

### Hierarchy

Display and Headline share one size token (`--text-display`); weight, leading,
tracking, and role keep them distinct.

- **Display** (Light 300, clamp(4rem, 9vw, 6rem), line-height 1.05,
  tracking 0.14em, uppercase): The hero name, plus the title of standalone
  document pages (Resume), where it acts as a letterpress cover. Wide-tracked
  and airy where everything else is compressed. The One Monument Rule still
  holds: one Display element per view, and interior section pages (Work, About,
  Case Study) keep the compressed Headline.
- **Headline** (Book 400, clamp(4rem, 9vw, 6rem), line-height 0.82,
  tracking -0.04em, uppercase): Page titles on Work, About, and Case Study;
  stacked short lines with poster-like compression.
- **Title** (Book 400, clamp(1.5rem, 4vw, 4rem), line-height 1.2,
  tracking -0.04em, uppercase): Artwork titles inside work cards.
- **Body** (Book 400, 1rem, line-height 1.5): Default copy. Ledes may step up
  to 1.25rem; the About introduction uses 1.5rem with tight leading.
- **Label** (Book 400, 0.75rem, tracking 0.14em, uppercase): Navigation,
  card metadata, and the scroll cue. The nav name and kickers use Medium 500.

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
Work cards layer artwork beneath a Pooled Dark wash that thins on hover;
containers never imitate floating application cards.

**The Flat Field Rule.** Surfaces rest flat on the paper. Depth is earned by
material (washes, overlap, scale), never by box shadows.

## Shapes

Artwork and interface geometry are sharp: every surface uses square corners and
hairline 1px borders, and no radius tokens exist. Gallery grids hang framed:
each plate carries its own Watercolor Edge hairline frame with the dark ground
showing in the gaps between plates. If a genuinely compact control ever needs
rounding, a radius token gets added deliberately at that moment.

## Components

Motion across all components is quiet: color fades at 150ms, image zooms and
wash fades at 240ms, both on an exponential ease-out
(cubic-bezier(0.16, 1, 0.3, 1)). Nothing moves position, with two authored
exceptions native to their content: the case-study flipbook page turn (640ms
ease-in-out leaf rotation around the spine) and animation clips that play
muted while in view and pause when scrolled away. Under
`prefers-reduced-motion` all movement is removed; color fades remain, the
flipbook swaps spreads instantly, and clips wait with native controls.

### Navigation

The name (Medium 500) and the Work and About links use small geometric
uppercase lettering with wide tracking. On immersive pages the header overlays
the hero and the name is dropped, leaving only right-aligned links. Hover and
focus shift to Wet Red; the current page holds Wet Red via `aria-current`.
Focus adds a 1px outline offset by 4px. A skip link sits fixed top-left,
sliding into view on keyboard focus. Email lives on the About page, not in the
navigation.

### Kicker label

A small Wet Red uppercase label (`.eyebrow`) that opens interior page intros
and titles the case-study detail columns. One per block, always paired with a
headline or value below it.

### Scroll cue

An uppercase Name Red text link with a downward arrow, sitting under the hero
discipline line and pointing to the selected-work anchor.

### Artwork previews

The homepage gathers three 3:2 artwork previews (`.art-card`) in a row of
capped columns, separated by 1px paper hairlines, images cropped to fill. The
"Recent project" tease is a short full-width panel of three SongBook pages in
a hairline-gapped grid, a Name Red uppercase label pinned top-left, a 2% image
zoom on hover, linking to the case study.

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
