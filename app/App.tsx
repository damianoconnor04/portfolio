import React from 'react';
import Box from '@mui/material/Box';
import Header from './components/sections/header/Header';
import Skills from './components/sections/skills/Skills';
import Container from '@mui/material/Container';
import Projects from './components/sections/projects/Projects';
import Divider from '@mui/material/Divider';
import Navigation from './components/global/navigation/Navigation';
import Contact from './components/sections/contact/Contact';
import Footer from './components/sections/footer/Footer';

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
        <Divider orientation='vertical' sx={{ height: '8rem' }} />
        <Contact />
        <Footer />
      </Container>
    </Box>
  );
};

export default App;
