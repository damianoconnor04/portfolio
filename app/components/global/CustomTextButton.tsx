'use client'
import React from 'react'
import Button from '@mui/material/Button'
import { SxProps } from '@mui/material';

interface CustomTextButtonProps { 
  children: React.ReactNode; 
  onClick: () => void; 
  sx: SxProps;
}
const CustomTextButton: React.FC<CustomTextButtonProps> = ({ children, onClick, sx }) => {
  const [pressing, setPressing] = React.useState(false)
  return (
    <Button disableRipple onClick={onClick} onMouseDown={() => setPressing(true)} onMouseLeave={() => setPressing(false)} onMouseUp={() => setPressing(false)} color='primary' sx={{ ...sx, textTransform: 'unset', fontSize: '0.95rem', minWidth: 0, maxWidth: 'fit-content', py: 0.75, px: 1.75, scale: pressing ? 0.95 + '!important' : 1 + '!important', transition: (theme) => theme.transitions.create(['scale', 'outline-color'],  { duration: theme.transitions.duration.shorter, easing: theme.transitions.easing.sharp }), borderRadius: '100px', outline: '1px solid', outlineColor: (theme) => theme.palette.grey[900], '&:hover': { outlineColor: (theme) => theme.palette.grey[800] } }}>
      {children}
    </Button>
  )
}

export default CustomTextButton