import { Stack, Typography, Avatar } from "@mui/material";
import { motion } from "framer-motion";

interface SkillsProps {
    name: string;
    image: string;
}

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { 
        opacity: 1, 
        y: 0,
        transition: {
            type: "spring",
            stiffness: 300
        }
    }
};

export default function ListItem(props: {skills: SkillsProps[]}) {
    return (
        <Stack
            component={motion.div}
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            direction="row" 
            justifyContent={"flex-start"} 
            alignItems="center" 
            margin={3}
            flexWrap={'wrap'}
        > 
            {props.skills.map((skill) => (
                <Stack
                    component={motion.div}
                    variants={item}
                    whileHover={{ 
                        scale: 1.05,
                        boxShadow: "0px 5px 15px rgba(0,0,0,0.1)",
                        transition: { type: "spring", stiffness: 400 }
                    }}
                    key={skill.name}
                    direction="row"
                    justifyContent={"center"}
                    alignItems="center"
                    margin={1}
                    border={"1px solid #eaeaea"}
                    borderRadius={5}
                    padding={1}
                    sx={{ cursor: 'pointer' }}
                >                               
                    <Avatar 
                        alt={skill.name} 
                        src={skill.image} 
                        sx={{
                            width: "40px", 
                            height:"40px", 
                            margin: "5px",
                            transition: "transform 0.2s ease-in-out"
                        }} 
                        variant="square"
                    />                                            
                    <Typography  
                        component={"span"} 
                        variant="h6" 
                        sx={{
                            textTransform: "capitalize",
                            margin: 1,
                            background: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent"
                        }}
                    >
                        {skill.name}
                    </Typography>
                </Stack>         
            ))} 
        </Stack>
    )
}
