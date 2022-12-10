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
import { Stack } from '@mui/material';


const projects = [
    {
        title: "Project 1",
        description: "This is a project",
        link: ""
    },
    {
        title: "Project 2",
        description: "This is a project",
        link: ""
    },
    {
        title: "Project 3",
        description: "This is a project",
        link: ""
    },
]

interface ListItemProps {
    title: string;
    description: string;
    link: string;
}

function ListItem(props: ListItemProps) {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    return (
        <Card sx={{ maxWidth: 345,}} className="p-1 m-2">
      <CardHeader
       
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="100"
        image="/static/images/cards/paella.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
        //   expand={expanded}
        //   onClick={handleExpandClick}
        //   aria-expanded={expanded}
        //   aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
            aside for 10 minutes.
          </Typography>
          
         
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>

    )
}



export default function Projects() {
    return (
        <div className="d-flex  -primary m-5 p-1">
        <div className="m-1 p-1 d-flex flex-column justify-content-centre" style={{width: "100%"}}>
        <Typography variant="h4" align="center">Projects</Typography>
        <hr />
                    
             <Stack direction="row" flexWrap={"wrap"}  className="m-1 p-1">
                    {
                        projects.map((project) => {
                            return (
                                <ListItem title={project.title} description={project.description} link={project.link} />
                            )
                        })
                    }
             </Stack>
         </div>
     </div>
    );
}