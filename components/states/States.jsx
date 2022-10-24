import './States.css';
//import logo from 'IMG_0004.png';
import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Paper from '@mui/material/Paper';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import AdbIcon from '@mui/icons-material/Adb';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';


import InfoIcon from '@mui/icons-material/Info';
import PeopleIcon from '@mui/icons-material/People';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import CollectionsIcon from '@mui/icons-material/Collections';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import BusinessIcon from '@mui/icons-material/Business';
import LocationOnIcon from '@mui/icons-material/LocationOn';


import {
  HashRouter, Route, Routes, Link, Switch,
} from 'react-router-dom';



import Services from '../services/Services';
import Contact from '../contact/Contact';
import About from '../about/About';
import Description from '../description/Description';
import Gallery from '../gallery/Gallery';
import ElevateAppBar from '../states/ElevateAppBar';
import Articles from '../articles/Articles';


class States extends React.Component {


  handleButtonClick(buttonName, event) {
    this.setState({ buttonWasClicked: buttonName });
  }
    // Create state
  state = {
    buttonWasClicked: '',
  };


  render() {
  
  return (
    <div className="App"> 
      
      
      <ElevateAppBar/>
      

      <HashRouter >
          <Switch>
          <Route path="/home" component={Description} /> 
          <Route path="/about" component={About} />
          <Route path="/services" component={Services} />
          <Route path="/contact" component={Contact} />
          <Route path="/articles" component={Articles} />
          <Route path="/" component={Description} />
          </Switch>
      </HashRouter>
      
      <footer className="App-footer">
        
        <Box sx={{width:'100%'}} align-items="left" align="left" m='3vmax'>
          
            
            <Stack justifyContent="space-between" direction="row" display="flex" p='2vmax'> 
              
              <Stack display="flex" direction="column">
                <Typography style={{color:"#444242"}} sx={{ fontFamily: 'Garamond' }} variant="h5" align="left"> 
                   Music Making Cents
                </Typography> 
                
                <p>
                    <Stack align-items="left" justifyContent="space-between" direction="row" display="flex"> 
                     <Stack display="flex" direction="column" spacing={0} align="left">
                       <Typography style={{color:"#444242"}} sx={{ fontFamily: 'Garamond' }} variant="body" align="left"> 
                         1689 Amberwood Dr.
                        </Typography>
                       <Typography style={{color:"#444242"}} sx={{ fontFamily: 'Garamond' }} variant="body" align="left"> 
                         South Pasadena, CA 91030
                        </Typography>
                     </Stack>
                    </Stack> 
                </p>
                
              </Stack>
                
              <Card sx={{minWidth: 90, maxWidth: 115, display: { xs: 'none', md: 'flex' }}} style={{border: "none", boxShadow: "none", backgroundColor: 'transparent'}} square={true}>
                  <CardMedia
                    component="img"
                    image="Taylor-Sullivan-Bows-Logo-12.ico"
                    alt="Taylor Sullivan Bows Logo"
                  />
              </Card>
              <Card sx={{minWidth: 70, maxWidth: 100, display: { xs: 'flex', md: 'none' }}} style={{border: "none", boxShadow: "none", backgroundColor: 'transparent'}} square={true}>
                  <CardMedia
                    component="img"
                    image="Taylor-Sullivan-Bows-Logo-12.ico"
                    alt="Taylor Sullivan Bows Logo"
                  />
              </Card>
                
            </Stack>
                
              
              
            
                
              
        
        </Box>
          
        
      </footer> 
      

    </div>
  );
  
}
}
export default States;
 //onClick={e => this.handleButtonClick(e.first_name + " " + e.last_name, e)}>{e.first_name + " " + e.last_name}
/*<Stack>
            
           <Stack direction="row" spacing={2}>
            <LocationOnIcon/>
             <Typography variant="body" align="center"> 
               1689 Amberwood Dr, Apt 106, South Pasadena, CA 91030
            </Typography>
           </Stack>
            <Stack direction="row" spacing={2}>
              <PhoneIcon/>
              <Typography variant="body" align="center"> 
                 (626) 658-7933
              </Typography>
            </Stack>
              <Stack direction="row" spacing={2}>
                <EmailIcon/>
                <Typography variant="body" align="center"> 
                   taylorsullivanbows@gmail.com
                </Typography>
              </Stack>
             <Stack direction="row" spacing={2}>
                <InstagramIcon/>
                <Typography variant="body" align="center"> 
                   @taylorsullivanbows
                </Typography>
              </Stack>
                
             
            
          </Stack>*/