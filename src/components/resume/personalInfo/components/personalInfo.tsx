import { Stack } from "@mui/material";
import {Info,Headline} from "./index"
import React from "react";
import { Rings } from  'react-loader-spinner'


const Image = React.lazy(()=>import("./image"))

const Loading = () => (
    <Stack
        flexDirection={"row"}
        justifyContent={"center"}
        alignItems={"center"}
        height={"100%"}
        width={"100%"}
    >
        <Rings
            height="80"
            width="80"
            color="#4fa94d"
            radius="6"
            wrapperStyle={{}}
            wrapperClass="div"
            visible={true}
            ariaLabel="rings-loading"
        />
    </Stack>
    
)


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