import { Box, Container, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import TechHero from "../hero/TechHero";
import TechTerminal from "./about/TechTerminal";
import SkillsRadarChart from "./skills/SkillsRadarChart";
import ProjectShowcase from "./projects/ProjectShowcase";
import TestimonialCarousel from "./testimonials/TestimonialCarousel";
import ContactCTA from "./cta/ContactCTA";
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";
import Hero from '../hero/component';
import About from '../about/component';
import Projects from './projects/component';
import Testimonials from '../testimonials/component';

export default function Resume() {
  const theme = useTheme();
  
  const sectionStyle = {
    py: { xs: 6, md: 10 },
    position: "relative",
  };
  
  const sectionContainerStyle = {
    maxWidth: { xs: '95%', sm: '85%', md: "lg" },
    mx: "auto",
  };
  
  return (
    <Box component="main">
      <Hero />
      <Container maxWidth="lg">
        <About />
        <Projects />
        <Testimonials />
      </Container>
      
      {/* About Section */}
      <Box sx={{ ...sectionStyle, bgcolor: theme.palette.background.default }} id="about">
        <Container sx={sectionContainerStyle}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <TechTerminal />
          </motion.div>
        </Container>
      </Box>
      
      {/* Experience Section */}
      <Box sx={{ ...sectionStyle, bgcolor: theme.palette.mode === 'dark' ? 'rgba(17, 34, 64, 0.4)' : 'rgba(240, 247, 255, 0.5)' }} id="experience">
        <Container sx={sectionContainerStyle}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Experience />
          </motion.div>
        </Container>
      </Box>
      
      {/* Skills Section */}
      <Box sx={{ ...sectionStyle, bgcolor: theme.palette.background.default }} id="skills">
        <Container sx={sectionContainerStyle}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Skills />
            <Box sx={{ mt: 8 }}>
              <SkillsRadarChart />
            </Box>
          </motion.div>
        </Container>
      </Box>
      
      {/* Projects Section */}
      <Box sx={{ ...sectionStyle, bgcolor: theme.palette.mode === 'dark' ? 'rgba(17, 34, 64, 0.4)' : 'rgba(240, 247, 255, 0.5)' }} id="projects">
        <Container sx={sectionContainerStyle}>
          <ProjectShowcase />
        </Container>
      </Box>
      
      {/* Education Section */}
      <Box sx={{ ...sectionStyle, bgcolor: theme.palette.background.default }} id="education">
        <Container sx={sectionContainerStyle}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Education />
          </motion.div>
        </Container>
      </Box>
      
      {/* Testimonials Section */}
      <Box sx={{ ...sectionStyle, bgcolor: theme.palette.mode === 'dark' ? 'rgba(17, 34, 64, 0.4)' : 'rgba(240, 247, 255, 0.5)' }} id="testimonials">
        <Container sx={sectionContainerStyle}>
          <TestimonialCarousel />
        </Container>
      </Box>
      
      {/* Contact CTA Section */}
      <Box sx={{ ...sectionStyle, bgcolor: theme.palette.background.default }} id="contact">
        <Container sx={sectionContainerStyle}>
          <ContactCTA />
        </Container>
      </Box>
    </Box>
  );
}
