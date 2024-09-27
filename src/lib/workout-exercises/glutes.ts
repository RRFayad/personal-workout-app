import { ExerciseDictionary } from "@/types/exercise";

export const glutesExercises: ExerciseDictionary<"glutes"> = {
  hipThrust: {
    exerciseName: { pt: "elevação de quadril", en: "hip thrust" },
    mainMuscles: ["glutes"],
    auxiliarMuscles: ["hamstrings", "quads"],
    category: "compound",
    equipment: "barbell",
    execution: {
      pt: "Sente-se no chão com as costas apoiadas em um banco. Coloque uma barra sobre o seu quadril. Com os pés afastados na largura dos ombros, empurre o quadril para cima, levantando a barra até que seu corpo forme uma linha reta dos ombros aos joelhos. Desça controladamente.",
      en: "Sit on the ground with your back against a bench. Place a barbell over your hips. With feet shoulder-width apart, drive your hips upwards, lifting the bar until your body forms a straight line from shoulders to knees. Lower down in a controlled manner.",
    },
    intensity: "high",
    alternatives: [],
    measurementType: "reps",
    muscularGroupMovementVariables: {
      movementType: "hip-extension",
    },
    videoTutorialUrl: "",
    imageUrl: "",
  },
  stepUp: {
    exerciseName: { pt: "subida no banco", en: "step-up" },
    mainMuscles: ["glutes"],
    auxiliarMuscles: ["quads", "hamstrings"],
    category: "compound",
    equipment: "none",
    execution: {
      pt: "De pé em frente a um banco, coloque um pé completamente sobre ele. Empurre através do seu pé no banco para elevar seu corpo, subindo no banco. Volte à posição inicial e repita, alternando as pernas.",
      en: "Standing in front of a bench, place one foot fully on it. Push through your foot on the bench to raise your body, stepping up onto the bench. Return to the starting position and repeat, alternating legs.",
    },
    intensity: "moderate",
    alternatives: [],
    measurementType: "reps",
    muscularGroupMovementVariables: {
      movementType: "hip-extension",
    },
    videoTutorialUrl: "",
    imageUrl: "",
  },
  cableHipAbduction: {
    exerciseName: {
      pt: "abdução de quadril no cabo",
      en: "cable hip abduction",
    },
    mainMuscles: ["glutes"],
    auxiliarMuscles: [],
    category: "isolated",
    equipment: "cables",
    execution: {
      pt: "Prenda o cabo no tornozelo, fique de lado para a máquina e mova a perna afastada do corpo, mantendo-a reta. Retorne controladamente à posição inicial.",
      en: "Attach the cable to your ankle, stand sideways to the machine, and move your leg away from your body, keeping it straight. Return to the starting position in a controlled manner.",
    },
    intensity: "low",
    alternatives: [],
    measurementType: "reps",
    muscularGroupMovementVariables: {
      movementType: "abduction",
    },
    videoTutorialUrl: "",
    imageUrl: "",
  },
};
