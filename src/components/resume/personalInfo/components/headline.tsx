import { Stack, Typography, Box } from "@mui/material";
import { info } from "../../../../data";




export function Headline() {
    return (
        <Box>
        <Stack  >
            <Typography variant="h3" margin={2} className="animate__animated animate__fadeIn animate__fadeInUp">
                {info.name} 
            </Typography>
            <Typography margin={2} variant="h5" className="animate__animated animate__fadeIn animate__fadeInUp"> 
                {info.about}
            </Typography>
        </Stack>
        </Box>
    );
}