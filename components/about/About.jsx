import './About.css';
import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import { CardActionArea } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import Collapse from '@mui/material/Collapse';
import Stack from '@mui/material/Stack';
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
          document.title = ("Music Making Cents- " + this.props.title);
}

 
render() {
  
  return (
  <div className="Body">
    <Box className="Body2">
    <Box sx={{maxWidth:1100}} alignItems="center" justifyContent="center" mx='auto' mt='15vmin'>
      TODO
      
    </Box>
      </Box>
      
    
  </div>
     
  );
  
}
}
export default About;
