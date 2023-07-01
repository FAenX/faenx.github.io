import { Box, Stepper, Step, StepLabel, Typography, StepContent } from "@mui/material";
import React from "react";
import { Button } from "react-bootstrap";
import { HeadingLeftLabel } from "../../common";


const experiences = [
    {
        label: "The Jitu",
        title: "Software Engineer",
        date: "2021 - Present",
        description: [
            "Designed and build Award winning SMS based customer feedback tool for an multinational company.",
            "Designed, implemented, and maintained cloud-based enterprise wide systems using Python and other cloud technologies, achieving seamless functionality and performance.",
            "Developed and executed cloud architectures and designs for multi-cloud environments, ensuring optimal scalability and reliability.",            
            "Led the development and maintenance of cloud infrastructure automation frameworks and tools, adhering to infrastructure as code principles.",
            "Collaborated with cross-functional teams to drive successful implementation and operation of cloud-based solutions, fostering efficient teamwork and communication.",
            "Monitored, troubleshooted, and optimized cloud-based systems to ensure high performance and availability, resulting in enhanced user experiences.",
            "Mentored and provided guidance to junior engineers, empowering them to excel and contribute to project success.",
            "Stayed abreast of the latest cloud technologies and best practices, proactively identifying opportunities for optimization and improvement.",


        ],
    },
    {
        label: "Touch inspiration",
        title: "Software Engineer",
        date: "2019 - 2020",
        description: [
            "Led backend development and served as a cloud engineer, managing Digital Ocean cloud infrastructure and utilizing technologies such as MongoDB, MySQL, TypeScript, and Python for DevOps.",
            "Designed and developed Several backend applications both for the web and mobile in fintech and tele-medicine applications.",
            "Developed robust software solutions, ensuring seamless functionality and high performance.",
            "Leveraged cloud infrastructure to optimize system reliability and scalability.",
            "Actively contributed to codebase maintenance, troubleshooting, and performance optimization",
            "Demonstrated expertise in managing databases and ensuring efficient data retrieval.",
            "Collaborated with cross-functional teams to deliver innovative solutions, meeting project goals and timelines."
        ],   
       },
    {
        label: "Ohospital",
        title: "Chief Technology Officer, Lead Software Engineer and co-founder",
        date: "2018 - 2020",
        description: [
            "Contributed to the development and maintenance of cloud architectures and designs for multi-cloud environments, facilitating seamless operations.",
            "Played a key role in building and maintaining cloud infrastructure automation frameworks and tools, leveraging infrastructure as code principles to drive efficiency.",
            "Collaborated closely with cross-functional teams to ensure successful implementation and operation of cloud-based solutions, fostering effective communication and alignment.",
            "Monitored, troubleshooted, and optimized cloud-based systems, resulting in improved performance and availability.",
            "Stayed updated on the latest cloud technologies and best practices, identifying opportunities for optimization and continuous improvement.",
            "Conducted code reviews, testing, and deployments, ensuring high-quality deliverables.",
            "Provided support to fellow engineers and stakeholders as needed, contributing to the overall success of projects."
        ],    
      },
        
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
        <Box margin={"20px"} sx={{border: "1px solid white"}}>
            <HeadingLeftLabel children={
            <Typography align="left" variant="h6"  >Work Experience</Typography>
            } />
            {/* <hr className="my-1" style={{width: "20%"}}/> */}
          <Stepper activeStep={activeStep} orientation="vertical" >
          {experiences.map((step, index) => (
            <Step key={step.label}>
              <StepLabel  >
              <Typography variant="h6">{step.label}</Typography>
              <Typography variant="h6">{step.title}</Typography>
              <Typography variant="h6">{step.date}</Typography>
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
                    variant="outlined"
                    onClick={handleNext}
                    
                  >
                    <Typography color={"red"}>{index === experiences.length - 1 ? 'Finish' : 'Continue'}</Typography>
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
      
    </Box>
    );
}