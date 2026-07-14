export type CodeProject = {
  title: string;
  description: string;
  stack: string;
  linkLabel: string;
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

// Replace these structured placeholders with Viraj's real projects.
export const codeProjects: CodeProject[] = [
  {
    title: "Your strongest build",
    description:
      "Add the problem you solved, the choices you made, and what became better because of the work.",
    stack: "Add your stack",
    linkLabel: "Add case study",
  },
  {
    title: "A systems project",
    description:
      "Use this space for coursework, infrastructure, research, or a technically demanding collaboration.",
    stack: "Add tools and languages",
    linkLabel: "Add repository",
  },
  {
    title: "A playful experiment",
    description:
      "Show the project that best connects your engineering practice to your visual or personal interests.",
    stack: "Add the interesting part",
    linkLabel: "Add live demo",
  },
];

export const techGroups = [
  {
    title: "Languages",
    items: ["Add language", "Add language", "Add language"],
  },
  {
    title: "Building with",
    items: ["Add framework", "Add platform", "Add database"],
  },
  {
    title: "Interested in",
    items: ["Software systems", "Creative tools", "Human-centered products"],
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

