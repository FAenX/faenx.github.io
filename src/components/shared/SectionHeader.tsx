import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

export const SectionHeader = ({ title, subtitle }: SectionHeaderProps) => {
  
  return (
    <Box sx={{ mb: 4, textAlign: 'center' }}>
      <Typography 
        variant="h2" 
        component="h2"
        color="text.primary"
        sx={{ 
          fontWeight: 'bold',
          mb: subtitle ? 1 : 0 
        }}
      >
        {title}
      </Typography>
      {subtitle && (
        <Typography 
          variant="h6" 
          component="p"
          color="text.secondary"
        >
          {subtitle}
        </Typography>
      )}
    </Box>
  );
}; 