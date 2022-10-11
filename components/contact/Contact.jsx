import './Contact.css';
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
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {
  HashRouter, Route, Routes, Link, Switch,
} from 'react-router-dom';

import CloseIcon from '@mui/icons-material/Close';


class Description extends React.Component {

   
  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    this.setState({open: false});
  };

  componentDidMount(){
          window.scrollTo({ top: 0, behavior: "smooth" })
}
 
render() {
  
  return (
    <div className="Body">
    <Card id="Header" sx={{maxWidth: '100%', height: '20%', minHeight: 200, maxHeight: 700}} style={{ border: "none", boxShadow: "none", backgroundColor: 'transparent'}} square={true}>
         <div style={{ display:'flex', justifyContent:'center', alignItems:'center'}}>
             <CardContent sx={{alignItems: 'center', justifyContent:'center', mx:'15vmin', mt:'20vmin', mb:'15vmin'}} style={{ border: "none", boxShadow: "none", backgroundColor: 'transparent'}} >   
              <Typography style={{color:"#444242"}} sx={{ fontFamily: 'Georgia', display: { xs: 'none', md: 'flex' } }} variant="h4" align="center" alignItems="center" justifyContent="center" m='auto'> 
                   Freshen up your bow & enjoy a better playing experience
              </Typography>
               <Typography style={{color:"#444242"}} sx={{ fontFamily: 'Georgia', display: { xs: 'flex', md: 'none' } }} variant="h5" align="center" alignItems="center" justifyContent="center" m='auto'> 
                   Freshen up your bow & enjoy a better playing experience
              </Typography>
            </CardContent>
           
          </div>
      </Card>
    <div className="Body">
      
    <Box sx={{maxWidth:1100}} alignItems="center" justifyContent="center" m='auto'>    
    
      
      <Box sx={{ flexGrow: 1 }} display="flex" alignItems="center" justifyContent="center" m="auto">
        <Stack direction="column" alignItems="center" justifyContent="center">
        <Grid container spacing={1} display="flex" alignItems="center" justifyContent="center">
          <Grid item xs display="flex" alignItems="center" justifyContent="center" m="auto">
            <Card sx={{maxWidth: 370, minWidth: 260, minHeight: 210}} style={{ border: "none", boxShadow: "none", backgroundColor: 'transparent'}} square={true}>
              <CardContent alignItems="center" justifyContent="center">
                <Typography sx={{ fontFamily: 'Georgia' }} style={{color: "#444242"}} variant="h5" alignItems="center" align = "center">Address</Typography><br/>
                <Stack direction="column" alignItems="center" align = "center">
                  <Typography sx={{ fontFamily: 'Georgia' }} style={{color: "#444242"}} variant="subtitle" alignItems="center" align="center">1689 Amberwood Dr</Typography>
                  <Typography sx={{ fontFamily: 'Georgia' }} style={{color: "#444242"}} variant="subtitle" alignItems="center" align="center">South Pasadena, CA 91030</Typography>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs display="flex" alignItems="center" justifyContent="center" m="auto">
            <Card sx={{maxWidth: 370, minWidth: 260, minHeight: 210}} style={{ border: "none", boxShadow: "none", backgroundColor: 'transparent'}} square={true}>
              <CardContent>
                <Typography sx={{ fontFamily: 'Georgia' }} style={{color: "#444242"}} variant="h5" alignItems="center" align = "center">Phone</Typography><br/>
                <Stack direction="column" alignItems="center" align = "center">
                  <Typography sx={{ fontFamily: 'Georgia' }} style={{color: "#444242"}} id = 'number' variant="body" alignItems="center" align = "center">(626) 658-7933</Typography>
                  
                </Stack>
              </CardContent>
            </Card>
          </Grid>
          
        
        
        <Grid item xs display="flex" alignItems="center" justifyContent="center" m="auto">
          <Card sx={{maxWidth: 370, minWidth: 260, minHeight: 210, display:"flex"}} style={{ border: "none", boxShadow: "none", backgroundColor: 'transparent'}} square={true}>
              <CardContent>
                <Typography sx={{ fontFamily: 'Georgia' }} style={{color: "#444242"}} variant="h5" alignItems="center" align = "center">Email</Typography><br/>
                <Stack direction="column" alignItems="center" align = "center">
                  <Typography sx={{ fontFamily: 'Georgia' }} style={{color: "#444242"}} variant="subtitle"> taylorsullivanbows@gmail.com</Typography>
                </Stack>
              </CardContent>
            </Card>

        </Grid>
          </Grid>
          <Card sx={{maxWidth: 370, minWidth: 210, minHeight: 210, display:"flex"}} style={{ border: "none", boxShadow: "none", backgroundColor: 'transparent'}} square={true}>
              <CardMedia
                component="img"
                image="Taylor Sullivan Bows Logo-01.png"
                alt="logo"
            />
                
            </Card>
          </Stack>
      </Box>
      
            
      
      
    </Box>
    </div>
      </div>
    );
  }
}
export default Description;
