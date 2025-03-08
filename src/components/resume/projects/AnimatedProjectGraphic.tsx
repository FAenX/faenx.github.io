import { motion } from "framer-motion";
import { Box, useTheme } from "@mui/material";
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import CloudIcon from '@mui/icons-material/Cloud';
import BarChartIcon from '@mui/icons-material/BarChart';
import WebIcon from '@mui/icons-material/Web';
import DevicesIcon from '@mui/icons-material/Devices';

interface AnimatedProjectGraphicProps {
  category: string[];
  title: string;
}

export default function AnimatedProjectGraphic({ category, title }: AnimatedProjectGraphicProps) {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';
  
  // Determine primary category for the animation style
  const primaryCategory = category[0];
  
  // Color palette based on theme
  const colors = {
    primary: isDarkMode ? '#64ffda' : theme.palette.primary.main,
    secondary: isDarkMode ? '#8892b0' : '#718096',
    background: isDarkMode ? 'rgba(17, 34, 64, 0.6)' : 'rgba(240, 247, 255, 0.8)',
    accent: isDarkMode ? '#ff63c3' : '#f06292',
  };
  
  // Choose appropriate animation based on category
  const renderAnimation = () => {
    switch(primaryCategory) {
      case 'Frontend':
        return <FrontendAnimation colors={colors} />;
      case 'Backend':
        return <BackendAnimation colors={colors} />;
      case 'DevOps':
        return <DevOpsAnimation colors={colors} />;
      case 'Data Visualization':
        return <DataVisAnimation colors={colors} />;
      case 'Mobile':
        return <MobileAnimation colors={colors} />;
      case 'Full Stack':
        return <FullStackAnimation colors={colors} />;
      default:
        return <DefaultAnimation colors={colors} />;
    }
  };
  
  return (
    <Box
      sx={{
        height: 160,
        width: '100%',
        borderRadius: 2,
        overflow: 'hidden',
        position: 'relative',
        background: `linear-gradient(45deg, ${colors.background}, ${isDarkMode ? 'rgba(10, 25, 47, 0.8)' : 'rgba(255, 255, 255, 0.8)'})`,
        boxShadow: isDarkMode ? 'inset 0 0 15px rgba(100, 255, 218, 0.1)' : 'inset 0 0 15px rgba(33, 150, 243, 0.1)',
      }}
    >
      {renderAnimation()}
    </Box>
  );
}

// Different animation components based on project category
function FrontendAnimation({ colors }: { colors: any }) {
  return (
    <Box sx={{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <WebIcon sx={{ fontSize: 80, color: colors.primary, opacity: 0.8 }} />
      </motion.div>
      
      {/* Animated UI elements */}
      <Box sx={{ position: 'absolute', width: '100%', height: '100%' }}>
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 0.7 }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            style={{
              position: 'absolute',
              left: `${10 + (i * 15)}%`,
              top: `${30 + (i % 3) * 20}%`,
              width: `${20 + (i % 3) * 10}%`,
              height: '8px',
              background: i % 2 === 0 ? colors.primary : colors.secondary,
              borderRadius: '4px',
              opacity: 0.7 - (i * 0.1)
            }}
          />
        ))}
      </Box>
    </Box>
  );
}

function BackendAnimation({ colors }: { colors: any }) {
  return (
    <Box sx={{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <StorageIcon sx={{ fontSize: 80, color: colors.primary, opacity: 0.8 }} />
      </motion.div>
      
      {/* Data flow animation */}
      <Box sx={{ position: 'absolute', width: '100%', height: '100%' }}>
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: -20, opacity: 0 }}
            animate={{ 
              y: [0, 100, 0],
              opacity: [0.8, 0.2, 0.8]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 2 + (i % 3),
              delay: i * 0.2,
              ease: "linear"
            }}
            style={{
              position: 'absolute',
              left: `${15 + (i * 10)}%`,
              top: '10%',
              width: '3px',
              height: '3px',
              background: i % 2 === 0 ? colors.primary : colors.accent,
              borderRadius: '50%'
            }}
          />
        ))}
      </Box>
    </Box>
  );
}

function DevOpsAnimation({ colors }: { colors: any }) {
  return (
    <Box sx={{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <CloudIcon sx={{ fontSize: 80, color: colors.primary, opacity: 0.8 }} />
      </motion.div>
      
      {/* Cloud deployment animation */}
      <Box sx={{ position: 'absolute', width: '100%', height: '100%' }}>
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ 
              scale: [0.8, 1.2, 0.8],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 3 + (i % 2),
              delay: i * 0.3,
            }}
            style={{
              position: 'absolute',
              left: `${20 + (i * 15)}%`,
              top: `${60 - (i * 10)}%`,
              width: '12px',
              height: '12px',
              background: colors.accent,
              borderRadius: '50%',
              filter: 'blur(2px)'
            }}
          />
        ))}
      </Box>
    </Box>
  );
}

function DataVisAnimation({ colors }: { colors: any }) {
  return (
    <Box sx={{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <BarChartIcon sx={{ fontSize: 80, color: colors.primary, opacity: 0.8 }} />
      </motion.div>
      
      {/* Chart bars animation */}
      <Box sx={{ position: 'absolute', width: '100%', height: '100%', bottom: '20%', left: '20%' }}>
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ height: 0 }}
            animate={{ height: `${20 + (i * 10)}px` }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            style={{
              position: 'absolute',
              left: `${i * 20}px`,
              bottom: 0,
              width: '10px',
              background: i % 2 === 0 ? colors.primary : colors.accent,
              borderRadius: '4px 4px 0 0'
            }}
          />
        ))}
      </Box>
    </Box>
  );
}

function MobileAnimation({ colors }: { colors: any }) {
  return (
    <Box sx={{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <DevicesIcon sx={{ fontSize: 80, color: colors.primary, opacity: 0.8 }} />
      </motion.div>
      
      {/* Mobile app interface */}
      <Box sx={{ position: 'absolute', width: '100%', height: '100%' }}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            width: '40px',
            height: '70px',
            border: `2px solid ${colors.primary}`,
            borderRadius: '8px',
          }}
        />
      </Box>
    </Box>
  );
}

function FullStackAnimation({ colors }: { colors: any }) {
  return (
    <Box sx={{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Box sx={{ display: 'flex', gap: 3 }}>
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <WebIcon sx={{ fontSize: 50, color: colors.primary, opacity: 0.8 }} />
        </motion.div>
        <motion.div
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <StorageIcon sx={{ fontSize: 50, color: colors.accent, opacity: 0.8 }} />
        </motion.div>
      </Box>
      
      {/* Connecting lines animation */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 0.8 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        style={{
          position: 'absolute',
          top: '60%',
          left: '30%',
          width: '40%',
          height: '2px',
          background: colors.secondary,
          transformOrigin: 'left'
        }}
      />
    </Box>
  );
}

function DefaultAnimation({ colors }: { colors: any }) {
  return (
    <Box sx={{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <CodeIcon sx={{ fontSize: 80, color: colors.primary, opacity: 0.8 }} />
      </motion.div>
      
      {/* Code lines animation */}
      <Box sx={{ position: 'absolute', width: '100%', height: '100%' }}>
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: `${30 + (i % 3) * 20}%`, opacity: 0.7 }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            style={{
              position: 'absolute',
              left: '20%',
              top: `${30 + (i * 10)}%`,
              height: '2px',
              background: i % 2 === 0 ? colors.primary : colors.secondary,
            }}
          />
        ))}
      </Box>
    </Box>
  );
} 