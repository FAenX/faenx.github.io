import { Box, Paper, Typography, Stepper, Step, StepLabel, StepContent, Divider } from "@mui/material";
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
        description: "Google, Data Analytics",
        link: "",
        date: "2021 - Present"
    },
    {
        label: "University of Nairobi",
        description: "Post Graduate Diploma, Project planning and management",
        link: "",
        date: "2021 - Present"
    },
    {
        label: "University of Eldoret",
        description: "Bachelors of Science in biochemistry",
        link: "",
        date: "2021 - Present"
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
        <Box className="m-3" mt={15}>
             <Typography align="left" variant="h4" className=" lead">Education.</Typography>
             <hr className="my-4"/>
            
      <Stepper activeStep={activeStep} orientation="vertical" className="p-2 m-3 ">
        {education.map((step, index) => (
          <Step key={step.label}>
            <StepLabel  >
              <Typography variant="h5">{step.label}</Typography>
              <Typography variant="body1">{step.date}</Typography>
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