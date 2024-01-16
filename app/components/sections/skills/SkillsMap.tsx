import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import { skillsContent, skillsType } from './_content';

type SkillsMapProps = { activeSkill: skillsType };
const SkillsMap: React.FC<SkillsMapProps> = ({ activeSkill }) => {
  const categories = skillsContent[activeSkill];

  if (!categories) return null

  // TODO: add windows settings border effect to chips

  return (
    <Box sx={{ display: 'grid', gridTemplateColumns: 'auto auto 1fr', gap: 2 }}>
      {categories.map(({ category, tools }) => (
        <React.Fragment key={category}>
          <Box sx={{ gridColumn: '1 / span 1', display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
            <Typography variant='h5'>{category}</Typography>
          </Box>

          <Box sx={{ gridColumn: '2 / span 1', display: 'flex', alignItems: 'center' }}>
            <Divider orientation='vertical' flexItem />
          </Box>

          <Box sx={{ gridColumn: '3 / span 1', display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            {tools.map(tool => (
              <Chip
                clickable
                key={tool}
                label={tool}
                sx={{ fontWeight: 600, borderRadius: '6px', backgroundColor: (theme) => theme.palette.grey[900], border: '1px solid', borderColor: (theme) => theme.palette.grey[800], }}
              />
            ))}
          </Box>
        </React.Fragment>
      ))}
    </Box>
  );
};

export default SkillsMap;