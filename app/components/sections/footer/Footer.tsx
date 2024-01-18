'use client'
import React from 'react'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import { mono } from '@/lib/theme'
import { East, GitHub } from '@mui/icons-material'

const Footer = () => {
  return (
    <Stack direction='row' alignItems='center' gap={1.5} mb={6}>
      <GitHub />
      <Typography variant='subtitle2' sx={{ fontFamily: mono, cursor: 'default' }}>
        This website is <Box component='a' role='button' aria-label='open GitHub repository' sx={{ color: (theme) => theme.palette.primary.main }}>open source</Box>.
      </Typography>
    </Stack>
  )
}

export default Footer