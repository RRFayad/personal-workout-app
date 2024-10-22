import { ExerciseDictionary } from "@/types/exercise";

import cableRopeOverheadTricepsExtensionImg from "@/../public/images/exercises/triceps/Cable-Rope-Overhead-Triceps-Extension.gif";
import closeGripBenchPressImg from "@/../public/images/exercises/triceps/Close-Grip-Bench-Press.gif";
import ezBarLyingCloseGripTricepsExtensionBehindHeadImg from "@/../public/images/exercises/triceps/EZ-Bar-Lying-Close-Grip-Triceps-Extension-Behind-Head.gif";
import pushdownImg from "@/../public/images/exercises/triceps/Pushdown.gif";
import seatedDumbbellTricepsExtensionImg from "@/../public/images/exercises/triceps/Seated-Dumbbell-Triceps-Extension.gif";
import tricepsDipsImg from "@/../public/images/exercises/triceps/Triceps-Dips.gif";

export const tricepsExercises: ExerciseDictionary<"triceps"> = {
  seatedTricepsPress: {
    exerciseName: {
      pt: "desenvolvimento de tríceps sentado",
      en: "seated triceps press",
    },
    mainMuscles: ["triceps"],
    auxiliarMuscles: [],
    category: "isolated",
    equipment: "dumbbells",
    movementVariables: {
      movementType: "overhead",
    },
    execution: {
      pt: "Sentado em um banco com encosto, segure um haltere com ambas as mãos acima da cabeça, braços estendidos. Abaixe o haltere atrás da cabeça até formar um ângulo de 90 graus nos cotovelos. Estenda os braços para voltar à posição inicial.",
      en: "Sitting on a bench with back support, hold a dumbbell with both hands above your head, arms extended. Lower the dumbbell behind your head until your elbows are at a 90-degree angle. Extend your arms to return to the starting position.",
    },
    intensity: "moderate",
    alternatives: [],
    measurementType: "reps",
    imageUrl: seatedDumbbellTricepsExtensionImg,
    videoTutorialUrl: "",
  },
  closeGripBenchPress: {
    exerciseName: {
      pt: "supino com pegada fechada",
      en: "close-grip bench press",
    },
    mainMuscles: ["triceps"],
    auxiliarMuscles: ["chest", "deltoids"],
    category: "compound",
    equipment: "barbell",
    movementVariables: {
      movementType: "pressdown", // triceps: overhead || pressdown
    },
    execution: {
      pt: "Deite-se em um banco e segure a barra com uma pegada mais fechada que a largura dos ombros. Desça a barra até o peito, mantendo os cotovelos próximos ao corpo. Empurre a barra de volta à posição inicial.",
      en: "Lie on a bench and hold the barbell with a grip narrower than shoulder width. Lower the bar to your chest, keeping your elbows close to your body. Press the bar back to the starting position.",
    },
    intensity: "moderate",
    alternatives: [],
    measurementType: "reps",
    imageUrl: closeGripBenchPressImg,
    videoTutorialUrl: "",
  },
  tricepsDips: {
    exerciseName: { pt: "mergulho para tríceps", en: "triceps dips" },
    mainMuscles: ["triceps"],
    auxiliarMuscles: [],
    category: "compound",
    equipment: "parallelBars",
    movementVariables: {
      movementType: "pressdown", // triceps: overhead || pressdown
    },
    execution: {
      pt: "Segure-se nas barras paralelas com os braços estendidos. Abaixe o corpo lentamente até formar um ângulo de 90 graus nos cotovelos, depois empurre-se de volta à posição inicial.",
      en: "Grip the parallel bars with arms extended. Lower your body slowly until your elbows are at a 90-degree angle, then push yourself back to the starting position.",
    },
    intensity: "moderate",
    alternatives: [],
    measurementType: "reps",
    imageUrl: tricepsDipsImg,
    videoTutorialUrl: "",
  },
  skullcrusher: {
    exerciseName: { pt: "tríceps testa", en: "skullcrusher" },
    mainMuscles: ["triceps"],
    auxiliarMuscles: [],
    category: "isolated",
    equipment: "ezBar",
    movementVariables: {
      movementType: "overhead", // triceps: overhead || pressdown
    },
    execution: {
      pt: "Deite-se em um banco com uma barra ou haltere. Com os braços estendidos acima do peito, abaixe o peso lentamente em direção à testa, mantendo os cotovelos fixos. Em seguida, estenda os braços para voltar à posição inicial.",
      en: "Lie on a bench with a barbell or dumbbell. With arms extended above the chest, slowly lower the weight towards the forehead, keeping your elbows stationary. Then extend your arms to return to the starting position.",
    },
    intensity: "moderate",
    alternatives: [],
    measurementType: "reps",
    imageUrl: ezBarLyingCloseGripTricepsExtensionBehindHeadImg,
    videoTutorialUrl: "",
  },
  tricepsPushdown: {
    exerciseName: { pt: "pulley tríceps", en: "triceps pushdown" },
    mainMuscles: ["triceps"],
    auxiliarMuscles: [],
    category: "isolated",
    equipment: "cables",
    movementVariables: {
      movementType: "pressdown", // triceps: overhead || pressdown
    },
    execution: {
      pt: "De frente para a máquina de pulley, segure a barra ou corda com as mãos. Com os cotovelos fixos ao lado do corpo, empurre a barra ou corda para baixo até que os braços estejam completamente estendidos. Retorne controladamente à posição inicial.",
      en: "Facing the cable machine, hold the bar or rope with your hands. With your elbows fixed to your sides, push the bar or rope down until your arms are fully extended. Return to the starting position in a controlled manner.",
    },
    intensity: "low",
    alternatives: [],
    measurementType: "reps",
    imageUrl: pushdownImg,
    videoTutorialUrl: "",
  },
  overheadCableTricepsExtension: {
    exerciseName: {
      pt: "extensão de tríceps com pulley acima da cabeça",
      en: "overhead cable triceps extension",
    },
    mainMuscles: ["triceps"],
    auxiliarMuscles: [],
    category: "isolated",
    equipment: "cables",
    movementVariables: {
      movementType: "overhead", // triceps: overhead || pressdown
    },
    execution: {
      pt: "De costas para a máquina de pulley, segure a corda ou barra acima da cabeça com as duas mãos, palmas voltadas para dentro. Mantenha os cotovelos próximos à cabeça e estenda os braços para cima, depois abaixe controladamente de volta à posição inicial.",
      en: "Facing away from the cable machine, hold the rope or bar overhead with both hands, palms facing inwards. Keep your elbows close to your head and extend your arms upwards, then lower back down to the starting position in a controlled manner.",
    },
    intensity: "moderate",
    alternatives: [],
    measurementType: "reps",
    imageUrl: cableRopeOverheadTricepsExtensionImg,
    videoTutorialUrl: "",
  },
};
