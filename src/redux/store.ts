import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './todosSlice.ts';
import errorReducer from './errorSlice.ts';
import errorMiddleware from './errorMiddleware.ts';

export const store = configureStore({
  reducer: {
    todos: todosReducer,
    errors: errorReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(errorMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
