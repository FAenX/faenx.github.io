import { Card, CardContent, Typography, Box, Chip, Stack, IconButton, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import AnimatedProjectGraphic from "./AnimatedProjectGraphic";

interface ProjectCardProps {
  title: string;
  description: string;
  image?: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  category: string[];
}

export default function ProjectCard({ 
  title, 
  description, 
  technologies, 
  githubUrl, 
  liveUrl,
  category 
}: ProjectCardProps) {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';
  
  return (
    <Card 
      component={motion.div}
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      sx={{ 
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 2,
        overflow: 'visible',
        bgcolor: isDarkMode ? 'rgba(17, 34, 64, 0.7)' : 'rgba(255, 255, 255, 0.9)',
        boxShadow: isDarkMode 
          ? '0 10px 30px -15px rgba(0, 0, 0, 0.5)' 
          : '0 10px 30px -15px rgba(0, 0, 0, 0.1)',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          inset: 0,
          borderRadius: 2,
          padding: '2px',
          background: 'linear-gradient(45deg, transparent 50%, rgba(100, 255, 218, 0.1) 100%)',
          mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          maskComposite: 'exclude',
          pointerEvents: 'none'
        }
      }}
    >
      {/* Animated Graphic instead of static image */}
      <AnimatedProjectGraphic category={category} title={title} />
      
      <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <Typography 
          variant="h6" 
          component="h3" 
          gutterBottom 
          sx={{ 
            fontWeight: 600,
            color: isDarkMode ? '#64ffda' : theme.palette.primary.main 
          }}
        >
          {title}
        </Typography>
        
        <Typography 
          variant="body2" 
          sx={{ 
            mb: 2,
            flexGrow: 1,
            color: 'text.secondary',
            fontSize: '0.875rem'
          }}
        >
          {description}
        </Typography>
        
        <Box sx={{ mt: 'auto' }}>
          <Stack 
            direction="row" 
            spacing={1} 
            flexWrap="wrap" 
            sx={{ mb: 2 }}
          >
            {technologies.slice(0, 3).map((tech, i) => (
              <Chip 
                key={tech} 
                label={tech} 
                size="small"
                component={motion.div}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 + 0.3, duration: 0.2 }}
                sx={{ 
                  mr: 0.5, 
                  mb: 0.5,
                  bgcolor: isDarkMode ? 'rgba(100, 255, 218, 0.1)' : 'rgba(33, 150, 243, 0.1)',
                  color: isDarkMode ? '#64ffda' : theme.palette.primary.main,
                  border: '1px solid',
                  borderColor: isDarkMode ? 'rgba(100, 255, 218, 0.2)' : 'rgba(33, 150, 243, 0.2)',
                }}
              />
            ))}
            {technologies.length > 3 && (
              <Chip 
                label={`+${technologies.length - 3}`} 
                size="small"
                sx={{ 
                  mr: 0.5, 
                  mb: 0.5,
                  bgcolor: 'transparent',
                  color: 'text.secondary',
                }}
              />
            )}
          </Stack>
          
          <Stack direction="row" spacing={1} justifyContent="flex-end">
            {githubUrl && (
              <IconButton 
                href={githubUrl}
                target="_blank"
                aria-label="GitHub Repository"
                component={motion.a}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                sx={{ color: 'text.secondary' }}
              >
                <GitHubIcon fontSize="small" />
              </IconButton>
            )}
            
            {liveUrl && (
              <IconButton 
                href={liveUrl}
                target="_blank"
                aria-label="Live Demo"
                component={motion.a}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                sx={{ color: 'text.secondary' }}
              >
                <LaunchIcon fontSize="small" />
              </IconButton>
            )}
          </Stack>
        </Box>
      </CardContent>
    </Card>
  );
} 