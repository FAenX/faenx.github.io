import { Box, useTheme, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import React from 'react';
import CodeIcon from '@mui/icons-material/Code';

interface AnimatedAvatarProps {
  size?: number | string;
}

export const AnimatedAvatar: React.FC<AnimatedAvatarProps> = ({ 
  size = { xs: '280px', md: '340px' }
}) => {
  const theme = useTheme();
  
  return (
    <Box
      sx={{
        position: 'relative',
        width: size,
        height: size,
        mx: 'auto',
        mb: { xs: 5, md: 0 },
        mt: { xs: 2, md: 4 },
        padding: 2
      }}
    >
      {/* Background decorative elements */}
      <Box
        component={motion.div}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        sx={{
          position: 'absolute',
          top: '-8%',
          left: '-8%',
          width: '116%',
          height: '116%',
          borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
          background: `linear-gradient(135deg, ${theme.palette.primary.main}33, ${theme.palette.primary.main}11)`,
          zIndex: 0,
          animation: 'morphing 15s ease-in-out infinite',
          '@keyframes morphing': {
            '0%': {
              borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%'
            },
            '25%': {
              borderRadius: '58% 42% 75% 25% / 76% 46% 54% 24%'
            },
            '50%': {
              borderRadius: '50% 50% 33% 67% / 55% 27% 73% 45%'
            },
            '75%': {
              borderRadius: '33% 67% 58% 42% / 63% 68% 32% 37%'
            }
          }
        }}
      />
      
      {/* Second decorative shape */}
      <Box
        component={motion.div}
        initial={{ opacity: 0, rotate: -15 }}
        animate={{ opacity: 0.6, rotate: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        sx={{
          position: 'absolute',
          top: '10%',
          right: '-12%',
          width: '45%',
          height: '45%',
          borderRadius: '63% 37% 54% 46% / 55% 48% 52% 45%',
          backgroundColor: theme.palette.secondary.main,
          opacity: 0.15,
          zIndex: 0
        }}
      />
      
      {/* Main image container - replaced with a gradient placeholder */}
      <Box
        component={motion.div}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: 0.3
        }}
        sx={{
          position: 'relative',
          width: '100%',
          height: '100%',
          borderRadius: '8px',
          overflow: 'hidden',
          boxShadow: `0 10px 30px -15px ${theme.palette.mode === 'dark' ? 'rgba(0, 0, 0, 0.7)' : 'rgba(0, 0, 0, 0.25)'}`,
          zIndex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          background: `linear-gradient(135deg, ${theme.palette.background.paper}, ${
            theme.palette.mode === 'dark' ? 'rgba(30, 50, 80, 1)' : 'rgba(240, 247, 255, 1)'
          })`,
          transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
          '&:hover': {
            transform: 'translateY(-8px)',
            boxShadow: `0 20px 40px -20px ${theme.palette.mode === 'dark' ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.3)'}`
          },
          padding: 4
        }}
      >
        {/* Placeholder content - code icon with text */}
        <Box
          component={motion.div}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          sx={{ 
            textAlign: 'center',
            color: theme.palette.primary.main
          }}
        >
          <CodeIcon sx={{ fontSize: 80, mb: 2, opacity: 0.9 }} />
          <Typography 
            variant="h5" 
            gutterBottom
            sx={{ 
              fontWeight: 'bold',
              fontFamily: 'ChivoMono, monospace'
            }}
          >
            Emmanuel Davidson
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: theme.palette.text.secondary,
              maxWidth: '80%',
              mx: 'auto',
              mt: 2
            }}
          >
            Software Engineer · Cloud Architect · Data Engineer
          </Typography>
        </Box>
      </Box>
      
      {/* Border accent */}
      <Box
        component={motion.div}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        sx={{
          position: 'absolute',
          bottom: '-5%',
          right: '-5%',
          width: '55%',
          height: '55%',
          border: `4px solid ${theme.palette.primary.main}`,
          borderRadius: '4px',
          zIndex: 0
        }}
      />
      
      {/* Small decorative dot */}
      <Box
        component={motion.div}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, delay: 0.8 }}
        sx={{
          position: 'absolute',
          top: '15%',
          left: '-8%',
          width: '16px',
          height: '16px',
          borderRadius: '50%',
          backgroundColor: theme.palette.primary.main,
          zIndex: 2
        }}
      />
    </Box>
  );
}; 