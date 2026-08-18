# Marks

The site's icon: Abby's initial, the Jost **A** at weight 600, knocked out of a Name
Red disc.

The letter is not a font reference and not a redraw. It is the outline of the A
lifted from `public/fonts/jost-latin.woff2` — the same file the masthead is set in —
so the mark and the wordmark cannot drift apart, and the icon needs no font
installed to render.

## The two masters

| file | corners | used for |
| --- | --- | --- |
| `favicon.svg` | transparent | the browser tab, where the mark should read as a disc |
| `icon-square.svg` | paper | touch and manifest icons |

The square exists because iOS and Android composite a transparent icon onto black.
A disc with transparent corners would put this warm palette on a cold ground, so
those two get paper corners instead and let the platform round them.

`favicon.svg` is the one that ships; it lives in `public/` and is duplicated here so
both masters sit together.

## Proportions

The letter fills **59%** of the box. Larger settings were compared at 70%, 76% and
82%: they put more ink on screen at 16px (18 pixels of paper at 59%, 45 at 82%) and
were rejected in favour of the disc keeping its margin.

## Regenerating

There is no build step — the SVGs are the source, and the PNG and ICO derivatives
were rasterised from them with Chrome rather than ImageMagick, which is not
installed on the machine this was made on. To change the mark, edit the SVGs and
re-render:

- `favicon.ico` — 16, 32 and 48 from `favicon.svg`, packed into one file **as BMP
  entries, not PNG**. Pillow's default packs PNG payloads, which only decode from
  Windows Vista on — and pre-Vista clients are the entire reason this file exists,
  since anything newer takes `favicon.svg`. Pass `bitmap_format="bmp"`. It costs
  about 12kB, on a file modern browsers never request.
- `favicon-96x96.png` — 96 from `favicon.svg`
- `apple-touch-icon.png` — 180 from `icon-square.svg`
- `web-app-manifest-192x192.png`, `web-app-manifest-512x512.png` — from `icon-square.svg`

Render each size from the SVG rather than downscaling one large PNG; a 16px icon
resampled from 512 loses the crossbar.

## Palette

Both colours are tokens, not new values: Name Red `#570000` (`--color-hero-name`,
the hero's own red) and Meninges Paper `#f6f0e7` (`--color-bg`).
