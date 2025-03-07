import { Box, Card, CardContent, CardMedia, Chip, Link, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';

interface ProjectProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export default function ProjectCard({ title, description, image, technologies, githubUrl, liveUrl }: ProjectProps) {
  return (
    <Card
      component={motion.div}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ 
        y: -10,
        boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
        transition: { type: "spring", stiffness: 300, damping: 15 }
      }}
      sx={{ 
        height: "100%", 
        display: "flex", 
        flexDirection: "column",
        borderRadius: 2,
        overflow: "hidden",
      }}
    >
      <CardMedia
        component="img"
        height="160"
        image={image}
        alt={title}
      />
      <CardContent sx={{ flexGrow: 1, p: 3 }}>
        <Typography 
          variant="h5" 
          component="div" 
          gutterBottom
          sx={{
            fontWeight: "bold",
            mb: 1
          }}
        >
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {description}
        </Typography>
        
        <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ mb: 2 }}>
          {technologies.map(tech => (
            <Chip 
              key={tech} 
              label={tech} 
              size="small" 
              sx={{ 
                m: 0.5, 
                background: "linear-gradient(45deg, rgba(33,150,243,0.1) 0%, rgba(33,203,243,0.1) 100%)",
                border: "1px solid rgba(33,150,243,0.2)"
              }} 
            />
          ))}
        </Stack>
        
        <Stack direction="row" spacing={2} sx={{ mt: 'auto' }}>
          {githubUrl && (
            <Link 
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              sx={{ 
                display: 'flex', 
                alignItems: 'center',
                color: 'text.primary',
                textDecoration: 'none',
                '&:hover': { textDecoration: 'underline' }
              }}
            >
              <GitHubIcon sx={{ mr: 0.5, fontSize: '1rem' }} />
              <Typography variant="body2">Code</Typography>
            </Link>
          )}
          {liveUrl && (
            <Link 
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              sx={{ 
                display: 'flex', 
                alignItems: 'center',
                color: 'text.primary',
                textDecoration: 'none',
                '&:hover': { textDecoration: 'underline' }
              }}
            >
              <LaunchIcon sx={{ mr: 0.5, fontSize: '1rem' }} />
              <Typography variant="body2">Live Demo</Typography>
            </Link>
          )}
        </Stack>
      </CardContent>
    </Card>
  );
} 