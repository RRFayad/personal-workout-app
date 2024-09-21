const muscularGroups = {
  chest: { en: "chest", pt: "peito" },
  shoulders: { en: "shoulders", pt: "ombros" },
  back: { en: "back", pt: "costas" },
  biceps: { en: "biceps", pt: "bíceps" },
  triceps: { en: "triceps", pt: "tríceps" },
  absCore: { en: "abs/core", pt: "abs/core" },
  quads: { en: "quads", pt: "quadríceps" },
  hamstrings: { en: "hamstrings", pt: "isquiotibiais" },
  glutes: { en: "glutes", pt: "glúteos" },
} as const;

const muscles = {
  chest: { en: "chest", pt: "peito" },
  upperChest: { en: "upper chest", pt: "peito superior" },
  deltoids: { en: "deltoids", pt: "deltóides" },
  anteriorDeltoids: { en: "anterior deltoids", pt: "deltóides anteriores" },
  lateralDeltoids: { en: "lateral deltoids", pt: "deltóides médios" },
  rearDeltoids: { en: "rear deltoids", pt: "deltóides posteriores" },
  triceps: { en: "triceps", pt: "tríceps" },
  biceps: { en: "biceps", pt: "bíceps" },
  abs: { en: "abs", pt: "abdominais" },
  lowerAbs: { en: "lower abdominals", pt: "abdominais inferiores" },
  core: { en: "core", pt: "core" },
  lats: { en: "latissimus dorsi", pt: "latíssimo do dorso" },
  traps: { en: "trapezius", pt: "trapézio" },
  rhomboids: { en: "rhomboids", pt: "romboides" },
  quads: { en: "quads", pt: "quadríceps" },
  hamstrings: { en: "hamstrings", pt: "isquiotibiais" },
  glutes: { en: "glutes", pt: "glúteos" },
  lowerBack: { en: "lower back", pt: "lombares" },
  obliques: { en: "obliques", pt: "oblíquos" },
  brachialis: { en: "brachialis", pt: "braquial" },
  brachioradialis: { en: "brachioradialis", pt: "braquiorradial" },
  calves: { en: "calves", pt: "panturrilhas" },
} as const;

const movementVariables = {
  chest: {
    movementType: ["press", "fly"] as const,
    movementAngle: ["flat", "inclined", "declined"] as const,
  },
  shoulders: {
    movementType: ["press", "raise"] as const,
    movementAngle: ["front", "lateral", "rear"] as const,
  },
  back: {
    movementType: ["overhand", "underhand", "neutral"] as const,
    movementAngle: ["horizontal", "vertical"] as const,
  },
  triceps: {
    movementType: ["overhead", "pressdown"] as const,
  },
  biceps: {
    movementType: ["supinated", "hammer", "pronated"] as const,
    movementAngle: ["neutral", "inclined"] as const,
  },
  absCore: {
    movementType: ["crunch", "plank", "leg-raises"] as const,
  },
  quads: {
    movementType: ["squat/press", "leg-extension"] as const,
  },
  hamstrings: {
    movementType: ["hip-hinge", "curl"] as const,
  },
  glutes: {
    movementType: ["hip-extension", "abduction"] as const,
  },
} as const;

const intensityLevels = {
  veryHigh: { en: "very high", pt: "muito alta" },
  high: { en: "high", pt: "alta" },
  moderate: { en: "moderate", pt: "moderada" },
  low: { en: "low", pt: "baixa" },
} as const;

const categories = {
  compound: { en: "compound", pt: "composto" },
  isolated: { en: "isolated", pt: "isolado" },
} as const;

const equipmentTypes = {
  barbell: { en: "barbell", pt: "barra" },
  dumbbells: { en: "dumbbells", pt: "halteres" },
  machine: { en: "machine", pt: "máquina" },
  none: { en: "none", pt: "nenhum" },
} as const;

const movementTypes = {
  press: { en: "press", pt: "empurrar" },
  fly: { en: "fly", pt: "voo" },
  pull: { en: "pull", pt: "puxar" },
  raise: { en: "raise", pt: "elevação" },
} as const;

const movementAngles = {
  flat: { en: "flat", pt: "reto" },
  inclined: { en: "inclined", pt: "inclinado" },
  declined: { en: "declined", pt: "declinado" },
  horizontal: { en: "horizontal", pt: "horizontal" },
  vertical: { en: "vertical", pt: "vertical" },
} as const;

const measurementTypes = {
  reps: { en: "reps", pt: "repetições" },
  time: { en: "time", pt: "tempo" },
} as const;

type MuscularGroupKey = keyof typeof muscularGroups;
type MovementVariablesKey = keyof typeof movementVariables;
type MuscleKey = keyof typeof muscles;
type Intensity = keyof typeof intensityLevels;
type Category = keyof typeof categories;
type Equipment = keyof typeof equipmentTypes;
type MovementType = keyof typeof movementTypes;
type MovementAngle = keyof typeof movementAngles;
type MeasurementType = keyof typeof measurementTypes;

// The main Exercise type
export type Exercise = {
  exerciseName: { en: string; pt: string };
  muscularGroup: MuscularGroupKey;
  mainMuscles: MuscleKey[];
  auxiliarMuscles: MuscleKey[];
  category: Category;
  equipment: Equipment;
  muscularGroupMovementVariables: (typeof movementVariables)[MuscularGroupKey];
  intensity: Intensity;
  execution: { en: string; pt: string };
  alternatives: Exercise[];
  measurementType: MeasurementType;
  videoTutorial: string;
};
