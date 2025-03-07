import { Stack, Typography, Box } from "@mui/material";
import { motion } from "framer-motion";
import { info } from "../../../../data";

export function Headline() {
    return (
        <Box>
            <Stack>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Typography 
                        variant="h1" 
                        sx={{
                            fontSize: "60px",
                            background: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent"
                        }} 
                        margin={2}
                    >
                        {info.name} 
                    </Typography>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                >
                    <Typography 
                        margin={2} 
                        variant="h5"
                        component={motion.div}
                        whileHover={{ scale: 1.02 }}
                        sx={{
                            maxWidth: "600px",
                            lineHeight: 1.6
                        }}
                    > 
                        {info.about}
                    </Typography>
                </motion.div>
            </Stack>
        </Box>
    );
}