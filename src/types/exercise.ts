export const muscularGroups = {
  absCore: { en: "abs/core", pt: "abs/core" },
  back: { en: "back", pt: "costas" },
  biceps: { en: "biceps", pt: "bíceps" },
  calves: { en: "calves", pt: "panturrilhas" },
  chest: { en: "chest", pt: "peito" },
  glutes: { en: "glutes", pt: "glúteos" },
  hamstrings: { en: "hamstrings", pt: "isquiotibiais" },
  quads: { en: "quads", pt: "quadríceps" },
  shoulders: { en: "shoulders", pt: "ombros" },
  triceps: { en: "triceps", pt: "tríceps" },
} as const;

export const muscles = {
  abs: { en: "abs", pt: "abdominais" },
  anteriorDeltoids: { en: "anterior deltoids", pt: "deltóides anteriores" },
  biceps: { en: "biceps", pt: "bíceps" },
  brachialis: { en: "brachialis", pt: "braquial" },
  brachioradialis: { en: "brachioradialis", pt: "braquiorradial" },
  calves: { en: "calves", pt: "panturrilhas" },
  chest: { en: "chest", pt: "peito" },
  core: { en: "core", pt: "core" },
  deltoids: { en: "deltoids", pt: "deltóides" },
  glutes: { en: "glutes", pt: "glúteos" },
  hamstrings: { en: "hamstrings", pt: "isquiotibiais" },
  lateralDeltoids: { en: "lateral deltoids", pt: "deltóides médios" },
  lats: { en: "latissimus dorsi", pt: "latíssimo do dorso" },
  lowerAbs: { en: "lower abdominals", pt: "abdominais inferiores" },
  lowerBack: { en: "lower back", pt: "lombares" },
  obliques: { en: "obliques", pt: "oblíquos" },
  quads: { en: "quads", pt: "quadríceps" },
  rearDeltoids: { en: "rear deltoids", pt: "deltóides posteriores" },
  rhomboids: { en: "rhomboids", pt: "romboides" },
  trapezius: { en: "trapezius", pt: "trapézio" },
  triceps: { en: "triceps", pt: "tríceps" },
  upperChest: { en: "upper chest", pt: "peito superior" },
} as const;

export const movementVariables = {
  absCore: {
    movementType: ["crunch", "plank", "leg-raises"] as const,
    movementAngle: ["non-applicable"] as const,
  },
  back: {
    movementType: ["overhand", "underhand", "neutral"] as const,
    movementAngle: ["horizontal", "vertical"] as const,
  },
  biceps: {
    movementType: ["supinated", "hammer", "pronated"] as const,
    movementAngle: ["neutral", "inclined"] as const,
  },
  calves: {
    movementType: ["press/raise"] as const,
    movementAngle: ["non-applicable"] as const,
  },
  chest: {
    movementType: ["press", "fly"] as const,
    movementAngle: ["flat", "inclined", "declined"] as const,
  },
  glutes: {
    movementType: ["hip-extension", "abduction"] as const,
    movementAngle: ["non-applicable"] as const,
  },
  hamstrings: {
    movementType: ["hip-hinge", "curl"] as const,
    movementAngle: ["non-applicable"] as const,
  },
  quads: {
    movementType: ["squat/press", "leg-extension"] as const,
    movementAngle: ["non-applicable"] as const,
  },
  shoulders: {
    movementType: ["press", "raise", "pull"] as const,
    movementAngle: ["front", "lateral", "rear"] as const,
  },
  triceps: {
    movementType: ["overhead", "pressdown"] as const,
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
  abWheel: { en: "ab wheel", pt: "roda de abdominal" },
  barbell: { en: "barbell", pt: "barra" },
  cables: { en: "cables", pt: "cabos" },
  captainsChair: { en: "captain's chair", pt: "cadeira de abdominal" },
  dumbbells: { en: "dumbbells", pt: "halteres" },
  ezBar: { en: "EZ bar", pt: "barra EZ" },
  parallelBars: { en: "parallel bars", pt: "barras paralelas" },
  pullUpBar: { en: "pull up bar", pt: "barra fixa" },
  machine: { en: "machine", pt: "máquina" },
  none: { en: "none", pt: "nenhum" },
} as const;

export const measurementTypes = {
  reps: { en: "reps", pt: "repetições" },
  time: { en: "time", pt: "tempo" },
} as const;

export type MuscularGroupKey = keyof typeof muscularGroups;
export type MuscleKey = keyof typeof muscles;
export type IntensityKey = keyof typeof intensityLevels;
export type CategoryKey = keyof typeof categories;
export type EquipmentKey = keyof typeof equipmentTypes;
export type MeasurementTypeKey = keyof typeof measurementTypes;

// Handle non-applicable movement angle
type MuscularGroupMovementVariables<T extends MuscularGroupKey> =
  (typeof movementVariables)[T]["movementAngle"][number] extends "non-applicable"
    ? { movementType: (typeof movementVariables)[T]["movementType"][number] }
    : {
        movementType: (typeof movementVariables)[T]["movementType"][number];
        movementAngle: (typeof movementVariables)[T]["movementAngle"][number];
      };

// Base exercise type structure
interface BaseExercise<T extends MuscularGroupKey> {
  exerciseName: { en: string; pt: string };
  mainMuscles: MuscleKey[];
  auxiliarMuscles: MuscleKey[];
  category: CategoryKey;
  equipment: EquipmentKey;
  intensity: IntensityKey;
  execution: { en: string; pt: string };
  alternatives?: (keyof ExerciseDictionary<T>)[];
  measurementType: MeasurementTypeKey;
  videoTutorialUrl: string;
  imageUrl: string;
}

// Exercise for specific muscular group
export type ExerciseForGroup<T extends MuscularGroupKey> = BaseExercise<T> & {
  movementVariables: MuscularGroupMovementVariables<T>;
};

export type ExerciseDictionary<T extends MuscularGroupKey> = Record<
  string,
  ExerciseForGroup<T>
>;
