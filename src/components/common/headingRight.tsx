import { Avatar, Stack, Typography } from "@mui/material";
import { ReactElement } from "react";






export default function HeadingRightLabel(props: {title: string, icon: ReactElement}){
    return (
        <Stack
            sx={{minHeight: "50px", maxHeight: "80px", backgroundColor: "#1f1f1f", borderRadius: "0 50px 50px 0"}} 
            flexDirection={"row"}
            justifyContent={"flex-start"}
            alignItems={"center"}
            margin={2}  
            padding={2} 
            className="animate__animated animate__zoomInRight"
        >   
            <Avatar>
                {props.icon}
            </Avatar>
            <Typography align="left" variant="h4" color={"white"} margin={2}>{props.title}</Typography>
        </Stack>
    )
}