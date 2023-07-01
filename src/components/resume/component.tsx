import { Stack } from "@mui/material";
import Education from "./education";
import Experience from "./experience";
import Interests from "./Interests";
import PersonalInfo from "./personalInfo";
import Skills from "./skills";


export default function Resume() {
    return (

        <Stack>
            <Stack 
                flexDirection={"row"} flexWrap={'wrap'}
                justifyContent={"center"}
            >
                <Stack  sx={{width: "450px"}} margin={2}>
                    <PersonalInfo />
                    <Skills />
                </Stack>
                
                <Stack 
                    sx={{width: "500px"}} margin={2}
                    justifyContent={"center"}
                >
                    <Education />
                
                    <Experience />
                </Stack>
            </Stack>
            
            <Stack  
                justifyContent={"center"}
            >
                <Interests />   
            </Stack>
        </Stack>
    );
}
