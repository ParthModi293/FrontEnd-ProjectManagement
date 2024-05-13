import logo from './logo.svg';
import './App.css';
import { ThemeProvider } from '@mui/material';
import { darkTheme } from './theme/darktheme';
import Navbar from './page/Navbar/Navbar';
import Home from './page/Home/Home';
import Auth from './page/Auth/Auth';
import { useState } from 'react';

function App() {

  const user= true;
  return (
    <ThemeProvider theme={darkTheme}>

    {user? <div>
        <Navbar/> 
        <Home/> 
    </div>:<Auth/> }

       

         


    </ThemeProvider>
  );
}

export default App;
