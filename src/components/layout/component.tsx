import { Avatar, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React, { ReactNode } from "react";
import emoji from "../../assets/images/emoji/happy-emoji.svg"



function FixedContainer() {
    return (
       
        <span className=" floating-line"></span>
      
    );
}




export default function Layout(props: {children: ReactNode}) {
    return (
        <Stack className=" m-3">
            {/* <FixedContainer /> */}
            <div className="">{props.children}</div>
            <Typography variant="body1" align="center" className="m-3">
            Designed and coded with love by Me! <span>
                        {/* <Avatar src={emoji} alt="happy emoji" sx={{width: 20, height: 20}} /> */}
                    </span>
            </Typography>
        </Stack>
    );
    }

