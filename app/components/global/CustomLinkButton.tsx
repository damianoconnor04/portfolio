import React from 'react'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { SxProps } from '@mui/material';

interface CustomLinkButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  typographySx?: SxProps;
  ariaLabel?: string; // only use if text is not descriptive enough
}
const CustomLinkButton: React.FC<CustomLinkButtonProps> = ({ onClick, children, typographySx, ariaLabel }) => {
  return (
    <Typography onClick={onClick} role='button' component='button' aria-label={ariaLabel} variant='subtitle1' sx={{ ...typographySx, color: (theme) => theme.palette.primary.light, '&:hover': { color: (theme) => theme.palette.primary.dark }, transition: (theme) => theme.transitions.create('color', { duration: theme.transitions.duration.shortest, easing: theme.transitions.easing.sharp }) }}>{children}</Typography>
  )
}

export default CustomLinkButton