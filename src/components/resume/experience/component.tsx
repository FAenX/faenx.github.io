import React from "react";
import { Box, Typography, Paper, Grid, List, ListItem, ListItemText, ListItemAvatar, Divider, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { experiences } from "../../../data/data";
import { HeadingLeftLabel } from "../../common";
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import HdrStrongIcon from '@mui/icons-material/HdrStrong';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

export default function Experience() {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';
  
  return (
    <Box width={"100%"} id="experience">
      <HeadingLeftLabel title="Work Experience" icon={<BusinessCenterIcon sx={{color: isDarkMode ? "white" : "black"}}/>}/>
      
      <Grid container spacing={4}>
        {experiences.map((experience, index) => (
          <Grid item xs={12} key={experience.id || index}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Paper 
                elevation={2} 
                sx={{ 
                  p: 3, 
                  borderRadius: 2,
                  bgcolor: isDarkMode ? 'rgba(17, 34, 64, 0.6)' : 'rgba(255, 255, 255, 0.8)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    boxShadow: isDarkMode 
                      ? '0 8px 24px rgba(0,0,0,0.4)' 
                      : '0 8px 24px rgba(0,0,0,0.12)',
                    transform: 'translateY(-4px)'
                  } 
                }}
              >
                <Typography 
                  variant="h4" 
                  component="h3" 
                  id={experience.id} 
                  gutterBottom 
                  sx={{ 
                    color: isDarkMode ? '#64ffda' : theme.palette.primary.main, 
                    fontWeight: 600 
                  }}
                >
                  {experience.label}
                </Typography>
                
                <Grid container spacing={1} sx={{ mb: 2 }}>
                  <Grid item xs={12} sm={6}>
                    <Typography variant="h6" component="h4" sx={{ display: 'flex', alignItems: 'center' }}>
                      <BusinessCenterIcon sx={{ mr: 1, fontSize: '1rem', color: isDarkMode ? '#8892b0' : '#718096', opacity: 0.9 }} />
                      {experience.title}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center', color: 'text.secondary' }}>
                      <CalendarTodayIcon sx={{ mr: 1, fontSize: '1rem', opacity: 0.7 }} />
                      {experience.date}
                    </Typography>
                  </Grid>
                </Grid>
                
                <Divider sx={{ my: 2, borderColor: isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)' }} />
                
                {Array.isArray(experience.description) ? (
                  experience.description.map((item, idx) => (
                    <List key={idx} dense sx={{ py: 0 }}>
                      <ListItem alignItems="flex-start" sx={{ py: 0.5 }}>
                        <ListItemAvatar sx={{ minWidth: 36 }}>
                          <HdrStrongIcon 
                            fontSize="small" 
                            sx={{ color: isDarkMode ? '#64ffda' : theme.palette.primary.main }}
                          />
                        </ListItemAvatar>
                        <ListItemText 
                          primary={item} 
                          primaryTypographyProps={{ 
                            color: 'text.primary',
                            sx: { fontSize: '0.95rem' }
                          }} 
                        />
                      </ListItem>
                    </List>
                  ))
                ) : (
                  <Typography paragraph color="text.primary">{experience.description}</Typography>
                )}
              </Paper>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}