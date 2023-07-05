import { Stack, Typography } from "@mui/material";
import Avatar from '@mui/material/Avatar';

interface SkillsProps {
    [key: string]: string
}



export default function ListItem(props: {skills: SkillsProps[]}) {
    return (
        <Stack
            direction="row" 
            justifyContent={"flex-start"} 
            alignItems="center" 
            margin={3}
            flexWrap={'wrap'}
            
        > 
            {
            props.skills.map((skill) => {
                return (            
                    <Stack
                        key={skill.name}
                        direction="row"
                        justifyContent={"center"}
                        alignItems="center"
                        margin={0}
                        
                    >                               
                        <Avatar 
                            alt={skill.name} 
                            src={skill.image} 
                            sx={{width: "50px", height:"50px", margin: "5px"}} 
                            variant="square"
                        />                                            
                        <Typography  
                            component={"span"} 
                            variant="h6" 
                            sx={{textTransform: "capitalize"}}
                            margin={1}
                        >
                            {skill.name}
                        </Typography>
                                       
                    </Stack>         
                    )
                })
            } 
        </Stack>
    )
}
