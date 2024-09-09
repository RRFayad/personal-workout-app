const paths = {
  // Login OAuth - User start with OAuth, or Click to Login with email and PW or Click to Sign In
  home() {
    return "/";
  },
  createProfile() {
    // Quiz Form
    return "profile/create-profile";
  },
  // Profile & Meal Plan
  profile() {
    return "/profile";
  },
  // Workout Split
  workoutSplit() {
    return "/workout";
  },
  // Workout Plan
  workoutDay(dayId: string) {
    return `/workout/day/${dayId}`;
  },
  // Workout Tracker
  workoutTracker() {
    return "/workout/tracker";
  },
  // Valid Exercises List?
  exercisesList() {
    return `/exercises`;
  },
  // Exercise Detail
  exerciseDetail(exerciseId: string) {
    return `/exercises/${exerciseId}`;
  },
};

export default paths;
