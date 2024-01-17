import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import { skillsContent, skillsType } from './_content';
import { useIsMobile } from '@/hooks/useIsMobile';

type SkillsMapProps = { activeSkill: skillsType };
const SkillsMap: React.FC<SkillsMapProps> = ({ activeSkill }) => {
  const { isMobile } = useIsMobile();
  if (isMobile === undefined) return null;

  const categories = skillsContent[activeSkill];
  if (!categories) return null;


  // TODO: add windows settings border effect to chips

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : 'auto auto 1fr',
        gap: 1,
        mt: -2,
      }}>
      {categories.map(({ category, tools }, idx) => (
        <React.Fragment key={category}>
          <Box
            sx={{
              gridColumn: isMobile ? '1 / span 1' : '1 / span 1',
              display: 'flex',
              alignItems: 'center',
              justifyContent: isMobile ? 'center' : 'flex-end',
            }}>
            <Typography variant='h5'>{category}</Typography>
          </Box>

          {isMobile && <Divider orientation='horizontal' sx={{ width: '100%' }} />}
          {!isMobile &&
            <Box sx={{ gridColumn: '2 / span 1', display: 'flex', alignItems: 'center' }}>
              <Divider orientation='vertical' flexItem />
            </Box>
          }

          <Box
            sx={{
              gridColumn: isMobile ? '1 / span 1' : '3 / span 1',
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: isMobile ? 'center' : 'initial',
              gap: 1,
            }}>
            {tools.map((tool) => (
              <Chip
                clickable
                key={tool}
                label={tool}
                sx={{
                  fontWeight: 600,
                  borderRadius: '6px',
                  backgroundColor: (theme) => theme.palette.grey[900],
                  border: '1px solid',
                  borderColor: (theme) => theme.palette.grey[800],
                }}
              />
            ))}
          </Box>
        </React.Fragment>
      ))}
    </Box>
  );
};

export default SkillsMap;
