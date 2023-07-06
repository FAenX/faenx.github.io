import { Box, Stack, Typography } from "@mui/material";


import Ai from "../../../assets/images/brands/artificial-intelligence.png"
import OS from "../../../assets/images/brands/Linux-Emblem.png"
import data from "../../../assets/images/brands/data-processing.png"
import agile from "../../../assets/images/brands/agile.png"





const interests = [
    {
        name: "Artificial Inteligence and Machine Learning",
        description: "",
        image: Ai
    },
    {
        name: "Linux and Open Source",
        description: "",
        image: OS
    },
    {
        name: "Data Engineering",
        description: "",
        image: data
    },
    {
        name: "DevOps",
        description: "",
        image: agile
    },
]

interface InterestProps {
    name?: string,
    image?: string,
    description?: string,
}


export default function Interests() {
    return (
       
            <Stack 
                justifyContent={"center"}
                alignItems={"center"}
                className="animate__animated animate__fadeIn animate__fadeInUp"
                
            >
                <Stack  
                    style={{width: "80%"}}
                    padding={1}
                    borderRadius={"50px 0px 50px 0px"}
                    justifyContent={"center"}
                    sx={{backgroundColor: "#1f1f1f"}}
                >
                    <Typography variant="h3" align="center" color={'white'}>My Interests</Typography>
                </Stack>

                <Stack  
                    padding={5} 
                    direction="row" 
                    justifyContent={'center'} 
                    alignItems="center" 
                    flexWrap={"wrap"} 
                    margin={2} 
                >
                    
                    
                    {
                        interests.map((interest: InterestProps) => (
                            <Box key={interest.name}>
                                <Stack justifyContent="flex-start" alignItems={"center"} sx={{ width: 300, minHeight: 300 }}>
                                    <Box sx={{ width: 150, height: 150 }} margin={3} >
                                        <img src={interest.image} alt="OpenAI" style={{width: "150px", height: "150px"}}/>
                                    </Box>
                                    <Typography  color="text.secondary" variant="h5" align="center">{interest.name}</Typography>
                                    <Typography sx={{ fontSize: 14 }} color="text.secondary"  variant="body1" align="center">{interest.description}</Typography>
                                </Stack>
                            </Box>
                        ))

                    }
                </Stack>
            </Stack>
      
    );
}