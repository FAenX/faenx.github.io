import { useState } from "react";
import { Box, Grid, Tab, Tabs, Typography, Container, useTheme, Divider } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "./ProjectCard";
import CodeIcon from '@mui/icons-material/Code';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: string[];
  githubUrl?: string;
  liveUrl?: string;
}

// Sample projects - replace with your actual projects
const projects: Project[] = [
  {
    id: "project1",
    title: "E-commerce Platform",
    description: "A full-stack e-commerce platform with payment processing and order management.",
    image: "https://via.placeholder.com/300x160",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "AWS"],
    category: ["Frontend", "Backend", "Full Stack"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    id: "project2",
    title: "Customer Analytics Dashboard",
    description: "Real-time analytics dashboard for customer insights and reporting.",
    image: "https://via.placeholder.com/300x160",
    technologies: ["React", "TypeScript", "D3.js", "Firebase"],
    category: ["Frontend", "Data Visualization"],
    githubUrl: "https://github.com",
  },
  {
    id: "project3",
    title: "Cloud Infrastructure Automation",
    description: "Infrastructure as code solution for automating cloud deployments.",
    image: "https://via.placeholder.com/300x160",
    technologies: ["AWS", "Terraform", "Python", "Docker"],
    category: ["DevOps", "Backend"],
    githubUrl: "https://github.com",
  },
];

// Get unique categories from projects
const categories = ["All", ...new Set(projects.flatMap(project => project.category))];

export default function ProjectShowcase() {
  const [activeTab, setActiveTab] = useState(0);
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';
  
  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };
  
  const filteredProjects = activeTab === 0 
    ? projects 
    : projects.filter(project => project.category.includes(categories[activeTab]));

  return (
    <Container maxWidth="lg" id="projects">
      {/* Enhanced Section Header */}
      <Box 
        sx={{ 
          textAlign: 'center',
          mb: 6
        }}
      >
        {/* Icon and Title */}
        <Box sx={{ 
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          mb: 2
        }}>
          <CodeIcon 
            sx={{
              color: isDarkMode ? "#64ffda" : theme.palette.primary.main,
              fontSize: '2.5rem',
              mr: 2
            }}
          />
          <Typography 
            variant="h3" 
            component="h2" 
            sx={{ 
              fontWeight: 700,
              color: isDarkMode ? 'white' : 'text.primary'
            }}
          >
            Projects
          </Typography>
        </Box>
        
        {/* Decorative Underline */}
        <Box 
          sx={{ 
            width: '80px', 
            height: '3px', 
            bgcolor: isDarkMode ? '#64ffda' : theme.palette.primary.main,
            mx: 'auto',
            mb: 3,
            borderRadius: '4px'
          }} 
        />
        
        {/* Subtitle */}
        <Typography 
          variant="subtitle1" 
          sx={{ 
            maxWidth: '700px', 
            mx: 'auto',
            color: 'text.secondary',
            mb: 4
          }}
        >
          A showcase of my recent development work, featuring cloud solutions, data engineering, 
          and software architecture projects.
        </Typography>
      </Box>
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        style={{ textAlign: 'center' }}
      >
        <Tabs 
          value={activeTab} 
          onChange={handleTabChange}
          variant="scrollable"
          scrollButtons="auto"
          allowScrollButtonsMobile
          centered
          sx={{ 
            mb: 5,
            display: 'inline-flex',
            '& .MuiTabs-indicator': {
              background: isDarkMode ? '#64ffda' : 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
            },
            '& .MuiTabs-flexContainer': {
              justifyContent: 'center'
            }
          }}
        >
          {categories.map((category, index) => (
            <Tab 
              key={category} 
              label={category} 
              sx={{ 
                fontWeight: 500,
                color: activeTab === index 
                  ? (isDarkMode ? '#64ffda' : '#2196F3') 
                  : 'text.primary',
                '&.Mui-selected': {
                  color: isDarkMode ? '#64ffda' : '#2196F3',
                }
              }}
            />
          ))}
        </Tabs>
      </motion.div>
      
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <Grid 
            container 
            spacing={{ xs: 3, sm: 4, md: 5 }}
            justifyContent="center"
          >
            {filteredProjects.map((project, index) => (
              <Grid 
                item 
                xs={12} 
                sm={6} 
                md={4} 
                key={project.id}
                component={motion.div}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                sx={{ display: 'flex', justifyContent: 'center' }}
              >
                <ProjectCard 
                  title={project.title}
                  description={project.description}
                  technologies={project.technologies}
                  githubUrl={project.githubUrl}
                  liveUrl={project.liveUrl}
                  category={project.category}
                />
              </Grid>
            ))}
          </Grid>
          
          {filteredProjects.length === 0 && (
            <Box 
              sx={{ 
                py: 8, 
                textAlign: 'center',
                color: 'text.secondary',
              }}
            >
              <Typography variant="h6">
                No projects found in this category.
              </Typography>
            </Box>
          )}
        </motion.div>
      </AnimatePresence>
    </Container>
  );
} 