const paths = {
  // Login OAuth - User start with OAuth, or Click to Login with email and PW or Click to Sign In
  home() {
    return "/";
  },
  // Form to create profile
  // Server Action - Create Profile
  // Should Revalidate profile
  createProfile() {
    return "profile/create-profile";
  },
  // Show Profile & Meal Plan
  // Server Action - Get Infos from the User
  // No Revalidation
  profile() {
    return "/profile";
  },
  // Workout Split
  // Server Action - Get Workout Plan
  // No Revalidation
  workoutSplit() {
    return "/workout";
  },
  // Workout Plan
  // Server Action - Get Daily Workout Plan
  // No Revalidation
  workoutDay(dayId: string) {
    return `/workout/day/${dayId}`;
  },
  // Workout Tracker
  // Server Action - Get Daily Workout Plan + Get Last History? + Post Workout
  // Post Workout Revalidates Workout Tracker page
  workoutTracker() {
    return "/workout/tracker";
  },
  createNutritionPlan() {
    return "/nutrition/create-plan";
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
