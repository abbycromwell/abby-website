---
name: Abby Cromwell Portfolio
description: An atmospheric portfolio for illustrative art, character design, and storytelling.
colors:
  paper: "#F6F0E7"
  diluted-coral: "#D9855B"
  wet-red: "#A93631"
  dried-oxblood: "#5A201D"
  deep-brown-red: "#241210"
typography:
  display:
    fontFamily: "Futura PT, Futura, Century Gothic, Avenir Next, Arial, sans-serif"
    fontSize: "clamp(4rem, 10vw, 6rem)"
    fontWeight: 400
    lineHeight: 0.82
    letterSpacing: "-0.04em"
  body:
    fontFamily: "Futura PT, Futura, Century Gothic, Avenir Next, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.5
rounded:
  image: "4px"
spacing:
  edge: "clamp(1rem, 3vw, 3.5rem)"
  section: "clamp(4rem, 9vw, 9rem)"
---

# Design System: Abby Cromwell Portfolio

## Overview

**Creative North Star: "The Meninges"**

The portfolio feels like artwork placed on warm paper beside a translucent
watercolor anatomy study. Its visual world is spacious, organic, intimate, and
slightly uncanny without becoming clinical or gory. Abby's real work supplies
the detail and color; the interface remains restrained enough to frame it.

The homepage moves from a luminous paper field into a deep dried-oxblood
gallery. Across the rest of the site, generous breathing room and large images
keep the work primary.

**Key Characteristics:**

- Pale paper fields crossed by one authored coral watercolor image
- Geometric display lettering with a compressed, poster-like rhythm
- Asymmetrical compositions and deliberate shifts between light and dark
- Real artwork used at meaningful scale, never decorative placeholders

## Colors

The palette follows watercolor as it dilutes, pools, dries, and darkens.

### Primary

- **Wet Red:** Interactive emphasis and the most concentrated watercolor marks.

### Secondary

- **Diluted Coral:** Warm secondary emphasis and translucent color.
- **Dried Oxblood:** Supporting text and darker watercolor passages.

### Neutral

- **Paper:** The default light field and light text on dark surfaces.
- **Deep Brown-Red:** Primary text and immersive dark gallery fields.

**The Watercolor Concentration Rule.** Use the palette as material: broad pale
fields, concentrated dark regions, and small wet-red points of interaction.

## Typography

**Display Font:** Futura PT with geometric sans-serif fallbacks

**Body Font:** Futura PT with geometric sans-serif fallbacks

**Character:** The type is clean and constructed, creating tension with the
organic watercolor image. Display lettering can become monumental; supporting
copy stays small, open, and calm.

### Hierarchy

- **Display:** Regular weight, tightly tracked, and used only for Abby's name or
  rare page-scale statements.
- **Headline:** Regular weight with compact leading for section titles.
- **Body:** Regular weight with comfortable leading and a readable measure.
- **Label:** Small, widely tracked, and uppercase for navigation and cues.

**The One Monument Rule.** Only one typographic element per view may dominate
the composition.

## Layout

Layouts are mobile-first, image-led, and spacious. The homepage uses a full
viewport paper field with the name anchored left and art previews gathered near
the lower edge. Larger screens embrace asymmetry; narrow screens preserve the
same reading order in a single column. The Work page uses large image panels;
the About page becomes a quieter visual pause.

## Elevation & Depth

The system is flat by default. Depth comes from watercolor translucency,
overlap, scale, and the transition between paper and deep oxblood. A subtle
shadow may lift artwork over the hero field, but containers do not imitate
floating application cards.

## Shapes

Artwork uses minimally softened corners. Interface geometry stays crisp;
circular forms are reserved for the scroll cue and other genuinely compact
controls.

## Components

### Navigation

The name and Work, About, and Email links use small geometric lettering.
Navigation stays minimal and direct. Hover and focus shift to Wet Red with an
obvious focus outline.

### Artwork previews

Homepage artwork previews are unlabelled and tightly cropped. Work-page panels
use restrained uppercase labels over full-bleed images, with the art remaining
the dominant content.

## Do's and Don'ts

### Do:

- **Do** let Abby's original artwork provide the visual complexity.
- **Do** use the watercolor hero image as one atmospheric field.
- **Do** preserve direct access to Work, About, and Email.
- **Do** check every composition at narrow and wide viewport sizes.

### Don't:

- **Don't** introduce placeholder art, stock imagery, or generated imitations
  of Abby's work.
- **Don't** use literal anatomy labels, gore, glossy effects, or glass panels.
- **Don't** introduce new category menus or explanatory sections beyond the
  selected source pages.
- **Don't** place artwork inside generic white application cards.
