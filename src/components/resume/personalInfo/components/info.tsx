import { Box, List, ListItem, ListItemAvatar, ListItemText, Stack, Typography } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import HourglassTopIcon from '@mui/icons-material/HourglassTop';
import { LinkOff } from "@mui/icons-material";
import {info} from "../../../../data"
import { HeadingRightLabel } from "../../../common";
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';



export default function Info(){
    return (
        <Box
        className="animate__animated animate__fadeIn animate__fadeInUp"
        id="contact"
        >
            <HeadingRightLabel title="Contacts" icon={<ContactPhoneIcon sx={{color: "black"}}/>}/>

        <Stack
            
            margin={2}
        
        >
            <List sx={{ bgcolor: 'background.paper', margin: "5px" }}>
                <ListItem sx={{padding: 0}}>
                    <ListItemAvatar>
                    
                            <EmailIcon />
                    
                    </ListItemAvatar>
                    <Typography variant="h5" component="div">
                        {info.email}
                    </Typography>

                </ListItem>
                
                <ListItem sx={{padding: 0}}>
                <ListItemAvatar>
                    
                    <MyLocationIcon />
                    </ListItemAvatar>
            
                    <Typography variant="h5" component="div">{info.location}</Typography>
                
                </ListItem>

                <ListItem sx={{padding: 0}}>
                <ListItemAvatar>
                    
                    <HourglassTopIcon />
                    </ListItemAvatar>

                    <Typography variant="h5" component="div">
                        {info.period}
                    </Typography>
            
                   
                
                </ListItem>

                <ListItem sx={{padding: 0}}>
                    <ListItemAvatar>
                        <LinkOff />
                    </ListItemAvatar>

                    <Typography variant="h5" component="div">
                        {info.github}
                    </Typography>
            
                   
                
                </ListItem>

                <ListItem sx={{padding: 0}}>
                    <ListItemAvatar>
                        <LinkOff />
                    </ListItemAvatar>

                    <Typography variant="h5" component="div">
                        {info.linkedin}
                    </Typography>
            
                   
                
                </ListItem>
            
            </List>
        </Stack>
    </Box> 
    )
}
