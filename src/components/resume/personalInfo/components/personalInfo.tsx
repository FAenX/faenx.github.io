import { Stack } from "@mui/material";
import {Info,Headline} from "./index"
import React from "react";


const Image = React.lazy(()=>import("./image"))



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