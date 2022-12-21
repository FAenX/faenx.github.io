import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { ExpandMore } from '@mui/icons-material';
import { Stack, Skeleton, Box, List, ListItem, ListItemText } from '@mui/material';


const projects = [
    {
        title: "Project 1",
        description: "This is a project",
        link: ""
    },
    
]

interface ListItemProps {
    title: string;
    description: string;
    link: string;
}


export default function Projects() {
    return (
        <Stack margin={5} >
        <Typography padding={5} variant="h4" align="center">Projects I am Currently working on</Typography>
      
                    
             <Stack  direction="row" justifyContent={'center'} alignItems="center" flexWrap={"wrap"} className="border">
                    {
                        projects.map((project) => {
                            return (
                              
                               
                                  <List>
                                    <ListItem alignItems='flex-start'> 
                                      <ListItemText
                                        primary={project.title}
                                        secondary={
                                          <React.Fragment>
                                            <Typography
                                              sx={{ display: 'inline' }}
                                              component="span"
                                              variant="body2"
                                              color="text.secondary"
                                            >
                                              {project.description}
                                            </Typography>
                                            {project.link}
                                          </React.Fragment>
                                        }
                                        
                                      />

                                                                      
                            
                                      {/* <Typography  color="text.secondary" variant="h5" align="center">{project.title}</Typography>
                                      <Typography sx={{ fontSize: 14 }} color="text.secondary"  variant="body1" align="center">{project.description}</Typography>
                                      <Typography sx={{ fontSize: 14 }} color="text.secondary"  variant="body1" align="center">{project.link}</Typography> */}
                                  </ListItem>
                                </List>

                           
                            )
                        })
                    }
             </Stack>
    </Stack>
    );
}