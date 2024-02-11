import React, {Component} from 'react';
// Rutas
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router';
// Componentes
import NavbarComponent from '../components/shared/NavbarComponent';
import FooterComponent from "../components/shared/FooterComponent";
import HomeComponent from '../components/home/HomeComponent';
import ErrorComponent from '../components/shared/ErrorComponent';

class Router extends Component{
    render(){
        return(
            <BrowserRouter>
                {/* Cabecera */}
                <NavbarComponent /> 

                {/* Configuracion de rutas y paginas */}
                <Routes>
                    <Route path="/" element={<HomeComponent />} />
                    <Route path="/home" element={<HomeComponent />} />
                    <Route path="*" element={<ErrorComponent />} />
                </Routes>

                {/* Footer */}
                <FooterComponent />                
            </BrowserRouter>
        );
    }
}

export default Router;