import { Box, Stack, Typography } from "@mui/material";
import Education from "./education";
import Experience from "./experience";
import Interests from "./Interests";
import PersonalInfo from "./personalInfo/personalInfo";
import Skills from "./skills";

const info = {
    name: "Emmanuel Davidson",
    about: "Software Engineer",
    location: "Global",
    image: "https://avatars.githubusercontent.com/u/1015040?v=4",
    email: "kipronofb@outlook.com",
    period: " > 5 years",
    about_long: "I am a software engineer with over 5 years of experience in research, design, and development. I have a strong foundation in multiple programming languages and have used a wide range of databases and frameworks in my projects. I am skilled in Linux sysadmin, devops engineering, and cloud engineering, and am comfortable working with new technologies. I enjoy solving complex software problems and have contributed to the development and maintenance of large-scale systems. In my free time, I stay current with the latest advancements in the field by participating in open source projects."

}

function About() {
    return (
        <Stack className="" >
            <Box margin={"20px"}>
            <Typography align="left" variant="h6"  >About.</Typography>
            <hr className="my-1" style={{width: "10%"}}/>

            <Typography variant="body1" className="m-3">
                {info.about_long}
            </Typography>
            </Box>
           
            
        </Stack>
    );

}



function Main() {
    return (
        <Stack className="" >
            <Education />
            
            <Skills />
        </Stack>
    );
}

function Headline() {
    return (
        <Stack  className=""  spacing={0} margin={"50px"} >
            <Typography variant="h4">{info.name} </Typography>
            <Typography > {info.about}</Typography>
            <hr className="my-1" style={{width: "10%"}}/>
    </Stack>
    );
}




export default function Resume() {
    return (

        <Stack className=" "  alignItems={"center"} justifyContent={"center"} >
            <Stack justifyContent={"center"} direction={"row"} flexWrap={"wrap"} className="">
                <Stack className="" style={{minWidth: "400px", width: "25%"}}>
                    <PersonalInfo />
                    <Main/>
                </Stack>
               

                <Stack className=" " style={{width: "60%", minWidth: "400px"}}>
                   
                    <Headline />
                    <About />
                    <Experience />
                    
                </Stack>
              
           
                
            </Stack>
            <Stack  >
                <Interests />   
                {/* <Projects /> */}
            </Stack>
            
            
        </Stack>
    );
}
