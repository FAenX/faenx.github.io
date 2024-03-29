import { Box } from "@mui/material";
import { ListItem } from "./components";
import { HeadingRightLabel } from "../../common";
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import { skills } from "../../../data/data";







export default function Skills() {
    return (
       
        <Box
            className="animate__animated animate__fadeIn animate__fadeInUp"
            id="skills"  
        >
            <HeadingRightLabel title= "Skills" icon={<SettingsSuggestIcon sx={{color: "black"}}/>}/>
            <ListItem skills={skills}/>
        </Box>
                   
         
      
    );
}