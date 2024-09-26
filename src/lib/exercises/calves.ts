import { ExerciseDictionary } from "@/types/exercise";

export const calvesExercises: ExerciseDictionary<"calves"> = {
  seatedCalfRaise: {
    exerciseName: {
      pt: "elevação de panturrilha sentado",
      en: "seated calf raise",
    },
    mainMuscles: ["calves"],
    auxiliarMuscles: [],
    category: "isolated",
    equipment: "machine",
    execution: {
      pt: "Sente-se na máquina com as coxas sob a almofada e os pés na plataforma. Levante os calcanhares o máximo possível, depois abaixe-os controladamente até a posição inicial.",
      en: "Sit on the machine with your thighs under the pad and feet on the platform. Raise your heels as high as possible, then lower them back down to the starting position in a controlled manner.",
    },
    intensity: "low",
    alternatives: [],
    measurementType: "reps",
    muscularGroupMovementVariables: {
      movementType: "press/raise",
    },
    videoTutorialUrl: "",
    imageUrl: "",
  },
  legPressCalfRaise: {
    exerciseName: {
      pt: "elevação de panturrilha na prensa de pernas",
      en: "leg press calf raise",
    },
    mainMuscles: ["calves"],
    auxiliarMuscles: [],
    category: "isolated",
    equipment: "machine",
    execution: {
      pt: "Posicione-se na máquina de prensa de pernas com as bolas dos pés na borda inferior da plataforma. Estenda as pernas e levante os calcanhares o máximo possível, depois abaixe-os controladamente até a posição inicial.",
      en: "Position yourself in the leg press machine with the balls of your feet on the lower edge of the platform. Extend your legs and raise your heels as high as possible, then lower them back down to the starting position in a controlled manner.",
    },
    intensity: "low",
    alternatives: [],
    measurementType: "reps",
    muscularGroupMovementVariables: {
      movementType: "press/raise",
    },
    videoTutorialUrl: "",
    imageUrl: "",
  },
};
