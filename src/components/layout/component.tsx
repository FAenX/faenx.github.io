import { Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { ReactNode } from "react";







export default function Layout(props: {children: ReactNode}) {
    return (
        <Stack 
            alignItems={"center"}
        >
            {props.children}
            <Stack
                sx={{backgroundColor: "#1f1f1f", borderRadius: "0px 50px 0px 50px"}}
                justifyContent={"center"}
                alignItems={"center"}
                margin={2}
            
            >
                <Typography variant="h4" align="center" padding={2} color={"white"}>
                    Emmanuel Davidson
                </Typography>
            </Stack>
            
        </Stack>
    );
    }

