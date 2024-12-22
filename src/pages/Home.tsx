import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchTodos } from '../utils/api.ts';
import { addTodo } from '../redux/todosSlice.ts';
import { addError } from '../redux/errorSlice.ts';

import TodoManager from '../features/TodoManager.tsx';

const Home: React.FC = () => {
  const dispatch = useDispatch();
  console.log("Home component mounted");

  useEffect(() => {
    const loadTodos = async () => {
      try {
        const todos = await fetchTodos();
        console.log('TODOS',todos);
        todos.forEach((todo: { id: string; title: string; status: 'Todo' | 'Doing' | 'Done' }) => {
          dispatch(addTodo(todo));
        });
      } catch (error) {
        console.error("Failed to load todos:", error);
        dispatch(addError(error.message || "An unexpected error occurred"));
      }
    };

    loadTodos();
  }, [dispatch]);

  return <TodoManager />;
};

export default Home;
