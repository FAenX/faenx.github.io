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
        <div className=" d-flex flex-column justify-content-around p-3 ">      
         <Typing />      
            <div className=" d-flex flex-column justify-content-centre text-align-center" style={{lineHeight: "1"}}>                
                <div className="d-flex flex-row  flex-wrap">
                   
                    <div className=" m-3 p-3 ">
                    {
                        info.image ? (
                            <img
                            style={{
                                width: 210,
                                height: 210,
                            }}
                            className="rounded-circle"
                            alt={info.name}
                            src={profile}
                            />
                        ) : (
                            <Skeleton variant="circular" width={210} height={210} />
                        )
                        }

                        
                    </div>
                    <Stack spacing={0} justifyContent="center" className="p-2 ">
                        <Typography variant="h4" > {info.name} </Typography>                    
                        <hr className="my-4"/>
                        <p className="lead"> {info.location} </p>
                    </Stack>
                </div>
                <div className=" p-3  ">
                <Typography variant="body1"> {info.about}</Typography>

                    </div>
            </div>
        </div>
    );
}