'use client';
import React from 'react';
import { projectsContent } from './_content';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import { alpha } from '@mui/material';
import Stack from '@mui/material/Stack';
import CustomLinkButton from '@/app/components/global/CustomLinkButton';
import Image from 'next/image';

const ProjectsMap = () => {
  const [showAllTags, setShowAllTags] = React.useState<boolean>(false);

  return (
    <Stack direction='column' gap={4}>
      {Object.entries(projectsContent).map(([projectName, tags]) => (
        <Container
          maxWidth='sm'
          key={projectName}
          sx={{
            backgroundColor: (theme) => alpha(theme.palette.common.black, 0.5),
            backdropFilter: 'blur(2px)',
            border: '1px solid',
            borderColor: (theme) => alpha(theme.palette.grey[800], 0.8),
            borderRadius: '9px',
            p: 2,
            overflow: 'hidden',
            position: 'relative',
            minHeight: '250px'
          }}>
          <Box sx={{ width: '100%' }}> {/* left side */}
            <Typography variant='h4' maxWidth='50%' width='100%'>{projectName}</Typography>
            <Typography variant='body1' maxWidth='50%' width='100%' sx={{ color: (theme) => theme.palette.text.secondary }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</Typography>
            {tags.map((tagGroup, index) => (
              <Box key={index} sx={{ maxWidth: '50%', mt: 1 }}>
                {tagGroup.selectedTags && (
                  <>
                  <Stack direction='row' flexWrap='wrap' gap={1}>
                    {tagGroup.selectedTags.map((tag, index) => (
                      <Chip
                        key={index}
                        label={tag}
                        size='small'
                        sx={{
                          fontWeight: 600,
                          cursor: 'default',
                          borderRadius: '6px',
                          backgroundColor: (theme) => alpha(theme.palette.primary.dark, 0.125),
                          border: '1px solid',
                          borderColor: (theme) => alpha(theme.palette.primary.dark, 0.25),
                        }}
                      />
                    ))}
                  </Stack>
                  <CustomLinkButton buttonSx={{ mt: 0.75 }} ariaLabel={`View all tags for ${projectName} project`} onClick={() => {setShowAllTags(!showAllTags)}}>{showAllTags ? 'View less' : 'View all'}</CustomLinkButton>
                  </>
                )}
              </Box>
            ))}
          </Box>

          <Image //right side
            src='/placeholder.webp'
            alt='placeholder'
            width={500}
            height={500}
            className='rounded-lg absolute left-1/2 top-6'
          />

        </Container>
      ))}
    </Stack>
  );
};

export default ProjectsMap;
