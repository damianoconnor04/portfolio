import React from 'react'
import Box from '@mui/material/Box'
import Header from './components/sections/header/Header'
import Skills from './components/sections/skills/Skills'
import Container from '@mui/material/Container'

const App = () => {
  return (
    <Box>
      <Header />
      <Container sx={{ position: 'relative' }}>
        <Skills />
      </Container>
    </Box>
  )
}

export default App