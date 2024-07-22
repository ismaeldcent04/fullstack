import { useDispatch } from 'react-redux';
import { createAnecdote, getId } from '../reducers/anecdoteReducer';

export const AnecdoteForm = () => {
  const dispatch = useDispatch();
  const addAnecdote = (e) => {
    e.preventDefault();
    const content = e.target.anecdote.value;
    e.target.anecdote.value = '';
    const newAnecdote = {
      id: getId(),
      content,
      votes: 0,
    };
    dispatch(createAnecdote(newAnecdote));
  };
  return (
    <>
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <div>
          <input name='anecdote' />
        </div>
        <button>create</button>
      </form>
    </>
  );
};
