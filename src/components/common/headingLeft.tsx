import { Stack, Typography } from "@mui/material";






export default function HeadingLeftLabel(props: {children: React.ReactNode}){
    return (
        <Stack
            sx={{height: "50px", backgroundColor: "black", borderRadius: "50px 0 0 50px"}} 
            flexDirection={"row"}
            justifyContent={"flex-start"}
            alignItems={"center"}
            margin={2}  
            padding={2} 
        >
            <Typography align="left" variant="h6" color={"white"} >{props.children}</Typography>
        </Stack>
    )
}