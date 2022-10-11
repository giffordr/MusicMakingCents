import './Services.css';
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
import CardContent from '@mui/material/CardContent';
import Collapse from '@mui/material/Collapse';
import Stack from '@mui/material/Stack';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import HeadphonesIcon from '@mui/icons-material/Headphones';

import {
  HashRouter, Route, Routes, Link,
} from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import CloseIcon from '@mui/icons-material/Close';

class Services extends React.Component {
  
componentDidMount(){
           window.scrollTo({ top: 0, behavior: "smooth" })
}
 
render() {
  
  return (
    <div className="Body">
      <Box sx={{maxWidth:800}} alignItems="center" justifyContent="center" mx='auto' mt = '15vmin'>
              <Typography sx={{ fontFamily: 'Georgia' }} style={{color: "#444242"}} variant="h4" align="center"> 
                   Rehair
              </Typography>
        <p></p>
              <Typography sx={{ fontFamily: 'Georgia' }} style={{color: "#444242"}} variant="subtitle" align="left" justifyContent="left"> 
                   All rehairs are $90 and come with a complimentary light cleaning and polishing. Starter rosin is available upon request.
              </Typography>
        <p></p>
              <Typography sx={{ fontFamily: 'Georgia' }} style={{color: "#444242"}} variant="h5" align="left" justifyContent="left"> 
                   Stallion(White)
              </Typography>
        <p></p>
              <Typography sx={{ fontFamily: 'Georgia' }} style={{color: "#444242"}} variant="h5" align="left" justifyContent="left"> 
                   Chestnut
              </Typography>
        <p></p>
              <Typography sx={{ fontFamily: 'Georgia' }} style={{color: "#444242"}} variant="h5" align="left" justifyContent="left"> 
                   Black
              </Typography>
        <p></p>
              <Typography sx={{ fontFamily: 'Georgia' }} style={{color: "#444242"}} variant="h5" align="left" justifyContent="left"> 
                   Mix:
              </Typography>
        
                <li style={{ marginLeft: 30}}><Typography sx={{ fontFamily: 'Georgia' }} style={{color: "#444242"}} variant="subtitle" align="left" justifyContent="left" >
                     Salt & Pepper - Stallion and Black
                </Typography></li>
        
                <li style={{ marginLeft: 30}}><Typography sx={{ fontFamily: 'Georgia' }} style={{color: "#444242"}} variant="subtitle" align="left" justifyContent="left" >
                     Cinnamon & Sugar - Stallion and Chestnut
                </Typography></li>
      
                <li style={{ marginLeft: 30}}><Typography sx={{ fontFamily: 'Georgia' }} style={{color: "#444242"}} variant="subtitle" align="left" justifyContent="left">
                    Peanut Butter & Chocolate - Chestnut and Black
                </Typography></li>
        <p></p>
        
   
      </Box>
      
      <Box sx={{maxWidth:800}} alignItems="center" justifyContent="center" mx='auto' mt = '10vmin'>
        <Typography sx={{ fontFamily: 'Georgia' }} style={{color: "#444242"}} variant="h4" align="center"> 
                   Repair
              </Typography>
        <p></p>
              <Typography sx={{ fontFamily: 'Georgia' }} style={{color: "#444242"}} variant="h5" align="left" justifyContent="left"> 
                   Tips
              </Typography>
        <p></p>
              <Typography sx={{ fontFamily: 'Georgia' }} style={{color: "#444242"}} variant="h5" align="left" justifyContent="left"> 
                   Windings
              </Typography>
        <p></p>
              <Typography sx={{ fontFamily: 'Georgia' }} style={{color: "#444242"}} variant="h5" align="left" justifyContent="left"> 
                   Leather
              </Typography>
        <p></p>
              <Typography sx={{ fontFamily: 'Georgia' }} style={{color: "#444242"}} variant="h5" align="left" justifyContent="left"> 
                   Pearl
              </Typography>
        <p></p>
              <Typography sx={{ fontFamily: 'Georgia' }} style={{color: "#444242"}} variant="h5" align="left" justifyContent="left"> 
                   Eyelet & Screw Repairs
              </Typography>
        <p></p>
              <Typography sx={{ fontFamily: 'Georgia' }} style={{color: "#444242"}} variant="h5" align="left" justifyContent="left"> 
                   Camber & Straightening
              </Typography>
        
     </Box>
        
           
          
      
  
    
  </div>
      
  );
  
}
}
export default Services;
