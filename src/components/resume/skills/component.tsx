import { Box } from "@mui/material";
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
import { ListItem } from "./components";
import { HeadingRightLabel } from "../../common";
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';





const skills = [
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
            },
    
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
    
            {
                name: "Git",
                image: Git
            },
            {
                name: "Docker",
                image: Docker
            },
        ]


export default function Skills() {
    return (
       
        <Box
            margin={2}
            className="animate__animated animate__fadeIn animate__fadeInUp"
            
        >
            <HeadingRightLabel title= "Skills" icon={<SettingsSuggestIcon sx={{color: "black"}}/>}/>
            <ListItem skills={skills}/>
        </Box>
                   
         
      
    );
}