'use client';
import React from 'react';
import { projectsContent } from './_content';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import { alpha } from '@mui/material';
import Stack from '@mui/material/Stack';
import CustomLinkButton from '@/app/components/global/CustomLinkButton';
import Link from 'next/link';
import { useIsMobile } from '@/hooks/useIsMobile';
import Image from 'next/image';
import placeholder from '@/public/placeholder.webp';

const ProjectsMap = () => {
  const [showAllTags, setShowAllTags] = React.useState(
    Object.fromEntries(
      Object.keys(projectsContent).map((projectName) => [projectName, false])
    )
  );
  const [projectImgFocused, setProjectImgFocused] = React.useState(
    Object.fromEntries(
      Object.keys(projectsContent).map((projectName) => [projectName, false])
    )
  );

  const { isMobile, isTablet } = useIsMobile();

  return (
    <Stack gap={4}>
      {Object.entries(projectsContent).map(([projectName, tags]) => (
        <Container
          disableGutters={isTablet}
          maxWidth={isTablet ? 'xs' : 'md'}
          key={projectName}
          sx={{
            maxHeight: showAllTags ? '1000px' : '0px',
            transition: (theme) =>
              theme.transitions.create(['border-color', 'max-height'], {
                duration: theme.transitions.duration.shortest,
                easing: theme.transitions.easing.sharp,
              }),
            backgroundColor: (theme) => alpha(theme.palette.common.black, 0.5),
            border: '1px solid',
            borderColor: projectImgFocused[projectName]
              ? (theme) => alpha(theme.palette.primary.dark, 0.5)
              : (theme) => alpha(theme.palette.grey[800], 0.8),
            borderRadius: '9px',
            p: isTablet ? 0 : 2,
            overflow: 'hidden',
            position: 'relative',
            zIndex: 0,
            width: 'fit-content',
            '::after': {
              content: '""',
              position: 'absolute',
              inset: 0,
              zIndex: -1,
              transition: (theme) =>
                theme.transitions.create('background-color', {
                  duration: theme.transitions.duration.shortest,
                  easing: theme.transitions.easing.sharp,
                }),
              ...(projectImgFocused[projectName] && {
                backgroundColor: (theme) =>
                  alpha(theme.palette.background.default, 0.5),
              }),
            },
          }}>
          <Box width='100%' maxWidth={isTablet ? '100%' : '45%'}>
            {isTablet && (
              <Box
                sx={{
                  display: 'grid',
                  placeItems: 'center',
                  px: 2,
                  pt: 2,
                  overflow: 'hidden',
                }}>
                <Link href='https://oconnorweb.dev' target='_blank'>
                  <Box
                    display='block'
                    sx={{
                      borderTopLeftRadius: '11px',
                      borderTopRightRadius: '11px',
                      boxShadow: (theme) =>
                        `0px 0px 15px ${alpha(
                          theme.palette.primary.main,
                          0.6
                        )}`,
                      // transform: 'translateY(16px)', better mobile performance w no anims, but less cool :(
                      // transition: (theme) =>
                      //   theme.transitions.create('transform', {
                      //     duration: theme.transitions.duration.shorter,
                      //     easing: theme.transitions.easing.sharp,
                      //   }),
                      // '&:hover': {
                      //   transform: 'translateY(0px)',
                      // },
                    }}>
                    <Image
                      src={placeholder}
                      alt='placeholder'
                      placeholder='blur'
                      loading='eager'
                      className='rounded-t-lg'
                    />
                  </Box>
                </Link>
              </Box>
            )}
            {isTablet && <Divider />}
            <Box sx={{ p: isTablet ? 2 : 0, backgroundColor: isTablet ? (theme) => alpha(theme.palette.grey[800], 0.25) : 'initial' }}>
              <Typography variant='h4' width='100%'>
                {projectName}
              </Typography>
              <Typography
                variant='body1'
                width='100%'
                sx={{
                  color: (theme) => theme.palette.text.secondary,
                  cursor: 'default',
                }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, voluptatum.
              </Typography>
              <Box sx={{ mt: 1 }}>
                <Stack direction='row' flexWrap='wrap' gap={1}>
                  {tags
                    .flatMap((tagGroup) =>
                      (tagGroup.selectedTags || []).concat(
                        showAllTags[projectName] ? tagGroup.allTags || [] : []
                      )
                    ) // show selectedTags, append allTags if showAllTags
                    .map((tag, index) => (
                      <Chip
                        key={index}
                        label={tag}
                        size='small'
                        sx={{
                          cursor: 'default',
                          fontWeight: 600,
                          borderRadius: '6px',
                          backgroundColor: (theme) =>
                            alpha(theme.palette.primary.dark, 0.125),
                          border: '1px solid',
                          borderColor: (theme) =>
                            alpha(theme.palette.primary.dark, 0.25),
                        }}
                      />
                    ))}
                </Stack>
              </Box>
              <CustomLinkButton
                ariaLabel={`View all tags for ${projectName} project`}
                typographySx={{ mt: 1, }}
                onClick={() => {
                  setShowAllTags((prevState) => ({
                    ...prevState,
                    [projectName]: !prevState[projectName],
                  }));
                }}>
                {showAllTags[projectName] ? 'View less' : 'View all'}
              </CustomLinkButton>
            </Box>
          </Box>

          {!isTablet && (
            <Link target='_blank' href='https://oconnorweb.dev'>
              <Box
                onMouseEnter={() =>
                  setProjectImgFocused((prevState) => ({
                    ...prevState,
                    [projectName]: true,
                  }))
                }
                onMouseLeave={() =>
                  setProjectImgFocused((prevState) => ({
                    ...prevState,
                    [projectName]: false,
                  }))
                }
                sx={{
                  borderRadius: '11px',
                  position: 'absolute',
                  inset: 0,
                  left: projectImgFocused[projectName] ? '45%' : '50%',
                  top: projectImgFocused[projectName] ? '0%' : '15%',
                  transition: (theme) =>
                    theme.transitions.create(['left', 'top'], {
                      duration: theme.transitions.duration.shorter,
                      easing: theme.transitions.easing.sharp,
                    }),
                  zIndex: 2,
                }}>
                <Image
                  src={placeholder}
                  alt='placeholder'
                  placeholder='blur'
                  fill
                  sizes='100%'
                  loading='eager'
                  className='rounded-lg relative object-cover object-left-bottom'
                />
              </Box>
            </Link>
          )}
        </Container>
      ))}
    </Stack>
  );
};

export default ProjectsMap;
