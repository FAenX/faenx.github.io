import { Skeleton, Stack, Typography } from "@mui/material";
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
    about: "I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I'm focused on building accessible, human-centered products",
    location: "Nairobi, Kenya",
    image: "https://avatars.githubusercontent.com/u/1015040?v=4",

}



export default function PersonalInfo() {
    return (
        <Stack className="">      
         <Typing />      
            <Stack className="" style={{lineHeight: "1"}}>                
                <Stack className="">
                   
                    <Stack justifyContent={"center"} alignItems={"center"} className=" m-3 p-3" >
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
                    <Stack spacing={0} justifyContent="center" alignItems={"center"} className="p-2 ">
                        <Typography variant="h5" > {info.name} </Typography>                    
                        <hr className="my-2" style={{width: "40%"}} />
                        <p className="lead"> {info.location} </p>
                    </Stack>
                </Stack>
                <Stack className=" p-5   m-3">
                <Typography variant="body1" align="left" > {info.about}</Typography>

                </Stack>
            </Stack>
        </Stack>
    );
}