import { ExerciseDictionary } from "@/types/exercise";
import abWheelRolloutImg from "@/../public/images/exercises/core-and-abs/Ab-Wheel-Rollout.gif";
import captainsChairLegRaiseImg from "@/../public/images/exercises/core-and-abs/Captains-Chair-Leg-Raise.gif";
import crunchImg from "@/../public/images/exercises/core-and-abs/Crunch.gif";
import plankImg from "@/../public/images/exercises/core-and-abs/plank.gif";
import standingCableCrunchImg from "@/../public/images/exercises/core-and-abs/Standing-Cable-Crunch.gif";
import weightedSitupsImg from "@/../public/images/exercises/core-and-abs/weightedsitups.gif";

export const absCoreExercises: ExerciseDictionary<"absCore"> = {
  plank: {
    exerciseName: { pt: "prancha", en: "plank" },
    mainMuscles: ["abs"],
    auxiliarMuscles: ["lowerBack", "deltoids"],
    category: "isolated",
    equipment: "none",
    execution: {
      pt: "Comece apoiando-se no chão com os cotovelos e as pontas dos pés, mantendo o corpo reto e firme. Mantenha essa posição, concentrando-se em manter a forma correta.",
      en: "Begin by supporting yourself on the floor with your elbows and toes, keeping your body straight and tight. Hold this position, focusing on maintaining proper form.",
    },
    intensity: "low",
    alternatives: [],
    measurementType: "time",
    movementVariables: {
      movementType: "plank",
    },
    videoTutorialUrl: "",
    imageUrl: plankImg,
  },
  captainsChairLegRaise: {
    exerciseName: {
      pt: "elevação de pernas na cadeira capitão",
      en: "captain's chair leg raise",
    },
    mainMuscles: ["lowerAbs"],
    auxiliarMuscles: [],
    category: "isolated",
    equipment: "captainsChair",
    execution: {
      pt: "Com os antebraços apoiados na cadeira capitão, deixe seu corpo livre no ar e as pernas estendidas para baixo. Eleve as pernas até que estejam em paralelo com o chão e, então, abaixe-as controladamente.",
      en: "With your forearms supported on the captain's chair, let your body hang freely with your legs extended downwards. Raise your legs until they are parallel to the floor, then lower them in a controlled manner.",
    },
    intensity: "low",
    alternatives: [],
    measurementType: "reps",
    movementVariables: {
      movementType: "leg-raises",
    },
    videoTutorialUrl: "",
    imageUrl: captainsChairLegRaiseImg,
  },
  crunch: {
    exerciseName: { pt: "abdominal", en: "crunch" },
    mainMuscles: ["abs"],
    auxiliarMuscles: [],
    category: "isolated",
    equipment: "none",
    execution: {
      pt: "Deite-se de costas com os joelhos dobrados e os pés apoiados no chão. Coloque as mãos atrás da cabeça e curve o tronco em direção aos joelhos, elevando os ombros do chão. Retorne à posição inicial controladamente.",
      en: "Lie on your back with your knees bent and feet flat on the ground. Place your hands behind your head and curl your torso towards your knees, lifting your shoulders off the ground. Return to the starting position in a controlled manner.",
    },
    intensity: "low",
    alternatives: [],
    measurementType: "reps",
    movementVariables: {
      movementType: "crunch",
    },
    videoTutorialUrl: "",
    imageUrl: crunchImg,
  },
  cableCrunch: {
    exerciseName: { pt: "abdominal no cabo", en: "cable crunch" },
    mainMuscles: ["abs"],
    auxiliarMuscles: [],
    category: "isolated",
    equipment: "cables",
    execution: {
      pt: "Ajoelhe-se de frente para a máquina de cabo com uma barra ou corda anexada acima. Segure a barra ou corda com ambas as mãos na altura da cabeça. Curve o corpo para baixo, direcionando o rosto em direção aos joelhos, mantendo os quadris estáveis. Retorne à posição inicial controladamente.",
      en: "Kneel facing the cable machine with a bar or rope attachment above. Hold the bar or rope with both hands at head height. Curl your body downwards, directing your face towards your knees, keeping your hips stable. Return to the starting position in a controlled manner.",
    },
    intensity: "low",
    alternatives: [],
    measurementType: "reps",
    movementVariables: {
      movementType: "crunch",
    },
    videoTutorialUrl: "",
    imageUrl: standingCableCrunchImg,
  },
  weightedSitUp: {
    exerciseName: { pt: "abdominal com peso", en: "weighted sit-up" },
    mainMuscles: ["abs"],
    auxiliarMuscles: [],
    category: "isolated",
    equipment: "none",
    execution: {
      pt: "Deite-se de costas com os joelhos dobrados e os pés apoiados no chão. Segure um peso contra o peito ou acima da cabeça. Faça uma flexão do tronco, levando o tronco em direção aos joelhos. Retorne à posição inicial controladamente.",
      en: "Lie on your back with your knees bent and feet flat on the ground. Hold a weight against your chest or above your head. Perform a trunk flexion, moving your torso towards your knees. Return to the starting position in a controlled manner.",
    },
    intensity: "low",
    alternatives: [],
    measurementType: "reps",
    movementVariables: {
      movementType: "crunch",
    },
    videoTutorialUrl: "",
    imageUrl: weightedSitupsImg,
  },
  abdominalRollout: {
    exerciseName: { pt: "abdominal com roda", en: "abdominal rollout" },
    mainMuscles: ["abs"],
    auxiliarMuscles: ["lowerBack", "obliques"],
    category: "isolated",
    equipment: "abWheel",
    execution: {
      pt: "Ajoelhe-se no chão com a roda de abdominal à sua frente. Segure a roda com ambas as mãos, braços estendidos. Role a roda para a frente, estendendo seu corpo o máximo possível sem tocar o chão com seu corpo. Use seus abdominais para puxar a roda de volta à posição inicial.",
      en: "Kneel on the floor with the ab wheel in front of you. Hold the wheel with both hands, arms extended. Roll the wheel forward, extending your body as far as possible without letting your body touch the ground. Use your abdominals to pull the wheel back to the starting position.",
    },
    intensity: "low",
    alternatives: [],
    measurementType: "reps",
    movementVariables: {
      movementType: "crunch",
    },
    videoTutorialUrl: "",
    imageUrl: abWheelRolloutImg,
  },
};
