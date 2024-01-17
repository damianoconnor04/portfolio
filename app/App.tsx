import React from 'react';
import Box from '@mui/material/Box';
import Header from './components/sections/header/Header';
import Skills from './components/sections/skills/Skills';
import Container from '@mui/material/Container';
import Projects from './components/sections/projects/Projects';
import Divider from '@mui/material/Divider';
import Navigation from './components/global/navigation/Navigation';

const App = () => {
  return (
    <Box sx={{ overflow: 'hidden' }}>
      <Header />
      <Container
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Navigation />
        <Skills />
        <Divider orientation='vertical' sx={{ height: '8rem' }} />
        <Projects />
      </Container>
    </Box>
  );
};

export default App;
