import React from 'react';
import { Card, CardContent, Typography, Button, Select, MenuItem } from '@mui/material';
import DOMPurify from 'dompurify';
import './styles.css';

interface TodoItemProps {
  id: string;
  title: string;
  status: 'Todo' | 'Doing' | 'Done';
  onEdit: () => void;
  onDelete: () => void;
  onChangeStatus: (newStatus: 'Todo' | 'Doing' | 'Done') => void;
}

const TodoItem: React.FC<TodoItemProps> = React.memo(({ id, title, status, onEdit, onDelete, onChangeStatus }) => {
  const sanitizedTitle = DOMPurify.sanitize(title);
  return (
<Card style={{ marginBottom: '10px' }}>
  <CardContent style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <Typography variant="h5" dangerouslySetInnerHTML={{ __html: sanitizedTitle }} />
      <Select
        value={status}
        onChange={(e) => onChangeStatus(e.target.value as 'Todo' | 'Doing' | 'Done')}
        style={{ marginLeft: 'auto' }}
      >
        <MenuItem value="Todo">Todo</MenuItem>
        <MenuItem value="Doing">Doing</MenuItem>
        <MenuItem value="Done">Done</MenuItem>
      </Select>
    </div>
    <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }} className="button-container">
      <Button onClick={onEdit} variant="outlined" color="primary">
        Edit
      </Button>
      <Button onClick={onDelete} variant="outlined" color="secondary">
        Delete
      </Button>
    </div>
  </CardContent>
</Card>


  );
});

export default TodoItem;
