'use client'
import React from 'react'
import Button from '@mui/material/Button'

type CustomButtonProps = { children: React.ReactNode, icon?: React.ReactElement }
const CustomButton: React.FC<CustomButtonProps> = ({ children, icon }) => {
  return (
    <Button startIcon={icon} variant='contained' sx={{ color: (theme) => theme.palette.background.default, backgroundColor: (theme) => theme.palette.text.primary + '!important', zIndex: 1, borderRadius: '6px', fontSize: '1.125rem !important', py: 0.5 }}>
      {children}
    </Button>
  )
}

export default CustomButton