import { 
  Box, 
  Stepper, Step, StepLabel, Typography, StepContent, 
  Stack, List, ListItem, ListItemText, ListItemAvatar, Button 
} from "@mui/material";
import React from "react";
import { HeadingLeftLabel } from "../../common";
import { experiences } from "../../../data/data";
import HdrStrongIcon from '@mui/icons-material/HdrStrong';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';




export default function Experience() {
    const [activeStep, setActiveStep] = React.useState(0);
    

    const handleNext = () => {
        const nextStep = activeStep < experiences.length -1  ? activeStep + 1 : 0;
        
        const nextStepId = experiences.find((item, index) => index === nextStep)?.id || "";
        
        // move to next step
        setActiveStep(nextStep);

        // set active step after 1 seconds
        setTimeout(() => {
          document.getElementById(nextStepId)?.scrollIntoView({behavior: "smooth"});
        }, 500);
        
    };

    const handleBack = () => {
        const prevStep = activeStep === 0 ? experiences.length - 1 : activeStep - 1;
        const prevStepId = experiences.find((item, index) => index === prevStep)?.id || "";
        // move to previous step
        setActiveStep(prevStep);

        // set active step after 1 seconds
        setTimeout(() => {
          document.getElementById(prevStepId)?.scrollIntoView({behavior: "smooth"});
        }, 500);
        
    };

 

    return (
        <Box 
          // margin={2} 
          width={"100%"}
          id="experience"
          // sx={{border: "1px solid #1f1f1f"}}
        >
            <HeadingLeftLabel title="Work Experience" icon={<BusinessCenterIcon sx={{color: "black"}}/>}/>
          <Stack
            marginLeft={4}
          >
            <Stepper 
              activeStep={activeStep} 
              orientation="vertical" 
              className="animate__animated animate__fadeIn animate__fadeInUp"
            >
            {experiences.map((step, index) => (
              <Step key={step.label}>
                <StepLabel  >
                  <Typography id={step.id} padding={2} variant="h3">{step.label}</Typography>
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
                                      <HdrStrongIcon/>
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
                      sx={{ margin: 2}}
                    >
                      <Typography color={"red"} variant="h5">{index === experiences.length - 1 ? 'Start' : 'Next'}</Typography>
                    </Button>
                    {activeStep !==0 && <Button
                      disabled={false}
                      onClick={handleBack}
                      variant="outlined"
                      
                    >
                      <Typography color={"red"} variant="h5">Back</Typography>
                    </Button>}
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