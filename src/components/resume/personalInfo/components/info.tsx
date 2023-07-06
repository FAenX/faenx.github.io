import { Box, List, ListItem, ListItemAvatar, Stack, Typography } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import HourglassTopIcon from '@mui/icons-material/HourglassTop';
import LaunchIcon from '@mui/icons-material/Launch';
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
        <Stack margin={2} >
            <List sx={{ bgcolor: 'background.paper', margin: "2px", padding:"20px"}}>
                <ListItem sx={{padding: 0}}>
                    <ListItemAvatar>                 
                            <EmailIcon sx={{fontSize: "40px"}}/>
                    </ListItemAvatar>
                    <Typography variant="h4" component="div">
                        {info.email}
                    </Typography>
                </ListItem>
                <ListItem sx={{padding: 0}}>
                <ListItemAvatar>
                    <MyLocationIcon sx={{fontSize: "40px"}}/>
                </ListItemAvatar>
                    <Typography variant="h4" component="div">{info.location}</Typography>
                </ListItem>
                <ListItem sx={{padding: 0}}>
                    <ListItemAvatar>
                        <HourglassTopIcon sx={{fontSize: "40px"}}/>
                    </ListItemAvatar>
                    <Typography variant="h4" component="div">
                        {info.period}
                    </Typography>
                </ListItem>

                {info.links.map(link=>
                     <>
                        <ListItem sx={{padding: 0}}>
                            <ListItemAvatar>
                                <a href={link.href} target="_blank" rel="noreferrer">
                                    <LaunchIcon sx={{fontSize: "40px"}}/>
                                </a>
                            </ListItemAvatar>
                            <a href={link.href} target="_blank" rel="noreferrer">
                                <Typography variant="h4" component="div">
                                    {link.name}
                                </Typography>
                            </a>
                        </ListItem>
                    </>)
                }
            </List>
        </Stack>
    </Box> 
    )
}
