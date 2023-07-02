import { Box, Typography, Stepper, Step, StepLabel, StepContent, Stack } from "@mui/material";
import React from "react";
import { Button } from "react-bootstrap";
import { HeadingLeftLabel } from "../../common";
import { education } from "../../../data/data";
import SchoolIcon from '@mui/icons-material/School';





export default function Education() {
    const [activeStep, setActiveStep] = React.useState(0);

   
    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep < education.length -1  ? prevActiveStep + 1 : 0);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep ===0 ? 0 : prevActiveStep - 1);
    };

    
    return (
      <Box  
        
        margin={"20px"} 
        width={"100%"}
       
      >
        <HeadingLeftLabel title="Education" icon={<SchoolIcon sx={{color: "black"}}/>}/>

           <Stack
              
              margin={"20px"}
           >
            <Stepper activeStep={activeStep} orientation="vertical" className="animate__animated animate__fadeIn animate__fadeInUp">
              {education.map((step, index) => (
                <Step key={step.label}>
                  <StepLabel  >
                    <Typography margin={2} variant="h3">{step.label}</Typography>
                    <Typography margin={2} variant="h5">{step.date}</Typography>
                  </StepLabel>
                  <StepContent>
                    <Typography margin={2} variant="body1">{step.description}</Typography>
                    <Box margin={1}>
                      <div>
                        <Button
                          variant="contained"
                          onClick={handleNext}
                          // sx={{ mt: 1, mr: 1 }}
                        >
                          <Typography color={"red"}>{index === education.length - 1 ? 'Start' : 'Next'}</Typography>
                        </Button>
                        <Button
                          disabled={index === 0}
                          onClick={handleBack}
                          variant="contained"
                          // sx={{ mt: 1, mr: 1 }}
                        >
                          <Typography color={"red"}>Back</Typography>
                        </Button>
                      </div>
                    </Box>
                  </StepContent>
                </Step>
              ))}
            </Stepper>

            </Stack>
      
    </Box>
    );
}