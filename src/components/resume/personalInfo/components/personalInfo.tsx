import { Stack } from "@mui/material";
import {Info, Image, Headline} from "./index"


export default function PersonalInfo() {
    return (
            <Stack>                
                <Stack  
                    flexWrap="wrap" 
                    justifyContent={"center"} 
                    alignItems="flex-center"  
                    alignContent={"center"}
                    
                >
                     
                    <Image/>
                    <Headline/>
                    <Info/>
                </Stack>
            </Stack>

    );
}