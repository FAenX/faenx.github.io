import { Box, Typography, LinearProgress, Stack } from "@mui/material";
import { motion } from "framer-motion";

interface SkillLevel {
  name: string;
  level: number; // 0-100
  color?: string;
}

export default function SkillMeter({ skills }: { skills: SkillLevel[] }) {
  return (
    <Box sx={{ width: "100%", maxWidth: "600px" }}>
      {skills.map((skill, index) => (
        <motion.div
          key={skill.name}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Stack 
            direction="row" 
            justifyContent="space-between" 
            alignItems="center" 
            sx={{ mb: 0.5, mt: index === 0 ? 0 : 2 }}
          >
            <Typography 
              variant="body1" 
              sx={{ 
                fontWeight: "medium",
                background: skill.color || "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent"
              }}
            >
              {skill.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {skill.level}%
            </Typography>
          </Stack>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
          >
            <LinearProgress 
              variant="determinate" 
              value={skill.level} 
              sx={{ 
                height: 8, 
                borderRadius: 4,
                background: "rgba(0,0,0,0.05)",
                mb: 1,
                "& .MuiLinearProgress-bar": {
                  background: skill.color || "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
                  borderRadius: 4
                }
              }} 
            />
          </motion.div>
        </motion.div>
      ))}
    </Box>
  );
} 