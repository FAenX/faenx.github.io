import { getProjectIllustration } from './ProjectIllustrations';
import { Box, Card, CardContent, CardActions, Typography, Stack, Chip, Button } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import { projects } from '../../../data/data';
import { motion } from 'framer-motion';

// Define the Project interface
interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

// Export the component so it can be used elsewhere
export const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -10, transition: { duration: 0.2 } }}
    >
      <Card 
        className="card-hover"
        sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
      >
        <Box 
          sx={{ 
            p: 2, 
            display: 'flex', 
            justifyContent: 'center',
            alignItems: 'center',
            height: 180,
            overflow: 'hidden',
            borderBottom: '1px solid',
            borderColor: 'divider'
          }}
        >
          {getProjectIllustration(project.category, 150)}
        </Box>
        
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5" component="h3">
            {project.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            {project.description}
          </Typography>
          <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ mt: 'auto' }}>
            {project.technologies.map((tech, i) => (
              <Chip 
                key={i} 
                label={tech} 
                size="small" 
                sx={{ mb: 1 }}
              />
            ))}
          </Stack>
        </CardContent>
        <CardActions>
          {project.githubUrl && (
            <Button 
              size="small" 
              startIcon={<GitHubIcon />} 
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Code
            </Button>
          )}
          {project.liveUrl && (
            <Button 
              size="small" 
              startIcon={<LaunchIcon />} 
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </Button>
          )}
        </CardActions>
      </Card>
    </motion.div>
  );
};

// Main component that uses ProjectCard
export default function Projects() {
  return (
    <Box id="projects">
      {/* Add your section header here */}
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }, gap: 3, mt: 4 }}>
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </Box>
    </Box>
  );
} 