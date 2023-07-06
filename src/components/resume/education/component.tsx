import { Box, Typography, Stepper, Step, StepLabel, Stack } from "@mui/material";
import React from "react";
import { HeadingLeftLabel } from "../../common";
import { education } from "../../../data/data";
import SchoolIcon from '@mui/icons-material/School';





export default function Education() {
    return (
      <Box  
        // margin={"20px"} 
        width={"100%"}
      >
        <HeadingLeftLabel title="Education" icon={<SchoolIcon sx={{color: "black"}}/>}/>

           <Stack
              marginLeft={4}
           >
            <Stepper orientation="vertical" className="animate__animated animate__fadeIn animate__fadeInUp">
              {education.map((step, index) => (
                <Step key={step.label} >
                  <StepLabel  >
                    <Typography margin={2} variant="h3">{step.label}</Typography>
                    <Typography margin={2} variant="h5">{step.date}</Typography>
                    <Typography margin={2} variant="h5">{step.description}</Typography>
                  </StepLabel>
                </Step>
              ))}
            </Stepper>

            </Stack>
      
    </Box>
    );
}