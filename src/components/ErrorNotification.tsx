import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store.ts';
import { clearErrors } from '../redux/errorSlice.ts';
import { Alert, Snackbar } from '@mui/material';

const ErrorNotification: React.FC = () => {
  const errors = useSelector((state: RootState) => state.errors.messages);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(clearErrors());
  };

  return (
    <Snackbar open={errors.length > 0} autoHideDuration={6000} onClose={handleClose}>
      <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
        {errors[errors.length - 1]}
      </Alert>
    </Snackbar>
  );
};

export default ErrorNotification;