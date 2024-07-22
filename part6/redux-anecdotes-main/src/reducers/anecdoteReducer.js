import { createSlice, current } from '@reduxjs/toolkit';

const anecdotes = [
  { id: 1, content: 'If it hurts, do it more often', votes: 0 },
  {
    id: 2,
    content: 'Adding manpower to a late software project makes it later!',
    votes: 0,
  },
  {
    id: 3,
    votes: 0,
    content:
      'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  },
  {
    id: 4,
    votes: 0,
    content:
      'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  },
  {
    id: 5,
    votes: 0,
    content: 'Premature optimization is the root of all evil.',
  },
  {
    id: 6,
    votes: 0,
    content:
      'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
  },
];

export const getId = () => (100000 * Math.random()).toFixed(0);

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [...anecdotes],
  reducers: {
    voteAnecdote(state, action) {
      const anecdoteToVote = state.find(
        (anecdote) => anecdote.id === action.payload
      );

      console.log(current(state));

      const updatedAnecdote = {
        ...anecdoteToVote,
        votes: anecdoteToVote.votes + 1,
      };
      return state.map((anecdote) =>
        anecdote.id !== updatedAnecdote.id ? anecdote : updatedAnecdote
      );
    },
    createAnecdote(state, action) {
      return [...state, action.payload];
    },
  },
});

export const { createAnecdote, voteAnecdote } = anecdoteSlice.actions;

export default anecdoteSlice.reducer;
