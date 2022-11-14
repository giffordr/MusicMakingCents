import './States.css';
import * as React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';

import {
  HashRouter, BrowserRouter, Route, Routes, Link, Switch,
} from 'react-router-dom';

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import "chartjs-plugin-doughnut-innertext";
import 'chartjs-plugin-style';

ChartJS.register(ArcElement, Tooltip, Legend);



class LatestArticles extends React.Component {
constructor(props){
  super(props);
  this.state={
    articleIndex: 1
  }
  this.changeIndex = this.changeIndex.bind(this);
}
  
  changeIndex = (newIndex) =>{
    this.setState({articleIndex: newIndex})
  }
  handleButtonClick(buttonName, event) {
    this.setState({ buttonWasClicked: buttonName });
  }
    // Create state
  state = {
    buttonWasClicked: '',
  };


  render() {
  
  return (
    <Box sx={{maxWidth:1200}} alignItems="center" justifyContent="center" m="auto" pt="75px">
      
      <Typography style={{color:"#444242"}} variant='h5' fontFamily="Arial" fontWeight="bold"> Latest Articles </Typography>
      <Divider/>
      <p></p>
      
      <Grid container sx={{ flexGrow: 1, maxWidth: 1150 }} spacing={2} display="flex" alignItems="center" justifyContent="center" m="auto">
        
        <Grid item display="flex" alignItems="center" justifyContent="center" m="auto">
            <Card sx={{maxWidth:500, minWidth: 340}}>
                <CardContent>
                </CardContent>
            </Card>
        </Grid>
        
        <Grid item display="flex" alignItems="center" justifyContent="center" m="auto">
          <Card sx={{maxWidth:500, minWidth: 340}}>
                <CardContent>
                </CardContent>
          </Card>   
        </Grid>
        
        <Grid item display="flex" alignItems="center" justifyContent="center" m="auto">
          <Card sx={{maxWidth:500, minWidth: 340}}>
                <CardContent>
                </CardContent>
          </Card>
        </Grid>
        
      </Grid>
     
    </Box>
          
        
  );
  
}
}
export default LatestArticles;

// 1) Sort by data function above is called

// 2) Grab 3 most recent articles into Latest state model
      
// 3) Flex grid those three articles with card styling doughnut and title