import axios from "axios";
import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Comunidad = () => {
    const [data, setApiData] = useState([]);

    // useEffect(() => {
    //     const getPubliaciones = () => {
    //     const res = axios.get("http://localhost:4000/publicacion/listar");
    //     setLista(res.data);
    //     };
    //     getPubliaciones();
    // }, [lista]);

    useEffect(() => {
        axios.get(`http://localhost:4000/publicacion/listar`)
            .then((getData) => {
                setApiData(getData.data);
            })
    }, [])

    return (
        <>
         <Sidebar />
            <div className="container">
                <div className="row">
                    <div className="col-5">
                    </div>
                        <div className="col-6" >
                            {data.map((item, index) => (
                            <Card sx={{ maxWidth: 345, backgroundColor: "#212121", color: "#fafafa", marginBottom: "15px" }} key={index}>
                                <CardMedia
                                    component="img"
                                    // alt="green iguana"
                                    height="140"
                                    image="https://img.freepik.com/vector-premium/mujer-acostada-cama-hospital-ilustracion-personajes-dibujos-animados-personas-sobre-fondo-blanco-joven-que-padece-enfermedad-imagen-sala-electrocardiografo-tema-medico-sanitario_89615-1063.jpg?w=2000"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {item.titulo}
                                    </Typography>
                                    <Typography sx={{color: "#fafafa"}} variant="h7" color="text.secondary">
                                        {item.nombre}{' '}{item.apePat}{' '}{item.apeMat}
                                    </Typography>
                                    <Typography sx={{color: "#fafafa"}} variant="body1" color="text.secondary">
                                        {item.descripcion}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button variant="contained" size="medium" type="submit">Contactar</Button>
                                    {/* <Button size="small">Learn More</Button> */}
                                </CardActions>
                            </Card>
                            ))}
                        </div>
                    
                </div>
            </div>
        </>
    )
}

export default Comunidad;