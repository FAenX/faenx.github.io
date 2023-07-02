import { Stack } from "@mui/material";
import Education from "./education";
import Experience from "./experience";
import Interests from "./Interests";
import PersonalInfo from "./personalInfo";
import Skills from "./skills";


function EdWork(){
    return (
        <Stack
            flexDirection={"row"}
            flexWrap={'wrap'}
            justifyContent={"flex-end"}
            
            minWidth={"350px"}
            maxWidth={'700px'}
        >
            <Education />
            <Experience />
        </Stack>
    )
}

function PISkills(){
    return (
        <Stack
            flexDirection={"row"}
            flexWrap={'wrap'}
            alignContent={"flex-start"}
            
            minWidth={"350px"}
            maxWidth={'700px'}
        >
            <PersonalInfo />
            <Skills />
        </Stack>
    )
}


export default function Resume() {
    return (

        <Stack>
            <Stack 
                flexDirection={"row"} 
                flexWrap={'wrap'}
                justifyContent={"center"}
                
                
            >
                <PISkills />
                <EdWork />
                <Interests />   
            </Stack>
        </Stack>
    );
}
