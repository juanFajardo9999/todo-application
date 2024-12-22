import React from 'react';
import { Modal, Typography, Button } from '@mui/material';

interface StatusConfirmationProps {
  open: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

const StatusConfirmation: React.FC<StatusConfirmationProps> = ({ open, onConfirm, onCancel }) => {
  return (
    <Modal open={open} onClose={onCancel}>
      <div style={{ padding: 20, backgroundColor: '#fff', margin: '20% auto', width: 300 }}>
        <Typography variant="h6">Are you sure you want to mark this as Done?</Typography>
        <Button onClick={onConfirm} color="primary" variant="contained" style={{ marginTop: '10px' }}>
          Confirm
        </Button>
        <Button onClick={onCancel} color="secondary" variant="outlined" style={{ marginTop: '10px' }}>
          Cancel
        </Button>
      </div>
    </Modal>
  );
};

export default StatusConfirmation;
