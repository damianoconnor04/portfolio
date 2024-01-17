'use client'
import React from 'react'
import Box from '@mui/material/Box'
import Header from './components/sections/header/Header'
import Skills from './components/sections/skills/Skills'
import Container from '@mui/material/Container'
import Projects from './components/sections/projects/Projects'
import { alpha } from '@mui/material'
import Links from './components/sections/header/Links'

const App = () => {
  return (
    <Box>
      <Header />

      <Container>
        <Box sx={{ border: '2px solid', borderColor: (theme) => alpha(theme.palette.grey[800], 0.3), }}>
          <Links />
          <Skills />
          <Projects />
        </Box>
      </Container>
    </Box>
  )
}

export default App