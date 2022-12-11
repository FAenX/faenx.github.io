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
       
            <Stack className="m-1 p-1">
                <Stack className="m-1 p-1" style={{width: "100%"}}>
                    <Typography variant="h3" align="center">My interests.</Typography>
                </Stack>
                    
                <Stack direction="row" justifyContent={'center'} alignItems="center" flexWrap={"wrap"} spacing={5} >
                    <Skeleton variant="rectangular" width={300} height={300} />
                    
                    <Skeleton variant="rectangular" width={300} height={300} />
                    <Skeleton variant="rectangular" width={300} height={300} />
                </Stack>
            </Stack>
      
    );
}