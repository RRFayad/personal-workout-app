const paths = {
  // Login OAuth - User start with OAuth, or Click to Login with email and PW or Click to Sign In
  home() {
    return "/";
  },
  createProfile() {
    // Quiz Form
    return "/create-profile";
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
  workoutDayPlan() {
    return "/workout/plan";
  },
  // Workout Tracker
  workoutTracker() {
    return "/workout/tracker";
  },
  // Valid Exercises List?
  exercisesList() {
    return `/exercise`;
  },
  // Exercise Detail
  exerciseDetail(exerciseId: string) {
    return `/exercise/${exerciseId}`;
  },
};

export default paths;
