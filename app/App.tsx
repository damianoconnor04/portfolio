'use client'
import React from 'react';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Skeleton from '@mui/material/Skeleton';
import Header from './components/sections/header/Header';
import Skills from './components/sections/skills/Skills';
import Container from '@mui/material/Container';
import Projects from './components/sections/projects/Projects';
import Divider from '@mui/material/Divider';
import Navigation from './components/global/navigation/Navigation';
import Contact from './components/sections/contact/Contact';
import Footer from './components/sections/footer/Footer';
import { useIsMobile } from '@/hooks/useIsMobile';
import OneToMany from '@/app/components/global/OneToManyConnector';

const App = () => {
  const { isMobile, isTablet, isDesktop, isLargeDesktop } = useIsMobile();
  if (isMobile === undefined || isTablet === undefined || isDesktop === undefined || isLargeDesktop === undefined) {
    return (
      <Box sx={{ height: '100%', width: '100%', display: 'grid', placeItems: 'center' }}>
        <CircularProgress />
      </Box>
    )
  }

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
        <OneToMany />
        <Projects />
        <OneToMany flipped />
        <Contact />
        <Footer />
      </Container>
    </Box>
  );
};

export default App;
