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
      
      {/* container-fluid */}
      <div className="col-11">
        <div className="row">
          <div className="col-3">
            <Sidebar />
          </div>
          <div className="col-9 text-center mt-3">
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
            <div class="input-group">
              <input type="text" placeholder="Tú código" class="form-control" />
            </div>
            <br /> <br />
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="">
                Título de la publicación
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Título aquí"
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">
                Descripción
              </label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="6"
              ></textarea>
            </div>
            <input type="submit" class="btn btn-primary" />
          </div>
        </div>
      </div>
      {/* <ul>
      {apiData.map((data) => {
            return (
        <li>{data.titulo}</li>
        )
        })}
      </ul> */}
    </div>
  );
};

export default Publicaciones;
