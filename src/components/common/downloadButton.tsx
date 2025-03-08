import { Button, Typography } from "@mui/material";
import DownloadIcon from '@mui/icons-material/Download';
import { motion } from "framer-motion";

export default function DownloadButton({ pdfUrl }: { pdfUrl: string }) {
  return (
    <Button
      component={motion.a}
      href={pdfUrl}
      download="Resume.pdf"
      target="_blank"
      rel="noopener noreferrer"
      variant="contained"
      startIcon={<DownloadIcon />}
      whileHover={{ 
        scale: 1.05,
        boxShadow: "0 10px 25px rgba(33,150,243,0.3)",
      }}
      whileTap={{ scale: 0.95 }}
      sx={{
        py: 1.2,
        px: 3,
        background: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
        color: "white",
        fontWeight: "bold",
        borderRadius: "8px",
        textTransform: "none"
      }}
    >
      <Typography variant="button">
        Download Resume
      </Typography>
    </Button>
  );
} 