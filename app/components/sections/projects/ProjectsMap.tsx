import React from 'react'
import { projectsContent } from './_content';
import { Typography, Box, Chip } from '@mui/material';

const ProjectsMap = () => {
  return (
    <Box>
      {Object.entries(projectsContent).map(([projectName, tags]) => (
        <Box key={projectName}>
          <Typography variant="h2">{projectName}</Typography>
          {tags.map((tagGroup, index) => (
            <Box key={index}>
              {tagGroup.selectedTags && (
                <Box>
                  <Typography variant="h3">Selected Tags</Typography>
                  {tagGroup.selectedTags.map((tag, index) => (
                    <Chip key={index} label={tag} />
                  ))}
                </Box>
              )}
              {tagGroup.allTags && (
                <Box>
                  <Typography variant="h3">All Tags</Typography>
                  {tagGroup.allTags.map((tag, index) => (
                    <Chip key={index} label={tag} />
                  ))}
                </Box>
              )}
            </Box>
          ))}
        </Box>
      ))}
    </Box>
  );
}

export default ProjectsMap