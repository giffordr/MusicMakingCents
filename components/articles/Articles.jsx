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


ChartJS.register(ArcElement, Tooltip, Legend);


class Contact extends React.Component {
  
colors =   {
            green: "rgba(75, 192, 192, 1)",
            yellow: "rgba(255, 206, 86, 1)",
            orange: "rgba(255, 206, 86, 1)",
            red: "rgba(255, 99, 132, 1)",
          };
  
colorsHover =   {
            green: "rgba(75, 192, 192, 0.6)",
            yellow: "rgba(255, 206, 86, 0.6)",
            orange: "rgba(255, 206, 86, 0.6)",
            red: "rgba(255, 99, 132, 0.6)",
          };

testData = [];
  
handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    this.setState({open: false});
  };

componentDidMount(){
          window.scrollTo({ top: 0, behavior: "smooth" })
};
  
addNewArticle = (TTP, Cost, Exposure, Difficulty, Profit, ArticleTitle) => {
  
    let score = TTP + Cost + Exposure + Difficulty + Profit;
  
    let tempData = [
        { name: "TTP", bgcolor: "rgba(255, 99, 132, 1)", completed: TTP },
        { name: "Cost", bgcolor: "rgba(75, 192, 192, 1)", completed: Cost },
        { name: "Reach", bgcolor: "rgba(255, 206, 86, 1)", completed: Exposure },
        { name: "Difficulty", bgcolor: "rgba(255, 99, 132, 1)", completed: Difficulty },
        { name: "Profit", bgcolor: "rgba(75, 192, 192, 1)", completed: Profit },
     ];
  
    let pieAmount = [0,0,0,0];
  
    let barColor = [
           "rgba(75, 192, 192, 1)",
           "rgba(255, 206, 86, 1)",
           "rgba(255, 206, 86, 1)",
           "rgba(255, 99, 132, 1)",
          ];
  
    let labelColor = [
           "rgba(75, 192, 192, 1)",
           "rgba(255, 206, 86, 1)",
           "rgba(255, 206, 86, 1)",
           "rgba(255, 99, 132, 1)",
           "rgba(255, 99, 132, 1)",
          ];
  
    let hoverColor = [];
  
    let chartLabels = ["TTP","Cost","Reach", "Difficulty", "Profit"];
    
    tempData.map((item,idx) => {
      
      if (item.completed >= 15){
        item.bgcolor = this.colors.green;
        pieAmount[0] = pieAmount[0]+20;
        barColor[0] =this.colors.green;
        labelColor[idx] =this.colors.green;
        hoverColor[0] = this.colorsHover.green;
      }; 
      
      if (item.completed >= 10  && item.completed< 15){
        item.bgcolor = this.colors.yellow;
        pieAmount[1] = pieAmount[1]+20;
        barColor[1] =this.colors.yellow;
        labelColor[idx] =this.colors.yellow;
        hoverColor[1] = this.colorsHover.yellow;
      }; 
      
      if (item.completed >= 5  && item.completed< 10){
        item.bgcolor = this.colors.orange;
        pieAmount[2] = pieAmount[2]+20;
        barColor[2] =this.colors.orange;
        labelColor[idx] =this.colors.orange;
        hoverColor[2] = this.colorsHover.orange;
      };
      
      if (item.completed >= 0  && item.completed< 5){
        item.bgcolor = this.colors.red;
        pieAmount[3] = pieAmount[3]+20;
        barColor[3] =this.colors.red;
        labelColor[idx] =this.colors.red;
        hoverColor[3] = this.colorsHover.red;
      };
    });
    
    this.testData.push({title: ArticleTitle, data: tempData, datastuff: {
          labels: chartLabels,
          datasets: [
            {
              data: pieAmount,
              backgroundColor: barColor,
              borderColor: barColor,
              hoverBackgroundColor: hoverColor,
              borderWidth: 0.4,
              weight: 0.1,
              
            },
          ],
        },
         options: {
            cutout: "90%",
            responsive: true,
            maintainAspectRatio: false,
            centerText: {
                    color: "black",
                    value: score,
                    fontSizeAdjust: 1 // increase font size 20% based on default font size
                  },
            
            plugins: {
                legend: {
                    display: false,
                    
                },
              tooltip: {
                enabled: false,
                 callbacks: {
                  label: function(context) { 
                    var label = chartLabels[context.dataIndex];
                    return label;
                                           },
                            }
                        },
                      },
               
            
                  
                  },
                        
  });
    
};

 
render() {
   

  return (
    
<Box sx={{maxWidth:1100}} alignItems="center" justifyContent="center" m="auto" pt="75px">    
      
       
     {this.addNewArticle(16,12,8,15,4, "Spotify: Which streaming service is best?")}
     {this.addNewArticle(2,6,12,15,18, "Things 3")}
     {this.addNewArticle(19,18,17,16,18, "Kayla's article hehe")}
     {this.addNewArticle(3,3,17,10,11, "Kayla's article hehe 2")}
     
  
     
  <div style={{ width:"100%", margin: "0 auto", alignItems:"center"}} >
          
      {this.testData.map((item,idx) => (
        
      
    <span>
      <Grid container spacing={0} direction="column" justifyContent="center" p="5px" sx={{ display: { xs: 'none', md: 'flex' } }}>
          
        <Card sx={{ minWidth: 350, width:"100%", maxHeight: 400}} >
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
                        
                    
                        <Grid xs={5} container item direction="row" justifyContent="space-between" alignItems="flex-end">
                            
                          <Grid item xs={12}>
                                <Typography style={{color:"black"}} sx={{ fontFamily: 'Arial', fontWeight:'bold'}} variant="h4"> 
                                    {item.title}
                                </Typography>
                              
                          </Grid>
                              
                          <Grid item >
                              <Box  display="flex" justifyContent="flex-end">
                                  <EastIcon fontSize="large" />
                              </Box>
                          </Grid>
                              
                        </Grid>
                       
                   </Grid>

            </CardContent> 
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
export default Contact;
//<Typography sx={{ fontFamily: 'Georgia', weight:'bold'}} style={{color: "black"}} variant="h5" alignItems="left" align = "left">{item.name}</Typography>
//<RatingBar key={idx} bgcolor={item.bgcolor} completed={item.completed} />
//<Typography style={{color:"black"}} sx={{ fontFamily: 'Georgia'}} variant="h3" align="right" alignItems="right" justifyContent="right" display='flex' m='auto'> 
 //               {item.title}
 //             </Typography>