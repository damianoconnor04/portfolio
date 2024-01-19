'use client';
import React from 'react';
import Button from '@mui/material/Button';
import { SxProps, alpha } from '@mui/material';

interface CustomTextButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  sx: SxProps;
  ariaLabel: string;
}
const CustomTextButton: React.FC<CustomTextButtonProps> = ({
  children,
  onClick,
  ariaLabel,
  sx,
}) => {
  const [pressing, setPressing] = React.useState(false);
  return (
    <Button
      disableRipple
      onClick={onClick}
      onMouseDown={() => setPressing(true)}
      onMouseLeave={() => setPressing(false)}
      onMouseUp={() => setPressing(false)}
      color='primary'
      aria-label={ariaLabel}
      sx={{
        ...sx,
        textTransform: 'unset',
        minWidth: 0,
        maxWidth: 'fit-content',
        fontSize: '1.125rem',
        '@media(min-width:960px)': {
          fontSize: '1.25rem',
        },
        '@media(min-width:1400px)': {
          fontSize: '1.5rem',
        },
        py: 0.75,
        px: 1.75,
        scale: pressing ? 0.94 + '!important' : 1 + '!important',
        transition: (theme) =>
          theme.transitions.create(['scale', 'outline-color'], {
            duration: theme.transitions.duration.shorter,
            easing: theme.transitions.easing.sharp,
          }),
        borderRadius: '100px',
        outline: '1px solid',
        outlineColor: (theme) => alpha(theme.palette.grey[800], 0.85),
        '&:hover': { outlineColor: (theme) => theme.palette.grey[700] },
      }}>
      {children}
    </Button>
  );
};

export default CustomTextButton;
