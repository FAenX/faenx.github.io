import { Box, useTheme, Typography, Grid, Chip } from "@mui/material";
import { ListItem } from "./components";
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import { skills } from "../../../data/data";
import { motion } from "framer-motion";

// Group skills by category for more organized display
const skillCategories = [
  {
    name: "Cloud & DevOps",
    skills: skills.filter(skill => 
      ["AWS", "GCP", "Azure", "Digital Ocean", "Kubernetes", "Docker", "Git"].includes(skill.name)
    )
  },
  {
    name: "Big Data & Analytics",
    skills: skills.filter(skill => 
      ["Apache Spark", "MongoDB", "PostgreSQL", "MySQL", "MSSQL", "SQL"].includes(skill.name)
    )
  },
  {
    name: "Development",
    skills: skills.filter(skill => 
      ["Python", "Javascript", "Typescript", "NodeJs", "React", "Django", "Flask"].includes(skill.name)
    )
  },
  {
    name: "Operating Systems",
    skills: skills.filter(skill => 
      ["Linux", "Windows", "Android"].includes(skill.name)
    )
  }
];

export default function Skills() {
    const theme = useTheme();
    const isDarkMode = theme.palette.mode === 'dark';
    
    return (
        <Box
            className="animate__animated animate__fadeIn animate__fadeInUp"
            id="skills"  
        >
            {/* Custom Section Header - Left Aligned */}
            <Box sx={{ 
                mb: 5, 
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start', // Left alignment (changed from flex-end)
                position: 'relative',
                '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: '-8px',
                    left: 0, // Align to left (changed from right: 0)
                    width: '60px',
                    height: '3px',
                    background: isDarkMode ? '#64ffda' : theme.palette.primary.main,
                    borderRadius: '4px'
                }
            }}>
                <SettingsSuggestIcon 
                    sx={{
                        color: isDarkMode ? "#64ffda" : theme.palette.primary.main,
                        fontSize: '2rem',
                        mr: 2 // Add margin to right of icon
                    }}
                />
                <Typography 
                    variant="h4" 
                    component="h2" 
                    sx={{ 
                        fontWeight: 700,
                        color: isDarkMode ? 'white' : 'text.primary'
                        // Removed mr: 2
                    }}
                >
                    Skills
                </Typography>
            </Box>
            
            {/* Categorized Skills Display */}
            <Grid container spacing={4} sx={{ mt: 2 }}>
                {skillCategories.map((category, catIndex) => (
                    <Grid item xs={12} md={6} key={category.name}>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Typography 
                                variant="h6" 
                                sx={{ 
                                    mb: 2, 
                                    color: isDarkMode ? '#64ffda' : theme.palette.primary.main,
                                    fontWeight: 600,
                                    position: 'relative',
                                    pl: 2,
                                    '&::before': {
                                        content: '""',
                                        position: 'absolute',
                                        left: 0,
                                        top: '50%',
                                        transform: 'translateY(-50%)',
                                        width: 4,
                                        height: '80%',
                                        backgroundColor: isDarkMode ? '#64ffda' : theme.palette.primary.main,
                                        borderRadius: 4
                                    }
                                }}
                            >
                                {category.name}
                            </Typography>
                            
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                                {category.skills.map((skill, index) => (
                                    <Chip
                                        key={skill.name}
                                        label={skill.name}
                                        component={motion.div}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.3, delay: index * 0.05 + 0.2 }}
                                        viewport={{ once: true }}
                                        sx={{
                                            mb: 1,
                                            fontSize: '0.9rem',
                                            fontWeight: 500,
                                            backgroundColor: isDarkMode ? 'rgba(100, 255, 218, 0.1)' : 'rgba(33, 150, 243, 0.1)',
                                            color: isDarkMode ? '#64ffda' : theme.palette.primary.main,
                                            border: '1px solid',
                                            borderColor: isDarkMode ? 'rgba(100, 255, 218, 0.2)' : 'rgba(33, 150, 243, 0.2)',
                                            '&:hover': {
                                                backgroundColor: isDarkMode ? 'rgba(100, 255, 218, 0.2)' : 'rgba(33, 150, 243, 0.2)'
                                            }
                                        }}
                                        avatar={
                                            <Box
                                                component="img"
                                                src={skill.image}
                                                alt={skill.name}
                                                sx={{
                                                    width: 24,
                                                    height: 24,
                                                    objectFit: 'contain',
                                                    mr: -1
                                                }}
                                            />
                                        }
                                    />
                                ))}
                            </Box>
                        </motion.div>
                    </Grid>
                ))}
            </Grid>
            
            {/* Additional Skills Description */}
            <Box sx={{ mt: 6 }}>
                <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                    With expertise spanning cloud architecture, big data processing, and modern development frameworks, 
                    I specialize in designing scalable, cloud-native solutions that drive business value. My skills include 
                    infrastructure as code, DevOps automation, and developing high-performance data pipelines using tools 
                    like Apache Spark and Kubernetes.
                </Typography>
            </Box>
        </Box>
    );
}