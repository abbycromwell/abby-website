import { defineConfig } from 'astro/config';

export default defineConfig({
  devToolbar: { enabled: false },
  /* the case-study page was folded into the SongBook essay */
  redirects: {
    '/case-study/': '/songbook/',
  },
});
