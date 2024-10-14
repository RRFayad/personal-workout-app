interface WorkoutDayPlanPageProps {
  params: {
    dayId: string;
    workoutProgramId: number;
  };
}

function WorkoutDayPlanPage({ params }: WorkoutDayPlanPageProps) {
  const { workoutProgramId, dayId } = params;

  return <h1>Workout Day {dayId}</h1>;
}

export default WorkoutDayPlanPage;
