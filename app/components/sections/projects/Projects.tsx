'use client'
import React from 'react'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import CustomTextButton from '../../global/CustomTextButton'
import useTheme from '@mui/material/styles/useTheme'
import { alpha, useMediaQuery } from '@mui/material'
import ProjectsMap from './ProjectsMap'

const Projects = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery('(max-width: 600px)')

  return (
    <>
      <Box className='section' sx={{ py: 5, px: 4, }}>
        <Stack direction='column' gap={3} sx={{ py: 2 }}>
          <Typography variant='h3' sx={{ textAlign: 'center', cursor: 'default' }}>Projects</Typography>
          <ProjectsMap />
        </Stack>
      </Box>
    </>
  )
}

export default Projects