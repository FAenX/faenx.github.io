import { Box, Typography, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";

interface AnimatedLogoProps {
  onClick?: () => void;
  size?: "small" | "medium" | "large";
}

export const AnimatedLogo: React.FC<AnimatedLogoProps> = ({ 
  onClick, 
  size = "medium" 
}) => {
  const theme = useTheme();
  
  // Enhanced size mappings with better spacing
  const sizes = {
    small: {
      container: 42,
      fontSize: '1rem',
      bracketSize: 8,
      bracketThickness: 2,
      bracketOffset: 3, // Space from edge
      innerPadding: 10   // Inner padding around text
    },
    medium: {
      container: 52,
      fontSize: '1.25rem',
      bracketSize: 10,
      bracketThickness: 2.5,
      bracketOffset: 4,
      innerPadding: 12
    },
    large: {
      container: 64,
      fontSize: '1.5rem',
      bracketSize: 12,
      bracketThickness: 3,
      bracketOffset: 5,
      innerPadding: 14
    }
  };
  
  const currentSize = sizes[size];
  
  // Get text color based on theme mode for proper contrast
  const textColor = theme.palette.mode === 'dark' 
    ? theme.palette.common.white 
    : theme.palette.text.primary;
  
  // Initial animation for brackets
  const bracketVariants = {
    initial: { opacity: 0, pathLength: 0 },
    animate: { 
      opacity: 1, 
      pathLength: 1,
      transition: { 
        duration: 1.2,
        ease: "easeInOut"
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
        yoyo: Infinity,
        ease: "easeInOut"
      }
    }
  };
  
  // Animation for the initials
  const letterVariants = {
    initial: { opacity: 0, y: 5 },
    animate: (i: number) => ({ 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        delay: 0.4 + (i * 0.1)
      }
    }),
    hover: {
      color: theme.palette.primary.main,
      transition: { duration: 0.2 }
    }
  };

  return (
    <motion.div
      whileHover="hover"
      initial="initial"
      animate="animate"
      onClick={onClick}
      style={{ cursor: onClick ? 'pointer' : 'default' }}
    >
      <Box
        sx={{
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: currentSize.container,
          height: currentSize.container,
        }}
      >
        {/* Left Bracket - adjusted position with offset */}
        <Box
          component={motion.svg}
          width={currentSize.container}
          height={currentSize.container}
          viewBox="0 0 24 24"
          fill="none"
          stroke={theme.palette.primary.main}
          strokeWidth={currentSize.bracketThickness}
          strokeLinecap="round"
          strokeLinejoin="round"
          variants={bracketVariants}
          sx={{
            position: 'absolute',
            left: currentSize.bracketOffset,
            top: 0
          }}
        >
          <motion.path d="M7 4L4 12L7 20" />
        </Box>
        
        {/* Right Bracket - adjusted position with offset */}
        <Box
          component={motion.svg}
          width={currentSize.container}
          height={currentSize.container}
          viewBox="0 0 24 24"
          fill="none"
          stroke={theme.palette.primary.main}
          strokeWidth={currentSize.bracketThickness}
          strokeLinecap="round"
          strokeLinejoin="round"
          variants={bracketVariants}
          sx={{
            position: 'absolute',
            right: currentSize.bracketOffset,
            top: 0
          }}
        >
          <motion.path d="M17 4L20 12L17 20" />
        </Box>
        
        {/* Initials - with better padding and explicit text color */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: `calc(100% - ${currentSize.innerPadding * 5}px)`,
            height: '100%',
            zIndex: 1,
            px: 1
          }}
        >
          {['E', 'D'].map((letter, i) => (
            <motion.div
              key={letter}
              custom={i}
              variants={letterVariants}
            >
              <Typography
                variant="h6"
                sx={{
                  fontFamily: 'ChivoMono, monospace',
                  fontWeight: 700,
                  fontSize: currentSize.fontSize,
                  letterSpacing: '-0.05em',
                  mx: 0.4,
                  color: textColor // Explicitly set text color for proper contrast
                }}
              >
                {letter}
              </Typography>
            </motion.div>
          ))}
        </Box>
        
        {/* Dot accent */}
        <Box
          component={motion.div}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ 
            scale: 1, 
            opacity: 1,
            transition: { delay: 0.8, duration: 0.3 }
          }}
          whileHover={{
            scale: 1.2,
            backgroundColor: theme.palette.secondary.main,
            transition: { duration: 0.2 }
          }}
          sx={{
            position: 'absolute',
            width: currentSize.bracketSize / 2,
            height: currentSize.bracketSize / 2,
            backgroundColor: theme.palette.primary.main,
            borderRadius: '50%',
            bottom: '20%',
            right: '20%'
          }}
        />
      </Box>
    </motion.div>
  );
}; 