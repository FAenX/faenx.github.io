import { Icon, Skeleton, Stack, Typography, Button } from "@mui/material";
import React from "react";
import Avatar from '@mui/material/Avatar';
import python from "../../../assets/images/brands/python.png"
import node from "../../../assets/images/brands/node.svg"
import react from "../../../assets/images/brands/react.svg"
import Linux from "../../../assets/images/brands/ubuntu.png"
import Mongo from "../../../assets/images/brands/mongo.svg"
import DO from "../../../assets/images/brands/digital_ocean.svg"
import Docker from "../../../assets/images/brands/docker.svg"
import Git from "../../../assets/images/brands/git.png"

const skills = [
    {
        title: "Operating Systems",
        items: [
            {
                name: "Linux",
                image: Linux
            },
            {
                name: "Windows",
                image: ""
            },
            {
                name: "Android",
                image: ""
            },
        ]
    },
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
                image: python
            },
            {
                name: "SQL",
                image: ""
            },
           
            

        ]
       
    },
    {
        title: "Databases",
        items: [
            {
                name: "MongoDB",
                image: Mongo
            },
            {
                name: "PostgreSQL",
                image: ""
            },
            {
                name: "MySQL",
                image: ""
            },
            {
                name: "MSSQL",
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
            {
                name: "Digital Ocean",
                image: DO
            },
        ]
       
    },

    {
        title: "Frameworks",
        items: [
            {
                name: "React",
                image: react
            },
            {
                name: "Django",
                image: ""
            },
            {
                name: "Express",
                image: node
            },
        ]
    },
    {
        title: "Technologies",
        items: [
            {
                name: "Git",
                image: Git
            },
            {
                name: "Docker",
                image: Docker
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

                            <Stack direction="row" flexWrap={"wrap"} spacing={2} className="p-1 border">

                              {
                                skill.items.map((item) => {
                                    return (
                                        <Button size="small" variant="contained"  className="m-2" >
                                        <Stack direction="row" justifyContent={"center"} alignItems="center" spacing={1}>                                           
                                            <Avatar alt={item.name} src={item.image} />                                            
                                            <Typography variant="body2">
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
       
        <Stack spacing={5} justifyContent={"center"} alignItems={"flex-start"} className=" p-5 m-3">
            <ListItem skills={skills}/>
        </Stack>
                   
         
      
    );
}