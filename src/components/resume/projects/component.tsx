import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Stack, List, ListItem, ListItemText } from '@mui/material';


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
      
                    
             <Stack  direction="row" justifyContent={'center'} alignItems="center" flexWrap={"wrap"} className="">
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