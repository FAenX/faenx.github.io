import { useEffect, useState, } from "react";
import { Box, Typography, Avatar, Card, CardContent, IconButton, Stack, Container, useTheme } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import PeopleIcon from '@mui/icons-material/People';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  avatar?: string;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Kelvin Macharia",
    role: "Scrum Master | Quality Assurance Engineer | Tech Enthusiast | ISTQB Certified",
    company: "GRIFFIN Global Technologies, LLC",
    text: "Emmanuel embodies the epitome of a Solutions Architect, leveraging his extensive technical prowess, and proactive mindset to conceptualize and implement innovative solutions, translating complex business needs into comprehensive strategies that not only meet but exceed objectives."
  },
  
  // Add more testimonials as needed
];

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const theme = useTheme();

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 8000);
    
    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0
    })
  };

  return (
    <Container sx={{ my: 6 }}>
      {/* Custom Section Header */}
      <Box sx={{ 
        mb: 4, 
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
          background: theme.palette.mode === 'dark' ? '#64ffda' : theme.palette.primary.main,
          borderRadius: '4px'
        }
      }}>
        <FormatQuoteIcon 
          sx={{
            color: theme.palette.mode === 'dark' ? "#64ffda" : theme.palette.primary.main,
            fontSize: '2rem',
            mr: 2
          }}
        />
        <Typography 
          variant="h4" 
          component="h2" 
          sx={{ 
            fontWeight: 700,
            color: theme.palette.mode === 'dark' ? 'white' : 'text.primary'
          }}
        >
          Testimonials
        </Typography>
      </Box>
      
      <Box sx={{ mt: 4, mb: 8 }}>
        <Box sx={{ 
          display: "flex", 
          flexDirection: "column", 
          alignItems: "center",
          position: "relative",
          mx: "auto",
          maxWidth: "800px",
          minHeight: "300px",
          pt: 2
        }}>
          <AnimatePresence custom={direction} initial={false}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              style={{ position: "absolute", width: "100%" }}
            >
              <Card elevation={4} sx={{ 
                borderRadius: 4, 
                overflow: "visible",
                background: "linear-gradient(145deg, rgba(25,118,210,0.03) 0%, rgba(33,203,243,0.06) 100%)",
                position: "relative"
              }}>
                <CardContent sx={{ p: 4 }}>
                  <FormatQuoteIcon sx={{ 
                    position: "absolute", 
                    top: -20, 
                    left: 20, 
                    fontSize: 60, 
                    color: "primary.main",
                    opacity: 0.2
                  }} />
                  <Typography variant="body1" sx={{ fontSize: "1.1rem", mb: 3, mt: 1, fontStyle: "italic" }}>
                    "{testimonials[currentIndex].text}"
                  </Typography>
                  <Stack direction="row" spacing={2} alignItems="center">
                    <Avatar
                      src={testimonials[currentIndex].avatar}
                      sx={{ width: 56, height: 56 }}
                    />
                    <Box>
                      <Typography variant="h6">{testimonials[currentIndex].name}</Typography>
                      <Typography variant="body2" color="text.secondary">
                        {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
                      </Typography>
                    </Box>
                  </Stack>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>
          
          <Stack 
            direction="row" 
            spacing={2} 
            sx={{ 
              position: "absolute", 
              bottom: -30, 
              left: "50%", 
              transform: "translateX(-50%)" 
            }}
          >
            <IconButton 
              onClick={prevTestimonial} 
              component={motion.button}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              sx={{ bgcolor: "background.paper", boxShadow: 1 }}
            >
              <ArrowBackIosNewIcon fontSize="small" />
            </IconButton>
            <IconButton 
              onClick={nextTestimonial} 
              component={motion.button}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              sx={{ bgcolor: "background.paper", boxShadow: 1 }}
            >
              <ArrowForwardIosIcon fontSize="small" />
            </IconButton>
          </Stack>
        </Box>
      </Box>
    </Container>
  );
} 