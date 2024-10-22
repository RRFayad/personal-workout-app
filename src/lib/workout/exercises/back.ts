import { ExerciseDictionary } from "@/types/exercise";
import chinUpImg from "@/../public/images/exercises/back/chinUp.gif";
import pullUpImg from "@/../public/images/exercises/back/pullUp.gif";
import tBarRowImg from "@/../public/images/exercises/back/tBarRow.gif";
import latPullDownImg from "@/../public/images/exercises/back/Lat-Pulldown.gif";
import oneArmDumbbellRowImg from "@/../public/images/exercises/back/oneArmDumbbellRow.gif";
import closeGripCableRowImg from "@/../public/images/exercises/back/close-grip-cable-row.gif";
import neutralGripPullDownImg from "@/../public/images/exercises/back/neutralGripPullDown.gif";
import overhandBentOverRowImg from "@/../public/images/exercises/back/overhandBentOverRow.gif";
import reverseLatPullDownImg from "@/../public/images/exercises/back/Reverse-Lat-Pulldown.gif";
import underhandBentOverRowImg from "@/../public/images/exercises/back/underhandBentOverRow.gif";

export const backExercises: ExerciseDictionary<"back"> = {
  overhandBentOverRow: {
    exerciseName: {
      pt: "remada curvada (pegada pronada)",
      en: "bent over row (overhand grip)",
    },
    mainMuscles: ["lats", "trapezius"],
    auxiliarMuscles: ["biceps", "rearDeltoids"],
    category: "compound",
    equipment: "barbell",
    intensity: "high",
    execution: {
      pt: "Com os pés afastados na largura dos ombros, incline-se para a frente na cintura mantendo as costas retas. Segure a barra com as mãos um pouco mais largas que a largura dos ombros. Puxe a barra em direção ao abdômen e retorne à posição inicial controladamente.",
      en: "With feet shoulder-width apart, bend forward at the waist while keeping your back straight. Hold the barbell with a grip slightly wider than shoulder width. Pull the bar towards your abdomen and return to the starting position under control.",
    },
    alternatives: [],
    measurementType: "reps",
    movementVariables: {
      movementType: "overhand",
      movementAngle: "horizontal",
    },
    imageUrl: overhandBentOverRowImg,
    videoTutorialUrl: "",
  },
  underhandBentOverRow: {
    exerciseName: {
      pt: "remada curvada (pegada supinada)",
      en: "bent over row (underhand grip)",
    },
    mainMuscles: ["lats", "trapezius"],
    auxiliarMuscles: ["biceps", "rearDeltoids"],
    category: "compound",
    equipment: "barbell",
    intensity: "high",
    execution: {
      pt: "Com os pés afastados na largura dos ombros, incline-se para a frente na cintura mantendo as costas retas. Segure a barra com as mãos um pouco mais largas que a largura dos ombros. Puxe a barra em direção ao abdômen e retorne à posição inicial controladamente.",
      en: "With feet shoulder-width apart, bend forward at the waist while keeping your back straight. Hold the barbell with a grip slightly wider than shoulder width. Pull the bar towards your abdomen and return to the starting position under control.",
    },
    alternatives: [],
    measurementType: "reps",
    movementVariables: {
      movementType: "underhand",
      movementAngle: "horizontal",
    },
    imageUrl: underhandBentOverRowImg,
    videoTutorialUrl: "",
  },
  oneArmDumbbellRow: {
    exerciseName: {
      pt: "remada unilateral com haltere",
      en: "one-arm dumbbell row",
    },
    mainMuscles: ["lats"],
    auxiliarMuscles: ["trapezius", "biceps", "rearDeltoids"],
    category: "compound",
    equipment: "dumbbells",
    intensity: "moderate",
    execution: {
      pt: "Apoie-se em um banco com um joelho e uma mão, mantendo a outra perna no chão para estabilidade. Com a outra mão, segure um haltere e puxe-o em direção ao seu abdômen. Retorne à posição inicial de forma controlada.",
      en: "Support yourself on a bench with one knee and one hand, keeping the other leg on the ground for stability. With the other hand, hold a dumbbell and pull it towards your abdomen. Return to the starting position in a controlled manner.",
    },
    alternatives: [],
    measurementType: "reps",
    movementVariables: {
      movementType: "neutral",
      movementAngle: "horizontal",
    },
    imageUrl: oneArmDumbbellRowImg,
    videoTutorialUrl: "",
  },
  pullUp: {
    exerciseName: { pt: "barra fixa", en: "pull-up" },
    mainMuscles: ["lats"],
    auxiliarMuscles: ["biceps", "rearDeltoids"],
    category: "compound",
    equipment: "pullUpBar",
    intensity: "high",
    execution: {
      pt: "Segure a barra fixa com uma pegada mais larga que a largura dos ombros, palmas viradas para longe de você. Puxe o corpo para cima até que o queixo ultrapasse a barra. Abaixe-se de volta à posição inicial controladamente.",
      en: "Grip the pull-up bar with a grip wider than shoulder width, palms facing away from you. Pull your body up until your chin passes the bar. Lower yourself back to the starting position under control.",
    },
    alternatives: [],
    measurementType: "reps",
    movementVariables: {
      movementType: "overhand",
      movementAngle: "vertical",
    },
    imageUrl: pullUpImg,
    videoTutorialUrl: "",
  },
  chinUp: {
    exerciseName: { pt: "barra fixa supinada", en: "chin-up" },
    mainMuscles: ["lats"],
    auxiliarMuscles: ["biceps"],
    category: "compound",
    equipment: "pullUpBar",
    intensity: "high",
    execution: {
      pt: "Segure a barra fixa com as palmas das mãos voltadas para você e com uma pegada mais estreita que a largura dos ombros. Puxe o corpo para cima até que o queixo ultrapasse a barra. Abaixe-se de volta à posição inicial de forma controlada.",
      en: "Grip the pull-up bar with palms facing towards you and with a grip narrower than shoulder width. Pull your body up until your chin passes the bar. Lower yourself back to the starting position in a controlled manner.",
    },
    alternatives: [],
    measurementType: "reps",
    movementVariables: {
      movementType: "underhand",
      movementAngle: "vertical",
    },
    imageUrl: chinUpImg,
    videoTutorialUrl: "",
  },
  tBarRow: {
    exerciseName: { pt: "remada em T", en: "T-bar row" },
    mainMuscles: ["lats", "trapezius"],
    auxiliarMuscles: ["rearDeltoids", "biceps"],
    category: "compound",
    equipment: "barbell",
    intensity: "moderate",
    execution: {
      pt: "Posicione-se sobre a barra em T com os pés afastados na largura dos ombros. Incline-se para a frente na cintura e segure as alças da máquina. Puxe a barra em direção ao abdômen, mantendo as costas retas. Retorne à posição inicial controladamente.",
      en: "Stand over the T-bar with feet shoulder-width apart. Bend forward at the waist and grip the machine’s handles. Pull the bar towards your abdomen, keeping your back straight. Return to the starting position under control.",
    },
    alternatives: [],
    measurementType: "reps",
    movementVariables: {
      movementType: "neutral",
      movementAngle: "horizontal",
    },
    imageUrl: tBarRowImg,
    videoTutorialUrl: "",
  },
  overhandLatPullDown: {
    exerciseName: {
      pt: "pulldown pegada pronada",
      en: "lat pulldown (overhand grip)",
    },
    mainMuscles: ["lats"],
    auxiliarMuscles: ["biceps", "rearDeltoids"],
    category: "compound",
    equipment: "machine",
    intensity: "low",
    execution: {
      pt: "Sente-se na máquina de pulldown e segure a barra com uma pegada mais larga que a largura dos ombros. Puxe a barra para baixo em direção ao peito, mantendo as costas retas. Retorne à posição inicial controladamente.",
      en: "Sit down at the lat pulldown machine and grab the bar with a grip wider than shoulder width. Pull the bar down towards your chest, keeping your back straight. Return to the starting position under control.",
    },
    alternatives: [],
    measurementType: "reps",
    movementVariables: {
      movementType: "overhand",
      movementAngle: "vertical",
    },
    imageUrl: latPullDownImg,
    videoTutorialUrl: "",
  },
  underhandLatPullDown: {
    exerciseName: {
      pt: "pulldown pegada supinada",
      en: "lat pulldown (underhand grip)",
    },
    mainMuscles: ["lats"],
    auxiliarMuscles: ["biceps", "rearDeltoids"],
    category: "compound",
    equipment: "machine",
    intensity: "low",
    execution: {
      pt: "Sente-se na máquina de pulldown e segure a barra com uma pegada mais larga que a largura dos ombros. Puxe a barra para baixo em direção ao peito, mantendo as costas retas. Retorne à posição inicial controladamente.",
      en: "Sit down at the lat pulldown machine and grab the bar with a grip wider than shoulder width. Pull the bar down towards your chest, keeping your back straight. Return to the starting position under control.",
    },
    alternatives: [],
    measurementType: "reps",
    movementVariables: {
      movementType: "underhand",
      movementAngle: "vertical",
    },
    imageUrl: reverseLatPullDownImg,
    videoTutorialUrl: "",
  },
  neutralGripLatPullDown: {
    exerciseName: {
      pt: "pulldown pegada neutra",
      en: "neutral grip lat pulldown",
    },
    mainMuscles: ["lats"],
    auxiliarMuscles: ["biceps", "rearDeltoids"],
    category: "compound",
    equipment: "machine",
    intensity: "low",
    execution: {
      pt: "Sente-se na máquina de pulldown e segure a barra com uma pegada mais larga que a largura dos ombros. Puxe a barra para baixo em direção ao peito, mantendo as costas retas. Retorne à posição inicial controladamente.",
      en: "Sit down at the lat pulldown machine and grab the bar with a grip wider than shoulder width. Pull the bar down towards your chest, keeping your back straight. Return to the starting position under control.",
    },
    alternatives: [],
    measurementType: "reps",
    movementVariables: {
      movementType: "neutral",
      movementAngle: "vertical",
    },
    imageUrl: neutralGripPullDownImg,
    videoTutorialUrl: "",
  },
  seatedCableRow: {
    exerciseName: { pt: "remada sentada no cabo", en: "seated cable row" },
    mainMuscles: ["lats", "trapezius"],
    auxiliarMuscles: ["rearDeltoids", "biceps"],
    category: "compound",
    equipment: "cables",
    intensity: "low",
    execution: {
      pt: "Sente-se na máquina de remada no cabo com os pés apoiados. Segure o cabo com as duas mãos e puxe em direção ao abdômen, mantendo as costas retas. Retorne à posição inicial controladamente.",
      en: "Sit down at the seated cable row machine with feet braced. Grip the cable with both hands and pull towards your abdomen, keeping your back straight. Return to the starting position under control.",
    },
    alternatives: [],
    measurementType: "reps",
    movementVariables: {
      movementType: "neutral",
      movementAngle: "horizontal",
    },
    imageUrl: closeGripCableRowImg,
    videoTutorialUrl: "",
  },
};
