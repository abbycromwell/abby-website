# Homepage Artwork Placeholders Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the four homepage artwork images with honest, token-based placeholders while preserving Abby's watercolor hero background.

**Architecture:** Keep the change inside the existing Astro homepage because both placeholder treatments are composition-specific. Render three semantic cards from a small ordinal array, remove the selected-work image, and document the temporary content-state exception in `DESIGN.md`.

**Tech Stack:** Astro 5, semantic HTML, scoped CSS, existing design tokens

## Global Constraints

- Keep the watercolor hero background, navigation, headings, scroll cue, page structure, and link to `/work/`.
- Do not change the Work, About, Case Study, or Showcase pages.
- Use only existing `var(--*)` tokens for colors, typography, spacing, radii, and borders.
- Keep placeholder text visible to assistive technology and preserve visible keyboard focus.
- Do not add dependencies, image assets, reusable components, or design tokens.

---

### Task 1: Replace Homepage Artwork with Temporary Placeholders

**Files:**
- Modify: `src/pages/index.astro:1-280`
- Modify: `DESIGN.md:24-43`

**Interfaces:**
- Consumes: Existing `Base` layout, Astro `Image` component, `hero-watercolor-veins.png`, and design tokens from `src/styles/tokens.css`.
- Produces: A homepage with one retained atmospheric image, three numbered artwork placeholders, and one linked case-study placeholder.

- [x] **Step 1: Run the source assertion to verify the current implementation fails the requirement**

```bash
if rg -q 'boogerSelfPortrait|tripleApple|figureDrawingAlfred|landscapeAbstract|heroWork|<Image src=\\{item\\.src\\}' src/pages/index.astro; then
  echo "FAIL: homepage still renders artwork"
  exit 1
fi
```

Expected: Exit `1` with `FAIL: homepage still renders artwork`.

- [x] **Step 2: Replace artwork imports and data with three ordinals**

Keep the Astro frontmatter limited to:

```astro
---
import { Image } from 'astro:assets';
import Base from '../layouts/Base.astro';
import heroWatercolor from '../assets/home/hero-watercolor-veins.png';

const heroPlaceholders = ['01', '02', '03'];
---
```

- [x] **Step 3: Render the three hero cards and selected-work placeholder**

Replace the current `heroWork` list rendering with:

```astro
<ul class="hero__work-previews" aria-label="Artwork placeholders">
  {heroPlaceholders.map((ordinal) => (
    <li class="art-card">
      <span class="art-card__index">{ordinal}</span>
      <span class="art-card__label">Artwork</span>
    </li>
  ))}
</ul>
```

Replace the current selected-work link contents with:

```astro
<a
  class="work-tease__panel"
  href="/work/"
  aria-label="View work; case study forthcoming"
>
  <span>Case study / forthcoming</span>
</a>
```

Update the homepage composition comment so it says the first viewport contains
three artwork placeholders rather than three real artworks.

- [x] **Step 4: Replace image-specific CSS with token-based placeholder styling**

Replace `.hero__work-previews li` and `.hero__work-previews img` with:

```css
.art-card {
  display: flex;
  aspect-ratio: 1.14 / 1;
  min-width: 0;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  padding: var(--space-sm);
  border: var(--border-thin) solid var(--color-border);
  border-radius: var(--radius-sm);
  color: var(--color-text-secondary);
  background: var(--color-paper-overlay);
  box-shadow: var(--shadow-art);
}

.art-card__index,
.art-card__label {
  font-size: var(--text-xs);
  letter-spacing: var(--tracking-label);
  text-transform: uppercase;
}

.art-card__label {
  align-self: flex-end;
}
```

Delete `.work-tease__panel img`, `.work-tease__panel::after`,
`.work-tease__panel:hover img`, and the image transition from the
`prefers-reduced-motion` selector. Keep the panel border, typography, link,
focus behavior, and dark-section composition unchanged.

- [x] **Step 5: Document the temporary content state**

In `DESIGN.md`, replace the absolute placeholder prohibition with:

```markdown
- **Do** use clearly labeled placeholders while Abby's homepage artwork and
  case-study content remain unselected.
```

Update the Artwork previews component description to state that the homepage
uses labeled placeholders until Abby supplies approved work, after which the
cards become unlabelled artwork previews.

- [x] **Step 6: Re-run the source assertion**

```bash
if rg -q 'boogerSelfPortrait|tripleApple|figureDrawingAlfred|landscapeAbstract|heroWork|<Image src=\\{item\\.src\\}' src/pages/index.astro; then
  echo "FAIL: homepage still renders artwork"
  exit 1
fi
rg -n 'Artwork placeholders|Case study / forthcoming|hero-watercolor-veins' src/pages/index.astro
```

Expected: Exit `0` and matches for all three retained placeholder/background strings.

- [x] **Step 7: Run the production build**

```bash
npm run build
```

Expected: Exit `0` with Astro reporting five built pages and no errors.

- [x] **Step 8: Verify the running site**

Run the development server:

```bash
npm run dev -- --host 127.0.0.1 --port 4322
```

Verify routes:

```bash
for path in / /work/ /about/ /case-study/ /showcase/; do
  curl -sS -o /dev/null -w "%{http_code}\t$path\n" "http://127.0.0.1:4322$path"
done
```

Expected: `200` for every route. Inspect `/` at narrow and wide viewport widths
and confirm the watercolor background remains while the four artwork images do
not render.

- [x] **Step 9: Polish and commit**

Run the repository's Polish workflow against code changed from `main`, then:

```bash
git diff --check
git status --short
git add src/pages/index.astro DESIGN.md docs/superpowers/plans/2026-07-27-homepage-placeholders.md
git commit -m "feat: use homepage artwork placeholders"
```

Expected: A clean commit containing only the homepage, design documentation,
and implementation plan.
