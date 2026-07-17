import { Typography, Stack } from "@mui/material";
import { ReactNode } from "react";







export default function Layout(props: {children: ReactNode}) {
    return (
        <Stack
            sx={{
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            {props.children}
            <Stack
                sx={{
                    backgroundColor: "#1f1f1f",
                    borderRadius: "0px 50px 0px 50px",
                    border: "1px solid #1f1f1f",
                    justifyContent: "center",
                }}
            >
                <Typography variant="h4" align="center" sx={{ padding: 2 }} color={"white"}>
                    Emmanuel Davidson
                </Typography>
            </Stack>

        </Stack>
    );
    }

