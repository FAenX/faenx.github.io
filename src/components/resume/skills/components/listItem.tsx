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
            margin={2}
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
                        margin={1}
                        
                    >                               
                        <Avatar 
                            alt={skill.name} 
                            src={skill.image} 
                            sx={{width: "20px", height:"20px"}} 
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
