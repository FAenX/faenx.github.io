import { Box, Typography, Grid, Container, Link } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { SectionHeader } from '../shared/SectionHeader';
import { Competencies } from '../shared/Competencies';
import { AnimatedAvatar } from './AnimatedAvatar';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import ArticleIcon from '@mui/icons-material/Article';

const About = () => {
  const theme = useTheme();
  
  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/emmanuel-davidson",
      icon: <LinkedInIcon />
    },
    {
      name: "GitHub",
      url: "https://github.com/FAenX",
      icon: <GitHubIcon />
    },
    {
      name: "Medium",
      url: "https://medium.com/@emmanueldavidson",
      icon: <ArticleIcon />
    }
  ];
  
  return (
    <Box id="about" sx={{ py: 8, position: 'relative' }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader 
            title="About Me" 
            subtitle="My Background & Expertise" 
          />
        </motion.div>
        
        <Box 
          sx={{ 
            position: 'absolute',
            top: 0,
            right: 0,
            width: { xs: '100%', md: '50%' },
            height: '100%',
            opacity: 0.03,
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23${theme.palette.mode === 'dark' ? 'ffffff' : '000000'}' fill-opacity='1'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 20.83l2.83-2.83 1.41 1.41L1.41 22.24H0v-1.41zM0 3.07l2.83-2.83 1.41 1.41L1.41 4.48H0V3.07zm18.34 20.83l2.83-2.83 1.41 1.41-2.83 2.83h-1.41v-1.41zm0-17.76l2.83-2.83 1.41 1.41-2.83 2.83h-1.41V3.07zm-9.17 0l2.83-2.83 1.41 1.41-2.83 2.83h-1.41V3.07zm-9.17 0l2.83-2.83 1.41 1.41-2.83 2.83H0V3.07zM18.34 0l2.83 2.83-1.41 1.41L16.93 1.41V0h1.41zm9.17 0l2.83 2.83-1.41 1.41-2.83-2.83V0h1.41zm9.17 0l2.83 2.83-1.41 1.41-2.83-2.83V0h1.41zm9.17 0l2.83 2.83-1.41 1.41-2.83-2.83V0h1.41zm-27.51 18.34l2.83 2.83-1.41 1.41-2.83-2.83v-1.41h1.41zm9.17 0l2.83 2.83-1.41 1.41-2.83-2.83v-1.41h1.41zm9.17 0l2.83 2.83-1.41 1.41-2.83-2.83v-1.41h1.41zm9.17 0l2.83 2.83-1.41 1.41-2.83-2.83v-1.41h1.41zM0 36.1l2.83 2.83-1.41 1.41L0 38.59v-2.83l1.41 1.41L0 38.59V36.1zm36.1 0l2.83 2.83-1.41 1.41-2.83-2.83v-1.41h1.41z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            zIndex: -1
          }}
        />
        
        <Grid container spacing={6} sx={{ mb: 6 }}>
          <Grid item xs={12} md={5}>
            <AnimatedAvatar />
            
            <Box sx={{ 
              mt: 3, 
              display: 'flex', 
              justifyContent: 'center',
              gap: 2
            }}>
              {socialLinks.map((link) => (
                <motion.div
                  key={link.name}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link 
                    href={link.url} 
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      color: theme.palette.primary.main,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: '50%',
                      p: 1,
                      border: `2px solid ${theme.palette.primary.main}30`,
                      transition: 'all 0.2s ease-in-out',
                      '&:hover': {
                        backgroundColor: theme.palette.primary.main + '10',
                        borderColor: theme.palette.primary.main
                      }
                    }}
                    aria-label={link.name}
                  >
                    {link.icon}
                  </Link>
                </motion.div>
              ))}
            </Box>
          </Grid>
          
          <Grid item xs={12} md={7}>
            <Box>
              {[
                "I'm a seasoned Software Engineer, Cloud Architect, and Data Engineer with over 8 years in the tech industry. I'm passionate about designing scalable, efficient, and cost-effective software and infrastructure solutions that drive real business impact. My journey spans working with startups and enterprises across East Africa and beyond.",
                
                "My expertise includes cloud computing (AWS, GCP, Azure), container orchestration (Kubernetes, Docker), and big data processing (Apache Spark, Delta Lake). I specialize in building cloud-native applications, AI-driven platforms, and infrastructure automation that align with business objectives.",
                
                "As an active contributor to the developer community, I regularly publish technical articles on Medium and LinkedIn covering cloud infrastructure, big data engineering, and software development best practices. I believe knowledge sharing is essential for innovation and growth in our field.",
                
                "My approach to problem-solving is pragmatic—I break down complex challenges into actionable, scalable solutions. Beyond technical work, I'm passionate about mentorship, R&D, and optimizing cloud costs while helping businesses extract maximum value from their tech investments."
              ].map((paragraph, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + (i * 0.1) }}
                >
                  <Typography 
                    variant="body1" 
                    color="text.primary"
                    sx={{ 
                      mb: i < 3 ? 2 : 0, 
                      fontSize: '1.1rem', 
                      lineHeight: 1.7 
                    }}
                  >
                    {paragraph}
                  </Typography>
                </motion.div>
              ))}
            </Box>
          </Grid>
        </Grid>
        
        <Competencies />
      </Container>
    </Box>
  );
};

export default About; 