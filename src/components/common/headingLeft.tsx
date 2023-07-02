import { Avatar, Stack, Typography } from "@mui/material";
import { ReactElement } from "react";






export default function HeadingLeftLabel(props: {title: string, icon: ReactElement}){
    return (
        <Stack
            sx={{minHeight: "50px", maxHeight: "70px", backgroundColor: "black", borderRadius: "50px 0 0 50px"}} 
            flexDirection={"row"}
            justifyContent={"flex-start"}
            alignItems={"center"}
            margin={2}  
            padding={2} 
        >
            <Avatar>
                {props.icon}
            </Avatar>
            <Typography align="left" variant="h4" color={"white"} margin={2} >{props.title}</Typography>
        </Stack>
    )
}