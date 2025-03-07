import React from 'react';
import { useTheme } from '@mui/material';
import { motion } from 'framer-motion';

interface IllustrationProps {
  size?: number;
}

export const DataPipelineIllustration: React.FC<IllustrationProps> = ({ size = 120 }) => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';
  const primaryColor = isDarkMode ? '#64ffda' : '#1976D2';
  const secondaryColor = isDarkMode ? '#8892b0' : '#616161';
  const bgColor = isDarkMode ? '#112240' : '#f5f7fa';

  return (
    <motion.svg 
      width={size} 
      height={size} 
      viewBox="0 0 200 200" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <rect width="200" height="200" rx="10" fill={bgColor} />
      <motion.path 
        d="M40 80H160M40 120H160" 
        stroke={secondaryColor} 
        strokeWidth="4" 
        strokeDasharray="8 8" 
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />
      <motion.rect 
        x="50" y="50" width="40" height="30" rx="5" 
        fill={primaryColor} fillOpacity="0.2" 
        stroke={primaryColor} strokeWidth="2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      />
      <motion.rect 
        x="110" y="50" width="40" height="30" rx="5" 
        fill={primaryColor} fillOpacity="0.2" 
        stroke={primaryColor} strokeWidth="2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      />
      <motion.rect 
        x="80" y="120" width="40" height="30" rx="5" 
        fill={primaryColor} fillOpacity="0.2" 
        stroke={primaryColor} strokeWidth="2"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      />
      <motion.path 
        d="M70 80L90 120M130 80L110 120" 
        stroke={primaryColor} strokeWidth="2"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
      />
    </motion.svg>
  );
};

export const SparkAnalyticsIllustration: React.FC<IllustrationProps> = ({ size = 120 }) => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';
  const primaryColor = isDarkMode ? '#64ffda' : '#1976D2';
  const secondaryColor = isDarkMode ? '#8892b0' : '#616161';
  const bgColor = isDarkMode ? '#112240' : '#f5f7fa';

  return (
    <motion.svg 
      width={size} 
      height={size} 
      viewBox="0 0 200 200" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <rect width="200" height="200" rx="10" fill={bgColor} />
      <motion.path 
        d="M60 140L80 100L100 120L120 70L140 40" 
        stroke={primaryColor} 
        strokeWidth="3"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />
      <motion.circle 
        cx="60" cy="140" r="6" 
        fill={primaryColor} 
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      />
      <motion.circle 
        cx="80" cy="100" r="6" 
        fill={primaryColor}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.4, delay: 0.4 }}
      />
      <motion.circle 
        cx="100" cy="120" r="6" 
        fill={primaryColor}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.4, delay: 0.6 }}
      />
      <motion.circle 
        cx="120" cy="70" r="6" 
        fill={primaryColor}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.4, delay: 0.8 }}
      />
      <motion.circle 
        cx="140" cy="40" r="6" 
        fill={primaryColor}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.4, delay: 1 }}
      />
      <motion.rect 
        x="40" y="160" 
        width="120" height="2" 
        fill={secondaryColor}
        initial={{ width: 0 }}
        animate={{ width: 120 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      />
      <motion.rect 
        x="40" y="160" 
        width="2" height="120" 
        transform="rotate(90 40 160)" 
        fill={secondaryColor}
        initial={{ height: 0 }}
        animate={{ height: 120 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      />
    </motion.svg>
  );
};

export const DataWarehouseIllustration: React.FC<IllustrationProps> = ({ size = 120 }) => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';
  const primaryColor = isDarkMode ? '#64ffda' : '#1976D2';
  const secondaryColor = isDarkMode ? '#8892b0' : '#616161';
  const bgColor = isDarkMode ? '#112240' : '#f5f7fa';

  return (
    <motion.svg 
      width={size} 
      height={size} 
      viewBox="0 0 200 200" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <rect width="200" height="200" rx="10" fill={bgColor} />
      <motion.rect 
        x="50" y="70" 
        width="100" height="80" rx="5" 
        fill={primaryColor} fillOpacity="0.2" 
        stroke={primaryColor} strokeWidth="2"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      />
      <motion.rect 
        x="60" y="80" 
        width="80" height="10" rx="2" 
        fill={primaryColor}
        initial={{ width: 0 }}
        animate={{ width: 80 }}
        transition={{ duration: 0.4, delay: 0.5 }}
      />
      <motion.rect 
        x="60" y="100" 
        width="80" height="10" rx="2" 
        fill={secondaryColor} fillOpacity="0.6"
        initial={{ width: 0 }}
        animate={{ width: 80 }}
        transition={{ duration: 0.4, delay: 0.7 }}
      />
      <motion.rect 
        x="60" y="120" 
        width="80" height="10" rx="2" 
        fill={secondaryColor} fillOpacity="0.6"
        initial={{ width: 0 }}
        animate={{ width: 80 }}
        transition={{ duration: 0.4, delay: 0.9 }}
      />
      <motion.rect 
        x="60" y="140" 
        width="80" height="10" rx="2" 
        fill={secondaryColor} fillOpacity="0.6"
        initial={{ width: 0 }}
        animate={{ width: 80 }}
        transition={{ duration: 0.4, delay: 1.1 }}
      />
      <motion.path 
        d="M100 40L130 70H70L100 40Z" 
        fill={primaryColor} fillOpacity="0.2" 
        stroke={primaryColor} strokeWidth="2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      />
    </motion.svg>
  );
};

export const AIRecommendationIllustration: React.FC<IllustrationProps> = ({ size = 120 }) => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';
  const primaryColor = isDarkMode ? '#64ffda' : '#1976D2';
  const secondaryColor = isDarkMode ? '#8892b0' : '#616161';
  const bgColor = isDarkMode ? '#112240' : '#f5f7fa';

  return (
    <motion.svg 
      width={size} 
      height={size} 
      viewBox="0 0 200 200" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <rect width="200" height="200" rx="10" fill={bgColor} />
      <motion.circle 
        cx="100" cy="100" r="50" 
        fill={primaryColor} fillOpacity="0.1" 
        stroke={primaryColor} strokeWidth="2"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8 }}
      />
      <motion.circle 
        cx="70" cy="80" r="10" 
        fill={primaryColor}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.8 }}
      />
      <motion.circle 
        cx="120" cy="70" r="10" 
        fill={primaryColor}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 1 }}
      />
      <motion.circle 
        cx="140" cy="110" r="10" 
        fill={primaryColor}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 1.2 }}
      />
      <motion.circle 
        cx="100" cy="140" r="10" 
        fill={primaryColor}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 1.4 }}
      />
      <motion.circle 
        cx="60" cy="120" r="10" 
        fill={primaryColor}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 1.6 }}
      />
      <motion.path 
        d="M70 80L120 70M120 70L140 110M140 110L100 140M100 140L60 120M60 120L70 80" 
        stroke={secondaryColor} strokeWidth="2"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, delay: 1.8 }}
      />
    </motion.svg>
  );
};

interface IllustrationMapType {
  [key: string]: React.FC<IllustrationProps>;
}

export const ProjectIllustrationMap: IllustrationMapType = {
  "Data Engineering": DataPipelineIllustration,
  "Big Data": SparkAnalyticsIllustration,
  "Data Warehousing": DataWarehouseIllustration,
  "AI & Data": AIRecommendationIllustration,
  "Default": DataPipelineIllustration
};

export const getProjectIllustration = (category: string, size?: number) => {
  const Illustration = ProjectIllustrationMap[category] || ProjectIllustrationMap["Default"];
  return <Illustration size={size} />;
}; 