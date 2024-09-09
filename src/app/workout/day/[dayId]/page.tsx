interface WorkoutDayPlanPageProps {
  params: {
    dayId: string;
  };
}

function WorkoutDayPlanPage({ params }: WorkoutDayPlanPageProps) {
  const { dayId } = params;

  return <h1>Workout Day {dayId}</h1>;
}

export default WorkoutDayPlanPage;
