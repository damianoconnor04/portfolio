'use client'
import React from 'react';
import Box from '@mui/material/Box';
import { useMediaQuery } from '@mui/material';

interface SkewedGridProps {
  opacity: number;
  mousePosition: { x: number; y: number };
}
const SkewedGrid: React.FC<SkewedGridProps> = ({ opacity, mousePosition }) => {
  const isMobile = useMediaQuery('(max-width: 600px)');
  const isTablet = useMediaQuery('(max-width: 960px)');
  const isDesktop = useMediaQuery('(max-width: 1360px)');
  const isLargeDesktop = useMediaQuery('(max-width: 1760px)');
  const totalSquares = isMobile ? 48 : isTablet ? 72 : isDesktop ? 112 : isLargeDesktop ? 144 : 176;
  const rows = 8;

  return (
    <Box
      sx={{
        position: 'absolute',
        inset: 0,
        perspective: '5cm', // magic number
        transform: 'rotateX(-22.5deg)', // tilt upward
        display: 'grid',
        placeItems: 'center'
      }}
    >
      {/* grid parent */}
      <Box
        sx={{
          transform: 'rotateX(22.5deg)', // tilt upward
          height: '200%',
          width: '200%', // fill screen
          display: 'grid',
          position: 'relative',
          gridTemplateColumns: isMobile ? 'repeat(6,1fr)' : isTablet ? 'repeat(9,1fr)' : isDesktop ? 'repeat(14,1fr)' : isLargeDesktop ? 'repeat(18,1fr)' : 'repeat(22,1fr)',
          gridTemplateRows: `repeat(${rows},1fr)`,
          background: 'linear-gradient(-2deg, #ffffff15 0%, rgba(0,0,0,0) 60%)',
          marginTop: '-12px'
        }}
      >
        {/* grid items */}
        {[...Array(totalSquares)].map((_, index) => (
          <Box
            key={index}
            sx={{
              pointerEvents: 'none',
              backgroundColor: 'rgba(0,0,0,0)',
              border: `1px solid ${index < totalSquares / rows
                ? '#ffffff08' // back row
                : index < (totalSquares / rows) * 2
                  ? '#ffffff0a'
                  : index < (totalSquares / rows) * 3
                    ? '#ffffff0b'
                    : '#ffffff10' // front row
                }`,
            }}
          />
        ))}

        {/* hover gradient */}
        {!isMobile && <Box sx={{ position: 'absolute', width: '100%', height: '100%', opacity: opacity, transition: (theme) => theme.transitions.create('opacity', { duration: theme.transitions.duration.standard, easing: theme.transitions.easing.easeOut }), background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, #ffffff10, rgba(0,0,0,0) 60%)`, }} />}
      </Box>
    </Box>
  );
};

export default SkewedGrid;