import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

interface TodoFormProps {
  onSubmit: (title: string) => void;
  initialValue?: string;
}

const TodoForm: React.FC<TodoFormProps> = ({ onSubmit, initialValue = '' }) => {
  const [title, setTitle] = useState(initialValue);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      onSubmit(title);
      setTitle('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Todo Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        fullWidth
        required
      />
      <Button type="submit" variant="contained" color="primary" style={{ marginTop: '10px' }}>
        Save
      </Button>
    </form>
  );
};

export default TodoForm;
