import { Stack, Typography, Box } from "@mui/material";
import { info } from "../../../../data";




export function Headline() {
    return (
        <Box
            
        >
        <Stack 
            spacing={0}  
            margin={"20px"} 
            

        >
            <Typography variant="h3" margin={2}>
                {info.name} 
            </Typography>
            <Typography margin={2} variant="h5"> 
                {info.about}
            </Typography>
        </Stack>
        </Box>
    );
}