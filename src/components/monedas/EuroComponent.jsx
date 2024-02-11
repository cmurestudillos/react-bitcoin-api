import { useEffect, useState } from "react";
import axios from 'axios';
// Componentes Material Ui
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
// Imagenes
import euro from '../../assets/img/euro.png';

const EuroComponent = () => {
    const [moneda, setMoneda] = useState();

    useEffect(() => {
        // Obtenemos los datos del Dolar
        axios.get('https://api.coindesk.com/v1/bpi/currentprice/EUR.json')
        .then( res => {
            if(res.data){
                setMoneda(res.data['bpi'].EUR)
            }
        });
    }, []);

    return (      
        <>
            <Card className="card">
                <CardContent>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <img src={euro} width="150" height="150" className="imagen" alt={moneda?.description} title={moneda?.description} />
                            <Chip avatar={<Avatar>$</Avatar>} label={moneda?.rate}  className="badge" clickable color="primary" variant="outlined" /> 
                        </Grid>
                    </Grid>
                </CardContent>
            </Card> 
        </>
      );
}
 
export default EuroComponent;