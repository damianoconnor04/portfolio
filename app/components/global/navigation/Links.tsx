'use client'
import React from 'react';
import Link from 'next/link';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { sections } from '../../sections/skills/_content';
import { alpha } from '@mui/material';
import { mono } from '@/lib/theme';
import { useIsMobile } from '@/hooks/useIsMobile';

const Links = () => {
  const { isMobile } = useIsMobile();

  return (
    <Stack direction='row' justifyContent='center' alignItems='center' gap={isMobile ? 2 : 5} width='fit-content'
      sx={{
        p: 2.5, backgroundColor: (theme) => alpha(theme.palette.common.black, 0.4), backdropFilter: 'blur(2px)', border: '1px solid', borderColor: (theme) => alpha(theme.palette.grey[800], 0.8), borderRadius: '9px', zIndex: 1,
      }}
    >
      {sections.map((section, idx) => (
        <Link key={idx} href='#'>
          <Typography
            variant={isMobile ? 'subtitle1' : 'body2'}
            component='h3'
            sx={{
              transition: (theme) =>
                theme.transitions.create('color', {
                  duration: theme.transitions.duration.shorter,
                }),
              color: (theme) => theme.palette.text.primary,
              '&:hover': { color: (theme) => theme.palette.primary.light },
              fontFamily: mono,
              lineHeight: 1,
            }}>
            {section}
          </Typography>
        </Link>
      ))}
    </Stack>
  );
};

export default Links;
