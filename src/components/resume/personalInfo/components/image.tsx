import { Avatar, Box, Stack } from "@mui/material";
import profileImage from "../../../../assets/images/profile-image.png"
import {info} from "../../../../data"



export default  function Image(){
    return (
        <Box
            margin={2}
            
        >
            <Stack
                flexDirection={"row"}
                justifyContent={"center"} 
                alignItems={"center"} 
            >
                <Avatar
                    style={{
                        width: "400px",
                        height: "400px",
                    }}
                    variant="square"
                    alt={info.name}
                    src={profileImage}
                />
            </Stack>
                
        </Box>
    )
}
