import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoForm from '../components/TodoForm.tsx';

describe('TodoForm', () => {
  it('should call onSubmit with the correct value', () => {
    const onSubmit = jest.fn();

    render(<TodoForm onSubmit={onSubmit} />);

    fireEvent.change(screen.getByLabelText(/todo title/i), {
      target: { value: 'New Todo' },
    });
    fireEvent.click(screen.getByRole('button', { name: /save/i }));

    expect(onSubmit).toHaveBeenCalledWith('New Todo');
  });

  it('should not call onSubmit with an empty input', () => {
    const onSubmit = jest.fn();

    render(<TodoForm onSubmit={onSubmit} />);
    fireEvent.click(screen.getByRole('button', { name: /save/i }));

    expect(onSubmit).not.toHaveBeenCalled();
  });
});
