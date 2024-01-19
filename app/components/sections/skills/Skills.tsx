'use client';
import React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import CustomTextButton from '../../global/CustomTextButton';
import useTheme from '@mui/material/styles/useTheme';
import { skills, skillsType } from './_content';
import { alpha } from '@mui/material';
import SkillsMap from './SkillsMap';
import { mono } from '@/lib/theme';
import { useIsMobile } from '@/hooks/useIsMobile';

const Skills = () => {
  const theme = useTheme();
  const [activeSkill, setActiveSkill] = React.useState<skillsType>('Design');
  const { isMobile, isTablet } = useIsMobile();
  if (isTablet === undefined || isMobile === undefined) return null;

  return (
    <Box component='section' sx={{ py: 6, px: isMobile ? 0 : 4, position: 'relative', width: '100%', }}>

      <div className={`secondary-radial-gradient absolute ${isMobile ? '-top-[50px]' : 'top-[25px]'} left-1/2 rounded-full blur-3xl w-[400px] h-[500px] pointer-events-none rotate-[60deg]`} />

      <Stack direction='column' gap={3} sx={{ zIndex: 1 }}>
        <Stack gap={1}>
          <Typography
            variant='h4'
            sx={{
              textAlign: 'center',
              cursor: 'default',
              color: theme.palette.secondary.main,
              fontFamily: mono,
            }}>
            01.
          </Typography>
          <Typography
            variant='h3'
            sx={{
              textAlign: 'center',
              textShadow: `1px 1px 2px ${alpha(theme.palette.secondary.dark, 0.8)}`,
              color: theme.palette.text.primary,
            }}>
            Workflow
          </Typography>
        </Stack>
        <Box
          sx={{
            gap: 1.5,
            mx: 'auto',
            maxWidth: 'fit-content',
            display: isMobile ? 'grid' : 'flex',
            ...(isMobile && {
              gridTemplateColumns: 'repeat(2,1fr)',
              placeItems: 'center',
            }),
          }}>
          {skills.map((skill, idx) => (
            <CustomTextButton
              key={idx}
              ariaLabel={`My ${skill} tools`}
              onClick={() => setActiveSkill(skill)}
              sx={{
                backdropFilter: 'blur(3px)',
                backgroundColor:
                  activeSkill === skill
                    ? alpha(theme.palette.text.primary, 1) + '!important'
                    : alpha(theme.palette.background.default, 0.8) + '!important',
                color:
                  activeSkill === skill
                    ? theme.palette.background.default + '!important'
                    : theme.palette.text.secondary,
                zIndex: 1,
              }}>
              {skill}
            </CustomTextButton>
          ))}
        </Box>
        <Box
          sx={{
            display: 'grid',
            placeItems: 'center',
            my: 2,
            position: 'relative',
          }}>
          <SkillsMap activeSkill={activeSkill} />
        </Box>
      </Stack>
    </Box>
  );
};

export default Skills;
