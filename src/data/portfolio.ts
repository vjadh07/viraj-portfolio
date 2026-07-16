export type CodeProject = {
  title: string;
  description: string;
  stack: string;
  linkLabel: string;
  repositoryUrl: string;
};

export type PhotoSlot = {
  title: string;
  note: string;
};

export const profile = {
  name: "Viraj Jadhav",
  codeTitle: "Computer science, shaped with curiosity",
  codeIntro:
    "I build useful software, explore unfamiliar systems, and care deeply about how technology feels to use.",
  clothingIntro:
    "Clothing is another kind of interface: proportion, material, movement, and identity working together.",
  lifeIntro:
    "Away from the screen, I collect photographs, songs, films, and small details worth remembering.",
  email: "hello@virajjadhav.com",
};

export const codeProjects: CodeProject[] = [
  {
    title: "Cue",
    description:
      "A direction-first voice studio that turns plain-English notes into expressive, line-by-line performances. I built model and voice fallbacks, guarded settings, content-addressed audio caching, retakes, DSP feedback, and a private local voice-cloning path.",
    stack: "Python · FastAPI · Next.js · TypeScript",
    linkLabel: "Explore Cue",
    repositoryUrl: "https://github.com/vjadh07/cue",
  },
  {
    title: "Airlock",
    description:
      "A guardian agent that statically inspects npm packages before installation and returns an ALLOW, FLAG, or BLOCK verdict. The model guides the investigation and explains the evidence; deterministic rules make the final call.",
    stack: "Python · FastAPI · Electron · MCP",
    linkLabel: "Inspect Airlock",
    repositoryUrl: "https://github.com/vjadh07/airlock",
  },
  {
    title: "My Digital Postcard",
    description:
      "A dependency-free browser camera that turns a photo into a film-graded postage stamp. Its WebGL2 pipeline applies real 3D LUTs, halation, bloom, grain, and a custom stamp compositor before exporting the finished PNG.",
    stack: "JavaScript · WebGL2 · Canvas · 3D LUTs",
    linkLabel: "Open the film lab",
    repositoryUrl: "https://github.com/vjadh07/my-digital-postcard",
  },
];

export const techGroups = [
  {
    title: "Languages",
    items: ["Python", "TypeScript", "JavaScript"],
  },
  {
    title: "Building with",
    items: ["FastAPI + Next.js", "WebGL + Canvas", "Local and cloud AI"],
  },
  {
    title: "Interested in",
    items: ["Reliable AI systems", "Creative tools", "Human-centered products"],
  },
];

export const stylePrinciples = [
  {
    title: "Shape before trend",
    body: "Silhouette sets the mood before color, branding, or detail enters the picture.",
  },
  {
    title: "Texture earns attention",
    body: "Material makes simple pieces feel specific, lived-in, and worth looking at twice.",
  },
  {
    title: "Comfort changes posture",
    body: "The best clothing changes how you move without making you feel like someone else.",
  },
];

export const clothingSlots: PhotoSlot[] = [
  {
    title: "Signature look",
    note: "Add a full outfit photo and explain the proportions you like.",
  },
  {
    title: "Design or sketch",
    note: "Add a drawing, custom piece, alteration, or work-in-progress.",
  },
  {
    title: "Detail study",
    note: "Add a close crop of a fabric, seam, accessory, or favorite detail.",
  },
];

export const personalPhotos: PhotoSlot[] = [
  {
    title: "A place you love",
    note: "Add a landscape, neighborhood, trip, or ordinary view.",
  },
  {
    title: "A good day",
    note: "Add a candid photograph with people, movement, or a memory.",
  },
  {
    title: "A small detail",
    note: "Add an object, texture, meal, poster, or moment you noticed.",
  },
];

export const songs = [
  "Add a song on repeat",
  "Add an all-time favorite",
  "Add a recent discovery",
];

export const movies = [
  "Add a film you revisit",
  "Add a visual favorite",
  "Add a comfort watch",
];
