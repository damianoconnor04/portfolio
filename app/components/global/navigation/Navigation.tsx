'use client'
import React from 'react'
import useMediaQuery from '@mui/material/useMediaQuery'
import Links from './Links';
import Box from '@mui/material/Box';

const Navigation = () => {
  const isTablet = useMediaQuery('(max-width: 960px)');
  if (!isTablet) return null
  return (
    <Box sx={{ pt: 6 }}>
      <Links />
    </Box>
  )
}

export default Navigation