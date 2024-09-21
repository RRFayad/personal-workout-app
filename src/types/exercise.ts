export const muscularGroups = {
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

export const muscles = {
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

export const movementVariables = {
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
    movementAngle: [""] as const,
  },
  biceps: {
    movementType: ["supinated", "hammer", "pronated"] as const,
    movementAngle: ["neutral", "inclined"] as const,
  },
  absCore: {
    movementType: ["crunch", "plank", "leg-raises"] as const,
    movementAngle: ["non-applicable"] as const,
  },
  quads: {
    movementType: ["squat/press", "leg-extension"] as const,
    movementAngle: ["non-applicable"] as const,
  },
  hamstrings: {
    movementType: ["hip-hinge", "curl"] as const,
    movementAngle: ["non-applicable"] as const,
  },
  glutes: {
    movementType: ["hip-extension", "abduction"] as const,
    movementAngle: ["non-applicable"] as const,
  },
} as const;

export const intensityLevels = {
  veryHigh: { en: "very high", pt: "muito alta" },
  high: { en: "high", pt: "alta" },
  moderate: { en: "moderate", pt: "moderada" },
  low: { en: "low", pt: "baixa" },
} as const;

export const categories = {
  compound: { en: "compound", pt: "composto" },
  isolated: { en: "isolated", pt: "isolado" },
} as const;

export const equipmentTypes = {
  barbell: { en: "barbell", pt: "barra" },
  dumbbells: { en: "dumbbells", pt: "halteres" },
  machine: { en: "machine", pt: "máquina" },
  none: { en: "none", pt: "nenhum" },
} as const;

export const movementTypes = {
  press: { en: "press", pt: "empurrar" },
  fly: { en: "fly", pt: "voo" },
  pull: { en: "pull", pt: "puxar" },
  raise: { en: "raise", pt: "elevação" },
} as const;

export const movementAngles = {
  flat: { en: "flat", pt: "reto" },
  inclined: { en: "inclined", pt: "inclinado" },
  declined: { en: "declined", pt: "declinado" },
  horizontal: { en: "horizontal", pt: "horizontal" },
  vertical: { en: "vertical", pt: "vertical" },
} as const;

export const measurementTypes = {
  reps: { en: "reps", pt: "repetições" },
  time: { en: "time", pt: "tempo" },
} as const;

type MuscularGroupKey = keyof typeof muscularGroups;
type MuscleKey = keyof typeof muscles;
type MovementVariableKey = keyof typeof movementVariables;
type IntensityKey = keyof typeof intensityLevels;
type CategoryKey = keyof typeof categories;
type EquipmentKey = keyof typeof equipmentTypes;
type MovementTypeKey = keyof typeof movementTypes;
type MovementAngleKey = keyof typeof movementAngles;
type MeasurementTypeKey = keyof typeof measurementTypes;

export type Exercise =
  | ExerciseForGroup<"chest">
  | ExerciseForGroup<"shoulders">
  | ExerciseForGroup<"back">
  | ExerciseForGroup<"biceps">
  | ExerciseForGroup<"triceps">
  | ExerciseForGroup<"absCore">
  | ExerciseForGroup<"quads">
  | ExerciseForGroup<"hamstrings">
  | ExerciseForGroup<"glutes">;

// Base exercise type structure
interface BaseExercise {
  exerciseName: { en: string; pt: string };
  mainMuscles: MuscleKey[];
  auxiliarMuscles: MuscleKey[];
  category: CategoryKey;
  equipment: EquipmentKey;
  intensity: IntensityKey;
  execution: { en: string; pt: string };
  alternatives: Exercise[];
  measurementType: MeasurementTypeKey;
  videoTutorialUrl: string;
  gifUrl: string;
}

// Exercise for specific muscular group
type ExerciseForGroup<T extends MuscularGroupKey> = BaseExercise & {
  muscularGroup: T;
  muscularGroupMovementVariables: {
    movementType: (typeof movementVariables)[T]["movementType"][number];
    movementAngle: (typeof movementVariables)[T]["movementAngle"][number];
  };
};

// const barbellBenchPress: Exercise = {
//   exerciseName: { en: "bench press", pt: "supino reto" },
//   muscularGroup: "chest",
//   mainMuscles: ["chest"],
//   auxiliarMuscles: ["deltoids", "triceps"],
//   category: "compound",
//   equipment: "barbell",
//   muscularGroupMovementVariables: {
//     movementType: "press",
//     movementAngle: "flat",
//   },
//   execution: {
//     pt: "Deite-se em um banco segurando uma barra no suporte acima de você com uma pegada mais larga que os ombros, em pronação. Levante a barra do suporte e posicione-a acima do seu peito com os braços totalmente estendidos. Abaixe a barra diretamente para baixo, faça uma pausa e, em seguida, pressione a barra de volta à posição inicial.",
//     en: "Lie back on a bench holding a barbell in the rack above you with a shoulder-width, overhand grip. Lift the bar off the rack and position it above your chest with arms fully extended. Lower the bar straight down, pause, and then press the bar back to the starting position.",
//   },
//   intensity: "high",
//   alternatives: [],
//   measurementType: "reps",
//   videoTutorialUrl: "",
//   gifUrl: "",
// };
