import React from "react";
import {DiGithubBadge} from "react-icons/di"
import {DiNodejs} from "react-icons/di";

function ListProyect() {

    return (

        <React.Fragment>
            <div className="listProyect">
                <h1 className="aboutme">PROYECTOS</h1>

                <div className="proyect">
                    <div className="imagenProyecto"> <img src="/PHOTO-2023-06-29-12-23-09.jpg" alt="" /></div>
                    <div className="descripcionProyecto"> 
                    <p className="subtitulo"> "Hello!"  </p>
                    <p className="pDescription"> E-commerce realizado en conjunto con un equipo durante la cursada de DigitalHouse</p>
                    <div className="techStack">
                    <a href="https://github.com/sabriw88/grupo_6_panaderiaHello" className="icono" target="_blank"><DiGithubBadge/></a>
                    <span className="icono"><DiNodejs/></span>
                    </div>
                    
                    </div>
                </div>

               
            </div>
        </React.Fragment>
        
    )

}

export default ListProyect; 