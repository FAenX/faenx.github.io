import { Stack, Typography } from "@mui/material";






export default function HeadingRightLabel(props: {children: React.ReactNode}){
    return (
        <Stack
            sx={{height: "50px", backgroundColor: "black", borderRadius: "0 50px 50px 0"}} 
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