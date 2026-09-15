/*
  Work-page content source — each chapter fills the Table of Plates.
  Image plates: { src: <imported image>, alt: '<description>', title?, medium? }
  Clip plates:  { clip: <imported mp4 url>, alt: '<description>', title?, medium? }
  `title` + `note` hang a label under the frame; a chapter `note` opens the
  chapter under its rule. Both are for work that needs a word of explanation.
  A null plate renders as a labeled membrane placeholder.
*/
import squidBonnetCollage from '../assets/illustration/squid-bonnet-collage.webp';
import confettiProfile from '../assets/illustration/confetti-profile.webp';
import prawnComicPage from '../assets/illustration/prawn-comic-page.webp';
import checkeredFloorPlayer from '../assets/illustration/checkered-floor-player.webp';
import matsuriPanels from '../assets/illustration/matsuri-panels.webp';
import tissueStudyPage from '../assets/illustration/tissue-study-page.webp';
import tentacleField from '../assets/sketch/tentacle-field.webp';
import coveredEyesKiss from '../assets/sketch/covered-eyes-kiss.webp';
import overpassStudies from '../assets/sketch/overpass-studies.webp';
import wingedFigureSketch from '../assets/sketch/winged-figure-sketch.webp';
import mirrorSelfie from '../assets/sketch/mirror-selfie.webp';
import rollingClip from '../assets/animation/rolling-rolling-tumbling-along.mp4';
import finalProjectClip from '../assets/animation/final-project-animation.mp4';
import animationShortClip from '../assets/animation/animation-short.mp4';
import songAnimationClip from '../assets/animation/a10.mp4';
/* Timefire's own brand files, copied from its press kit at timefire.ai/brand */
import timefireMark from '../assets/brand/timefire-mark-night.svg';
import timefireLockup from '../assets/brand/timefire-lockup-night.svg';
import timefireAppIcon from '../assets/brand/timefire-app-icon.svg';
import timefireShareCard from '../assets/brand/timefire-share-card.png';

