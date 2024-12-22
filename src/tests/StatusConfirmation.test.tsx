import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import StatusConfirmation from '../components/StatusConfirmation.tsx';

describe('StatusConfirmation', () => {
  it('should call onConfirm when confirm button is clicked', () => {
    const onConfirm = jest.fn();
    const onCancel = jest.fn();

    render(
      <StatusConfirmation open={true} onConfirm={onConfirm} onCancel={onCancel} />
    );

    fireEvent.click(screen.getByText('Confirm'));
    expect(onConfirm).toHaveBeenCalled();
  });

  it('should call onCancel when cancel button is clicked', () => {
    const onConfirm = jest.fn();
    const onCancel = jest.fn();

    render(
      <StatusConfirmation open={true} onConfirm={onConfirm} onCancel={onCancel} />
    );

    fireEvent.click(screen.getByText('Cancel'));
    expect(onCancel).toHaveBeenCalled();
  });
});