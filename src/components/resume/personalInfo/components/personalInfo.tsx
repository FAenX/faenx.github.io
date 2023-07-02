import { Stack } from "@mui/material";
import {Info, Image, Headline} from "./index"


export default function PersonalInfo() {
    return (
            <Stack margin={2} >                
                <Stack  
                    flexWrap="wrap" 
                    justifyContent={"center"} 
                    margin={1} 
                    alignItems="flex-center"   
                >
                     
                    <Image/>
                    <Headline/>
                    <Info/>
                </Stack>
            </Stack>

    );
}