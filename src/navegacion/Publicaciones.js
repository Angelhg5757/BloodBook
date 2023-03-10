// import React from 'react';
import "./css/publicaciones.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";

const Publicaciones = () => {
//   const [apiData, setApiData] = useState([]);

//   useEffect(() => {
//     axios.get(`http://localhost:4000/publicacion/listar`)
//         .then((getData) => {
//             setApiData(getData.data);
//         })
// }, [])

  return (
    <div className="container-fluid">
      
        <div className="row">
          <div className="col-2">
        
            <Sidebar />
          </div>
          <div className="col-10 text-center mt-3 inv">
            <h3>
              Invita a tus contactos para que formen parte de tu comunidad y en
              caso de emergencia poder contactarlos rápidamente
            </h3>{" "}
            <br />
            <h5>
              Copia tu enlace de invitación o comparte en redes sociales para
              que tus contactos se puedan registrar
            </h5>{" "}
            <br /> <br />
            <div class="input-group cod">
              <input type="text" placeholder="Tú código" class="form-control" />
            </div>
            <br /> <br />
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="tit">
                Título de la publicación
              </label>
              <input
                type="text"
                class="form-control cod"
                id="exampleFormControlInput1"
                placeholder="Título aquí"
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label tit">
                Descripción
              </label>
              <textarea
                class="form-control cod"
                id="exampleFormControlTextarea1"
                rows="6"
              ></textarea>
            </div>
            <input type="submit" class="btn btn-primary " />
          </div>
        </div>
        </div>
  );
};

export default Publicaciones;
