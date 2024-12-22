import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../components/TodoList.tsx';
import '@testing-library/jest-dom';

describe('TodoList', () => {
  const todos = [
    { id: '1', title: 'Test Todo 1', status: 'Todo' as 'Todo' },
    { id: '2', title: 'Test Todo 2', status: 'Doing' as 'Doing' },
  ];

  it('should render a list of todos', () => {
    render(
      <TodoList
        todos={todos}
        onEdit={jest.fn()}
        onDelete={jest.fn()}
        onChangeStatus={jest.fn()}
      />
    );

    expect(screen.getByText(/test todo 1/i)).toBeInTheDocument();
    expect(screen.getByText(/test todo 2/i)).toBeInTheDocument();
  });

  it('should call onEdit when Edit button is clicked', () => {
    const onEdit = jest.fn();

    render(
      <TodoList
        todos={todos}
        onEdit={onEdit}
        onDelete={jest.fn()}
        onChangeStatus={jest.fn()}
      />
    );

    fireEvent.click(screen.getAllByText(/edit/i)[0]);

    expect(onEdit).toHaveBeenCalledWith('1');
  });
});
