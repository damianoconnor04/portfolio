'use client'
import React from 'react'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import CustomTextButton from '../../global/CustomTextButton'
import useTheme from '@mui/material/styles/useTheme'
import { skills, skillsType } from './_content'
import { alpha, useMediaQuery } from '@mui/material'
import SkillsMap from './SkillsMap'

const Skills = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery('(max-width: 600px)')
  const [activeSkill, setActiveSkill] = React.useState<skillsType>('Design')

  const activeBg = theme.palette.text.primary + '!important'
  const activeColor = theme.palette.background.default + '!important'

  return (
    <>
      <Box className='section' sx={{ p: 3, px: 0, }}>
        <Stack direction='column' gap={3} sx={{ py: 2, px: 4, backgroundColor: (theme) => alpha(theme.palette.grey[900], 0.3), border: '1px solid', borderColor: (theme) => alpha(theme.palette.grey[800], 0.3), borderRadius: '16px' }}>
          <Typography variant='h3' sx={{ textAlign: 'center', cursor: 'default' }}>Workflow</Typography>
          <Box sx={{ gap: 1.5, mx: 'auto', maxWidth: 'fit-content', display: isMobile ? 'grid' : 'flex', ...(isMobile && { gridTemplateColumns: 'repeat(2,1fr)', placeItems: 'center' }), }}>
            {skills.map((skill, idx) => (
              <CustomTextButton key={idx} onClick={() => setActiveSkill(skill)} sx={{ backgroundColor: activeSkill === skill ? activeBg : theme.palette.background.default + '!important', color: activeSkill === skill ? activeColor : theme.palette.text.secondary, zIndex: 5 }}>
                {skill}
              </CustomTextButton>
            ))}
          </Box>
          <Box sx={{ display: 'grid', placeItems: 'center', my: 2 }}>
            <SkillsMap activeSkill={activeSkill} />
          </Box>
        </Stack>
      </Box>
    </>
  )
}

export default Skills