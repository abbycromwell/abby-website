import { defineConfig } from 'astro/config';

export default defineConfig({
  devToolbar: { enabled: false },
  /*
    Every page's stylesheet goes inline. Astro's default only inlines chunks
    under 4kB, which left the homepage waiting on two <link> stylesheets before
    it could paint — 458ms of render-blocking on a throttled phone. Six static
    pages of a few kB each are cheaper delivered with the document than fetched;
    the cross-page cache hit this gives up is worth less than the first paint.
  */
  build: { inlineStylesheets: 'always' },
  /* the case-study page was folded into the SongBook essay */
  redirects: {
    '/case-study/': '/songbook/',
  },
});
