'use client';
import React from 'react';
import { projectsContent } from './_content';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import { IconButton, alpha } from '@mui/material';
import Stack from '@mui/material/Stack';
import CustomLinkButton from '@/app/components/global/CustomLinkButton';
import Image from 'next/image';
import Link from 'next/link';
import { Close } from '@mui/icons-material';

const ProjectsMap = () => {
  const [showAllTags, setShowAllTags] = React.useState(
    Object.fromEntries(Object.keys(projectsContent).map(projectName => [projectName, false]))
  );
  const [projectImgFocused, setProjectImgFocused] = React.useState(
    Object.fromEntries(Object.keys(projectsContent).map(projectName => [projectName, false]))
  );

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
            '::after': {
              content: '""',
              position: 'absolute',
              inset: 0,
              transition: (theme) => theme.transitions.create(['background-color', 'backdrop-filter'], { duration: theme.transitions.duration.standard, easing: theme.transitions.easing.easeOut }),
              ...(projectImgFocused[projectName] && {
                backgroundColor: (theme) => alpha(theme.palette.background.default, 0.5),
                backdropFilter: 'blur(5px)',
              })
            }
          }}>
          <Box sx={{ width: '100%' }}> {/* left side */}
            <Typography variant='h4' maxWidth='50%' width='100%'>{projectName}</Typography>
            <Typography variant='body1' maxWidth='50%' width='100%' sx={{ color: (theme) => theme.palette.text.secondary }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</Typography>
            <Box sx={{ maxWidth: '50%', mt: 1 }}>
              <Stack direction='row' flexWrap='wrap' gap={1}>
                {tags.flatMap(
                  tagGroup => (tagGroup.selectedTags || []).concat(showAllTags[projectName] ? tagGroup.allTags || [] : [])
                ) // show selectedTags, append allTags if showAllTags
                  .map((tag, index) => (
                    <Chip
                      key={index}
                      label={tag}
                      size='small'
                      sx={{
                        fontWeight: 600,
                        borderRadius: '6px',
                        backgroundColor: (theme) => alpha(theme.palette.primary.dark, 0.125),
                        border: '1px solid',
                        borderColor: (theme) => alpha(theme.palette.primary.dark, 0.25),
                      }}
                    />
                  ))}
              </Stack>
            </Box>
            <CustomLinkButton buttonSx={{ mt: 1, zIndex: projectImgFocused[projectName] ? 0 : 2 }} ariaLabel={`View all tags for ${projectName} project`} onClick={() => { setShowAllTags(prevState => ({ ...prevState, [projectName]: !prevState[projectName] })) }}>{showAllTags[projectName] ? 'View less' : 'View all'}</CustomLinkButton>
          </Box>

          <Link target='_blank' href='https://oconnorweb.dev'>
            <Box
              onMouseEnter={() => setProjectImgFocused(prevState => ({ ...prevState, [projectName]: true }))}
              onMouseLeave={() => setProjectImgFocused(prevState => ({ ...prevState, [projectName]: false }))}
              component='img'
              src='/placeholder.webp'
              alt='placeholder'
              height='100%'
              width='auto'
              sx={{
                borderRadius: '11px',
                position: 'absolute',
                left: projectImgFocused[projectName] ? '25%' : '50%',
                top: projectImgFocused[projectName] ? '0%' : '25%',
                transition: (theme) => theme.transitions.create(['left', 'top'], { duration: theme.transitions.duration.standard, easing: theme.transitions.easing.easeOut }),
                zIndex: 2,
              }}
            />
          </Link>

        </Container>
      ))}
    </Stack>
  );
};

export default ProjectsMap;
