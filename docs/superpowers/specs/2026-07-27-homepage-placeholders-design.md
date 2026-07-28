# Homepage Artwork Placeholders

## Goal

Keep Abby's approved watercolor hero background while making it clear that the
homepage artwork and case-study content have not been selected yet.

## Scope

- Replace the three small homepage artwork previews with numbered placeholder
  cards labeled `Artwork`.
- Replace the image inside the large selected-work panel with the label
  `Case study / forthcoming`.
- Keep the watercolor hero background, navigation, headings, scroll cue, page
  structure, and link to `/work/`.
- Do not change the Work, About, Case Study, or Showcase pages.

## Approach

Match the placeholder treatment from Abby's deployed draft. The placeholders
will use semantic HTML and the existing design tokens rather than temporary
image files. The three hero cards remain a list. Each card contains a visible
ordinal and label. The selected-work panel remains a link so navigation does
not regress while its image is removed.

No new reusable component is needed because both placeholder treatments are
specific to the homepage composition. No token or Showcase changes are
required.

## Files

- `src/pages/index.astro`
  - Remove the four artwork imports and the `heroWork` data.
  - Render three semantic placeholder cards.
  - Remove the selected-work image and update the panel label.
  - Replace image-specific CSS with placeholder typography and layout.
- `DESIGN.md`
  - Document the temporary placeholder exception until Abby supplies approved
    content.

## Accessibility

- Placeholder text remains visible and available to assistive technology.
- The preview group keeps its existing accessible label.
- The large panel keeps an explicit accessible link name.
- Existing focus behavior and color-contrast tokens remain unchanged.

## Verification

- Run the production build.
- Verify `/`, `/work/`, `/about/`, `/case-study/`, and `/showcase/` return
  successfully.
- Confirm the homepage contains no artwork `<img>` elements other than the
  watercolor hero background.
- Check the homepage at narrow and wide viewport widths.
- Confirm the working tree contains only the intended homepage and design
  documentation changes.
