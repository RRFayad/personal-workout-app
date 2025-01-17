import { ExerciseDictionary } from "@/types/exercise";

import barbellSquatImg from "@/../public/images/exercises/quads/BARBELL-SQUAT.gif";
import dumbbellBulgarianSplitSquatImg from "@/../public/images/exercises/quads/Dumbbell-Bulgarian-Split-Squat.gif";
import dumbbellLungesImg from "@/../public/images/exercises/quads/dumbbell-lunges.gif";
import frontSquatImg from "@/../public/images/exercises/quads/front-squat.gif";
import legExtensionImg from "@/../public/images/exercises/quads/LEG-EXTENSION.gif";
import legPressImg from "@/../public/images/exercises/quads/Leg-Press.gif";
import sledHackSquatImg from "@/../public/images/exercises/quads/Sled-Hack-Squat.gif";

export const quadsExercises: ExerciseDictionary<"quads"> = {
  squat: {
    exerciseName: { pt: "agachamento", en: "squat" },
    mainMuscles: ["quads", "glutes"],
    auxiliarMuscles: ["hamstrings", "lowerBack"],
    category: "compound",
    equipment: "barbell",
    execution: {
      pt: "Em pé, com os pés afastados na largura dos ombros, segure a barra apoiada nos ombros atrás do pescoço. Agache-se até que as coxas estejam paralelas ao chão, mantendo as costas retas. Retorne à posição inicial.",
      en: "Stand with feet shoulder-width apart, barbell resting on your shoulders behind your neck. Squat down until your thighs are parallel to the floor, keeping your back straight. Return to the starting position.",
    },
    intensity: "veryHigh",
    alternatives: [],
    measurementType: "reps",
    movementVariables: {
      movementType: "squat/press",
    },
    videoTutorialUrl: "",
    imageUrl: barbellSquatImg,
  },
  frontSquat: {
    exerciseName: { pt: "agachamento frontal", en: "front squat" },
    mainMuscles: ["quads", "glutes"],
    auxiliarMuscles: ["hamstrings", "core"],
    category: "compound",
    equipment: "barbell",
    execution: {
      pt: "Em pé, com os pés afastados na largura dos ombros, segure a barra contra o peito com os cotovelos apontando para frente. Agache-se até que as coxas estejam paralelas ao chão. Retorne à posição inicial.",
      en: "Stand with feet shoulder-width apart, barbell against your chest with elbows pointing forward. Squat down until your thighs are parallel to the floor. Return to the starting position.",
    },
    intensity: "high",
    alternatives: [],
    measurementType: "reps",
    movementVariables: {
      movementType: "squat/press",
    },
    videoTutorialUrl: "",
    imageUrl: frontSquatImg,
  },
  hackSquat: {
    exerciseName: { pt: "agachamento hack", en: "hack squat" },
    mainMuscles: ["quads"],
    auxiliarMuscles: ["glutes", "hamstrings"],
    category: "compound",
    equipment: "machine",
    execution: {
      pt: "Posicione-se na máquina de agachamento hack com as costas contra o encosto e os ombros sob as almofadas. Agache-se até que as coxas estejam paralelas ao chão. Retorne à posição inicial.",
      en: "Position yourself in the hack squat machine with your back against the pad and shoulders under the pads. Squat down until your thighs are parallel to the floor. Return to the starting position.",
    },
    intensity: "high",
    alternatives: [],
    measurementType: "reps",
    movementVariables: {
      movementType: "squat/press",
    },
    videoTutorialUrl: "",
    imageUrl: sledHackSquatImg,
  },
  legPress: {
    exerciseName: { pt: "leg press", en: "leg press" },
    mainMuscles: ["quads"],
    auxiliarMuscles: ["glutes", "hamstrings"],
    category: "compound",
    equipment: "machine",
    execution: {
      pt: "Sente-se na máquina de leg press com os pés na plataforma afastados na largura dos ombros. Empurre a plataforma até que as pernas estejam estendidas. Retorne controladamente à posição inicial.",
      en: "Sit down in the leg press machine with your feet on the platform shoulder-width apart. Push the platform until your legs are extended. Return to the starting position in a controlled manner.",
    },
    intensity: "moderate",
    alternatives: [],
    measurementType: "reps",
    movementVariables: {
      movementType: "squat/press",
    },
    videoTutorialUrl: "",
    imageUrl: legPressImg,
  },
  bulgarianSplitSquat: {
    exerciseName: { pt: "agachamento búlgaro", en: "bulgarian split squat" },
    mainMuscles: ["quads", "glutes"],
    auxiliarMuscles: ["hamstrings"],
    category: "compound",
    equipment: "none",
    execution: {
      pt: "Com um pé elevado atrás de você em um banco, agache-se com a perna da frente até que a coxa esteja paralela ao chão. Mantenha a postura e retorne à posição inicial.",
      en: "With one foot elevated behind you on a bench, squat down with the front leg until the thigh is parallel to the floor. Maintain posture and return to the starting position.",
    },
    intensity: "moderate",
    alternatives: [],
    measurementType: "reps",
    movementVariables: {
      movementType: "squat/press",
    },
    videoTutorialUrl: "",
    imageUrl: dumbbellBulgarianSplitSquatImg,
  },
  lunges: {
    exerciseName: { pt: "avanço", en: "lunges" },
    mainMuscles: ["quads", "glutes"],
    auxiliarMuscles: ["hamstrings"],
    category: "compound",
    equipment: "none",
    execution: {
      pt: "De pé, dê um passo à frente com uma perna e agache-se até que ambas as pernas estejam em ângulos de 90 graus. Retorne à posição inicial e repita com a outra perna.",
      en: "Standing, step forward with one leg and lower yourself until both legs are at 90-degree angles. Return to the starting position and repeat with the other leg.",
    },
    intensity: "moderate",
    alternatives: [],
    measurementType: "reps",
    movementVariables: {
      movementType: "squat/press",
    },
    videoTutorialUrl: "",
    imageUrl: dumbbellLungesImg,
  },
  legExtension: {
    exerciseName: { pt: "extensão de pernas", en: "leg extension" },
    mainMuscles: ["quads"],
    auxiliarMuscles: [],
    category: "isolated",
    equipment: "machine",
    execution: {
      pt: "Sente-se na máquina com os pés sob a almofada e as pernas formando um ângulo de 90 graus. Estenda as pernas até que estejam completamente retas. Retorne controladamente à posição inicial.",
      en: "Sit on the machine with your feet under the pad and legs forming a 90-degree angle. Extend your legs until they are completely straight. Return to the starting position in a controlled manner.",
    },
    intensity: "low",
    alternatives: [],
    measurementType: "reps",
    movementVariables: {
      movementType: "leg-extension",
    },
    videoTutorialUrl: "",
    imageUrl: legExtensionImg,
  },
};
