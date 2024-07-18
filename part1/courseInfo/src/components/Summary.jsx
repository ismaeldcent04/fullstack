export const Summary = ({ parts }) => {
  const exercises = parts
    .map((part) => part.exercises)
    .reduce((accumulator, currentvalue) => accumulator + currentvalue, 0);

  return <b>total of {exercises} exercises</b>;
};
