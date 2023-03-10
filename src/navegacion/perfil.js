import React from "react";
import Sidebar from "./Sidebar";
import "./css/perfil.css";
import { MdBloodtype } from "react-icons/md";
import { BiHappyBeaming } from "react-icons/bi";

const Perfil = () => {
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
                      src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
                    />
                    <span class="font-weight-bold">Ángel</span>
                    <span class="text-black-50">angel@gmail.com</span>
                    <span> </span>
                  </div>
                </div>
                <div class="col-md-5 border-right">
                  <div class="p-3 py-5">
                    <div class="d-flex justify-content-between align-items-center mb-3">
                      <h4 class="text-right"> LOODBOOK</h4>
                    </div>
                    <div class="row mt-2">
                      <div class="col-md-6">
                        <label class="labels">Nombre:</label>
                        <input
                          type="text"
                          class="form-control1"
                          placeholder="Ángel"
                          value=""
                        />
                      </div>
                      <p></p>
                      <div class="col-md-6">
                        <label class="labels">Apellido Paterno:</label>
                        <input
                          type="text"
                          class="form-control1"
                          value=""
                          placeholder="Hernández"
                        />
                      </div>
                    </div>
                    <p></p>
                    <div class="row mt-3">
                      <div class="col-md-12">
                        <label class="labels">Apellido Materno:</label>
                        <input
                          type="text"
                          class="form-control1"
                          placeholder="Gómez"
                          value=""
                        />
                      </div>
                      <p></p>
                      <div class="col-md-12">
                        <label class="labels">Correo:</label>
                        <p></p>
                        <input
                          type="text"
                          class="form-control1"
                          placeholder="angel@gmail.com"
                          value=""
                        />
                      </div>
                      <p></p>
                      <div class="col-md-12">
                        <label class="labels"> Contraseña:</label>
                        <p></p>
                        <input
                          type="text"
                          class="form-control1"
                          placeholder="******"
                          value=""
                        />
                      </div>
                      <p></p>
                      <div class="col-md-12">
                        <label class="labels">Fecha de nacimiento</label>
                        <p></p>
                        <input
                          type="text"
                          class="form-control1"
                          placeholder="dd/mm/aaaa"
                          value=""
                        />
                      </div>
                      <div class="col-md-12">
                        <label class="labels">Tipo de sangre</label>
                        <p></p>
                        <input
                          type="text"
                          class="form-control1"
                          placeholder="A+"
                          value=""
                        />
                      </div>
                    </div>
                    <div class="mt-5 text-center">
                      <button
                        class="btn btn-primary profile-button1"
                        type="button"
                      >
                        Save Profile
                      </button>
                    </div>
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
