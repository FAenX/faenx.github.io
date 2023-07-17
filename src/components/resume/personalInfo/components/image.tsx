import { Box, Stack } from "@mui/material";
import profileImage from "../../../../assets/images/profileImage.png"
import lq from "../../../../assets/images/lq.png"
import {info} from "../../../../data"
import {LazyLoadImage} from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';



export default  function Image(){
    return (
        <Box >
            <Stack
                flexDirection={"row"}
                justifyContent={"center"} 
                alignItems={"center"} 
                className="animate__animated animate__fadeIn"
            >
                <LazyLoadImage
                    src={profileImage}
                    alt={info.name}
                    effect="blur" // Use the "blur" effect for a similar fuzzy-to-clear loading effect
                    delayTime={500} // Optional: Delay the appearance of the image after loading
                    placeholderSrc={lq} // Optional: You can set a placeholder source image (not supported by IE11)
                    threshold={100} // Optional: Threshold for triggering the lazy load (in pixels)
                    height="350px" // Optional: Specify the height of the image
                    width="350px" // Optional: Specify the width of the image
                />
             </Stack>
                
        </Box>
    )
}
