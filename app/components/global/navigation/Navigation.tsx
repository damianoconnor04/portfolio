'use client'
import React from 'react'
import Links from './Links';
import Box from '@mui/material/Box';
import { useIsMobile } from '@/hooks/useIsMobile';

const Navigation = () => {
  const { isTablet } = useIsMobile()
  if (isTablet === undefined) return null // SSR check
  if (!isTablet) return null // render on mobile
  return (
    <Box sx={{ pt: 6 }}>
      <Links />
    </Box>
  )
}

export default Navigation