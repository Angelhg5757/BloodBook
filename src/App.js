import './App.css';
import {Routes, Route} from 'react-router-dom';
// import footer from './navegacion/footer';
import Inicio from './navegacion/Inicio';
import Donador from './navegacion/donador';
//import Trabajos from './navegacion/trabajos';
import Login from './navegacion/login';
import Registro from './navegacion/registro';
import Acerca from './navegacion/acerca';
import Dashboard from './navegacion/Dashboard/Dashboard';
// import Tienda from './navegacion/tienda';
import Usuarios from './navegacion/Dashboard/usuarios';
import Layout from './navegacion/Layout';
import RutaNoEncontrada from './navegacion/RutaNoEncontrada';
import UsuarioDetalle from './navegacion/UsuarioDetalle';
import Update from './navegacion/Dashboard/update';
import UpdateUsuarios from './navegacion/Dashboard/updateUsuarios';
import  Sidebar  from './navegacion/Sidebar'; 
import Publicaciones from './navegacion/Publicaciones';

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />} />
          <Route index element={<Inicio />} />
          <Route path='/inicio' element={<Inicio />} />
          <Route path='/acerca' element={<Acerca />} />
          <Route path='/donador' element={<Donador />} />
         
          {/* <Route path='/trabajos' element={<Trabajos />} /> */}
          <Route path='/login' element={<Login />} />
          <Route path='/registro' element={<Registro />} />
          <Route path='/admin' element={<Dashboard />} />
          <Route path='/user' element={<Inicio />} />
          {/* <Route path='/tienda' element={<Tienda />} /> */}
          <Route path='/CRUDUsuarios' element={<Usuarios />} />
          <Route path='/update' element={<Update />} />
          <Route path='/updateUser' element={<UpdateUsuarios />} />
          <Route path='/usuario/:usuarioId' element={<UsuarioDetalle />} />
          <Route path='*' element={<RutaNoEncontrada />} />
          <Route path='/publicaciones' element={<Publicaciones/>} />
      </Routes>
    </>
  );
}

export default App;
