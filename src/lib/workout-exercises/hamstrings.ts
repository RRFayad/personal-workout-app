import { ExerciseDictionary } from "@/types/exercise";

export const hamstringsExercises: ExerciseDictionary<"hamstrings"> = {
  deadlift: {
    exerciseName: { pt: "levantamento terra", en: "deadlift" },
    mainMuscles: ["hamstrings", "glutes"],
    auxiliarMuscles: ["lowerBack", "trapezius"],
    category: "compound",
    equipment: "barbell",
    execution: {
      pt: "De pé, com os pés afastados na largura dos ombros, incline-se para pegar a barra com as mãos um pouco mais afastadas que os joelhos. Mantenha as costas retas e levante a barra até ficar em pé, com a barra próxima às coxas. Abaixe a barra até o chão controladamente.",
      en: "Stand with feet shoulder-width apart, bend over to grip the barbell with hands just outside the knees. Keep your back straight and lift the bar up to standing position, with the bar close to your thighs. Lower the bar to the ground in a controlled manner.",
    },
    intensity: "veryHigh",
    alternatives: [],
    measurementType: "reps",
    muscularGroupMovementVariables: {
      movementType: "hip-hinge",
    },
    videoTutorialUrl: "",
    imageUrl: "",
  },
  stiffLegDeadlift: {
    exerciseName: { pt: "stiff", en: "stiff-leg deadlift" },
    mainMuscles: ["hamstrings", "glutes"],
    auxiliarMuscles: ["lowerBack"],
    category: "compound",
    equipment: "barbell",
    execution: {
      pt: "De pé, com os pés afastados na largura dos ombros, segure a barra à frente das coxas com os joelhos levemente dobrados. Incline-se para frente na cintura, mantendo as costas retas, até sentir um alongamento nos isquiotibiais. Retorne à posição inicial.",
      en: "Stand with feet shoulder-width apart, hold the barbell in front of your thighs with knees slightly bent. Bend at the waist with your back straight until you feel a stretch in your hamstrings. Return to the starting position.",
    },
    intensity: "high",
    alternatives: [],
    measurementType: "reps",
    muscularGroupMovementVariables: {
      movementType: "hip-hinge",
    },
    videoTutorialUrl: "",
    imageUrl: "",
  },
  seatedLegCurl: {
    exerciseName: { pt: "cadeira flexora", en: "seated leg curl" },
    mainMuscles: ["hamstrings"],
    auxiliarMuscles: [],
    category: "isolated",
    equipment: "machine",
    execution: {
      pt: "Sente-se na máquina com as pernas sob a almofada. Flexione as pernas em direção aos glúteos, depois estenda-as controladamente até a posição inicial.",
      en: "Sit on the machine with legs under the pad. Curl your legs towards your glutes, then extend them back to the starting position in a controlled manner.",
    },
    intensity: "low",
    alternatives: [],
    measurementType: "reps",
    muscularGroupMovementVariables: {
      movementType: "curl",
    },
    videoTutorialUrl: "",
    imageUrl: "",
  },
  lyingLegCurl: {
    exerciseName: { pt: "mesa flexora", en: "lying leg curl" },
    mainMuscles: ["hamstrings"],
    auxiliarMuscles: [],
    category: "isolated",
    equipment: "machine",
    execution: {
      pt: "Deite-se de barriga para baixo na máquina, com as pernas sob a almofada. Flexione as pernas em direção aos glúteos, depois estenda-as controladamente até a posição inicial.",
      en: "Lie face down on the machine with legs under the pad. Curl your legs towards your glutes, then extend them back to the starting position in a controlled manner.",
    },
    intensity: "low",
    alternatives: [],
    measurementType: "reps",
    muscularGroupMovementVariables: {
      movementType: "curl",
    },
    videoTutorialUrl: "",
    imageUrl: "",
  },
};
