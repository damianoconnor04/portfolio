import React from 'react'
import Links from './Links';
import Container from '@mui/material/Container';
import { useIsMobile } from '@/hooks/useIsMobile';

const Navigation = () => {
  const { isMobile } = useIsMobile();
  if (!isMobile) return null;

  return (
    <Container sx={{ pt: 6, px: 0, display: 'grid', placeItems: 'center' }}>
      <Links />
    </Container>
  )
}

export default Navigation