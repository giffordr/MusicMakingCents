import './About.css';
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import List from '@mui/material/List';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Snackbar from '@mui/material/Snackbar';
import ListItem from '@mui/material/ListItem';
import Paper from '@mui/material/Paper';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import { CardActionArea } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import Collapse from '@mui/material/Collapse';
import Stack from '@mui/material/Stack';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import Tooltip from '@mui/material/Tooltip';

import {
  HashRouter, Route, Routes, Link, Switch,
} from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import CloseIcon from '@mui/icons-material/Close';


class About extends React.Component {

componentDidMount(){
           window.scrollTo({ top: 0, behavior: "smooth" })
}

 
render() {
  
  return (
  <div className="Body">
    <Box className="Body2">
    <Box sx={{maxWidth:1100}} alignItems="center" justifyContent="center" mx='auto' mt='15vmin'>
      <p> 
        <div className = "Description">
          <Typography sx={{ fontFamily: 'Georgia' }} style={{color: "#444242"}} variant="h4" align="center"> 
             About Taylor
          </Typography>
        </div>
      </p>
      <p>
        <Typography sx={{ fontFamily: 'Georgia' }} style={{color: "#444242"}} variant="body"> 
                Taylor Sullivan began her bow repair journey under the instruction of master bow maker Rodney Mohr at his Learning Trade Secrets workshops in Ashland, Ohio. Her interest in the world of repair came from refurbishing instruments and bows at J Brown Violin Maker in Claremont, California. Since then, she has been influenced and trained by many fine makers and restorers from all over the country. Taylor has studied closely with bow makers Rodney and Kate Mohr, Sarah Bystrom, and, most recently, Brianna Goldberg, who has passed on her bass bow rehair and repair expertise.
        </Typography>
      </p>
    
      
        
      <Box sx={{ flexGrow: 1 }} display="flex" alignItems="center" justifyContent="center" m="auto">
        <Card sx={{ minWidth: 210, maxWidth: 800}}>
          <CardMedia
            component="img"
            image="Taylor-Sullivan-Violin-Performance.webp"
            alt="Taylor Sullivan Performing on Violin"
          />
        </Card>
      </Box>

      
      <p></p> 
        <div >
          <Typography sx={{ fontFamily: 'Georgia' }} style={{color: "#444242"}} variant="body"> 
            Taylor is also an accomplished fiddle player who spent her childhood competing in old-time fiddling contests throughout her home state of Missouri. She is a four-time Missouri State Junior Fiddle Champion and holds a Bachelor of Music degree in Violin Performance.
          </Typography>
        </div>
      
    </Box>
      </Box>
      
    
  </div>
     
  );
  
}
}
export default About;
