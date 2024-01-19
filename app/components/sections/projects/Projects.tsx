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
  if (isMobile === undefined) return null;

  return (
    <Box component='section' sx={{ py: 6, px: isMobile ? 0 : 4, position: 'relative', width: '100%', }}>

      <div className={`absolute top-0 ${isMobile ? 'left-[-50px]' : 'left-0'} primary-radial-gradient w-[600px] h-[600px] rounded-full blur-3xl pointer-events-none`} />

      <Stack direction='column' gap={3}>
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
              textShadow: `1px 1px 2px ${alpha(theme.palette.primary.dark, 0.6)}`,
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
