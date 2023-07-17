import { Stack } from "@mui/material";
import {Info,Headline, Image} from "./index"
import React from "react";



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