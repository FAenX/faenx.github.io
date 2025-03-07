import { motion } from 'framer-motion';
import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

interface LogoMotionProps {
  size?: number;
  text?: string;
}

export const LogoMotion = ({ size = 40, text = "YourName" }: LogoMotionProps) => {
  const theme = useTheme();
  
  const circleVariants = {
    hidden: { scale: 0 },
    visible: { 
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };
  
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, delay: 0.3 }
    }
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={circleVariants}
      >
        <Box 
          sx={{ 
            width: size, 
            height: size, 
            borderRadius: '50%',
            background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: theme.palette.primary.contrastText,
            fontWeight: 'bold',
            fontSize: size / 2
          }}
        >
          {text.charAt(0)}
        </Box>
      </motion.div>
      
      {text && (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={textVariants}
        >
          <Typography 
            variant="h6" 
            component="span"
            color="text.primary"
            sx={{ fontWeight: 'bold' }}
          >
            {text}
          </Typography>
        </motion.div>
      )}
    </Box>
  );
}; 