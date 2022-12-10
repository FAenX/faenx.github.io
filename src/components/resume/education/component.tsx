import { Box, Paper, Typography, Stepper, Step, StepLabel, StepContent } from "@mui/material";
import React from "react";
import { Button } from "react-bootstrap";
import Image from 'react-bootstrap/Image'

interface EducationProps {
    title: string;
    description: string;
    link: string;
}

const education = [
    {
        label: "Coursera",
        description: "This is a project",
        link: ""
    },
    {
        label: "university of Nairobi",
        description: "This is a project",
        link: ""
    },
    {
        label: "University of Eldoret",
        description: "This is a project",
        link: ""
    },
]



export default function Education() {
    const [activeStep, setActiveStep] = React.useState(0);

   
    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep < education.length -1  ? prevActiveStep + 1 : 0);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep ==0 ? 0 : prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };
    return (
        <Box className="border">
            <p className="display-6 p-2">Education.</p>
            
      <Stepper activeStep={activeStep} orientation="vertical" className="p-5 ">
        {education.map((step, index) => (
          <Step key={step.label}>
            <StepLabel  >
              <p className="display-6">{step.label}</p>
              {/* <p className="lead">{step.title}</p> */}
            </StepLabel>
            <StepContent>
              <p>description</p>
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    // sx={{ mt: 1, mr: 1 }}
                  >
                    {index === education.length - 1 ? 'Finish' : 'Continue'}
                  </Button>
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    // sx={{ mt: 1, mr: 1 }}
                  >
                    Back
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      
    </Box>
    );
}