interface ExercisePageProps {
  params: {
    exerciseId: string;
  };
}

function ExercisePage({ params }: ExercisePageProps) {
  const { exerciseId } = params;

  return <h1>Exercise page for exercise {exerciseId}</h1>;
}

export default ExercisePage;
