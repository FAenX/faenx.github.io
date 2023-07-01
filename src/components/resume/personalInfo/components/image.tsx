import { Avatar, Skeleton, Stack } from "@mui/material";
import profileImage from "../../../../assets/images/profile-image.png"
import {info} from "../../../../data"



export default  function Image(){
    return (
        <Stack  
            justifyContent={"center"} 
            alignItems={"center"} 
            sx={{border: "1px solid"}} 
            margin={2}
        >
        {
            info.image ? (
                <Avatar
                style={{
                    width: 400,
                    height: 400,
                }}
                variant="square"
                alt={info.name}
                src={profileImage}
                />
            ) : (
                <Skeleton variant="circular" width={400} height={400} />
            )
            }

            
        </Stack>
    )
}
