import { Box, Stepper, Step, StepLabel, Typography, StepContent, Divider } from "@mui/material";
import React from "react";
import { Button } from "react-bootstrap";


const experiences = [
    {
        label: "The Jitu",
        title: "Software Engineer",
        date: "2021 - Present",
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
        label: "Touch inspiration",
        title: "Software Engineer",
        date: "2019 - 2020",
        description: [
            "Write modern, performant, maintainable code for a diverse array of client and internal projects",
            "Collaborate with internal teams to produce software design and architecture",
            "Write clean, testable code using test-driven development",
            "Contribute in all phases of the development lifecycle",
            "Follow industry best practices",
            "Communicate with external web services",
        ],    },
    {
        label: "Ohospital",
        title: "Software Engineer",
        date: "2018 - 2020",
        description: [
            "Write modern, performant, maintainable code for a diverse array of client and internal projects",
            "Collaborate with internal teams to produce software design and architecture",
            "Write clean, testable code using test-driven development",
            "Contribute in all phases of the development lifecycle",
            "Follow industry best practices",
            "Communicate with external web services",
        ],    },
        {
            label: "Freelance",
            title: "Web developer",
            date: "2017 - 2018",
            description: [
                "Write modern, performant, maintainable code for a diverse array of client and internal projects",
                
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
        <Box className="m-3">
            <Typography align="left" variant="h4" >Where I've worked.</Typography>
            <hr className="my-4"/>
      <Stepper activeStep={activeStep} orientation="vertical" className="p-2 m-3">
        {experiences.map((step, index) => (
          <Step key={step.label}>
            <StepLabel  >
            <Typography variant="h5">{step.label}</Typography>
            <Typography variant="body1">{step.title}</Typography>
            <Typography variant="body1">{step.date}</Typography>
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