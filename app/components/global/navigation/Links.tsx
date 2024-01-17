'use client'
import React from 'react';
import Link from 'next/link';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { sections } from '../../sections/skills/_content';
import { alpha } from '@mui/material';
import { mono } from '@/lib/theme';

const Links = () => {
  return (
    <Stack direction='row' justifyContent='center' alignItems='center' gap={2.5}
      sx={{
        p: 1.5, backgroundColor: (theme) => alpha(theme.palette.common.black, 0.5), backdropFilter: 'blur(2px)', border: '1px solid', borderColor: (theme) => alpha(theme.palette.grey[900], 1), borderRadius: '9px', zIndex: 1,
      }}
    >
      {sections.map((section, idx) => (
        <Typography
          key={idx}
          variant='subtitle1'
          sx={{
            transition: (theme) =>
              theme.transitions.create('color', {
                duration: theme.transitions.duration.shorter,
              }),
            color: (theme) => theme.palette.text.primary,
            '&:hover': { color: (theme) => theme.palette.primary.light },
            fontFamily: mono,
          }}>
          <Link href='#'>{section}</Link>
        </Typography>
      ))}
    </Stack>
  );
};

export default Links;
