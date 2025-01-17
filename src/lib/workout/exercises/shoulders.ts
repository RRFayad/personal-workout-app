import { ExerciseDictionary } from "@/types/exercise";
import alternatingDumbbellFrontRaiseImg from "@/../public/images/exercises/shoulders/Alternating-Dumbbell-Front-Raise.gif";
import arnoldPressImg from "@/../public/images/exercises/shoulders/Arnold-Press.gif";
import barbellStandingMilitaryPressImg from "@/../public/images/exercises/shoulders/Barbell-Standing-Military-Press.gif";
import cableLateralRaiseImg from "@/../public/images/exercises/shoulders/Cable-Lateral-Raise.gif";
import dumbbellLateralRaiseImg from "@/../public/images/exercises/shoulders/Dumbbell-Lateral-Raise.gif";
import dumbbellSeatedBentOverRearDeltRowImg from "@/../public/images/exercises/shoulders/Dumbbell-Seated-Bent-Over-Rear-Delt-Row.gif";
import dumbbellShoulderPressImg from "@/../public/images/exercises/shoulders/Dumbbell-Shoulder-Press.gif";
import facePullImg from "@/../public/images/exercises/shoulders/Face-Pull.gif";
import rearDeltFlyMachineImg from "@/../public/images/exercises/shoulders/Rear-Delt-Machine-Fly.gif";
import shoulderPressMachineImg from "@/../public/images/exercises/shoulders/Shoulder-Press-Machine.gif";

