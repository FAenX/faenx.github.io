import { Icon, Skeleton, Stack, Typography } from "@mui/material";
import React from "react";
import { Button } from "react-bootstrap";
import Image from 'react-bootstrap/Image'

const skills = [
    {
        title: "Languages",
        items: [
            {
                name: "Javascript",
                image: ""
            
            },
            {
                name: "Typescript",
                image: ""
            },
            {
                name: "Python",
                image: ""
            },
            {
                name: "Java",
                image: ""
            },
            {
                name: "C++",
                image: ""
            },

        ]
       
    },
    {
        title: "Databases",
        items: [
            {
                name: "MongoDB",
                image: ""
            },
            {
                name: "PostgreSQL",
                image: ""
            },
            {
                name: "MySQL",
                image: ""
            }
        ]
    },
    {
        title: "Cloud",
        items: [
            {
                name: "AWS",
                image: ""
            },
            {
                name: "GCP",
                image: ""
            },
            {
                name: "Azure",
                image: ""
            },
        ]
       
    },
]

interface SkillsProps {
    title: string;
    items: {
        name: string,
        image: string,
    }[]
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

                            <Stack direction="row" flexWrap={"wrap"} spacing={1} className="p-3 border">

                              {
                                skill.items.map((item) => {
                                    return (
                                        <Button>
                                        <Stack direction="row" spacing={1}>
                                            <Icon>
                                                <Image src={item.image} roundedCircle />
                                            </Icon>
                                            <Typography variant="body1">
                                                {item.name}
                                            </Typography>
                                        </Stack>
                                        </Button>
                                    )
                                })
                              }
                                
                               
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