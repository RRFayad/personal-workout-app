const paths = {
  // Login OAuth - User start with OAuth, or Click to Login with email and PW or Click to Sign In
  home() {
    return "/";
  },
  login() {
    return "/";
  },
  signUp() {
    return "/auth/sign-up";
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
  workoutPlan() {
    return "/workout/plan";
  },
  // Workout Tracker
  workoutTracker() {
    return "/workout/tracker";
  },
  // Exercise Detail
  exerciseDetail(exerciseId: string) {
    return `/exercise/${exerciseId}`;
  },
};

export default paths;
