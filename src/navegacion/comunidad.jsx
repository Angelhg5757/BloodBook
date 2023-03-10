import axios from "axios";
import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";

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
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Sidebar />
                    </div>
                    <div className="col">
                        <div className="">
                            {data.map((item, index) => (
                                    <div className="col-6" key={index}>
                                        <h2>{item.titulo}</h2>
                                        <p>{item.descripcion}</p>
                                        <input type="submit" value="Contactar" className="buttons2" />
                                    </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Comunidad;