import { useTheme } from '@mui/material/styles';
import { Box, Typography, Container, Button, Chip, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import DownloadIcon from '@mui/icons-material/Download';
import CloudIcon from '@mui/icons-material/Cloud';
import StorageIcon from '@mui/icons-material/Storage';
import CodeIcon from '@mui/icons-material/Code';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';

const HeroComponent = () => {
  const theme = useTheme();
  const resumeUrl = "https://drive.google.com/file/d/1hFACPVhBg-fUzFeTDlUmT0WTb6v7uLLT/view?usp=drive_link";
  
  const skills = [
    { 
      category: "Cloud & DevOps", 
      icon: <CloudIcon fontSize="small" />,
      technologies: ["AWS", "GCP", "Azure", "Kubernetes", "Terraform", "Docker"]
    },
    { 
      category: "Big Data & AI/ML", 
      icon: <StorageIcon fontSize="small" />,
      technologies: ["Apache Spark", "Delta Lake", "MLOps", "AWS Glue", "Databricks"]
    },
    { 
      category: "Software Development", 
      icon: <CodeIcon fontSize="small" />,
      technologies: ["Python", "Node.js", "Java", "RESTful APIs", "Microservices"]
    },
    { 
      category: "Data Engineering", 
      icon: <AutoGraphIcon fontSize="small" />,
      technologies: ["Redshift", "Snowflake", "Data Pipelines", "Tableau", "Power BI"]
    }
  ];
  
  return (
    <Box 
      sx={{ 
        bgcolor: theme.palette.background.default,
        color: theme.palette.text.primary,
        pt: { xs: 10, md: 16 },
        pb: { xs: 12, md: 20 },
        overflow: 'hidden',
        position: 'relative'
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography 
            variant="h5" 
            component="p" 
            color="primary"
            sx={{ 
              mb: 2, 
              fontWeight: 500,
              fontFamily: 'ChivoMono, monospace'
            }}
          >
            Hello, my name is
          </Typography>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Typography 
            variant="h1" 
            component="h1" 
            className="text-gradient"
            sx={{ 
              mb: 2,
              fontWeight: 700,
              fontSize: { xs: '2.5rem', sm: '3.5rem', md: '5rem' },
              lineHeight: 1.1
            }}
          >
            Emmanuel Davidson.
          </Typography>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Typography 
            variant="h2" 
            component="h2" 
            color="text.secondary"
            sx={{ 
              mb: 4,
              maxWidth: '800px',
              fontSize: { xs: '1.75rem', sm: '2rem', md: '2.5rem' },
              fontWeight: 600
            }}
          >
            Software Engineer · Cloud Architect · Data Engineer
          </Typography>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Typography 
            variant="body1" 
            color="text.secondary"
            sx={{ 
              mb: 6, 
              maxWidth: '650px',
              fontSize: { xs: '1rem', md: '1.1rem' },
              lineHeight: 1.7
            }}
          >
            I specialize in building scalable, efficient cloud-native applications and data platforms. 
            With expertise across AWS, GCP, and Azure, I architect solutions that drive business value 
            through infrastructure automation, big data processing, and AI-driven insights.
          </Typography>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Button
            variant="contained"
            color="primary"
            size="large"
            startIcon={<DownloadIcon />}
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              fontWeight: 600,
              py: 1.5,
              px: 3,
              borderRadius: 2,
              mb: 5
            }}
          >
            Download Resume
          </Button>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <Grid container spacing={3} sx={{ mt: 2 }}>
            {skills.map((skill, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1 + (index * 0.1) }}
                >
                  <Box sx={{ mb: 1, display: 'flex', alignItems: 'center', gap: 1 }}>
                    {skill.icon}
                    <Typography 
                      variant="subtitle1" 
                      fontWeight="medium" 
                      color="primary"
                      sx={{ fontFamily: 'ChivoMono, monospace' }}
                    >
                      {skill.category}
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {skill.technologies.map((tech) => (
                      <Chip 
                        key={tech}
                        label={tech}
                        size="small"
                        color="primary"
                        variant="outlined"
                        sx={{ 
                          borderRadius: 1,
                          mb: 1,
                          '& .MuiChip-label': { fontWeight: 500 }
                        }}
                      />
                    ))}
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
      
      {/* Background design elements */}
      <Box 
        sx={{ 
          position: 'absolute',
          top: '20%',
          right: '5%',
          width: { xs: '150px', md: '300px' },
          height: { xs: '150px', md: '300px' },
          borderRadius: '50%',
          background: `radial-gradient(circle, ${theme.palette.primary.main}22 0%, transparent 70%)`,
          filter: 'blur(40px)',
          zIndex: 1
        }} 
      />
      
      <Box 
        sx={{ 
          position: 'absolute',
          bottom: '10%',
          left: '10%',
          width: { xs: '100px', md: '200px' },
          height: { xs: '100px', md: '200px' },
          borderRadius: '50%',
          background: `radial-gradient(circle, ${theme.palette.secondary.main}22 0%, transparent 70%)`,
          filter: 'blur(30px)',
          zIndex: 1
        }} 
      />
    </Box>
  );
};

export default HeroComponent; 