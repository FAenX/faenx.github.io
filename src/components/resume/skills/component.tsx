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
import Win from "../../../assets/images/brands/windows-svgrepo-com.svg"
import Android from "../../../assets/images/brands/android-svgrepo-com.svg"
import JS from "../../../assets/images/brands/js-svgrepo-com.svg"
import TS from "../../../assets/images/brands/typescript-svgrepo-com.svg"
import SQL from "../../../assets/images/brands/sql-svgrepo-com.svg"
import pgsql from "../../../assets/images/brands/pgsql-svgrepo-com.svg"
import mysql from "../../../assets/images/brands/mysql-svgrepo-com.svg"
import mssql from "../../../assets/images/brands/database-svgrepo-com.svg"
import aws from "../../../assets/images/brands/aws-svgrepo-com.svg"
import gcp from "../../../assets/images/brands/gcp-opened-svgrepo-com.svg"
import azure from "../../../assets/images/brands/azure-svgrepo-com.svg"





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
                image: Win
            },
            {
                name: "Android",
                image: Android
            },
        ]
    },
    {
        title: "Languages",
        items: [
            {
                name: "Javascript",
                image: JS
            
            },
            {
                name: "Typescript",
                image: TS
            },
            {
                name: "Python",
                image: python
            },
            {
                name: "SQL",
                image: SQL
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
                image: pgsql
            },
            {
                name: "MySQL",
                image: mysql
            },
            {
                name: "MSSQL",
                image: mssql
            }
        ]
    },
    {
        title: "Cloud",
        items: [
            {
                name: "AWS",
                image: aws
            },
            {
                name: "GCP",
                image: gcp
            },
            {
                name: "Azure",
                image: azure
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
        <Stack spacing={4} sx={{width: "100%"}}  >                
            {
                props.skills.map((skill) => {
                    return (
                        <Stack spacing={1} sx={{width: "100%"}}  justifyContent={"center"} className='border p-2' >
                            
                            <Typography fontWeight={"bold"} align="center">
                                {skill.title}
                            </Typography>

                            <Stack direction="row" flexWrap={"wrap"} spacing={2} className="p-1 "  justifyContent={"center"} >

                              {
                                skill.items.map((item) => {
                                    return (
                                        // <Button variant="outlined"  className="m-2" color="success" >
                                        <Stack direction="row" justifyContent={"center"} alignItems="center" spacing={1}>                                           
                                            <Avatar alt={item.name} src={item.image} sx={{width: "18px", height:"18px"}}/>                                            
                                            <Typography variant="body1" sx={{fontSize: "12px", textTransform: "capitalize", fontWeight: "bold"}}>
                                                {item.name}
                                            </Typography>
                                        </Stack>
                                        // </Button>
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
       
        <Stack spacing={5} justifyContent={"center"} alignItems={"center"} className="m-5">
            <ListItem skills={skills}/>
        </Stack>
                   
         
      
    );
}