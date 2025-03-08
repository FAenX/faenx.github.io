import { Box, Typography, Card, useTheme, Divider } from "@mui/material";
import React from "react";
import { motion } from "framer-motion";
import { education } from "../../../data/data";
import SchoolIcon from '@mui/icons-material/School';
import EventIcon from '@mui/icons-material/Event';

export default function Education() {
    const theme = useTheme();
    const isDarkMode = theme.palette.mode === 'dark';
    
    return (
      <Box width={"100%"} id="education">
        {/* Custom Section Header */}
        <Box sx={{ 
          mb: 5, 
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: '-8px',
            left: 0,
            width: '60px',
            height: '3px',
            background: isDarkMode ? '#64ffda' : theme.palette.primary.main,
            borderRadius: '4px'
          }
        }}>
          <SchoolIcon 
            sx={{
              color: isDarkMode ? "#64ffda" : theme.palette.primary.main,
              fontSize: '2rem',
              mr: 2
            }}
          />
          <Typography 
            variant="h4" 
            component="h2" 
            sx={{ 
              fontWeight: 700,
              color: isDarkMode ? 'white' : 'text.primary'
            }}
          >
            Education
          </Typography>
        </Box>

        {/* Custom Timeline */}
        <Box sx={{ position: 'relative', mt: 6, ml: { xs: 0, sm: 3 } }}>
          {/* Vertical Timeline Line */}
          <Box 
            sx={{ 
              position: 'absolute',
              left: { xs: 15, sm: 20 },
              top: 0,
              bottom: 0,
              width: 2,
              backgroundColor: isDarkMode ? 'rgba(100, 255, 218, 0.3)' : theme.palette.primary.light,
              zIndex: 0
            }} 
          />
          
          {/* Education Items */}
          {education.map((step, index) => (
            <Box 
              key={step.label}
              sx={{ 
                position: 'relative',
                mb: 6,
                pl: { xs: 5, sm: 7 }
              }}
            >
              {/* Timeline Node */}
              <Box 
                component={motion.div}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                sx={{ 
                  position: 'absolute',
                  left: { xs: 7, sm: 12 },
                  top: 12,
                  width: 16,
                  height: 16,
                  borderRadius: '50%',
                  backgroundColor: isDarkMode ? '#64ffda' : theme.palette.primary.main,
                  border: '2px solid',
                  borderColor: isDarkMode ? '#0a192f' : 'white',
                  zIndex: 1
                }}
              />
              
              {/* Education Card */}
              <Card
                component={motion.div}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                viewport={{ once: true }}
                sx={{ 
                  p: 3,
                  borderRadius: 2,
                  boxShadow: isDarkMode 
                    ? '0 10px 30px -15px rgba(0, 0, 0, 0.5)' 
                    : '0 10px 30px -15px rgba(0, 0, 0, 0.1)',
                  bgcolor: isDarkMode ? 'rgba(17, 34, 64, 0.7)' : 'rgba(255, 255, 255, 0.9)',
                  position: 'relative',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 15,
                    left: -8,
                    width: 16,
                    height: 16,
                    transform: 'rotate(45deg)',
                    backgroundColor: isDarkMode ? 'rgba(17, 34, 64, 0.7)' : 'rgba(255, 255, 255, 0.9)',
                    zIndex: 0
                  }
                }}
              >
                {/* Education Title */}
                <Typography 
                  variant="h5" 
                  component="h3" 
                  sx={{ 
                    fontWeight: 600,
                    color: isDarkMode ? '#64ffda' : theme.palette.primary.main,
                    mb: 1.5,
                  }}
                >
                  {step.label}
                </Typography>
                
                {/* Date */}
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <EventIcon 
                    fontSize="small" 
                    sx={{ 
                      mr: 1,
                      color: isDarkMode ? 'rgba(255, 255, 255, 0.6)' : 'text.secondary',
                    }} 
                  />
                  <Typography 
                    variant="subtitle2" 
                    sx={{ 
                      color: isDarkMode ? 'rgba(255, 255, 255, 0.6)' : 'text.secondary',
                      fontWeight: 500
                    }}
                  >
                    {step.date}
                  </Typography>
                </Box>
                
                <Divider sx={{ my: 2, opacity: 0.2 }} />
                
                {/* Description */}
                <Typography 
                  variant="body1" 
                  sx={{ 
                    color: 'text.primary',
                    lineHeight: 1.7,
                    mb: 2
                  }}
                >
                  {step.description}
                </Typography>
                
                {/* Highlights */}
                {step.highlights && (
                  <Box sx={{ mt: 3 }}>
                    <Typography variant="subtitle2" sx={{ 
                      fontWeight: 600, 
                      mb: 1.5,
                      color: isDarkMode ? 'rgba(255, 255, 255, 0.8)' : 'text.primary',
                    }}>
                      Highlights
                    </Typography>
                    
                    <Box component="ul" sx={{ 
                      pl: 3, 
                      m: 0,
                      '& li': {
                        mb: 1,
                        position: 'relative',
                        '&::marker': {
                          color: isDarkMode ? '#64ffda' : theme.palette.primary.main
                        }
                      }
                    }}>
                      {step.highlights.map((highlight, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: i * 0.1 + 0.4 }}
                          viewport={{ once: true }}
                        >
                          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            {highlight}
                          </Typography>
                        </motion.li>
                      ))}
                    </Box>
                  </Box>
                )}
              </Card>
            </Box>
          ))}
        </Box>
      </Box>
    );
}