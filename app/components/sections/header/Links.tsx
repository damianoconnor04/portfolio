import React from 'react'
import Link from 'next/link'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Container from '@mui/material/Container'
import { sections } from '../skills/_content'
import { alpha } from '@mui/material'

const Links = () => {
  return (
    <Container sx={{ py: 5 }}>
      <Stack direction='row' justifyContent='center' alignItems='center' gap={8}>
        {sections.map((section, idx) =>
          <Typography key={idx} variant='body2' sx={{ transition: (theme) => theme.transitions.create('color', { duration: theme.transitions.duration.shorter }), '&:hover': { color: (theme) => theme.palette.text.primary } }}>
            <Link href="#" >{section}</Link>
          </Typography>
        )}
      </Stack>
    </Container>
  )
}

export default Links