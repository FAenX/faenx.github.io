import { useState } from "react";
import { Box, Grid, Tab, Tabs, Typography, Container } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "./ProjectCard";
import CodeIcon from '@mui/icons-material/Code';
import { HeadingLeftLabel } from "../../common";

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
  {
    id: "project4",
    title: "Mobile Health App",
    description: "Cross-platform health tracking and monitoring application.",
    image: "https://via.placeholder.com/300x160",
    technologies: ["React Native", "TypeScript", "GraphQL", "MongoDB"],
    category: ["Mobile", "Full Stack"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    id: "project5",
    title: "Content Management System",
    description: "Custom CMS with role-based access control and advanced editing tools.",
    image: "https://via.placeholder.com/300x160",
    technologies: ["Next.js", "PostgreSQL", "AWS S3", "TailwindCSS"],
    category: ["Frontend", "Backend", "Full Stack"],
    githubUrl: "https://github.com",
  },
];

// Get unique categories from projects
const categories = ["All", ...new Set(projects.flatMap(project => project.category))];

export default function ProjectShowcase() {
  const [activeTab, setActiveTab] = useState(0);
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  
  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };
  
  const filteredProjects = activeTab === 0 
    ? projects 
    : projects.filter(project => project.category.includes(categories[activeTab]));

  return (
    <Container maxWidth="lg" id="projects">
      <HeadingLeftLabel title="Projects" icon={<CodeIcon sx={{color: "black"}}/>}/>
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Tabs 
          value={activeTab} 
          onChange={handleTabChange}
          variant="scrollable"
          scrollButtons="auto"
          allowScrollButtonsMobile
          sx={{ 
            mb: 4,
            '& .MuiTabs-indicator': {
              background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
            },
          }}
        >
          {categories.map((category, index) => (
            <Tab 
              key={category} 
              label={category} 
              sx={{ 
                fontWeight: 500,
                color: activeTab === index ? '#2196F3' : 'text.primary',
                '&.Mui-selected': {
                  color: '#2196F3',
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
          <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
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
                sx={{ display: 'flex' }}
              >
                <ProjectCard 
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  technologies={project.technologies}
                  githubUrl={project.githubUrl}
                  liveUrl={project.liveUrl}
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