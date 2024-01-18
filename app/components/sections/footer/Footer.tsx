'use client'
import React from 'react'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import { mono } from '@/lib/theme'
import { East, GitHub } from '@mui/icons-material'

const Footer = () => {
  return (
    <Stack direction='row' alignItems='center' gap={1.5} mb={2}>
      <GitHub />
      <Typography variant='subtitle2' sx={{ fontFamily: mono }}>
        This website is open source.&nbsp;
        <Box component='a' target='_blank' sx={{ color: (theme) => theme.palette.primary.main }} href='https://github.com/damianoconnor04/portfolio/issues/new/choose'>
          Report a bug
          <Box component='span'>
            <East sx={{ fontSize: '1rem', ml: 0.625 }} />
          </Box>
        </Box>
      </Typography>
    </Stack>
  )
}

export default Footer