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
                        margin={1}
                        border={"1px solid #eaeaea"}
                        borderRadius={5}
                        padding={1}
                        
                    >                               
                        <Avatar 
                            alt={skill.name} 
                            src={skill.image} 
                            sx={{width: "40px", height:"40px", margin: "5px"}} 
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
