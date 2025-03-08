import { Box, Container, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Engine } from "tsparticles-engine";
import { info } from "../../data";
import DownloadButton from "../common/downloadButton";

export default function TechHero() {
  const particlesInit = async (engine: Engine) => {
    await loadFull(engine);
  };

  return (
    <Box
      sx={{
        position: "relative",
        height: "100vh",
        width: "100%",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        background: "linear-gradient(135deg, #0a192f 0%, #112240 100%)",
        color: "#ffffff",
      }}
    >
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 60,
          particles: {
            color: {
              value: "#64ffda",
            },
            links: {
              color: "#8892b0",
              distance: 150,
              enable: true,
              opacity: 0.2,
              width: 1,
            },
            move: {
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: true,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 3 },
            },
          },
          detectRetina: true,
        }}
      />
      
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
        <Stack spacing={4}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography 
              variant="subtitle1" 
              sx={{ 
                color: "#64ffda",
                fontFamily: "monospace",
                mb: 2,
                fontSize: "1.2rem",
              }}
            >
              Hello, my name is
            </Typography>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Typography 
              variant="h1" 
              sx={{ 
                fontSize: { xs: "2.5rem", md: "5rem" },
                fontWeight: 700,
                background: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                mb: 1,
              }}
            >
              {info.name}
            </Typography>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Typography 
              variant="h2" 
              sx={{ 
                fontSize: { xs: "1.5rem", md: "2.75rem" },
                color: "#8892b0",
                fontWeight: 600,
                mb: 3,
              }}
            >
              I build things for the web & cloud.
            </Typography>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Typography 
              variant="body1" 
              sx={{ 
                fontSize: "1.1rem",
                color: "#8892b0",
                maxWidth: "600px",
                mb: 4,
                lineHeight: 1.7,
              }}
            >
              {info.about}
            </Typography>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <DownloadButton pdfUrl="/resume.pdf" />
          </motion.div>
        </Stack>
      </Container>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        style={{
          position: "absolute",
          bottom: "40px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 5,
        }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <Typography 
            variant="body2" 
            sx={{ 
              color: "#64ffda",
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
            }}
            onClick={() => {
              document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Scroll Down
          </Typography>
        </motion.div>
      </motion.div>
    </Box>
  );
} 