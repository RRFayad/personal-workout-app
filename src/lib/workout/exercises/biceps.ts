import { ExerciseDictionary } from "@/types/exercise";
import barbellCurlImg from "@/../public/images/exercises/biceps/Barbell-Curl.gif";
import dumbbellCurlImg from "@/../public/images/exercises/biceps/Dumbbell-Curl.gif";
import flexorInclineDumbbellCurlsImg from "@/../public/images/exercises/biceps/Flexor-Incline-Dumbbell-Curls.gif";
import hammerCurlImg from "@/../public/images/exercises/biceps/Hammer-Curl.gif";
import zBarCurlImg from "@/../public/images/exercises/biceps/Z-Bar-Curl.gif";

export const bicepsExercises: ExerciseDictionary<"biceps"> = {
  barbellCurl: {
    exerciseName: { pt: "rosca direta com barra", en: "barbell curl" },
    mainMuscles: ["biceps"],
    auxiliarMuscles: [],
    category: "isolated",
    equipment: "barbell",
    movementVariables: {
      movementType: "supinated",
      movementAngle: "neutral",
    },
    execution: {
      pt: "Em pé, segure a barra com as mãos na largura dos ombros, palmas viradas para cima. Mantenha os cotovelos próximos ao corpo e curve a barra em direção aos ombros. Abaixe controladamente de volta à posição inicial.",
      en: "Stand with hands shoulder-width apart holding a barbell, palms facing up. Keep your elbows close to your body and curl the bar towards your shoulders. Lower it back down to the starting position in a controlled manner.",
    },
    intensity: "moderate",
    alternatives: [],
    measurementType: "reps",
    imageUrl: barbellCurlImg,
    videoTutorialUrl: "",
  },
  ezBarbellCurl: {
    exerciseName: { pt: "rosca direta com barra W", en: "EZ barbell curl" },
    mainMuscles: ["biceps"],
    auxiliarMuscles: [],
    category: "isolated",
    equipment: "ezBar",
    movementVariables: {
      movementType: "supinated",
      movementAngle: "neutral",
    },
    execution: {
      pt: "Em pé, segure a barra W com as mãos um pouco mais afastadas que a largura dos ombros, palmas viradas para cima. Mantenha os cotovelos próximos ao corpo e curve a barra em direção aos ombros. Abaixe controladamente de volta à posição inicial.",
      en: "Stand with hands slightly wider than shoulder-width apart holding an EZ bar, palms facing up. Keep your elbows close to your body and curl the bar towards your shoulders. Lower it back down to the starting position in a controlled manner.",
    },
    intensity: "moderate",
    alternatives: [],
    measurementType: "reps",
    imageUrl: zBarCurlImg,
    videoTutorialUrl: "",
  },
  dumbbellCurl: {
    exerciseName: { pt: "rosca direta com halteres", en: "dumbbell curl" },
    mainMuscles: ["biceps"],
    auxiliarMuscles: [],
    category: "isolated",
    equipment: "dumbbells",
    movementVariables: {
      movementType: "supinated",
      movementAngle: "neutral",
    },
    execution: {
      pt: "Em pé, segure um haltere em cada mão ao lado do corpo, palmas viradas para frente. Curve os halteres em direção aos ombros, mantendo os cotovelos próximos ao corpo. Abaixe controladamente de volta à posição inicial.",
      en: "Stand with a dumbbell in each hand at your sides, palms facing forward. Curl the dumbbells towards your shoulders, keeping your elbows close to your body. Lower them back down to the starting position in a controlled manner.",
    },
    intensity: "moderate",
    alternatives: [],
    measurementType: "reps",
    imageUrl: dumbbellCurlImg,
    videoTutorialUrl: "",
  },
  dumbbellHammerCurl: {
    exerciseName: {
      pt: "rosca martelo com halteres",
      en: "dumbbell hammer curl",
    },
    mainMuscles: ["biceps"],
    auxiliarMuscles: ["brachioradialis", "brachialis"],
    category: "isolated",
    equipment: "dumbbells",
    movementVariables: {
      movementType: "hammer",
      movementAngle: "neutral",
    },
    execution: {
      pt: "Em pé, segure um haltere em cada mão ao lado do corpo, palmas voltadas uma para a outra. Mantenha os cotovelos próximos ao corpo e curve os halteres em direção aos ombros, mantendo a posição das palmas. Abaixe controladamente de volta à posição inicial.",
      en: "Stand with a dumbbell in each hand at your sides, palms facing each other. Keep your elbows close to your body and curl the dumbbells towards your shoulders, maintaining the palm position. Lower them back down to the starting position in a controlled manner.",
    },
    intensity: "moderate",
    alternatives: [],
    measurementType: "reps",
    imageUrl: hammerCurlImg,
    videoTutorialUrl: "",
  },
  inclineDumbbellCurl: {
    exerciseName: {
      pt: "rosca inclinada com halteres",
      en: "incline dumbbell curl",
    },
    mainMuscles: ["biceps"],
    auxiliarMuscles: [],
    category: "isolated",
    equipment: "dumbbells",
    movementVariables: {
      movementType: "supinated",
      movementAngle: "inclined",
    },
    execution: {
      pt: "Sentado em um banco inclinado, segure um haltere em cada mão, palmas viradas para frente. Curve os halteres em direção aos ombros, mantendo os cotovelos próximos ao corpo. Abaixe controladamente de volta à posição inicial.",
      en: "Sit on an incline bench holding a dumbbell in each hand, palms facing forward. Curl the dumbbells towards your shoulders, keeping your elbows close to your body. Lower them back down to the starting position in a controlled manner.",
    },
    intensity: "moderate",
    alternatives: [],
    measurementType: "reps",
    imageUrl: flexorInclineDumbbellCurlsImg,
    videoTutorialUrl: "",
  },
};
