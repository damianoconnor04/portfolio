'use client'
import React from 'react'
import Button from '@mui/material/Button'
import { alpha } from '@mui/material'

type CustomIconButtonProps = { children: React.ReactNode, ariaLabel: string }
const CustomIconButton: React.FC<CustomIconButtonProps> = ({ children, ariaLabel }) => {
  return (
    <Button aria-label={ariaLabel} sx={{ color: (theme) => theme.palette.text.secondary, zIndex: 1, minWidth: 0, p: 0.75, borderRadius: '100px', border: '1px solid', borderColor: (theme) => theme.palette.grey[800], '&:hover': { backgroundColor: (theme) => alpha(theme.palette.text.primary, theme.palette.action.hoverOpacity) + '!important' }, }}>
      {React.cloneElement(children as React.ReactElement, {
        sx: { fontSize: '1.5rem' },
      })}
    </Button>
  )
}

export default CustomIconButton