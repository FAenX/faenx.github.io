import { Box, Stack, Typography } from "@mui/material";
import { info } from "../../../../data";





export default function About() {
    return (
        <Stack  sx={{border: "1px solid white"}}>
            <Box margin={"20px"}>
            <Typography align="left" variant="h6"  >ABOUT.</Typography>
            <hr className="my-1" style={{width: "20%"}}/>

            <Typography variant="body1" className="m-3">
                {info.about_long}
            </Typography>
            </Box>
           
            
        </Stack>
    );

}