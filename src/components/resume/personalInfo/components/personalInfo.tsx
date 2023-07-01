import { Stack } from "@mui/material";
import {Info, Image, About, Headline} from "./index"


export default function PersonalInfo() {
    return (
            <Stack  sx={{border: "1px solid white"}} >                
                <Stack  
                    flexWrap="wrap" 
                    justifyContent={"center"} 
                    margin={2} 
                    alignItems="flex-center"  
                    spacing={1}
                    sx={{border: "1px solid white"}}
                >
                     
                    <Image/>
                    <Headline/>
                    {/* <Info/> */}
                    {/* <About/> */}
                </Stack>
            </Stack>

    );
}