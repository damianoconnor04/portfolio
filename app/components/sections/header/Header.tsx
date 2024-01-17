'use client'
import React from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import CustomIconButton from '../../global/CustomIconButton'
import SkewedGrid from './SkewedGrid'
import Container from '@mui/material/Container'
import CustomButton from '../../global/CustomButton'
import useMediaQuery from '@mui/material/useMediaQuery'
import { GitHub, LinkedIn, FileDownloadOutlined, Email } from '@mui/icons-material'

const Header = () => {
  // show/hide header btns
  const isTablet = useMediaQuery('(max-width: 960px)');

  // state
  const [mousePosition, setMousePosition] = React.useState<{ x: number, y: number }>({ x: 0, y: 0 });
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
      sx={{ py: isTablet ? 1 : 3, position: 'relative', overflow: 'hidden', height: '100%', borderBottom: '2px solid #2b2b2bbb' }}
    >
      <Container>
        <Stack gap={2} sx={{ py: 2.5, zIndex: 1, }}>
          <Typography variant='h1'>Damian O&apos;Connor</Typography>
          <Typography variant='h5' sx={{ mt: -1, textWrap: 'pretty', zIndex: 1 }}>Front End Developer at Leap Brands</Typography>
          <Typography variant='body2' sx={{ textWrap: 'pretty', zIndex: 1, cursor: 'default', }}>I bring ideas to life through elegant, responsive web solutions— pixel by pixel.</Typography>
        </Stack>
        <Stack direction='row' justifyContent='space-between' alignItems='center' sx={{ mt: -0.5, pb: isTablet ? 1 : 3, }}>
          <Stack direction='row' gap={1.5}>
            <CustomIconButton><GitHub /></CustomIconButton>
            <CustomIconButton><LinkedIn /></CustomIconButton>
            <CustomIconButton><Email /></CustomIconButton>
          </Stack>
          {!isTablet && <CustomButton icon={<FileDownloadOutlined />}>Resume</CustomButton>}
        </Stack>
      </Container>
      <SkewedGrid opacity={opacity} mousePosition={mousePosition} />
    </Box>
  )
}

export default Header