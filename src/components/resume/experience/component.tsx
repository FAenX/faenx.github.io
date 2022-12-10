import { Box, Stepper, Step, StepLabel, Typography, StepContent, Paper } from "@mui/material";
import React from "react";
import { Button } from "react-bootstrap";
import Image from 'react-bootstrap/Image'

const experiences = [
    {
        label: "The Jitu",
        title: "Software Engineer",
        date: "2020 - Present",
        description: [
            "Write modern, performant, maintainable code for a diverse array of client and internal projects",
            "Collaborate with internal teams to produce software design and architecture",
            "Write clean, testable code using test-driven development",
            "Contribute in all phases of the development lifecycle",
            "Follow industry best practices",
            "Communicate with external web services",
        ],
    },
    {
        label: "Company 2",
        title: "Software Engineer",
        date: "2020 - Present",
        description: [
            "Write modern, performant, maintainable code for a diverse array of client and internal projects",
            "Collaborate with internal teams to produce software design and architecture",
            "Write clean, testable code using test-driven development",
            "Contribute in all phases of the development lifecycle",
            "Follow industry best practices",
            "Communicate with external web services",
        ],    },
    {
        label: "Company 3",
        title: "Software Engineer",
        date: "2020 - Present",
        description: [
            "Write modern, performant, maintainable code for a diverse array of client and internal projects",
            "Collaborate with internal teams to produce software design and architecture",
            "Write clean, testable code using test-driven development",
            "Contribute in all phases of the development lifecycle",
            "Follow industry best practices",
            "Communicate with external web services",
        ],    },
]



export default function Experience() {
    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep < experiences.length -1  ? prevActiveStep + 1 : 0);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep ==0 ? 0 : prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <Box >
            <p className="display-6 p-2">Where I've worked.</p>
      <Stepper activeStep={activeStep} orientation="vertical" className="p-5 ">
        {experiences.map((step, index) => (
          <Step key={step.label}>
            <StepLabel  >
              <p className="display-6">{step.label}</p>
              <p className="lead">{step.title}</p>
            </StepLabel>
            <StepContent>
              {
                    step.description.map((item, index) => {
                        return <li key={index}>{item}</li>
                    })
              }
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    // sx={{ mt: 1, mr: 1 }}
                  >
                    {index === experiences.length - 1 ? 'Finish' : 'Continue'}
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