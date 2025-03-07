import { Box, Typography, Button, Paper } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';
import EmailIcon from '@mui/icons-material/Email';

export const ContactCTA = () => {
  const theme = useTheme();
  
  return (
    <Box sx={{ py: 10 }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Paper 
          elevation={4}
          sx={{ 
            p: { xs: 4, md: 6 },
            textAlign: 'center',
            borderRadius: 4,
            background: `linear-gradient(145deg, ${theme.palette.background.paper}, ${
              theme.palette.mode === 'dark' ? 'rgba(25,40,65,0.8)' : 'rgba(245,250,255,0.8)'
            })`,
            maxWidth: 900,
            mx: 'auto'
          }}
        >
          <Typography 
            variant="h3" 
            component="h2"
            className="text-gradient"
            sx={{ mb: 2, fontWeight: 'bold' }}
          >
            Let's Work Together
          </Typography>
          
          <Typography 
            variant="h6" 
            component="p"
            color="text.secondary"
            sx={{ mb: 4, maxWidth: 600, mx: 'auto' }}
          >
            I'm currently available for freelance projects, technical consultations, 
            and full-time opportunities in software engineering and cloud architecture.
          </Typography>
          
          <Button
            variant="contained"
            color="primary"
            size="large"
            startIcon={<EmailIcon />}
            href="mailto:contact@emmanuel-davidson.com"
            sx={{
              py: 1.5,
              px: 4,
              borderRadius: 2,
              fontWeight: 'bold'
            }}
          >
            Get In Touch
          </Button>
        </Paper>
      </motion.div>
    </Box>
  );
}; 