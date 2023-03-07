import "./css/sidebar.css";
import React from "react";
import { Menu, MenuItem, SubMenu, ProSidebar} from "react-pro-sidebar";
import 'react-pro-sidebar/dist/css/styles.css';
import {FaHandHoldingWater} from "react-icons/fa";
import {FaRegUser} from "react-icons/fa";
import {MdPublic} from "react-icons/md";
import {TfiMedall} from "react-icons/tfi";


const Sidebar = () => {
  return (
    <div>
    <ProSidebar className="sideBar">
        <Menu iconShape="square">
            <MenuItem className="d-flex justify-content-center py-1 logo"> 
                <FaHandHoldingWater className="w-100"/> <br/> BloodBook
            </MenuItem>
            <MenuItem className="d-flex justify-content-center py-12 items"> 
               <FaRegUser className="w-100 h-25"/> <br/>PERFIL 
            </MenuItem>
            <MenuItem className="d-flex justify-content-center py-12 items"> 
              <MdPublic className="w-100 h-25"/> <br/> PUBLICACIONES 
            </MenuItem>
            <MenuItem className="d-flex justify-content-center py-12 items"> 
              <TfiMedall className="w-100 h-25"/> <br/>  LOGROS 
            </MenuItem>
                <SubMenu title="Más opciones" className="bottom">
                <MenuItem>Salir</MenuItem>
                <MenuItem></MenuItem>
            </SubMenu>
            </Menu>
    </ProSidebar>
    </div>
  );
};

export default Sidebar;
