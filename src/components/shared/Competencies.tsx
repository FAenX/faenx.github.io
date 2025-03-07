import { Box, Chip, Typography, Grid, Paper } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import CloudIcon from '@mui/icons-material/Cloud';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import PsychologyIcon from '@mui/icons-material/Psychology';

interface CompetencyItem {
  name: string;
  icon: React.ReactNode;
  skills: string[];
  description: string;
}

export const Competencies = () => {
  const theme = useTheme();
  
  const competencies: CompetencyItem[] = [
    {
      name: "Software Development",
      icon: <CodeIcon fontSize="large" />,
      skills: ["JavaScript", "TypeScript", "React", "Node.js", "REST APIs"],
      description: "Building modern web applications with a focus on clean code architecture and exceptional user experiences."
    },
    {
      name: "Data Engineering",
      icon: <StorageIcon fontSize="large" />,
      skills: ["Big Data", "SQL", "MongoDB", "Kafka", "Data Modeling"],
      description: "Designing systems that ingest, process, and analyze data at scale, with experience managing billions of rows of data."
    },
    {
      name: "Cloud Architecture",
      icon: <CloudIcon fontSize="large" />,
      skills: ["AWS", "DevOps", "CI/CD", "Serverless", "Cloud Applications"],
      description: "Developing cloud-native applications and infrastructure with a focus on scalability, reliability, and efficiency."
    },
    {
      name: "AI & ML Integration",
      icon: <PsychologyIcon fontSize="large" />,
      skills: ["Neo4j", "Recommendation Systems", "Generative AI", "Data Analysis"],
      description: "Implementing AI-driven solutions to solve complex business problems, including expert recommendation systems."
    },
    {
      name: "Technical Writing",
      icon: <AutoStoriesIcon fontSize="large" />,
      skills: ["Documentation", "Knowledge Sharing", "Tutorials", "Medium Articles"],
      description: "Sharing insights and expertise through clear, accessible technical writing on modern software development practices."
    }
  ];

  return (
    <Box sx={{ my: 6 }}>
      <Typography 
        variant="h3" 
        component="h2" 
        color="text.primary"
        sx={{ mb: 4, textAlign: 'center', fontWeight: 'bold' }}
      >
        Core Competencies
      </Typography>
      
      <Grid container spacing={3}>
        {competencies.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Paper 
                elevation={2}
                sx={{ 
                  p: 3, 
                  height: '100%',
                  backgroundColor: theme.palette.background.paper,
                  borderTop: `4px solid ${theme.palette.primary.main}`,
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-8px)'
                  }
                }}
              >
                <Box sx={{ color: theme.palette.primary.main, mb: 2 }}>
                  {item.icon}
                </Box>
                <Typography 
                  variant="h5" 
                  component="h3" 
                  color="text.primary"
                  sx={{ mb: 1, fontWeight: 'medium' }}
                >
                  {item.name}
                </Typography>
                <Typography 
                  variant="body2" 
                  color="text.secondary"
                  sx={{ mb: 2 }}
                >
                  {item.description}
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {item.skills.map((skill, i) => (
                    <Chip 
                      key={i} 
                      label={skill} 
                      size="small" 
                      color="primary" 
                      variant="outlined" 
                    />
                  ))}
                </Box>
              </Paper>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}; 