export const shouldersExercises: ExerciseDictionary<"shoulders"> = {
  overheadPress: {
    exerciseName: { en: "overhead press", pt: "desenvolvimento com barra" },
    mainMuscles: ["deltoids"],
    auxiliarMuscles: ["triceps"],
    category: "compound",
    equipment: "barbell",
    intensity: "high",
    execution: {
      en: "Stand with a barbell at chest height with a grip slightly wider than shoulder width. Press the bar straight up until arms are fully extended. Lower the bar back to the starting position.",
      pt: "Em pé, segure uma barra na altura do peito com uma pegada um pouco mais larga que a largura dos ombros. Pressione a barra diretamente para cima até que os braços estejam completamente estendidos. Abaixe a barra de volta à posição inicial.",
    },
    movementVariables: {
      movementType: "press",
      movementAngle: "front",
    },
    alternatives: ["seatedDumbbellPress"],
    measurementType: "reps",
    videoTutorialUrl: "",
    imageUrl: barbellStandingMilitaryPressImg,
  },
  seatedDumbbellPress: {
    exerciseName: {
      en: "seated dumbbell press",
      pt: "desenvolvimento com halteres sentado",
    },
    mainMuscles: ["deltoids"],
    auxiliarMuscles: ["triceps"],
    category: "compound",
    equipment: "dumbbells",
    intensity: "moderate",
    execution: {
      en: "Sitting on a bench with back support, hold a dumbbell in each hand at shoulder level, palms facing forward. Press the dumbbells up until arms are fully extended. Lower the dumbbells back to the starting position.",
      pt: "Sentado em um banco com encosto, segure um haltere em cada mão ao nível dos ombros, palmas das mãos viradas para a frente. Pressione os halteres para cima até que os braços estejam completamente estendidos. Abaixe os halteres de volta à posição inicial.",
    },
    movementVariables: {
      movementType: "press",
      movementAngle: "front",
    },
    alternatives: ["overheadPress"],
    measurementType: "reps",
    videoTutorialUrl: "",
    imageUrl: dumbbellShoulderPressImg,
  },
  shoulderPressMachine: {
    exerciseName: {
      en: "shoulder press machine",
      pt: "desenvolvimento máquina",
    },
    mainMuscles: ["deltoids"],
    auxiliarMuscles: ["triceps"],
    category: "compound",
    equipment: "machine",
    intensity: "moderate",
    execution: {
      en: "Sit on the shoulder press machine with your back firmly against the pad and grip the handles. Push the handles upward until your arms are fully extended. Slowly return to the starting position in a controlled manner.",
      pt: "Sente-se na máquina de desenvolvimento com as costas firmemente apoiadas no encosto e segure as alças. Empurre as alças para cima até que seus braços estejam completamente estendidos. Retorne lentamente à posição inicial de forma controlada.",
    },
    movementVariables: {
      movementType: "press",
      movementAngle: "front",
    },
    alternatives: ["overheadPress", "seatedDumbbellPress"],
    measurementType: "reps",
    videoTutorialUrl: "",
    imageUrl: shoulderPressMachineImg,
  },
  arnoldPress: {
    exerciseName: { en: "arnold press", pt: "desenvolvimento Arnold" },
    mainMuscles: ["deltoids"],
    auxiliarMuscles: ["triceps", "trapezius"],
    category: "compound",
    equipment: "dumbbells",
    intensity: "moderate",
    execution: {
      en: "Sitting on a bench with back support, hold a dumbbell in each hand at shoulder height with palms facing you. As you press the dumbbells up, rotate your hands so that palms are facing forward at the top of the movement. Reverse the movement to return to the starting position.",
      pt: "Sentado em um banco com encosto, segure um haltere em cada mão na altura dos ombros com as palmas das mãos viradas para você. À medida que pressiona os halteres para cima, gire as mãos para que as palmas fiquem viradas para a frente no topo do movimento. Inverta o movimento para voltar à posição inicial.",
    },
    movementVariables: {
      movementType: "press",
      movementAngle: "front",
    },
    alternatives: [],
    measurementType: "reps",
    videoTutorialUrl: "",
    imageUrl: arnoldPressImg,
  },
  frontRaise: {
    exerciseName: { en: "front raise", pt: "elevação frontal" },
    mainMuscles: ["anteriorDeltoids"],
    auxiliarMuscles: [],
    category: "isolated",
    equipment: "dumbbells",
    intensity: "low",
    execution: {
      en: "Stand with a dumbbell in each hand in front of your thighs, palms facing your body. Raise one arm in front of you until it is parallel to the floor, keeping it slightly bent at the elbow. Lower it back down and repeat with the other arm.",
      pt: "Em pé, com um haltere em cada mão na frente das coxas, palmas viradas para o corpo. Eleve um braço à frente até que esteja paralelo ao chão, mantendo-o levemente dobrado no cotovelo. Abaixe-o de volta e repita com o outro braço.",
    },
    movementVariables: {
      movementType: "raise",
      movementAngle: "front",
    },
    alternatives: [],
    measurementType: "reps",
    videoTutorialUrl: "",
    imageUrl: alternatingDumbbellFrontRaiseImg,
  },
  lateralRaise: {
    exerciseName: { en: "lateral raise", pt: "elevação lateral" },
    mainMuscles: ["lateralDeltoids"],
    auxiliarMuscles: [],
    category: "isolated",
    equipment: "dumbbells",
    intensity: "low",
    execution: {
      en: "Stand with a dumbbell in each hand at your side, palms facing each other. Raise your arms to the sides until they are parallel to the floor, keeping them slightly bent at the elbows. Lower them back to the starting position.",
      pt: "Em pé, com um haltere em cada mão ao lado do corpo, palmas viradas uma para a outra. Eleve os braços para os lados até que estejam paralelos ao chão, mantendo-os levemente dobrados nos cotovelos. Abaixe-os de volta à posição inicial.",
    },
    movementVariables: {
      movementType: "raise",
      movementAngle: "lateral",
    },
    alternatives: [],
    measurementType: "reps",
    videoTutorialUrl: "",
    imageUrl: dumbbellLateralRaiseImg,
  },
  lateralCableRaise: {
    exerciseName: { en: "lateral cable raise", pt: "elevação lateral no cabo" },
    mainMuscles: ["lateralDeltoids"],
    auxiliarMuscles: [],
    category: "isolated",
    equipment: "cables",
    intensity: "low",
    execution: {
      en: "Stand sideways to the cable machine, holding the handle attached at the lowest level. With a slight bend in your arm, raise the arm until it is parallel to the floor. Maintain your posture and control the movement as you lower back to the starting position.",
      pt: "Em pé, de lado para a máquina de cabo, segure o pegador que está no nível mais baixo. Com o braço levemente dobrado, eleve o braço até que esteja paralelo ao chão. Mantenha a postura e controle o movimento enquanto abaixa de volta à posição inicial.",
    },
    movementVariables: {
      movementType: "raise",
      movementAngle: "lateral",
    },
    alternatives: [],
    measurementType: "reps",
    videoTutorialUrl: "",
    imageUrl: cableLateralRaiseImg,
  },
  facePull: {
    exerciseName: { en: "face pull", pt: "face pull" },
    mainMuscles: ["rearDeltoids"],
    auxiliarMuscles: ["trapezius", "rhomboids"],
    category: "isolated",
    equipment: "cables",
    intensity: "moderate",
    execution: {
      en: "Facing the cable machine, hold a rope or bar with your hands. Pull the rope or bar towards your face, keeping your elbows high and hands apart. Return to the starting position in a controlled manner.",
      pt: "De frente para a máquina de cabo, segure uma corda ou barra com as mãos. Puxe a corda ou barra em direção ao rosto, mantendo os cotovelos altos e as mãos separadas. Retorne controladamente à posição inicial.",
    },
    movementVariables: {
      movementType: "pull",
      movementAngle: "rear",
    },
    alternatives: [],
    measurementType: "reps",
    videoTutorialUrl: "",
    imageUrl: facePullImg,
  },
  rearDeltRaise: {
    exerciseName: {
      en: "rear delt raise",
      pt: "elevação posterior do deltóide",
    },
    mainMuscles: ["rearDeltoids"],
    auxiliarMuscles: ["trapezius"],
    category: "isolated",
    equipment: "dumbbells",
    intensity: "low",
    execution: {
      en: "Bend forward at the waist with a dumbbell in each hand, arms hanging in front. Keeping a slight bend in the elbows, lift the dumbbells out to the sides until your arms are parallel to the floor. Lower them back to the starting position.",
      pt: "Incline-se para a frente na cintura com um haltere em cada mão, braços pendendo na frente. Mantendo uma ligeira dobra nos cotovelos, levante os halteres lateralmente até que seus braços estejam paralelos ao chão. Abaixe-os de volta à posição inicial.",
    },
    movementVariables: {
      movementType: "raise",
      movementAngle: "rear",
    },
    alternatives: [],
    measurementType: "reps",
    videoTutorialUrl: "",
    imageUrl: dumbbellSeatedBentOverRearDeltRowImg,
  },
  rearDeltFlyMachine: {
    exerciseName: {
      en: "rear delt fly machine",
      pt: "peck deck inverso",
    },
    mainMuscles: ["rearDeltoids"],
    auxiliarMuscles: ["trapezius", "rhomboids"],
    category: "isolated",
    equipment: "machine",
    intensity: "low",
    execution: {
      en: "Sit on the rear delt fly machine with your chest against the pad and grip the handles. With a slight bend in your elbows, push the handles back in a wide arc until your arms are extended to the sides. Return to the starting position under control.",
      pt: "Sente-se na máquina de fly posterior com o peito apoiado no encosto e segure as alças. Com uma leve dobra nos cotovelos, empurre as alças para trás em um arco amplo até que seus braços estejam estendidos para os lados. Retorne controladamente à posição inicial.",
    },
    movementVariables: {
      movementType: "raise",
      movementAngle: "rear",
    },
    alternatives: ["rearDeltRaise", "facePull"],
    measurementType: "reps",
    videoTutorialUrl: "",
    imageUrl: rearDeltFlyMachineImg,
  },
};
