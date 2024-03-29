'use client'
import React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { alpha, useTheme } from '@mui/material';
import { mono } from '@/lib/theme';
import { useIsMobile } from '@/hooks/useIsMobile';
import { Warning } from '@mui/icons-material';
import Divider from '@mui/material/Divider';

const Contact = () => {
  const theme = useTheme();
  const { isMobile, isTablet } = useIsMobile();
  if (isTablet === undefined || isMobile === undefined) return null;

  return (
    <Box className='section' sx={{ py: 6, px: isMobile ? 0 : 4, position: 'relative', width: '100%', }}>

      <div className={`tertiary-radial-gradient absolute ${isTablet ? 'left-1/2 -top-[100px] rotate-45' : 'left-2/3 -top-[35px] -rotate-45'} rounded-full blur-3xl w-[400px] h-[500px] pointer-events-none`} />

      <Stack direction='column' gap={3}>
        <Stack gap={1}>
          <Typography
            variant='h4'
            sx={{
              textAlign: 'center',
              cursor: 'default',
              color: theme.palette.info.main,
              fontFamily: mono,
            }}>
            03.
          </Typography>
          <Typography
            variant='h3'
            sx={{
              textAlign: 'center',
              textShadow: `1px 1px 2px ${alpha(theme.palette.info.dark, 0.8)}`,
              color: theme.palette.text.primary,
            }}>
            Get in touch.
          </Typography>
        </Stack>

        <Container maxWidth='md'>
          <Stack direction={isMobile ? 'column' : 'row'} alignItems='center' gap={2} sx={{
            p: 1.5,
            borderRadius: '6px',
            backgroundColor: alpha(theme.palette.info.dark, 0.125),
            border: '1px solid',
            borderColor: alpha(theme.palette.info.dark, 0.25),
          }}>
            <Warning color='warning' sx={{ fontSize: '2rem' }} />

            <Divider orientation={isMobile ? 'horizontal' : 'vertical'} flexItem sx={{ borderColor: alpha(theme.palette.info.dark, 0.25) }} />

            <Typography variant='body2' sx={{ color: theme.palette.text.secondary, cursor: 'default', textAlign: isMobile ? 'center' : 'initial' }}>
              I&apos;m not currently looking for new opportunities, but&nbsp;
              <Box component='a' role='button' href='mailto:damianoconnor04@gmail.com' sx={{ color: theme.palette.info.main, textDecoration: 'underline', textUnderlineOffset: 2, zIndex: 999 }}>
                my inbox
              </Box>
              &nbsp;is always open. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
            </Typography>
          </Stack>
        </Container>

      </Stack>
    </Box>
  )
}

export default Contact