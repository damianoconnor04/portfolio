'use client'
import React from 'react'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import CustomTextButton from '../../global/CustomTextButton'
import useTheme from '@mui/material/styles/useTheme'
import { alpha, useMediaQuery } from '@mui/material'

const Projects = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery('(max-width: 600px)')

  return (
    <>
        <Box className='section' sx={{ p: 3, px: 0, }}>
            <Stack direction='column' gap={3} sx={{ py: 2, backgroundColor: (theme) => alpha(theme.palette.grey[900], 0.3), border: '1px solid', borderColor: (theme) => alpha(theme.palette.grey[800], 0.3), borderRadius: '16px' }}>
              <Typography variant='h3' sx={{ textAlign: 'center', cursor: 'default' }}>Projects</Typography>

            </Stack>
        </Box>
    </>
  )
}

export default Projects