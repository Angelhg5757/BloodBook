import "./css/sidebar.css";
import React from "react";
import { Menu, MenuItem, SubMenu, ProSidebar } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { FaHandHoldingWater } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { MdPublic } from "react-icons/md";
import { TfiMedall } from "react-icons/tfi";

const Sidebar = () => {
  return (
    <div>
      <ProSidebar className="sideBar">
        <Menu iconShape="square">
          <MenuItem
            className="d-flex justify-content-center py-1 logo"
            href="/inicio"
          >
            <FaHandHoldingWater className="w-100" /> <br /> BloodBook
          </MenuItem>
          <MenuItem
            className="d-flex justify-content-center py-12 items"
            href="/donador"
          >
            <FaRegUser className="w-100 h-25" /> <br />
            PERFIL
          </MenuItem>
          <MenuItem
            className="d-flex justify-content-center py-12 items"
            href="/publicaciones"
          >
            <MdPublic className="w-100 h-25" /> <br /> PUBLICACIONES
          </MenuItem>
          <MenuItem
            className="d-flex justify-content-center py-12 items"
            href="/*"
          >
            <TfiMedall className="w-100 h-25" /> <br /> LOGROS
          </MenuItem>
        </Menu>
      </ProSidebar>
    </div>
  );
};

export default Sidebar;
