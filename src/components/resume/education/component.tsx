import { Box, Typography, Stepper, Step, StepLabel, StepContent, Stack } from "@mui/material";
import React from "react";
import { Button } from "react-bootstrap";
import { HeadingLeftLabel } from "../../common";


const education = [
    {
        label: "University of Nairobi",
        description: "Post Graduate Diploma, Project planning and management",
        link: "",
        date: "2019 - 2020"
    },
    {
        label: "University of Eldoret",
        description: "Bachelors of Science in biochemistry",
        link: "",
        date: "2012 - 2016"
    },
]



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
        <HeadingLeftLabel children={
          <Typography align="left" variant="h6"  >Education </Typography>
        } />

           <Stack
              
              margin={"20px"}
           >
            <Stepper activeStep={activeStep} orientation="vertical" >
              {education.map((step, index) => (
                <Step key={step.label}>
                  <StepLabel  >
                    <Typography variant="h6">{step.label}</Typography>
                    <Typography variant="h6">{step.date}</Typography>
                  </StepLabel>
                  <StepContent>
                    <Typography variant="body1">{step.description}</Typography>
                    <Box sx={{ mb: 2 }}>
                      <div>
                        <Button
                          variant="contained"
                          onClick={handleNext}
                          // sx={{ mt: 1, mr: 1 }}
                        >
                          <Typography color={"red"}>{index === education.length - 1 ? 'Finish' : 'Continue'}</Typography>
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