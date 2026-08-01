---
target: the /about page (incl. copy)
total_score: 30
p0_count: 1
p1_count: 2
timestamp: 2026-08-01T01-49-37Z
slug: src-pages-about-astro
---
Method: dual-agent (A: design review sub-agent · B: detector/browser-evidence sub-agent)

# Critique: /about (src/pages/about.astro) — 30/40

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 4 | aria-current + kicker echo location clearly |
| 2 | Match System / Real World | 3 | "Not currently available": available for what, until when? |
| 3 | User Control and Freedom | 2 | Cul-de-sac toward the work; email is inert text |
| 4 | Consistency and Standards | 2 | "View resume" vs "View the work"; p.eyebrow here vs h2.eyebrow on resume; 2-col grid with orphan cell |
| 5 | Error Prevention | 2 | Hand-retyped email; one typo is a silently lost recruiter |
| 6 | Recognition Rather Than Recall | 3 | Email must be mentally reassembled |
| 7 | Flexibility and Efficiency | 2 | No mailto, no copy affordance; PDF one page deeper |
| 8 | Aesthetic and Minimalist Design | 4 | Genuine restraint, nothing decorative |
| 9 | Error Recovery | 4 | Nominal (no error surfaces) |
| 10 | Help and Documentation | 4 | Nominal (self-evident) |
| **Total** | | **30/40** | **Good: solid foundation, address weak areas** |

## Anti-Patterns Verdict

Visually clean: no card grids, gradient text, shadows, or filler; kickers comply with the sanctioned one-per-block rule. Deterministic scan of the source: clean. In-browser detector: eyebrow-chip over h1 (sanctioned component), tight leading 1.2 on both bio paragraphs, cream palette (committed identity, false positive). The slop lives in the words: the bio reads like a generated stub ("interested in", "working across", two parallel category-list sentences) and the meta description is literally "About Abby Cromwell."

## Overall Impression

At 1440px the page reads deliberately quiet, not unfinished: the wash sits like a plate in a book and the composition mirrors the homepage grammar. The problems are the words and the ending. The bio tells an employer nothing the homepage didn't, and the page's final statement before its only link is effectively "don't reach out": an inert email followed by "Not currently available". On mobile the wash lands exactly behind the contact block and drives it below AA contrast.

## What's Working

1. System coherence: left monument against right wash mirrors the homepage; One Monument respected; everything tokenized.
2. The restraint is real: no fake sections invented to fill space; PRODUCT.md's "restrained, simple pace" achieved.
3. The kicker+value contact grammar matches the resume's new closing block: an emerging site-wide "document footer" idiom.

## Priority Issues

1. **[P0] Contact block fails WCAG AA on mobile (measured).** At 390px the wash's dense region sits behind the contact grid: Availability kicker 2.09:1, "Not currently available" 1.96:1, Contact kicker 3.64:1, email 2.60:1 (all need 4.5:1; house rules mandate AA). Desktop passes everywhere (worst 8.61:1). Fix: Paper Wash backdrop on .about__contact (exact precedent: .resume__side), or shift the wash's object-position at narrow widths. Command: /impeccable polish
2. **[P1] The page ends on "not available" next to an inert email.** Peak-end inversion for the exact persona the site serves. Fix: reword to kill the label echo ("Not taking new projects"), and consider making the email actionable. Command: /impeccable clarify
3. **[P1] No route from About to the work.** Only the global nav leads on. Fix: add a fourth contact cell (kicker "Work", link "View the work"), which also turns the orphaned 3-cell grid into a clean 2x2. Command: /impeccable layout
4. **[P2] Bio is redundant and doesn't sell.** P1 restates the homepage discipline line; p2 re-claims illustration; seven category nouns, zero specifics, weakest verbs ("interested in", "working across"). Proposed rewrite using only repo-verified facts: "Abby Cromwell is an illustrator, character designer, and storyteller drawn to entertainment and game worlds. A sophomore in Design Media Arts at UCLA, she moves between illustration, animation, painting, and printmaking, and her work has earned Scholastic Gold Keys and shown in juried exhibitions." Anything more characterful should come from Abby. Command: /impeccable clarify
5. **[P3] 60px phantom scroll at 1440.** min-height calc + section padding promises content that isn't there; either fit the viewport or give the scroll a destination (the Work cell helps). Command: /impeccable layout

## Persona Red Flags

- **Entertainment recruiter:** fails at the conversion moment: decode-and-retype email, then "Not currently available" as the final word; no in-page path to the work; learns nothing new from the bio.
- **Sam (accessibility):** mobile AA failures above; section labels are p.eyebrow so the outline is h1-only (resume uses h2.eyebrow; the triplets are semantically a dl); the email never appears in the links rota anywhere in the funnel, PDF included (verified by PDF stream extraction).
- **Casey (mobile):** densest wash behind the one block that must be read; copying the email needs long-press selection of a non-link; the single link is below comfortable tap height.

## Minor Observations

- Meta description "About Abby Cromwell." is placeholder-grade; spend the SERP line.
- "View resume" should be "View the resume" to parallel "View the work".
- h1 inherits weight 400 implicitly; resume sets its weight explicitly. Fragile symmetry.
- overflow:hidden on .about-page guards nothing.
- The two copy columns present grammatically chained sentences ("Abby is... / She is...") as visually parallel columns; either each sentence stands alone or the copy collapses to one prose column.
- Detector's tight-leading flag (1.2 on 24px copy) is worth a look at --leading-normal for the bio.
- About's Headline h1 next to Resume's Display cover verified intentional per the new DESIGN.md carve-out; roles read clearly.

## Questions to Consider

1. Why does the monument restate the nav? "ABBY CROMWELL" appears three times in one viewport; what breaks if the monument carried actual information instead?
2. Should Availability exist at all while its value is negative? It can only reduce conversion, and it sits at the emotional end of the page.
3. Anti-spam currently outranks contactability everywhere in the funnel (no clickable address on any page or in the PDF), and atmosphere outranks legibility exactly behind the mobile contact block. Should either value keep veto power over the page's only conversion?
