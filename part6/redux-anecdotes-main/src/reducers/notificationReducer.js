import { createSlice } from '@reduxjs/toolkit';

const notificationSlice = createSlice({
  name: 'notification',
  initialState: null,
  reducers: {
    anecdoteNotification(state, action) {
      return action.payload;
    },
  },
});

export const { anecdoteNotification } = notificationSlice.actions;
export default notificationSlice.reducer;
