import { Middleware } from '@reduxjs/toolkit';

const errorMiddleware: Middleware = (store) => (next) => (action: any) => {
  if (action.type.endsWith('rejected')) {
    console.error('Error capturado:', action.error);
    store.dispatch({ type: 'errors/addError', payload: action.error.message || 'Unknown error' });
  }
  return next(action);
};

export default errorMiddleware;