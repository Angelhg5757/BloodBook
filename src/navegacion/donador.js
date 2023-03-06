import "./css/inicio.css";
import Layout from "./Layout";
import Footer from "./footer";
import React, { useState } from "react";
import imagenes from "../assets/imagenes";
import Carousel from "react-bootstrap/Carousel";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AddToQueueIcon from "@mui/icons-material/AddToQueue";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import RepeatIcon from "@mui/icons-material/Repeat";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { FaHighlighter } from "react-icons/fa";
import { FaSlideshare } from "react-icons/fa";
import { BsAlarm } from "react-icons/bs";
import { IoMdRepeat } from "react-icons/io";
function UncontrolledExample() {
  return (
    <>
      <Layout />
      <Carousel.Item>
        <img
          className="d-block w-100"
          height="600px"
          src={imagenes.imgCarousel2}
          alt="Third slide"
        />
      </Carousel.Item>
      {/* Comienza proceso de donación */}
      <Typography variant="h3" className="text-center py-5">
        Perfil
      </Typography>
      <div className="container">
        <img
          src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png"
          width={100}
          height={100}
        />
        <h4>Nombre completo: </h4>
        <div className="card">
          <h5>Ángel Hernández</h5>
        </div>
        <h4>Sexo: </h4>
        <div className="card">
          <h5>Masculino</h5>
        </div>
        <h4>Fecha de nacimiento: </h4>
        <div className="input-box">
          <input type="date" required />
        </div>
        <div className="card">
          <h5>Correo Electronico</h5>
        </div>
        <input type="email" placeholder="Angel@ejemplo.com" required />
        <div className="card">
          <h5>Ángel Hernández</h5>
        </div>
        <h4>Nombre completo: </h4>
        <div className="card">
          <h5>Ángel Hernández</h5>
        </div>
      </div>
    </>
  );
}

export default UncontrolledExample;
