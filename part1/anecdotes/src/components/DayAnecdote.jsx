export const DayAnecdote = ({ anecdote, votes, handleVote, handleNext }) => {
  return (
    <section>
      <h2>Anecdote of the day</h2>
      <p>{anecdote} </p>
      <p>Has {votes} votes</p>
      <button onClick={handleVote}>Vote</button>
      <button onClick={handleNext}>Next anecdote</button>
    </section>
  );
};
