'use client';
import React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ProjectsMap from './ProjectsMap';
import { alpha, useTheme } from '@mui/material';
import { mono } from '@/lib/theme';
import { useIsMobile } from '@/hooks/useIsMobile';

const Projects = () => {
  const theme = useTheme();
  const { isMobile } = useIsMobile();

  return (
    <Box
      className='section'
      sx={{ py: 6, px: 4, width: '100%', position: 'relative' }}>
      <Box
        sx={{
          position: 'absolute',
          top: '0px',
          left: isMobile ? '-150px' : '0px',
          zIndex: -1,
          borderRadius: '50%',
          filter: 'blur(100px)',
          width: '600px',
          height: '600px',
          backgroundImage: (theme) =>
            `radial-gradient(at 0 0, 
            ${alpha(theme.palette.primary.light, 0.25)}, 
            ${alpha(theme.palette.primary.main, 0.1)}, 
            ${alpha(theme.palette.primary.dark, 0)}
            )`,
        }}
      />
      <Stack direction='column' gap={3} sx={{ py: 2 }}>
        <Stack gap={1}>
          <Typography
            variant='h4'
            sx={{
              textAlign: 'center',
              cursor: 'default',
              color: theme.palette.primary.dark,
              fontFamily: mono,
            }}>
            02.
          </Typography>
          <Typography
            variant='h3'
            sx={{
              textAlign: 'center',
              cursor: 'default',
              textShadow: `1px 1px 4px ${theme.palette.primary.dark}`,
              color: theme.palette.text.primary,
            }}
          >
            Projects
          </Typography>
        </Stack>
        <ProjectsMap />
      </Stack>
    </Box>
  );
};

export default Projects;
