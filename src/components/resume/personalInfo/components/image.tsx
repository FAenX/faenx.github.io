import { Avatar, Box, Stack } from "@mui/material";
import profileImage from "../../../../assets/images/profile-image.png"
import {info} from "../../../../data"



export default  function Image(){
    return (
        <Box >
            <Stack
                flexDirection={"row"}
                justifyContent={"center"} 
                alignItems={"center"} 
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
            </Stack>
                
        </Box>
    )
}
