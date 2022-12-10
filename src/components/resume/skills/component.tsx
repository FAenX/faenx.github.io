import { Icon, Skeleton, Stack, Typography } from "@mui/material";
import React from "react";
import Image from 'react-bootstrap/Image'

const skills = [
    {
        title: "Languages",
        description: "This is a project",
        link: ""
    },
    {
        title: "Databases",
        description: "This is a project",
        link: ""
    },
    {
        title: "Project 3",
        description: "This is a project",
        link: ""
    },
]

interface SkillsProps {
    title: string;
    description: string;
    link: string;
}


function ListItem(props: {skills: SkillsProps[]}) {
    return (
        <Stack spacing={5}>                
            {
                props.skills.map((skill) => {
                    return (
                        <Stack spacing={1}>
                            
                            <p className="lead" >
                                {skill.title}
                            </p>

                            <Stack direction="row" flexWrap={"wrap"} spacing={2} className="p-3 border">

                                <Skeleton variant="circular" width={40} height={40} />
                                <Skeleton variant="circular" width={40} height={40} />
                                <Skeleton variant="circular" width={40} height={40} />
                                <Skeleton variant="circular" width={40} height={40} />
                                <Skeleton variant="circular" width={40} height={40} />
                                <Skeleton variant="circular" width={40} height={40} />
                                <Skeleton variant="circular" width={40} height={40} />
                                <Skeleton variant="circular" width={40} height={40} />
                                <Skeleton variant="circular" width={40} height={40} />
                                <Skeleton variant="circular" width={40} height={40} />
                                <Skeleton variant="circular" width={40} height={40} />
                                <Skeleton variant="circular" width={40} height={40} />
                                <Skeleton variant="circular" width={40} height={40} />
                                <Skeleton variant="circular" width={40} height={40} />
                                <Skeleton variant="circular" width={40} height={40} />
                                
                               
                            </Stack>
                                
                        
                        </Stack>
                    )
                })
            }
                
           
        </Stack>
    )
}


export default function Skills() {
    return (
       
        <Stack spacing={5} justifyContent={"center"} alignItems={"flex-start"} className="border p-5 m-3">
            <ListItem skills={skills}/>
        </Stack>
                   
         
      
    );
}