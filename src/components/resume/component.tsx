import { createTheme, Stack, ThemeProvider } from "@mui/material";
import React from "react";
import { styleProps } from ".";
import Education from "./education";
import Experience from "./experience";
import Interests from "./Interests";
import PersonalInfo from "./personalInfo/personalInfo";
import Projects from "./projects";
import Skills from "./skills";




export default function Resume() {
    return (

        <Stack className=" m-2"  alignItems={"center"} justifyContent={"center"} >
            <Stack direction={'row'} flexWrap={"wrap"} justifyContent={"center"}>
                <Stack className="m-3" style={{minWidth: "400px", width: "45%"}} >
                    <PersonalInfo />
                    <Skills />
                </Stack>
              
           
                <Stack className=" m-3" style={{width: "50%", minWidth: "400px" }}>
                    <Experience />
                    <Education />
                </Stack>
            </Stack>
            <Stack  >
                <Interests />   
                {/* <Projects /> */}
            </Stack>
            
            
        </Stack>
    );
}
