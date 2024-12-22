import React from 'react';
import TodoItem from './TodoItem.tsx';

interface Todo {
  id: string;
  title: string;
  status: 'Todo' | 'Doing' | 'Done';
}

interface TodoListProps {
  todos: Todo[];
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
  onChangeStatus: (id: string, newStatus: 'Todo' | 'Doing' | 'Done') => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, onEdit, onDelete, onChangeStatus }) => {
  return (
    <>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          title={todo.title}
          status={todo.status}
          onEdit={() => onEdit(todo.id)}
          onDelete={() => onDelete(todo.id)}
          onChangeStatus={(newStatus) => onChangeStatus(todo.id, newStatus)}
        />
      ))}
    </>
  );
};

export default TodoList;
