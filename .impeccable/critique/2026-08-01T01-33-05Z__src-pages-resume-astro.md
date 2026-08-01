---
target: the /resume page
total_score: 25
p0_count: 0
p1_count: 2
timestamp: 2026-08-01T01-33-05Z
slug: src-pages-resume-astro
---
Method: dual-agent (A: design review sub-agent · B: detector/browser-evidence sub-agent)

# Critique: /resume (src/pages/resume.astro)

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | Nav marks About as current page while on /resume/ (activePage="about") |
| 2 | Match System / Real World | 3 | "Sophomore" sits in the role slot of the meta row |
| 3 | User Control and Freedom | 2 | Zero links in main content; only exit is the top nav |
| 4 | Consistency and Standards | 2 | Email identity split (gmail-2025 here vs ucla.edu on About/PRODUCT.md); h1 register diverges from About |
| 5 | Error Prevention | 2 | Obfuscated email forces manual reconstruction; the page's only action is its most error-prone |
| 6 | Recognition Rather Than Recall | 3 | Contact appears once, top of a 3200px page |
| 7 | Flexibility and Efficiency | 1 | No PDF, no mailto, no print stylesheet; recruiters live on PDFs and forwards |
| 8 | Aesthetic and Minimalist Design | 4 | Genuinely restrained; AP course list is the only filler for this audience |
| 9 | Error Recovery | 2 | Mistyped email fails silently later; no feedback channel |
| 10 | Help and Documentation | 3 | Self-explanatory; no cue that "at/dot" needs converting |
| **Total** | | **25/40** | **Acceptable: significant improvements needed** |

## Anti-Patterns Verdict

Does not read as AI-made. No card grids, side-stripes, gradient text, or hero metrics; the authored watercolor world and disciplined tokens carry a real identity.

Deterministic scan: source file clean (0 findings). In-browser detector flagged 4: eyebrow-chip above the h1, tight leading (1.2, wants >=1.3) on the lede, single-font page, cream palette. The last two are false positives here (Jost + Meninges Paper are the site's committed identity). The eyebrow flag is half-true: six identical kickers on one page, and the h2s ARE the kickers, which is the scaffolding end of the sanctioned component. DESIGN.md says a kicker is "always paired with a headline or value below it"; these aren't.

Contrast evidence (B, pixel-sampled): backdrop behind side-column text warms to #edc7b2 where the wash pools. A measured: Awards eyebrow 2.82:1 at 768px, 3.34:1 at 1440px; Scholastic title 3.88:1; detail text 4.07:1. All below the 4.5:1 AA floor that CLAUDE.md mandates.

## Overall Impression

The first viewport is the best moment: "RESUME" in wide-tracked Light over the branching coral wash reads like a letterpress cover page. Below the fold the page is handsome, curated, token-disciplined, and then it strands its one audience: the strongest hiring signals (4 Gold Keys, juried international show) sit in the least legible corner, and the page ends with no contact, no PDF, no route to the work. Biggest opportunity: make the end of the page work as hard as the top.

## What's Working

1. The h1 monument lands: 96px Jost Light, 0.14em tracking over the wash. One Monument respected; nothing competes.
2. Total token discipline: every style value is a var(--*); hairline rules + tracked meta rows give real print-resume texture.
3. Curation shows: four experience entries, one-sentence notes, columns balance credibly at 1440px after the trimming.

## Priority Issues

1. **[P1] Side column fails WCAG AA over the watercolor wash (>=768px).** The grid's right track lands under the wash's densest region; Awards/Software labels measure 2.8–3.9:1 against sampled backdrops (need 4.5:1). The page's most hire-relevant content is its least legible. Fix: Paper Wash (--color-paper-overlay) panel behind side sections, or mirror the grid so the side column sits on pale paper, or cap the wash height on this page. Command: /impeccable polish
2. **[P1] Dead end for the only audience.** Zero anchors in main, no mailto, no PDF download, no close. A recruiter's final beat is a trailing list item and blank paper; PRODUCT.md's stated job is to route employers to the work. Fix: quiet end-of-page close (kicker + Work link + contact restated) and a generated print-fidelity PDF. Command: /impeccable shape (the close), then generate-pdf
3. **[P2] Email identity split.** abbycromwell2025 at gmail (resume) vs abbycromwell at ucla (About) vs PRODUCT.md's declared ucla.edu. Two addresses one click apart reads as unmaintained materials, exactly the wrong signal from a portfolio. The at/dot obfuscation also taxes every legitimate recruiter (deliberate anti-spam choice; the split is the actionable part). Fix: one canonical address everywhere. Command: /impeccable clarify
4. **[P2] h1 register break.** DESIGN.md reserves Display (Light, wide-tracked) for the hero name only; About uses compressed Headline for its title. Resume now wears the name's clothing on a generic noun, with no codified rule. It looks good, so either codify a "document cover" register in DESIGN.md or revert to Headline. Command: /impeccable document
5. **[P3] Meta-row and side-list typography.** Role and dates are one undifferentiated tracked-caps string (needs a separator); "Sophomore" occupies the role slot; three Scholastic awards could merge into one item; the 7-program summer note is a run-on with nested parentheticals. Command: /impeccable typeset

## Persona Red Flags

- **Entertainment recruiter (project persona):** skims for portfolio link, reel, contact, PDF; finds none of the four in the content. Gold Keys sit in the low-contrast column. AP Chemistry noise dilutes an art resume. The gmail/ucla contradiction reads as unmaintained.
- **Sam (accessibility):** contrast failures above; aria-current announces the wrong page; email has no actionable link; 12px h2s under 20px h3s make visual hierarchy contradict the semantic one.
- **Casey (mobile):** 3244px scroll, email only at top, nothing tappable in content, no action at the end; an interrupted Casey closes the tab.
- **Riley (stress tester):** Cmd+P prints the full-bleed watercolor behind 2000px of unpaginated text (no print stylesheet); at exactly 768px Awards lands on the worst wash band; double-click can't select the full obfuscated email.

## Minor Observations

- aria-current bug: activePage="about" on /resume/ is literally wrong for AT; give resume its own value or none.
- Merge the three Scholastic entries into one item with per-year details (kills the 6-item chunk violation).
- Summer-programs note would parse better as the detailed-list treatment than one prose sentence.
- At 768px the side column is ~200px; award titles wrap 2–3 lines; consider staying single-column until ~60rem.
- Empty role fields handled gracefully (conditional render). En-dash date style is consistent and correct.
- No print stylesheet site-wide; matters most on this page.

## Questions to Consider

1. Why does an employer-facing portfolio have an HTML resume with a second email identity the product brief never sanctioned?
2. The wash's most saturated region hosts the least legible content. What if the grid mirrored, so the monument (not the metadata) meets the pigment?
3. If "RESUME" can wear the name's Display clothing, what stays reserved about the homepage identity? Codify the document-cover register or revert?
