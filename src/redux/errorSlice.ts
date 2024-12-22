import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ErrorState {
  messages: string[];
}

const initialState: ErrorState = {
  messages: [],
};

const errorSlice = createSlice({
  name: 'errors',
  initialState,
  reducers: {
    addError: (state, action: PayloadAction<string>) => {
      state.messages.push(action.payload);
    },
    clearErrors: (state) => {
      state.messages = [];
    },
  },
});

export const { addError, clearErrors } = errorSlice.actions;
export default errorSlice.reducer;