import React from 'react';
import Sidebar from './Sidebar';
import "./css/perfil.css";
const Perfil = () => {
    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-3">
                        <Sidebar/>
                        
                    </div>
                    
                </div>
            </div>

        </div>
    );
};

export default Perfil;