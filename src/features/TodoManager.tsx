import React, { useCallback, useMemo, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store.ts';
import { addTodo, editTodo, deleteTodo, changeStatus } from '../redux/todosSlice.ts';
import TodoList from '../components/TodoList.tsx';
import StatusConfirmation from '../components/StatusConfirmation.tsx';
import TodoModal from '../components/TodoModal.tsx';
import { v4 as uuidv4 } from 'uuid';
import { Button, ButtonGroup } from '@mui/material';

const TodoManager: React.FC = () => {
  const todos = useSelector((state: RootState) => state.todos.todos);
  const dispatch = useDispatch();

  const [filter, setFilter] = useState<'All' | 'Todo' | 'Doing' | 'Done'>('All');
  const [editingTodo, setEditingTodo] = useState<{ id: string; title: string } | null>(null);
  const [statusChange, setStatusChange] = useState<{ id: string; newStatus: 'Todo' | 'Doing' | 'Done' } | null>(null);
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = (todo?: { id: string; title: string }) => {
    setEditingTodo(todo || null);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setEditingTodo(null);
  };

  const handleAddTodo = useCallback((title: string) => {
    dispatch(addTodo({
      id: uuidv4(),
      title,
      status: 'Todo'
    }));
  }, [dispatch]);

  const handleEditTodo = useCallback((id: string, title: string) => {
    dispatch(editTodo({ id, title }));
  }, [dispatch]);

  const handleDeleteTodo = useCallback((id: string) => {
    dispatch(deleteTodo(id));
  }, [dispatch]);

  const handleChangeStatus = (id: string, newStatus: 'Todo' | 'Doing' | 'Done') => {
    if (newStatus === 'Done') {
      setStatusChange({ id, newStatus });
    } else {
      dispatch(changeStatus({ id, status: newStatus }));
    }
  };

  const handleConfirmStatusChange = () => {
    if (statusChange) {
      dispatch(changeStatus({ id: statusChange.id, status: statusChange.newStatus }));
      setStatusChange(null);
    }
  };

  const handleCancelStatusChange = () => {
    setStatusChange(null);
  };

  const filteredTodos = useMemo(() => {
    return filter === 'All' ? todos : todos.filter((todo) => todo.status === filter);
  }, [filter, todos]);

  return (
    <div>
<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '2rempx', marginBottom: '2rem' }}>
  <ButtonGroup variant="contained" aria-label="outlined primary button group">
    <Button onClick={() => setFilter('All')}>All</Button>
    <Button onClick={() => setFilter('Todo')}>Todo</Button>
    <Button onClick={() => setFilter('Doing')}>Doing</Button>
    <Button onClick={() => setFilter('Done')}>Done</Button>
  </ButtonGroup>
  <Button variant="contained" color="secondary" onClick={() => openModal()}>
    Add Todo
  </Button>
</div>


      <TodoList
        todos={filteredTodos}
        onEdit={(id) => openModal({ id, title: todos.find((t) => t.id === id)?.title || '' })}
        onDelete={handleDeleteTodo}
        onChangeStatus={handleChangeStatus}
      />

      {statusChange && (
        <StatusConfirmation
          onConfirm={handleConfirmStatusChange}
          onCancel={handleCancelStatusChange}
          open={true}
        />
      )}

      <TodoModal
        open={isModalOpen}
        initialValue={editingTodo?.title || ''}
        onSubmit={(title) => (editingTodo ? handleEditTodo(editingTodo.id, title) : handleAddTodo(title))}
        onClose={closeModal}
      />
    </div>
  );
};

export default TodoManager;
