import { Box, Stepper, Step, StepLabel, Typography, StepContent } from "@mui/material";
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
        setActiveStep((prevActiveStep) => prevActiveStep ===0 ? 0 : prevActiveStep - 1);
    };

 

    return (
        <Box margin={"20px"}>
            <Typography align="left" variant="h6"  >Experience.</Typography>
            <hr className="my-1" style={{width: "10%"}}/>
      <Stepper activeStep={activeStep} orientation="vertical" className="">
        {experiences.map((step, index) => (
          <Step key={step.label}>
            <StepLabel  >
            <Typography variant="h6">{step.label}</Typography>
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
                    
                  >
                    {index === experiences.length - 1 ? 'Finish' : 'Continue'}
                  </Button>
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    
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