import React, { useState, useEffect } from 'react';
import DOMPurify from 'dompurify';
import { Modal, TextField, Button } from '@mui/material';

interface TodoModalProps {
  open: boolean;
  initialValue?: string;
  onSubmit: (title: string) => void;
  onClose: () => void;
}

const TodoModal: React.FC<TodoModalProps> = ({ open, initialValue = '', onSubmit, onClose }) => {
  const [title, setTitle] = useState(initialValue);

  useEffect(() => {
    setTitle(initialValue);
  }, [initialValue]);

  const handleSubmit = () => {
    const sanitizedTitle = DOMPurify.sanitize(title); // Sanitiza el título antes de enviarlo
    if (sanitizedTitle.trim()) {
      onSubmit(sanitizedTitle);
      setTitle('');
      onClose();
    }
  };

  return (
    <Modal open={open} onClose={onClose}>
      <div style={{ padding: 20, backgroundColor: '#fff', margin: '20% auto', width: 300 }}>
        <h3>{initialValue ? 'Edit Todo' : 'Add Todo'}</h3>
        <TextField
          label="Todo Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          fullWidth
          required
        />
        <div style={{ marginTop: 10 }}>
          <Button onClick={handleSubmit} variant="contained" color="primary">
            Save
          </Button>
          <Button onClick={onClose} variant="outlined" color="secondary" style={{ marginLeft: 10 }}>
            Cancel
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default TodoModal;
