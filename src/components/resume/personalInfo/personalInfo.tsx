import { List, ListItem, ListItemAvatar, ListItemText, Skeleton, Stack } from "@mui/material";
import profile from "../../../assets/images/profile-image.jpeg"
import EmailIcon from '@mui/icons-material/Email';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import HourglassTopIcon from '@mui/icons-material/HourglassTop';


type Props = {
    image: string,
}

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
        <Stack className="">      
         {/* <Typing />       */}
            <Stack className="" style={{lineHeight: "1"}}>                
                <Stack className="" direction={"row"} flexWrap="wrap" justifyContent={"center"} margin={3} alignItems="flex-center"  spacing={5}>
                     
                    {/*  */}
                    <Stack  justifyContent={"center"} alignItems={"center"} >
                    {
                        info.image ? (
                            <img
                            style={{
                                width: 150,
                                height: 150,
                            }}
                            className="rounded-circle"
                            alt={info.name}
                            src={profile}
                            />
                        ) : (
                            <Skeleton variant="circular" width={150} height={150} />
                        )
                        }

                        
                    </Stack>

                    <Stack spacing={0} justifyContent="center" alignItems={"flex-start"} className="">
                        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }} disablePadding={true}>
                        <ListItem >
                            <ListItemAvatar>
                               
                                    <EmailIcon />
                                
                                </ListItemAvatar>
                                <ListItemText primary={info.email} />
                            </ListItem>
                            
                            <ListItem>
                            <ListItemAvatar>
                                
                                <MyLocationIcon />
                                </ListItemAvatar>
                          
                                <ListItemText primary={info.location} />
                            
                            </ListItem>

                            <ListItem>
                            <ListItemAvatar>
                                
                                <HourglassTopIcon />
                                </ListItemAvatar>
                          
                                <ListItemText primary={info.period} />
                            
                            </ListItem>
                            
                        </List>
                    </Stack>
                    
                </Stack>
                
            </Stack>
        </Stack>
    );
}