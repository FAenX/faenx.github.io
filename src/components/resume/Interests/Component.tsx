import { Skeleton, Stack } from "@mui/material";
import React from "react";

import Image from 'react-bootstrap/Image'


const interests = [
    {
        name: "Music",
    },
    {
        name: "Travel",
    },
    {
        name: "Reading",
    },
]

interface InterestProps {
    name: string,
    image?: string,
}


export default function Interests() {
    return (
       
            <div className="d-flex border border-primary m-1 p-1">
                <div className="m-1 p-1 d-flex flex-column justify-content-centre" style={{width: "100%"}}>
                    <p className="display-6 border">Interests</p>
                    
                <Stack direction="row" flexWrap={"wrap"} spacing={2} className="p-3 border">

                <Skeleton variant="circular" width={40} height={40} />
                <Skeleton variant="circular" width={40} height={40} />
                <Skeleton variant="circular" width={40} height={40} />
                <Skeleton variant="circular" width={40} height={40} />
                <Skeleton variant="circular" width={40} height={40} />
                


                </Stack>
                </div>
            </div>
      
    );
}