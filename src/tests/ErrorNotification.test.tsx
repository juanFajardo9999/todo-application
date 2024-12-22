import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import ErrorNotification from '../components/ErrorNotification.tsx';
import { clearErrors } from '../redux/errorSlice';
import '@testing-library/jest-dom';


const mockStore = configureStore([]);

describe('ErrorNotification', () => {
  it('should render an error message and call clearErrors on close', () => {
    const store = mockStore({
      errors: { messages: ['Test Error'] },
    });

    render(
      <Provider store={store}>
        <ErrorNotification />
      </Provider>
    );

    expect(screen.getByText('Test Error')).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: /close/i }));
    const actions = store.getActions();
    expect(actions).toContainEqual(clearErrors());
  });
});