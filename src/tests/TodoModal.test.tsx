// TodoModal.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoModal from '../components/TodoModal.tsx';

describe('TodoModal', () => {
  it('should call onSubmit with sanitized title', () => {
    const onSubmit = jest.fn();
    const onClose = jest.fn();

    render(
      <TodoModal open={true} onSubmit={onSubmit} onClose={onClose} />
    );

    fireEvent.change(screen.getByLabelText(/todo title/i), {
      target: { value: 'New Todo' },
    });
    fireEvent.click(screen.getByText(/save/i));

    expect(onSubmit).toHaveBeenCalledWith('New Todo');
  });

  it('should call onClose when Cancel button is clicked', () => {
    const onSubmit = jest.fn();
    const onClose = jest.fn();

    render(
      <TodoModal open={true} onSubmit={onSubmit} onClose={onClose} />
    );

    fireEvent.click(screen.getByText(/cancel/i));
    expect(onClose).toHaveBeenCalled();
  });
});
