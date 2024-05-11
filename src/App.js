import logo from './logo.svg';
import './App.css';
import { ThemeProvider } from '@mui/material';
import { darkTheme } from './theme/darktheme';
import Navbar from './page/Navbar/Navbar';
import Home from './page/Home/Home';
import Auth from './page/Auth/Auth';

function App() {
  return (
    <ThemeProvider theme={darkTheme}>

        {/* <Navbar/> */}
        {/* <Home/> */}

        <Auth/>


    </ThemeProvider>
  );
}

export default App;
