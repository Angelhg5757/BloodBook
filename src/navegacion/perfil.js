import axios from "axios";
import React, { useEffect, useState } from "react";

import Sidebar from "./Sidebar";
import "./css/perfil.css";
import { MdBloodtype } from "react-icons/md";
import { BiHappyBeaming } from "react-icons/bi";
import images from "../assets/imagenes";
import { borderColor } from "@mui/system";

const Perfil = () => {
  const [data, setApiData] = useState([]);

  const [id, setId] = useState('');
  const [nombre, setNombre] = useState('');
  const [apePat, setApePat] = useState('');
  const [apeMat, setApeMat] = useState('');
  const [correo, setCorreo] = useState('');
  const [fechaNac, SetfechaNac] = useState('');
  const [sangre, SetSangre] = useState('');

  useEffect(() => {
    setId(localStorage.getItem('idUsuario'));
    setNombre(localStorage.getItem('nombre'));
    setApePat(localStorage.getItem('apePat'));
    setApeMat(localStorage.getItem('apeMat'));
    setCorreo(localStorage.getItem('correo'));
    SetfechaNac(localStorage.getItem('fechaNac'));
    SetSangre(localStorage.getItem('sangre'));
  }, [])

  return (
    <div>
      <div className="container-fluid bodyper">
        <div className="row">
          <div className="col-2">
            <Sidebar />
          </div>
          <div className="col-10">
            {/* <div className="card">
              <div className="card-body"> 
              <div className="card-text">
                    <h3>Tu tipo de sangre</h3> 
                  </div> 
                  <MdBloodtype className="w-100 h-100" />
                </div>
              </div>
              <div className="card">
              <div className="card-body"> 
              <div className="card-text">
                    <h3>Tus publicaciones</h3> 
                  </div> 
                  <BiHappyBeaming className="w-100 h-100" />
                </div>
              </div> */}
            <div class="containerpro rounded bg-white mt-5 mb-5">
              <div class="row">
                <div class="col-md-3 border-right">
                  <div class="d-flex flex-column align-items-center text-center p-3 py-5">
                    <img
                      class="rounded-circle mt-5"
                      width="150px"
                      //https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg
                      src={images.avatar}
                    />
                    <span class="font-weight-bold">{nombre}</span>
                    <span class="text-black-50">{correo}</span>
                    <span> </span>
                  </div>
                </div>
                <div class="col-md-5 border-right">
                  <div class="p-3 py-5">
                    <div class="d-flex justify-content-between align-items-center mb-3">
                      <h4 class="text-right"> BLOODBOOK</h4>
                    </div>
                    <div class="row mt-2">
                      <div class="col-md-6">
                        <label class="labels">Nombre:</label>
                        <input
                          type="text"
                          class="form-control1"
                          placeholder=""
                          value={nombre}
                          disabled
                        />
                      </div>
                      <p></p>
                      <div class="col-md-6">
                        <label class="labels">Apellido Paterno:</label>
                        <input
                          type="text"
                          class="form-control1"
                          value={apePat}
                          placeholder="Hernández"
                          disabled
                        />
                      </div>
                    </div>
                    <p></p>
                    <div class="row mt-3">
                      <div class="col-md-6">
                        <label class="labels">Apellido Materno:</label>
                        <input
                          type="text"
                          class="form-control1"
                          placeholder=""
                          value={apeMat}
                          disabled
                        />
                      </div>
                      <p></p>
                      <div class="col-md-12">
                        <label class="labels">Correo:</label>
                        <p></p>
                        <input
                          type="text"
                          class="form-control1"
                          placeholder=""
                          value={correo}
                          disabled
                        />
                      </div>
                      <p></p>
                      <div class="col-md-12">
                        <label class="labels">Fecha de nacimiento</label>
                        <p></p>
                        <input
                          type="text"
                          class="form-control1"
                          placeholder=""
                          value={fechaNac}
                          disabled
                        />
                      </div>
                      <div class="col-md-12">
                        <label class="labels">Tipo de sangre</label>
                        <p></p>
                        <input
                          type="text"
                          class="form-control1"
                          placeholder=""
                          value={sangre}
                          disabled
                        />
                      </div>
                    </div>
                    {/* <div class="mt-5 text-center">
                      <button
                        class="btn btn-primary profile-button1"
                        type="button"
                      >
                        Save Profile
                      </button>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Perfil;
