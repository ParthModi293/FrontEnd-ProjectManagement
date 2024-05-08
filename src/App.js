import logo from './logo.svg';
import './App.css';
import { ThemeProvider } from '@mui/material';
import { darkTheme } from './theme/darktheme';
import Navbar from './page/Navbar/Navbar';
import Home from './page/Navbar/Home/Home';

function App() {
  return (
    <ThemeProvider theme={darkTheme}>

        <Navbar/>
        <Home/>


    </ThemeProvider>
  );
}

export default App;
