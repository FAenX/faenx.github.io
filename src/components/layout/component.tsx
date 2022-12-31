import { Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { ReactNode } from "react";



function FixedContainer() {
    return (
       
        <span className=" floating-line"></span>
      
    );
}




export default function Layout(props: {children: ReactNode}) {
    return (
        <Stack alignItems={"center"} className="">
        <Stack className="" sx={{maxWidth: "1080px"}}>
            {/* <FixedContainer /> */}
            {props.children}
            <Typography variant="body1" align="center" className="m-3">
            Designed and coded with love by Me! <span>
                        {/* <Avatar src={emoji} alt="happy emoji" sx={{width: 20, height: 20}} /> */}
                    </span>
            </Typography>
        </Stack>
        </Stack>
    );
    }

