import { Box, Skeleton, Stack, Typography } from "@mui/material";
import React from "react";
import Image from 'react-bootstrap/Image'
import { styleProps } from "..";
import profile from "../../../assets/images/profile-image.jpeg"
import Typing from "../../common/index,";

type Props = {
    image: string,
}

const info = {
    name: "Emmanuel Davidson",
    about: "R&D, Database engineer, DevOps engineer, Cloud engineer, Data engineer and Linux SysAdmin.",
    location: "Nairobi, Kenya",
    image: "https://avatars.githubusercontent.com/u/1015040?v=4",

}



export default function PersonalInfo() {
    return (
        <Stack className="">      
         <Typing />      
            <Stack className="" style={{lineHeight: "1"}}>                
                <Stack className="" direction={"row"} flexWrap="wrap" justifyContent={"flex-end"} margin={3} alignItems="flex-end"  spacing={5}>
                     <Stack spacing={0} justifyContent="center" alignItems={"center"} className="p-2 ">
                        <Typography variant="h5" > {info.name} </Typography>                    
                        <hr className="my-2" style={{width: "40%"}} />
                        <p className="lead"> {info.location} </p>
                    </Stack>
                    {/*  */}
                    <Stack  justifyContent={"center"} alignItems={"center"} >
                    {
                        info.image ? (
                            <img
                            style={{
                                width: 150,
                                height: 150,
                            }}
                            className="rounded-circle"
                            alt={info.name}
                            src={profile}
                            />
                        ) : (
                            <Skeleton variant="circular" width={150} height={150} />
                        )
                        }

                        
                    </Stack>
                    
                </Stack>
                <Stack  direction={"row"} justifyContent={"flex-end"} >
                    <Box  sx={{maxWidth:500}}>
                    <Typography variant="body1" align="right" > {info.about}</Typography>
                    </Box>

                </Stack>
            </Stack>
        </Stack>
    );
}