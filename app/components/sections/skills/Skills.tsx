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
  const activeBg = theme.palette.text.primary + '!important';
  const activeColor = theme.palette.background.default + '!important';

  const { isMobile, isTablet } = useIsMobile();
  if (isTablet === undefined || isMobile === undefined) return null;

  return (
    <Box component='section' sx={{ py: 6, px: isMobile ? 0 : 4, position: 'relative', width: '100%', }}>
      <Box
        sx={{
          position: 'absolute',
          top: isTablet ? '-50px' : '25px',
          left: isTablet ? '150px' : '550px',
          borderRadius: '50%',
          filter: 'blur(100px)',
          width: '400px',
          transform: 'rotate(45deg)',
          height: '500px',
          pointerEvents: 'none',
          backgroundImage: (theme) =>
            `radial-gradient(at 0% 0%, 
              ${alpha(theme.palette.secondary.dark, 0.3)}, 
              ${alpha(theme.palette.secondary.main, 0.2)}, 
              ${alpha(theme.palette.secondary.light, 0.1)}
            )`,
        }}
      />
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
              textShadow: `1px 1px 3px ${theme.palette.secondary.dark}`,
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
                backgroundColor:
                  activeSkill === skill
                    ? activeBg
                    : theme.palette.background.default + '!important',
                color:
                  activeSkill === skill
                    ? activeColor
                    : theme.palette.text.secondary,
                zIndex: 5,
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
