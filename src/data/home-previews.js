/*
  Homepage pod source — the three category bubbles hanging in the hero.

  All three are pinned, not shuffled. The composition was tuned against exactly
  these pieces: pod sizes, positions, and the 0.8 multiply all read differently
  against a different crop, so rotating them would ship pictures nobody approved.

  Alt text is looked up from work.js rather than restated here, so the two cannot
  drift apart. Removing a piece from work.js is a build error, by design.
*/
import { chapters } from './work.js';
import confettiProfile from '../assets/illustration/confetti-profile.webp';
import rollingClip from '../assets/animation/rolling-rolling-tumbling-along.mp4';
/* frame 0 of the clip, so the pod at rest looks the same as it did when the
   browser was preloading the file's metadata to show that frame itself */
import rollingPoster from '../assets/animation/rolling-rolling-tumbling-along-poster.png';
import songbookGlyphs from '../assets/case-study/spread-07.webp';

function plateFor(slug, asset, key) {
  const plates = chapters.find((chapter) => chapter.slug === slug)?.plates ?? [];
  const plate = plates.find((entry) => entry?.[key] === asset);
  if (!plate) {
    throw new Error(
      `home-previews: the pinned ${slug} pod is no longer in that chapter of work.js`,
    );
  }
  return plate;
}

const illustration = plateFor('illustration', confettiProfile, 'src');
const animation = plateFor('animation', rollingClip, 'clip');

export const pods = [
  {
    slug: 'illustration',
    title: 'Illustration',
    href: '/work/#illustration',
    src: illustration.src,
    alt: illustration.alt,
    sizes: '(min-width: 48rem) 18rem, 78vw',
  },
  {
    slug: 'animation',
    title: 'Animation',
    href: '/work/#animation',
    clip: animation.clip,
    poster: rollingPoster,
    alt: animation.alt,
  },
  {
    slug: 'typography',
    title: 'Typography',
    href: '/songbook/',
    src: songbookGlyphs,
    alt: 'SongBook page of monumental black Futura glyphs on a salmon ground',
    sizes: '(min-width: 48rem) 14rem, 78vw',
  },
];
