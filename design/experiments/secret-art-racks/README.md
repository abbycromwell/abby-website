# Secret Art Racks prototype

This folder preserves the interactive Secret Art Racks concept for later consideration. It is a standalone design experiment and is not imported by the production Astro site.

The prototype includes:

- an anchored vertical category rack;
- stacked work cards with visible previews behind the active card;
- a dealt-card return motion when moving through a category;
- a viewport-bound composition for the hero artwork and rack.

Media is referenced from the canonical files in `src/assets` so the repository does not carry a second 29 MB copy of the same artwork.

## View locally

From the repository root, run:

```sh
python3 -m http.server 49167 --bind 127.0.0.1
```

Then open:

```text
http://127.0.0.1:49167/design/experiments/secret-art-racks/
```

## Verify the interaction contract

```sh
node --test design/experiments/secret-art-racks/interaction-contract.test.mjs
```
