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
            <div class="container">
                <div class="row">
                    <div class="col">
                        <Sidebar />
                    </div>
                    <div class="col">
                        {data.map((item, index) => (
                                <div className="col-6" key={index}>
                                    <h2>{item.titulo}</h2>
                                    <p>{item.descripcion}</p>
                                </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Comunidad;