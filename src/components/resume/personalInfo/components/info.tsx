import { Avatar, Box, List, ListItem, ListItemAvatar, ListItemText, Skeleton, Stack } from "@mui/material";
import profile from "../../../assets/images/profile-image.jpeg"
import EmailIcon from '@mui/icons-material/Email';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import HourglassTopIcon from '@mui/icons-material/HourglassTop';
import { LinkOff } from "@mui/icons-material";
import {info} from "../../../../data"



export default function Info(){
    return (
        <Box
            // justifyContent="center" 
            // alignItems={"flex-start"} 
            // width={"100px"}
            sx={{border: "1px solid white"}}
        >

        <List sx={{ bgcolor: 'background.paper' }} disablePadding={true}>
        <ListItem sx={{padding: 0}}>
            <ListItemAvatar>
               
                    <EmailIcon />
                
                </ListItemAvatar>
                <ListItemText primary={info.email} />
            </ListItem>
            
            <ListItem sx={{padding: 0}}>
            <ListItemAvatar>
                
                <MyLocationIcon />
                </ListItemAvatar>
          
                <ListItemText primary={info.location} />
            
            </ListItem>

            <ListItem sx={{padding: 0}}>
            <ListItemAvatar>
                
                <HourglassTopIcon />
                </ListItemAvatar>
          
                <ListItemText primary={info.period} />
            
            </ListItem>

            <ListItem sx={{padding: 0}}>
                <ListItemAvatar>
                    <LinkOff />
                </ListItemAvatar>
          
                <ListItemText primary={info.github} />
            
            </ListItem>
            
        </List>
    </Box> 
    )
}
