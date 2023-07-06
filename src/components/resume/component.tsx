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
            margin={1}
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
            margin={1}
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
                alignContent={"center"}
                // padding={3}
                // margin={1}
                width={"100vw"}
                // sx={{border: "1px solid #1f1f1f"}}
                
                
            >
                <PISkills />
                <EdWork />
                <Interests />   
            </Stack>
        </Stack>
    );
}
