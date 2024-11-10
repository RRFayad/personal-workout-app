function WorkoutInstructions() {
  return (
    <ul className="flex h-full flex-col justify-between gap-y-2">
      {/* <li>
<ul>
  - Start every session with a warm-up routine! It should be 3 or 4
  sets of the 1st exercise of the day, being:
  <li className="ml-4">
    • 1° set: 50% of the working weight, for 8 - 10 reps;
  </li>
  <li className="ml-4">
    • 2° set: 50% of the working weight, for 8 - 10 reps (more
    explosive);
  </li>
  <li className="ml-4">
    • 3° set: 70% of the working weight, for 3 - 5 reps;
  </li>
  <li className="ml-4">
    • 4° set (optional): 100% of the working weight, for 1 rep.
  </li>
</ul>
</li> */}
      <li>
        - Always Focus in Full Range of Motion, with a full stretch in the
        eccentric;
      </li>
      <li>
        - Technique is the most important variable! Don&apos;t sacrifice it for
        heavier weights;
      </li>
      <li>
        - For each exercise, always challenge yourself to set a new record in
        the last set;
      </li>
      <li>
        - The other sets should finish between 2 or 1 RIR (Reps in Reserve);
      </li>
      <li>
        - Whenever you hit the top of the rep range, increase the weights
        (around 5%);
      </li>
      <li>- Always control the negative, and be explosive on the positive;</li>
      <li>- Use the workout tracker feature to track your weights and reps.</li>
    </ul>
  );
}

export default WorkoutInstructions;
