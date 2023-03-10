import React from "react";
import Sidebar from "./Sidebar";
import "./css/perfil.css";
import { MdBloodtype } from "react-icons/md";
import {BiHappyBeaming} from "react-icons/bi";

const Perfil = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-3">
          <Sidebar />
            </div>
            <div className="col-9">
              <div className="card">
                <MdBloodtype className="w-100 h-100" />
              </div>
              <div className="card">
                <BiHappyBeaming className="w-100 h-100" />
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Perfil;
