import React from 'react';
// Imagenes
import logo from '../../assets/img/logo.png';
// React-Material
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

const NavbarComponent = () => {
    return ( 
        <>
            <AppBar position="static">
              <Toolbar className="bg-custom">
                <img className="logo" src={logo} alt="BitCoin" title="BitCoin" />
              </Toolbar>
            </AppBar>        
        </>
     );
}
 
export default NavbarComponent;