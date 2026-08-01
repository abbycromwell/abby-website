/*
  Work-page content source — each chapter fills the Table of Plates.
  Image plates: { src: <imported image>, alt: '<description>', title?, medium? }
  Clip plates:  { clip: <imported mp4 url>, alt: '<description>', title?, medium? }
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

export const chapters = [
  {
    slug: 'typography',
    no: '01',
    title: 'Typography',
    kind: 'case-study',
    href: '/case-study/',
  },
  {
    slug: 'illustration',
    no: '02',
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
    no: '03',
    title: 'Animation',
    layout: 'wide',
    plates: [
      {
        clip: rollingClip,
        alt: 'Animated short: a sphere rolls and tumbles across a colorful landscape',
        title: 'Rolling Rolling, Tumbling Along',
      },
      {
        clip: finalProjectClip,
        alt: 'Hand-drawn animated short film excerpt',
      },
      {
        clip: animationShortClip,
        alt: 'Animated line-drawn figures melting over a warm orange wash',
      },
    ],
  },
  {
    slug: 'sketch',
    no: '04',
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
