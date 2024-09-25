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
    movementAngle: ["non-applicable"] as const,
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
  cables: { en: "cables", pt: "cabos" },
  none: { en: "none", pt: "nenhum" },
} as const;

export const measurementTypes = {
  reps: { en: "reps", pt: "repetições" },
  time: { en: "time", pt: "tempo" },
} as const;

type MuscularGroupKey = keyof typeof muscularGroups;
type MuscleKey = keyof typeof muscles;
type IntensityKey = keyof typeof intensityLevels;
type CategoryKey = keyof typeof categories;
type EquipmentKey = keyof typeof equipmentTypes;
type MeasurementTypeKey = keyof typeof measurementTypes;

export type ExerciseDictionary<T extends MuscularGroupKey> = Record<
  string,
  ExerciseForGroup<T>
>;

type MuscularGroupMovementVariables<T extends MuscularGroupKey> = {
  movementType: (typeof movementVariables)[T]["movementType"][number];
} & (typeof movementVariables)[T]["movementAngle"] extends ["non-applicable"]
  ? {}
  : { movementAngle: (typeof movementVariables)[T]["movementAngle"][number] };

// Base exercise type structure
interface BaseExercise<T extends MuscularGroupKey> {
  exerciseName: { en: string; pt: string };
  mainMuscles: MuscleKey[];
  auxiliarMuscles: MuscleKey[];
  category: CategoryKey;
  equipment: EquipmentKey;
  intensity: IntensityKey;
  execution: { en: string; pt: string };
  alternatives: (keyof ExerciseDictionary<T>)[];
  measurementType: MeasurementTypeKey;
  videoTutorialUrl: string;
  imageUrl: string;
}

// Exercise for specific muscular group
export type ExerciseForGroup<T extends MuscularGroupKey> = BaseExercise<T> & {
  muscularGroup: T;
  muscularGroupMovementVariables: MuscularGroupMovementVariables<T>;
};