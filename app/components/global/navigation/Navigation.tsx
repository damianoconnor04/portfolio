import React from 'react'
import Links from './Links';
import Container from '@mui/material/Container';

const Navigation = () => {
  return (
    <Container sx={{ pt: 6, px: 0, display: 'grid', placeItems: 'center' }}>
      <Links />
    </Container>
  )
}

export default Navigation