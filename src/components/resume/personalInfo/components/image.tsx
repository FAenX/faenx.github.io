import { Avatar, Box, Stack, Skeleton } from "@mui/material";
import profileImage from "../../../../assets/images/profile.png"
import {info} from "../../../../data"



export default  function Image(){
    return (
        <Box >
            {profileImage?<Stack
                flexDirection={"row"}
                justifyContent={"center"} 
                alignItems={"center"} 
                className="animate__animated animate__fadeIn"
            >
                <Avatar
                    style={{
                        width: "350px",
                        height: "350px",
                    }}
                    variant="square"
                    alt={info.name}
                    src={profileImage}
                />
            </Stack>: <Skeleton width={"350px"} height={"350px"}/>}
                
        </Box>
    )
}
