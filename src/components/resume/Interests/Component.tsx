import { Skeleton, Stack, Typography } from "@mui/material";
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
       
            <div className="d-flex  border m-1 p-1">
                <div className="m-1 p-1 d-flex flex-column justify-content-centre" style={{width: "100%"}}>
                    <Typography variant="h3" align="center">My interests.</Typography>
                    
                <Stack direction="row" justifyContent={"center"} alignItems="center" flexWrap={"wrap"} spacing={2} className="p-3 ">

                <Skeleton variant="circular" width={300} height={300} />
                <Skeleton variant="circular" width={300} height={300} />
                <Skeleton variant="circular" width={300} height={300} />
                
                


                </Stack>
                </div>
            </div>
      
    );
}