export const chapters = [
  {
    slug: 'illustration',
    no: '01',
    title: 'Illustration',
    layout: 'trio',
    plates: [
      {
        src: confettiProfile,
        alt: 'Purple-haired figure in glasses facing a sketched face erupting into colorful confetti shapes',
      },
      {
        src: squidBonnetCollage,
        alt: 'Two characters in frilled bonnets and polka dots flanking a photorealistic squid and floating eggplant fragments under an orange sky',
      },
      {
        src: tissueStudyPage,
        alt: 'Layered page with a bandaged forearm opened to a fibrous cross-section and hands holding a bowed figure beneath coral-pink tissue',
      },
      {
        src: matsuriPanels,
        alt: 'Festival panels: children with popsicles in a matsuri crowd, dark red splatter, and a tearful figure shading their eyes',
      },
      {
        src: checkeredFloorPlayer,
        alt: 'Figure in a track jacket lying beside a fallen mic stand on a checkered floor, framed by a red music-player interface',
      },
      {
        src: prawnComicPage,
        alt: 'Comic page moving from a jungle stream over a blood-marked log, past a row of red prawn glyphs, to a bespectacled figure at a computer',
      },
    ],
  },
  {
    slug: 'animation',
    no: '02',
    title: 'Animation',
    layout: 'wide',
    plates: [
      {
        clip: rollingClip,
        alt: 'Animated short: a sphere rolls and tumbles across a colorful landscape',
        title: 'Rolling Rolling, Tumbling Along',
        ratio: '1280 / 550',
      },
      {
        clip: finalProjectClip,
        alt: 'Hand-drawn animated short film excerpt',
        ratio: '640 / 480',
      },
      {
        clip: animationShortClip,
        alt: 'Animated line-drawn figures melting over a warm orange wash',
        ratio: '640 / 428',
      },
      {
        clip: songAnimationClip,
        alt: 'Kinetic type animation: Japanese lyrics flashing in white over live concert footage of a band, the frame breaking up into scattered debris',
        title: 'SongBook — song animation',
        ratio: '1152 / 648',
      },
    ],
  },
  {
    slug: 'typography',
    no: '03',
    title: 'Typography',
    kind: 'case-study',
    href: '/songbook/',
    /* the book's own subject, set in the book's own manner */
    display: 'M@HφU☆少女。。',
    premise: 'Typeface for the song.',
  },
  {
    slug: 'brand',
    no: '04',
    title: 'Brand design',
    /* a ruled sheet, twelve columns; `span` is each cell's width on it */
    layout: 'sheet',
    /* the thinking behind the kit, in plain words; the full kit lives on the client's site */
    note: 'Timefire publishes AI stock forecasts, locks them in before the market moves, and grades them in public. The mark is a sundial, redrawn: a turquoise gnomon and the shadow it casts, because a forecast is a shadow thrown ahead of the fact and checked against it later. Three colors, paper, ink and one turquoise, in a day and a night version.',
    href: 'https://timefire.ai/brand/',
    cta: 'The press kit, on timefire.ai',
    /*
      The four how-it-works drawings; TimefireMotion.astro carries them and
      their motion. `run` is each story's length in ms, measured off its last
      keyframe; the loop rests after it. `palette` is Timefire's night
      edition, the colours the drawings are inked in, passed through as content.
    */
    motion: [
      { art: 'seal', run: 9900 },
      { art: 'calendar', run: 4200 },
      { art: 'book', run: 3200 },
      { art: 'prove', run: 3600 },
    ],
    motionNote: 'A set of illustrative animations explaining how Timefire verification works, built with Claude.',
    palette: {
      ink: '#EEEEF0',
      muted: '#B3B5BE',
      faint: '#70727D',
      rule: '#333438',
      ruleStrong: '#414248',
      panel: '#252628',
      accent: '#1CA3BF',
      accentText: '#58CBE7',
      verified: '#3DD68C',
      failed: '#FF9592',
    },
    /* the lockup and the share card take eight columns each, the mark and the icon four */
    plates: [
      {
        src: timefireLockup,
        alt: 'Timefire lockup: the mark beside TIMEFIRE in heavy grotesk capitals',
        title: 'Lockup',
        span: 8,
        note: 'The mark next to the name. Use this where people need to read the name, and the mark on its own where they already know it.',
        ratio: '289 / 64',
      },
      {
        src: timefireMark,
        alt: 'Timefire mark: a turquoise gnomon and the paper-white shadow it casts, turning against each other',
        title: 'Mark',
        span: 4,
        note: 'A sundial’s gnomon, the part that casts the shadow, and the shadow it throws.',
        ratio: '1 / 1',
      },
      {
        src: timefireAppIcon,
        alt: 'Timefire app icon: the mark in white and charcoal on a turquoise tile',
        title: 'App icon',
        span: 4,
        note: 'A turquoise tile that runs edge to edge. The phone rounds the corners itself.',
        ratio: '1 / 1',
      },
      {
        src: timefireShareCard,
        alt: 'Timefire share card: the lockup above “AI forecasts, sealed and graded” on white, with a turquoise rule along the foot',
        title: 'Share card',
        span: 8,
        note: 'The card that shows up when someone shares a Timefire link. Every page has its own.',
        ratio: '1200 / 630',
      },
    ],
  },
  {
    slug: 'sketch',
    no: '05',
    title: 'Sketch',
    layout: 'dense',
    plates: [
      {
        src: wingedFigureSketch,
        alt: 'Pencil sketch of a winged figure in a frilled headdress, seated with one arm outstretched into a feathered wing',
      },
      {
        src: tentacleField,
        alt: 'Child with a black bob in a yellow raglan shirt holding a curled red tentacle in tall grass',
      },
      {
        src: mirrorSelfie,
        alt: 'Mirror selfie in a steamed bathroom, a pink-haired figure in glasses giving a peace sign above the sink',
      },
      {
        src: overpassStudies,
        alt: 'Red gestural figure studies layered over a painted overpass with a blue parking sign and dark rippling water',
      },
      {
        src: coveredEyesKiss,
        alt: 'Black-and-white scene of two figures about to kiss in a dim room, one hand covering the other’s eyes',
      },
    ],
  },
];
