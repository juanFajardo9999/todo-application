import React from 'react';
import { Container, Typography } from '@mui/material';
import Home from '../pages/Home.tsx';
import ErrorNotification from '../components/ErrorNotification.tsx';

const App: React.FC = () => {
  return (
    <Container>
<Typography
  variant="h2"
  component="h1"
  gutterBottom
  style={{
    textAlign: 'center',
    color: '#1976d2',
    fontWeight: 'bold',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
    marginBottom: '20px',
  }}
>
  Todo Application
</Typography>

      <Home />
      <ErrorNotification />
    </Container>
  );
};

export default App;