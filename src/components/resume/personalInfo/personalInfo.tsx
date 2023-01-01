import { List, ListItem, ListItemAvatar, ListItemText, Skeleton, Stack } from "@mui/material";
import profile from "../../../assets/images/profile-image.jpeg"
import EmailIcon from '@mui/icons-material/Email';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import HourglassTopIcon from '@mui/icons-material/HourglassTop';



const info = {
    name: "Emmanuel Davidson",
    about: "R&D, Database engineer, DevOps engineer, Cloud engineer, Data engineer and Linux SysAdmin.",
    location: "Global",
    image: "https://avatars.githubusercontent.com/u/1015040?v=4",
    email: "kipronofb@outlook.com",
    period: " > 5 years",

}



export default function PersonalInfo() {
    return (
            <Stack className="" >                
                <Stack className="" direction={"row"} flexWrap="wrap" justifyContent={"center"} margin={2} alignItems="flex-center"  spacing={0}>
                     
                    {/*  */}
                    <Stack  justifyContent={"center"} alignItems={"center"} className="">
                    {
                        info.image ? (
                            <img
                            style={{
                                width: 100,
                                height: 100,
                            }}
                            className="rounded-circle"
                            alt={info.name}
                            src={profile}
                            />
                        ) : (
                            <Skeleton variant="circular" width={100} height={100} />
                        )
                        }

                        
                    </Stack>

                    <Stack spacing={1} justifyContent="center" alignItems={"flex-start"} className="">
                        <List sx={{ width: '100%', maxWidth: 300, bgcolor: 'background.paper' }} disablePadding={true}>
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
                            
                        </List>
                    </Stack>
                    
                </Stack>
                
            </Stack>

    );
}