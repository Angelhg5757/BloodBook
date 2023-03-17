//import axios from 'axios';
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import UsuarioServicio from "../servicios/UsuarioServicios";
import { ROLES } from "../utils/Constantes";
import { encryptStorage } from "../utils/Storage";

import Layout from "./Layout";
import Styles from "./css/registro.css";
import { RadioGroup } from "@mui/material";
import { FormControlLabel } from "@mui/material";
import { Radio } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import swal from "sweetalert";

const Registro = () => {
  let navigate = useNavigate();
  const [nombre, setNombre] = useState();
  const [apePat, setApepat] = useState();
  const [apeMat, setApemat] = useState();
  const [correo, setCorreo] = useState();
  const [password, setPassword] = useState();
  const [fecha, setFecha] = useState();
  const [idRol, setRol] = useState();
  const [idSangre, setSangre] = useState();
  const [sexo, setSexo] = useState();

  let register = async (e) => {
    const regex = /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/;
    
    e.preventDefault();
    if (!regex.test(password)) {
      swal({
        title: "Contraseña invalida",
        text: "La contraseña debe tener entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula, al menos una mayúscula y un caracter especial.",
        icon: "warning",
        button: "Aceptar",
      });
      return;
    }
    try {
      let res = await fetch("http://localhost:4000/usuario/crear", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "content-type": "application/json",
        },
        body: JSON.stringify({
          nombre: nombre,
          apePat: apePat,
          apeMat: apeMat,
          correo: correo,
          password: password,
          fechaNac: fecha,
          idRoles: idRol,
          idSangre: idSangre,
          sexo: sexo,
        }),
      });
      swal({
        title: "Usuario registrado con éxito!",
        text: "Hola " + nombre + ", ya puedes iniciar sesión!",
        icon: "success",
        button: "Aceptar",
      });
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Layout />

      <div className="bod">
        <div className="container2">
          <div className="title4">Registrarse</div>
          <div className="content2">
            <form method="POST" onSubmit={register}>
              <div className="user-details">
                <div className="input-box">
                  <span className="details">Nombre</span>
                  <input type="text" required onChange={e => setNombre(e.target.value)}/>
                </div>
                <div className="input-box">
                  <span className="details">Apellido Paterno</span>
                  <input type="text" required onChange={e => setApepat(e.target.value)}/>
                </div>
                <div className="input-box">
                  <span className="details">Apellido Materno</span>
                  <input type="text" required onChange={e => setApemat(e.target.value)}/>
                </div>
                <div className="input-box">
                  <span className="details">Email</span>
                  <input type="email" placeholder="@ejemplo.com" required onChange={e => setCorreo(e.target.value)}/>
                </div>
                <div className="input-box">
                  <span className="details">Contraseña</span>
                  <input type="password" required onChange={e => setPassword(e.target.value)}/>
                </div>
                <div className="input-box">
                  <span className="details">Fecha de nacimiento</span>
                  <input type="date" required onChange={e => setFecha(e.target.value)}/>
                </div>
                <div className="input-box">
                  <span className="details">Tipo Sanguíneo</span>

                  <select name="sangre" id="sangre" onChange={e => setSangre(e.target.value)}>
                    <option selected="true" disabled="disabled">Seleccione</option>
                    <option value="1">A+</option>
                    <option value="2">A-</option>
                    <option value="3">B+</option>
                    <option value="4">B-</option>
                    <option value="5">AB+</option>
                    <option value="6">AB-</option>
                    <option value="7">O+</option>
                    <option value="8">O-</option>
                  </select>
                </div>
                <div className="input-box">
                  <span className="details">¿Qué quieres ser?</span>

                  <select name="rol" id="rol" onChange={e => setRol(e.target.value)}>
                    <option selected="true" disabled="disabled">Seleccione</option>
                    <option value="1">Donador</option>
                    <option value="2">Paciente</option>
                  </select>
                </div>

              </div>

              <div className="input-box">
                <span className="details">Género</span>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                  onChange={e => setSexo(e.target.value)}
                >
                  <FormControlLabel
                    value="F"
                    control={<Radio />}
                    label="Femenino"
                  />
                  <FormControlLabel
                    value="M"
                    control={<Radio />}
                    label="Masculino"
                  />
                  <FormControlLabel
                    value="O"
                    control={<Radio />}
                    label="Otro"
                  />
                </RadioGroup>
              </div>
              <FormControlLabel
                control={<Checkbox />}
                label="Acepto los términos y condiciones."
                required
              />

              <div className="button2">
                <input className="buttons2" type="submit" value="Crear" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registro;

// {/* <div className="contenedor2">
//         <h1 className="title-1">Registrarse</h1>
//         <div className="content1">
//           <form method="POST" onSubmit={register} className="form2">
//             {/* <TextField
//                   id="standard-basic"
//                   label="Correo Electronico"
//                   variant="standard"
//                   InputLabelProps={{
//                     style: { color: "#fff" },
//                   }}
//                   sx={{
//                     input: {
//                       color: "#fff",
//                       borderColor: "text.primary",
//                     },
//                   }}
//                 /> */}
//             <input
//               type="text"
//               name="nombre"
//               placeholder="Nombre"
//               className="controls2"
//             />

//             <input
//               type="text"
//               name="apellido"
//               placeholder="Apellido"
//               className="controls2"
//             />

//             <input
//               type="email"
//               name="email"
//               placeholder="Correo Electrónico"
//               className="controls2"
//               onChange={(e) => setCorreo(e.target.value)}
//             />

//             <input
//               type="password"
//               name="password"
//               placeholder="Contraseña"
//               className="controls2"
//               onChange={(e) => setPassword(e.target.value)}
//             />

//             <FormLabel id="demo-row-radio-buttons-group-label">
//               Género
//             </FormLabel>
//             <RadioGroup
//               row
//               aria-labelledby="demo-row-radio-buttons-group-label"
//               name="row-radio-buttons-group"
//             >
//               <FormControlLabel
//                 value="femenino"
//                 control={<Radio />}
//                 label="Femenino"
//               />
//               <FormControlLabel
//                 value="masculino"
//                 control={<Radio />}
//                 label="Masculino"
//               />
//               <FormControlLabel value="otro" control={<Radio />} label="Otro" />
//             </RadioGroup>

//             <FormLabel id="demo-row-radio-buttons-group-label">
//               Tipo de Sangre
//             </FormLabel>

//             <select name="sangre" id="sangre">
//               <option value="A+">A+</option>
//               <option value="A-">A-</option>
//               <option value="B+">B+</option>
//               <option value="B-">B-</option>
//               <option value="AB+">AB+</option>
//               <option value="AB-">AB-</option>
//               <option value="O+">O+</option>
//               <option value="O-">O-</option>
//             </select>
//             <div className="boto">
//               <input className="buttons2" type="submit" value="Crear" />
//               <Link to="/login">
//                 <button className="buttons3">Cancelar</button>
//               </Link>
//             </div>
//           </form>
//         </div>
//       </div> */}
