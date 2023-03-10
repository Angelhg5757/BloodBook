import React from "react";
import Sidebar from "./Sidebar";
import "./css/perfil.css";
import { MdBloodtype } from "react-icons/md";
import { SlBadge } from "react-icons/sl";
const Perfil = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-3">
            <Sidebar />
          </div>
          <div className="col-6">
            <div className="card">
              <MdBloodtype className="w-100 h-100" />
            </div>
          </div>
          </div>
        </div>
    </div>
  );
};

export default Perfil;
