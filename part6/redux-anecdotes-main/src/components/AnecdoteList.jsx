import { useDispatch, useSelector } from 'react-redux';

import Filter from './Filter';
import { voteAnecdote } from '../reducers/anecdoteReducer';
import { anecdoteNotification } from '../reducers/notificationReducer';

export const AnecdoteList = () => {
  const anecdotes = useSelector((state) => {
    if (state.filter === 'ALL') {
      const anecdotesArray = [...state.anecdotes];
      return anecdotesArray.sort((a, b) => b.votes - a.votes);
    }

    const filteredAnecdotes = state.anecdotes.filter((anecdote) =>
      anecdote.content.includes(state.filter)
    );
    return filteredAnecdotes.sort((a, b) => b.votes - a.votes);
  });

  const dispatch = useDispatch();

  const vote = (id, anecdote) => {
    dispatch(voteAnecdote(id));
    dispatch(anecdoteNotification(`You voted '${anecdote}'`));
    setTimeout(() => {
      dispatch(anecdoteNotification(null));
    }, 5000);
  };
  return (
    <>
      {anecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id, anecdote.content)}>
              vote
            </button>
          </div>
        </div>
      ))}
    </>
  );
};
