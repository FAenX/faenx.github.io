import { Box, Button, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { info } from "../../../data";

export default function ContactCTA() {
  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      sx={{
        padding: { xs: 3, sm: 4 },
        borderRadius: 2,
        background: "linear-gradient(145deg, rgba(25,118,210,0.05) 0%, rgba(33,203,243,0.1) 100%)",
        marginY: { xs: 4, sm: 6 },
        boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
        textAlign: { xs: 'center', md: 'left' }
      }}
    >
      <Typography variant="h3" 
        sx={{ 
          fontSize: { xs: '1.75rem', sm: '2.25rem', md: '2.5rem' },
          mb: { xs: 2, sm: 2.5 }
        }}
      >
        Interested in what I can bring to your team?
      </Typography>
      <Typography variant="body1" sx={{ maxWidth: "700px", mb: 4 }}>
        I'm currently available for new opportunities and would love to discuss how my skills and experience could benefit your organization.
      </Typography>
      <Stack 
        direction={{ xs: "column", sm: "row" }} 
        spacing={{ xs: 2, sm: 3 }}
        justifyContent={{ xs: 'center', md: 'flex-start' }}
      >
        <Button
          component={motion.a}
          href={`mailto:${info.email}`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          variant="contained"
          startIcon={<EmailIcon />}
          sx={{ 
            py: 1.5, 
            px: 3,
            background: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
            color: "white",
            fontWeight: "bold"
          }}
        >
          Contact Me
        </Button>
        <Button
          component={motion.a}
          href={info.links.find(link => link.name.toLowerCase() === "linkedin")?.href || "#"}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          variant="outlined"
          startIcon={<LinkedInIcon />}
          sx={{ py: 1.5, px: 3 }}
        >
          Connect on LinkedIn
        </Button>
      </Stack>
    </Box>
  );
} 