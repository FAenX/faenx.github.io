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
                sx={{height: "50px", backgroundColor: "#1f1f1f", borderRadius: "50px 50px 0 0"}}
                justifyContent={"center"}
                alignItems={"center"}
            
            >
                <Typography variant="h6" align="center" padding={4} color={"white"}>
                    Emmanuel Davidson
                </Typography>
            </Stack>
            
        </Stack>
    );
    }

