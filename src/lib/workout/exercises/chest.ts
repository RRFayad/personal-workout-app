import { ExerciseDictionary } from "@/types/exercise";
import benchPressImg from "@/../public/images/exercises/chest/bench_press.gif";
import cableCrossoverImg from "@/../public/images/exercises/chest/Cable-Crossover.gif";
import chestDipsImg from "@/../public/images/exercises/chest/Chest-Dips.gif";
import dumbbellPressImg from "@/../public/images/exercises/chest/Dumbbell-Press.gif";
import inclineBarbellBenchPressImg from "@/../public/images/exercises/chest/Incline-Barbell-Bench-Press.gif";
import inclineDumbbellPressImg from "@/../public/images/exercises/chest/Incline-Dumbbell-Press.gif";

export const chestExercises: ExerciseDictionary<"chest"> = {
  benchPress: {
    exerciseName: { en: "bench press", pt: "supino reto" },
    mainMuscles: ["chest"],
    auxiliarMuscles: ["deltoids", "triceps"],
    category: "compound",
    equipment: "barbell",
    intensity: "high",
    alternatives: [],
    execution: {
      en: "Lie back on a bench holding a barbell in the rack above you with a shoulder-width, overhand grip. Lift the bar off the rack and position it above your chest with arms fully extended. Lower the bar straight down, pause, and then press the bar back to the starting position.",
      pt: "Deite-se em um banco segurando uma barra no suporte acima de você com uma pegada mais larga que os ombros, em pronação. Levante a barra do suporte e posicione-a acima do seu peito com os braços totalmente estendidos. Abaixe a barra diretamente para baixo, faça uma pausa e, em seguida, pressione a barra de volta à posição inicial.",
    },
    measurementType: "reps",
    movementVariables: {
      movementType: "press",
      movementAngle: "flat",
    },

    imageUrl: benchPressImg,
    videoTutorialUrl: "",
  },
  dumbbellBenchPress: {
    exerciseName: { en: "dumbbell bench press", pt: "supino com halteres" },
    mainMuscles: ["chest"],
    auxiliarMuscles: ["triceps", "deltoids"],
    category: "compound",
    equipment: "dumbbells",
    intensity: "moderate",
    execution: {
      en: "Lie on a bench with a dumbbell in each hand at chest height, palms facing each other. Press the dumbbells up until your arms are fully extended. Pause and slowly lower back to the starting position.",
      pt: "Deite-se em um banco com um haltere em cada mão na altura do peito, palmas das mãos viradas uma para a outra. Pressione os halteres para cima até que seus braços estejam completamente estendidos. Faça uma pausa e abaixe lentamente de volta à posição inicial.",
    },
    movementVariables: {
      movementType: "press",
      movementAngle: "flat",
    },
    measurementType: "reps",
    alternatives: [],
    videoTutorialUrl: "",
    imageUrl: dumbbellPressImg,
  },
  inclinedBenchPress: {
    exerciseName: { en: "inclined bench press", pt: "supino inclinado" },
    mainMuscles: ["upperChest"],
    auxiliarMuscles: ["triceps", "deltoids"],
    category: "compound",
    equipment: "barbell",
    intensity: "high",
    execution: {
      en: "Sit on an incline bench with a barbell in the rack above you. Hold the bar with a grip wider than shoulder-width and lift it off the rack, positioning it above your chest with arms extended. Lower the bar to your upper chest, pause, and press back to the starting position.",
      pt: "Sente-se em um banco inclinado com uma barra no suporte acima de você. Segure a barra com uma pegada mais larga que os ombros e levante-a do suporte, posicionando-a acima do peito com os braços estendidos. Abaixe a barra até o peito superior, faça uma pausa e pressione de volta à posição inicial.",
    },
    movementVariables: {
      movementType: "press",
      movementAngle: "inclined",
    },
    measurementType: "reps",
    alternatives: [],
    videoTutorialUrl: "",
    imageUrl: inclineBarbellBenchPressImg,
  },
  inclinedDumbbellBenchPress: {
    exerciseName: {
      en: "inclined dumbbell bench press",
      pt: "supino inclinado com halteres",
    },
    mainMuscles: ["upperChest"],
    auxiliarMuscles: ["triceps", "deltoids"],
    category: "compound",
    equipment: "dumbbells",
    intensity: "moderate",
    execution: {
      en: "Sit on an incline bench with a dumbbell in each hand at chest level, palms facing each other. Press the dumbbells up until your arms are fully extended. Pause and then slowly lower back to the starting position.",
      pt: "Sente-se em um banco inclinado com um haltere em cada mão ao nível do peito, palmas das mãos viradas uma para a outra. Pressione os halteres para cima até que os braços estejam completamente estendidos. Faça uma pausa e então abaixe lentamente de volta à posição inicial.",
    },
    movementVariables: {
      movementType: "press",
      movementAngle: "inclined",
    },
    measurementType: "reps",
    alternatives: ["inclinedBenchPress"],
    videoTutorialUrl: "",
    imageUrl: inclineDumbbellPressImg,
  },
  chestDips: {
    exerciseName: { en: "chest dips", pt: "mergulho no paralelas" },
    mainMuscles: ["chest"],
    auxiliarMuscles: ["triceps"],
    category: "compound",
    equipment: "none",
    intensity: "moderate",
    execution: {
      en: "Grip the dip bars with arms extended. Lean forward slightly and lower your body until you feel a slight stretch in your chest. Push yourself back to the starting position.",
      pt: "Segure-se nas barras de mergulho com os braços estendidos. Incline-se ligeiramente para a frente e abaixe seu corpo até que sinta um leve estiramento no peito. Empurre-se de volta à posição inicial.",
    },
    movementVariables: {
      movementType: "press",
      movementAngle: "declined",
    },
    measurementType: "reps",
    alternatives: [],
    videoTutorialUrl: "",
    imageUrl: chestDipsImg,
  },
  crossOver: {
    exerciseName: { en: "crossover", pt: "crossover" },
    mainMuscles: ["chest"],
    auxiliarMuscles: [],
    category: "isolated",
    equipment: "cables",
    intensity: "low",
    execution: {
      en: "Stand between two cable towers with a handle in each hand. Lean forward slightly with staggered feet. Start with arms open and slightly bent. Bring your hands together in front of your body in an arcing motion. Return to the starting position under control.",
      pt: "Fique de pé entre duas torres de cabo com um pegador em cada mão. Incline-se ligeiramente para a frente com os pés escalonados. Comece com os braços abertos e levemente dobrados. Traga as mãos juntas em frente ao corpo em um movimento de arco. Volte à posição inicial controladamente.",
    },
    movementVariables: {
      movementType: "fly",
      movementAngle: "declined",
    },
    measurementType: "reps",
    alternatives: [],
    videoTutorialUrl: "",
    imageUrl: cableCrossoverImg,
  },
};
