import { Stack, Typography } from "@mui/material";
import { info } from "../../../../data";




export function Headline() {
    return (
        <Stack spacing={0}  margin={"20px"} sx={{border: "1px solid white"}}>
            <Typography variant="h2" margin={2}>
                {info.name} 
            </Typography>
            <Typography margin={2} variant="h5"> 
                {info.about}
            </Typography>
        </Stack>
    );
}