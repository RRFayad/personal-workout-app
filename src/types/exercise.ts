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
  chest: {
    movementType: ["press", "fly"] as const,
    movementAngle: ["flat", "inclined", "declined"] as const,
  },
  shoulders: {
    movementType: ["press", "raise", "pull"] as const,
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
  cables: { en: "cables", pt: "cabos" },
  dumbbells: { en: "dumbbells", pt: "halteres" },
  pullUpBar: { en: "pull up bar", pt: "barra fixa" },
  machine: { en: "machine", pt: "máquina" },
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

// Handle non-applicable movement angle
type MuscularGroupMovementVariables<T extends MuscularGroupKey> =
  (typeof movementVariables)[T]["movementAngle"] extends ["non-applicable"]
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
  muscularGroupMovementVariables: MuscularGroupMovementVariables<T>;
};

export type ExerciseDictionary<T extends MuscularGroupKey> = Record<
  string,
  ExerciseForGroup<T>
>;
