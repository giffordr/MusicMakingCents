import './Description.css';
import * as React from 'react';
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
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Accordion from '@mui/material/Accordion';
import Grid from '@mui/material/Grid';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import EastIcon from '@mui/icons-material/East';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {
  HashRouter, Route, Routes, Link, Switch,
} from 'react-router-dom';

import CloseIcon from '@mui/icons-material/Close';



class Spotify extends React.Component {

componentDidMount(){
          window.scrollTo({ top: 0, behavior: "smooth" })
}
render() {
  
  return (
    
    
    <Card id = 'Header' sx={{maxWidth: '100%', height: '20%', minHeight: 200, maxHeight: 700}} style={{ border: "none", boxShadow: "none", backgroundColor: 'transparent'}} square={true}>
         <div style={{ display:'flex', justifyContent:'center', alignItems:'center'}}>
             <CardContent sx={{alignItems: 'center', justifyContent:'center', mx:'15vmin', mt:'20vmin', mb:'15vmin'}} style={{ border: "none", boxShadow: "none", backgroundColor: 'transparent'}}>   
                  <Typography style={{color:"#444242"}} sx={{ fontFamily: 'Arial', display: { xs: 'none', md: 'flex' } }} variant="h4" align="center" alignItems="center" justifyContent="center" m='auto'> 
                       TODO: Pass title index to article in callback function. Print title here
                  </Typography>
                   <Typography style={{color:"#444242"}} sx={{ fontFamily: 'Arial', display: { xs: 'flex', md: 'none' } }} variant="h5" align="center" alignItems="center" justifyContent="center" m='auto'> 
                       TODO: Pass title index to article in callback function. Print title here
                  </Typography>
                  <Typography style={{color:"#444242"}} sx={{ fontFamily: 'Arial', fontSize: 12}} variant="body" align="center" alignItems="center" justifyContent="center" m='auto'> 
                       Written By: The Making Cents Team
                  </Typography>
                  <p></p>
                  <div>
                      <Typography style={{color:"#444242"}} sx={{ fontFamily: 'Arial',  }} variant="body" align="center" alignItems="center" justifyContent="center" m='auto'> 
                            If you've ever wondered about streaming services, as a way of making passive income off of your newly released EP, but don't know where to start... this is the article for you.
                      </Typography>
                  </div>      
            </CardContent>
          </div>
      </Card>
    
    );
  }
}
export default Spotify;
      /*</div>
      <div>
        <Card sx={{maxWidth: '100%', maxHeight: 700, position: 'relative'}} style={{ border: "none", boxShadow: "none" }} square={true}>
          <CardMedia
            component="img"
            image="EEDAA25B-220C-4103-B764-44427E4CB54D_1_105_c.jpg"
            alt="Working in shop2"
          />
          <Box
            sx={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: '100%',
              height: '100%',
              bgcolor: 'rgba(0, 0, 0, 0)',
              color: 'white',
              padding: '10vmax',
            }}
            alignItems="center" justifyContent="center" m="auto"
          >
            <Grid container justify="center" direction="column" alignItems="center" m="auto">
                <Typography variant="h4" align="center"> Have your bow repaired by someone that you trust</Typography>
                <p><Button href="/#/About" color="success" variant="contained" >About Me</Button></p>
            </Grid>
            
          </Box>
        </Card>
      </div>
      </div>*/
