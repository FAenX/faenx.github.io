import React from 'react';
import { Box, Typography, Container, Button, useTheme } from '@mui/material';
import { motion } from 'framer-motion';

export default function Hero() {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';
  
  return (
    <Box
      id="hero"
      sx={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        pt: { xs: 8, sm: 10, md: 12 },
        pb: { xs: 8, sm: 10, md: 12 },
        overflow: 'hidden',
        backgroundColor: isDarkMode ? 'rgba(10, 25, 47, 0.95)' : '#f5f7fa',
        background: isDarkMode 
          ? 'linear-gradient(135deg, rgba(10, 25, 47, 0.95) 0%, rgba(17, 34, 64, 0.97) 100%)'
          : 'linear-gradient(135deg, #f5f7fa 0%, #ffffff 100%)',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: isDarkMode 
            ? 'radial-gradient(circle at 25% 25%, rgba(100, 255, 218, 0.05) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(100, 255, 218, 0.05) 0%, transparent 50%)'
            : 'radial-gradient(circle at 25% 25%, rgba(25, 118, 210, 0.05) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(25, 118, 210, 0.05) 0%, transparent 50%)',
          zIndex: 0
        }
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box sx={{ maxWidth: 800, mx: 'auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Typography 
              variant="subtitle1" 
              sx={{ 
                mb: 2, 
                color: isDarkMode ? '#64ffda' : theme.palette.primary.main,
                fontWeight: 500
              }}
            >
              Hi, my name is
            </Typography>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Typography 
              variant="h1" 
              component="h1" 
              sx={{ 
                fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
                fontWeight: 700,
                mb: 1,
                color: isDarkMode ? '#e6f1ff' : '#212121',
                letterSpacing: '-0.02em'
              }}
            >
              Emmanuel Davidson
            </Typography>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Typography 
              variant="h2" 
              component="h2" 
              className={isDarkMode ? '' : ''}
              sx={{ 
                fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
                fontWeight: 600,
                mb: 4,
                color: isDarkMode ? '#8892b0' : '#424242',
                letterSpacing: '-0.01em'
              }}
            >
              I build data pipelines and software systems
            </Typography>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Typography 
              variant="body1" 
              sx={{ 
                mb: 4, 
                maxWidth: 600,
                color: isDarkMode ? '#8892b0' : '#616161',
                fontSize: { xs: '1rem', md: '1.1rem' },
                lineHeight: 1.7
              }}
            >
              I'm a data engineer and software developer specializing in building exceptional 
              data pipelines, distributed systems, and modern web applications. My focus is on 
              creating scalable, reliable solutions that solve real-world problems.
            </Typography>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button 
              variant="outlined" 
              size="large"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              sx={{ 
                borderWidth: 2,
                borderColor: isDarkMode ? '#64ffda' : theme.palette.primary.main,
                color: isDarkMode ? '#64ffda' : theme.palette.primary.main,
                px: 4,
                py: 1.5,
                '&:hover': {
                  borderWidth: 2,
                  borderColor: isDarkMode ? '#64ffda' : theme.palette.primary.main,
                  backgroundColor: isDarkMode ? 'rgba(100, 255, 218, 0.1)' : 'rgba(25, 118, 210, 0.1)',
                }
              }}
            >
              Get In Touch
            </Button>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
} 