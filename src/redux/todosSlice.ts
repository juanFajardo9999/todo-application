import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Todo {
  id: string;
  title: string;
  status: 'Todo' | 'Doing' | 'Done';
}

interface TodosState {
  todos: Todo[];
}

const initialState: TodosState = {
  todos: [],
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      // Asegurarse de que no haya duplicados
      if (!state.todos.some((todo) => todo.id === action.payload.id)) {
        state.todos.push(action.payload);
      }
    },
    editTodo: (state, action: PayloadAction<{ id: string; title: string }>) => {
      const todo = state.todos.find((todo) => todo.id === action.payload.id);
      if (todo) todo.title = action.payload.title;
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    changeStatus: (state, action: PayloadAction<{ id: string; status: string }>) => {
      const todo = state.todos.find((todo) => todo.id === action.payload.id);
      if (todo) todo.status = action.payload.status as 'Todo' | 'Doing' | 'Done';
    },
  },
});

export const { addTodo, editTodo, deleteTodo, changeStatus } = todosSlice.actions;
export default todosSlice.reducer;
