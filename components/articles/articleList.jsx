import './Articles.css';
import RatingBar from "./ratingBar.jsx";
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
import CardActions from '@mui/material/CardActions';
import CardActionArea from '@mui/material/CardActionArea';
import Accordion from '@mui/material/Accordion';
import Grid from '@mui/material/Grid';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import EastIcon from '@mui/icons-material/East';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {
  HashRouter, Route, Routes, Link, Switch,
} from 'react-router-dom';

import CloseIcon from '@mui/icons-material/Close';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
//import {Chart} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import "chartjs-plugin-doughnut-innertext";
import 'chartjs-plugin-style';
//import DoughnutText from './DoughnutText.jsx';

import Spotify from '../articles/streamingServices/spotify/Spotify';


ChartJS.register(ArcElement, Tooltip, Legend);


class ArticleList extends React.Component {
  
handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    this.setState({open: false});
  };

componentDidMount(){
          window.scrollTo({ top: 0, behavior: "smooth" })
};
   
render() {
   

  return (
      
    
<Box sx={{maxWidth:1100}} alignItems="center" justifyContent="center" m="auto" pt="75px">    


     
  <div style={{ width:"100%", margin: "0 auto", alignItems:"center"}} >
          
      {window.articleModels.articleListModel().map((item,idx) => (
        
      
    <span>
      <Grid container spacing={0} direction="column" justifyContent="center" p="5px" sx={{ display: { xs: 'none', md: 'flex' } }}>
          
        <Card sx={{ minWidth: 350, width:"100%", maxHeight: 400, "&:hover": { transform: 'scale(1.01)', transition: 'transform .4s'} }} >
          <CardActionArea href={"#/"+item.header+"/"+item.subHeader}>
            <CardContent >

                   <Grid container spacing={3} style={{ display: "flex"}}>
                       
                       <Grid xs={4} item style={{  alignItems: "center" }}>
                            
                              <Doughnut data = {item.datastuff} options= {item.options}/>
                             
                        </Grid>
                       
                        
                        <Grid xs={3} container item direction="column" sx={{maxWidth: 140}} >  
                            {item.data.map((item, idx) => (<Grid item>
                                <Typography sx={{ fontFamily: 'Arial'}} style={{color: "black"}} variant="body">{item.name}</Typography>
                                <RatingBar key={idx} bgcolor={item.bgcolor} completed={item.completed} />
                               </Grid>))}
                        </Grid>
                        
                    
                    <Grid xs={5} container item direction="row" justifyContent="space-between" alignItems="flex-end" >
                            
                          <Grid item xs={12}>
                                <Typography style={{color:"black"}} sx={{ fontFamily: 'Arial', fontWeight:'bold'}} variant="h4"> 
                                    {item.title}
                                </Typography>
                              
                          </Grid>
                              
                          <Grid item >
                              <Box  display="flex" justifyContent="flex-end" >
                                  <EastIcon fontSize="large" />
                              </Box>
                          </Grid>
                              
                        </Grid>
                       
                   </Grid>

               </CardContent> 
              
           </CardActionArea>
          </Card>

     </Grid>
   
    
    
    
    <Grid container spacing={0} direction="column" justifyContent="center" p="5px" sx={{ display: { xs: 'flex', md: 'none' } }}>
          
        <Card sx={{ minWidth: 300, width:"100%", maxHeight: 550}} >
          <CardContent >
 
                   <Grid container spacing={3} style={{ display: "flex"}}>
                       
                       <Grid xs={6} item style={{  alignItems: "center" }}>
                            
                              <Doughnut data = {item.datastuff} options= {item.options}/>
                             
                        </Grid>
                       
                        
                        <Grid xs={6} container item direction="column" sx={{maxWidth: 400}} >  
                            {item.data.map((item, idx) => (<Grid item>
                                <Typography sx={{ fontFamily: 'Arial'}} style={{color: "black"}} variant="body">{item.name}</Typography>
                                <RatingBar key={idx} bgcolor={item.bgcolor} completed={item.completed} />
                               </Grid>))}
                        </Grid>
                        
                    
                        <Grid xs={12} item  style={{ display: "flex", alignItems: "center"}}>
                          <Typography style={{color:"black"}} sx={{ fontFamily: 'Arial', fontWeight:'bold'}} variant="h4"> 
                            {item.title}
                          </Typography>
                        </Grid>
                       
                   </Grid>
            </CardContent> 
          </Card>
        </Grid>
    </span>
   
      ))}
    
  </div>
       
</Box>
    
    );
  }
}
export default ArticleList;
//<Typography sx={{ fontFamily: 'Georgia', weight:'bold'}} style={{color: "black"}} variant="h5" alignItems="left" align = "left">{item.name}</Typography>
//<RatingBar key={idx} bgcolor={item.bgcolor} completed={item.completed} />
//<Typography style={{color:"black"}} sx={{ fontFamily: 'Georgia'}} variant="h3" align="right" alignItems="right" justifyContent="right" display='flex' m='auto'> 
 //               {item.title}
 //             </Typography>