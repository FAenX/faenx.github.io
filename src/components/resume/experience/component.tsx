import { Box, Stepper, Step, StepLabel, Typography, StepContent, Stack, List, ListItem, ListItemText, ListItemAvatar } from "@mui/material";
import React from "react";
import { Button } from "react-bootstrap";
import { HeadingLeftLabel } from "../../common";
import { experiences } from "../../../data/data";
import CircleIcon from '@mui/icons-material/Circle';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';




export default function Experience() {
    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep < experiences.length -1  ? prevActiveStep + 1 : 0);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep ===0 ? 0 : prevActiveStep - 1);
    };

 

    return (
        <Box 
          margin={2} 
          width={"100%"}
          id="experience"
        >
            <HeadingLeftLabel title="Work Experience" icon={<BusinessCenterIcon sx={{color: "black"}}/>}/>
          <Stack
            margin={2}
          >
            <Stepper activeStep={activeStep} orientation="vertical" className="animate__animated animate__fadeIn animate__fadeInUp">
            {experiences.map((step, index) => (
              <Step key={step.label}>
                <StepLabel  >
                  <Typography margin={2} variant="h3">{step.label}</Typography>
                  <Typography margin={2} variant="h5">{step.title}</Typography>
                  <Typography margin={2} variant="h5">{step.date}</Typography>
                </StepLabel>
                <StepContent>
                 
                  {
                        step.description.map((item, index) => {
                            return (
                              <List key={index}>
                                  <ListItem >
                                    <ListItemAvatar>
                                      <CircleIcon/>
                                    </ListItemAvatar>
                                    <ListItemText>
                                      {item}
                                    </ListItemText>
                                  </ListItem>
                              </List>
                            
                            )
                        })
                  }
                <Box sx={{ mb: 2 }}>
                  <div>
                    <Button
                      variant="outlined"
                      onClick={handleNext}
                      
                    >
                      <Typography color={"red"}>{index === experiences.length - 1 ? 'Start' : 'Next'}</Typography>
                    </Button>
                    <Button
                      disabled={false}
                      onClick={handleBack}
                      variant="outlined"
                      
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