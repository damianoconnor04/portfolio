'use client'
import React from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import CustomIconButton from '../../global/CustomIconButton'
import SkewedGrid from './SkewedGrid'
import Container from '@mui/material/Container'
import CustomButton from '../../global/CustomButton'
import Link from 'next/link'
import useMediaQuery from '@mui/material/useMediaQuery'
import IconButton from '@mui/material/IconButton'
import { sections } from '../skills/_content'
import { GitHub, LinkedIn, Twitter, DragHandle, FileDownloadOutlined } from '@mui/icons-material'

const Header = () => {
  // show/hide header btns
  const isTablet = useMediaQuery('(max-width: 960px)');

  // state
  const [mousePosition, setMousePosition] = React.useState<{x: number, y: number}>({ x: 0, y: 0 });
  const [opacity, setOpacity] = React.useState<number>(0);
  const [windowWidth, setWindowWidth] = React.useState<number>(0);

  // handler for mouse tracking gradient
  React.useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth)
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, [])

  // TODO: add menu

  return (
    <Box
      onMouseMove={(e) => {
        const { clientX, clientY } = e;
        const x = clientX + windowWidth / 2; // because skewed grid width 200%
        const y = clientY;
        setMousePosition({ x, y });
      }}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      sx={{ p: 3, position: 'relative', overflow: 'hidden', height: '100%', borderBottom: '2px solid #2b2b2bbb' }}
    >
      <Container>
        <Stack gap={2} sx={{ py: 2.5, zIndex: 1, }}>
          <Stack sx={{ zIndex: 1, }} direction='row' justifyContent='space-between' alignItems='center'>
            <Typography variant='h1'>Damian O&apos;Connor</Typography>
            {isTablet
              ? (
                <IconButton sx={{ color: (theme) => theme.palette.text.secondary, outline: '1px solid', outlineColor: (theme) => theme.palette.grey[800], p: 0.75 }}><DragHandle /></IconButton>
              )
              : (
                <Stack direction='row' justifyContent='space-between' alignItems='center' gap={2}>
                  {sections.map((section, idx) =>
                    <Typography key={idx} variant='body2' sx={{ transition: (theme) => theme.transitions.create('color', { duration: theme.transitions.duration.shorter }), '&:hover': { color: (theme) => theme.palette.text.primary } }}>
                      <Link href="#" >{section}</Link>
                    </Typography>
                  )}
                </Stack>
              )}
          </Stack>
          <Typography variant='h5' sx={{ mt: -1, textWrap: 'pretty', zIndex: 1 }}>Front End Developer at Leap Brands</Typography>
          <Typography variant='body2' sx={{ textWrap: 'pretty', zIndex: 1 }}>I bring ideas to life through elegant, responsive web solutions— pixel by pixel.</Typography>
        </Stack>
        <Stack direction='row' justifyContent='space-between' alignItems='center' sx={{ mt: -0.5 }}>
          <Stack direction='row' gap={1.5}>
            <CustomIconButton><GitHub /></CustomIconButton>
            <CustomIconButton><LinkedIn /></CustomIconButton>
            <CustomIconButton><Twitter /></CustomIconButton>
          </Stack>
          {!isTablet && <CustomButton icon={<FileDownloadOutlined />}>Resume</CustomButton>}
        </Stack>
      </Container>
      <SkewedGrid opacity={opacity} mousePosition={mousePosition} />
    </Box>
  )
}

export default Header