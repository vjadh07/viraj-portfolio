export type TechKey =
  | "python"
  | "fastapi"
  | "nextjs"
  | "typescript"
  | "nodejs"
  | "sqlite"
  | "gemini"
  | "c"
  | "cplusplus"
  | "linux";

export type CodeProject = {
  title: string;
  description: string;
  stack: string;
  visual: "cue" | "saga" | "kernel";
  technologies: TechKey[];
  linkLabel?: string;
  projectUrl?: string;
  availability?: string;
};

export type PhotoSlot = {
  title: string;
  note: string;
};

export type GitHubExperiment = {
  title: string;
  description: string;
  stack: string;
  url: string;
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
    visual: "cue",
    technologies: ["python", "fastapi", "nextjs", "typescript"],
    linkLabel: "Explore Cue",
    projectUrl: "https://github.com/vjadh07/cue",
  },
  {
    title: "Saga",
    description:
      "An adversarial evidence-auditing agent for AI-written reports. Saga maps individual claims, researches support and contradictions, validates citations and source quality, checks dates and arithmetic, then returns corrected prose with a verifiable Trust Passport.",
    stack: "TypeScript · Node.js · SQLite · Gemini",
    visual: "saga",
    technologies: ["typescript", "nodejs", "sqlite", "gemini"],
    linkLabel: "Try Saga",
    projectUrl: "https://saga-omega-seven.vercel.app/demo",
  },
  {
    title: "Operating System Kernel",
    description:
      "A monolithic x86_64 kernel with virtual memory management, ELF executable loading, paging, multicore support, a Round-Robin scheduler, and system-call interfaces for user-space programs.",
    stack: "C · C++ · Linux · x86_64 Assembly",
    visual: "kernel",
    technologies: ["c", "cplusplus", "linux"],
    availability: "Systems coursework · source private",
  },
];

export const techGroups = [
  {
    title: "Languages",
    items: ["Python", "TypeScript", "C / C++"],
  },
  {
    title: "Building with",
    items: ["FastAPI + Next.js", "Node.js + SQLite", "Linux + x86_64"],
  },
  {
    title: "Interested in",
    items: ["Reliable AI systems", "Systems software", "Human-centered products"],
  },
];

export const githubProfileUrl = "https://github.com/vjadh07";

export const githubExperiments: GitHubExperiment[] = [
  {
    title: "Not a Robot",
    description: "A hand-tracked CAPTCHA that turns your own face into an in-air puzzle.",
    stack: "JavaScript · MediaPipe",
    url: "https://github.com/vjadh07/not-a-robot",
  },
  {
    title: "Glass",
    description: "A webcam mirror that fogs with your breath and lets you write with a fingertip.",
    stack: "Canvas · Web Audio",
    url: "https://github.com/vjadh07/glass",
  },
  {
    title: "Interactive 3D Portfolio",
    description: "An earlier portfolio experiment built as an explorable Three.js scene.",
    stack: "TypeScript · Three.js",
    url: "https://github.com/vjadh07/interactive-3d-portfolio",
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
