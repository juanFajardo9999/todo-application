// TodoItem.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoItem from '../components/TodoItem.tsx';

describe('TodoItem', () => {
  it('should call onEdit when Edit button is clicked', () => {
    const onEdit = jest.fn();
    const onDelete = jest.fn();
    const onChangeStatus = jest.fn();

    render(
      <TodoItem
        id="1"
        title="Test Todo"
        status="Todo"
        onEdit={onEdit}
        onDelete={onDelete}
        onChangeStatus={onChangeStatus}
      />
    );

    fireEvent.click(screen.getByText(/edit/i));
    expect(onEdit).toHaveBeenCalled();
  });

  it('should call onDelete when Delete button is clicked', () => {
    const onEdit = jest.fn();
    const onDelete = jest.fn();
    const onChangeStatus = jest.fn();

    render(
      <TodoItem
        id="1"
        title="Test Todo"
        status="Todo"
        onEdit={onEdit}
        onDelete={onDelete}
        onChangeStatus={onChangeStatus}
      />
    );

    fireEvent.click(screen.getByText(/delete/i));
    expect(onDelete).toHaveBeenCalled();
  });

});
