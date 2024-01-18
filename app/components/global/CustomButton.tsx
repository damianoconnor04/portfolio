'use client'
import React from 'react'
import Button from '@mui/material/Button'

type CustomButtonProps = { children: React.ReactNode, icon?: React.ReactElement }
const CustomButton: React.FC<CustomButtonProps> = ({ children, icon }) => {
  return (
    <Button startIcon={icon} variant='contained' sx={{ color: (theme) => theme.palette.background.default, backgroundColor: (theme) => theme.palette.text.primary + '!important', zIndex: 1, borderRadius: '100px', fontSize: '1.125rem !important', height: 'fit-content', lineHeight: 1.5, p: 0.75, px: 2 }}>
      {children}
    </Button>
  )
}

export default CustomButton