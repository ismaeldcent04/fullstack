export const FavoriteAnecdote = ({ anecdote, votes }) => {
  return (
    <section>
      <h2>Anecdote with most votes</h2>
      <p>{anecdote} </p>
      <p>Has {votes} votes</p>
    </section>
  );
};
