import React from "react";
import Proyect from "./Proyects";
import { DiNodejs } from "react-icons/di";
import { BiLogoReact } from "react-icons/bi";

function ListProyect() {

    return (
            
            <div className="listProyect" id="proyects">

                <h1 className="aboutme">PROYECTOS</h1>

             

                <Proyect
                    name= "Hello!"
                    description = " E-commerce realizado en conjunto con un equipo durante la cursada de DigitalHouse"
                    url = "https://github.com/sabriw88/grupo_6_panaderiaHello"
                    img = "/PHOTO-2023-06-29-12-23-09.jpg"
                    tech = {<DiNodejs></DiNodejs>}
                />
                <Proyect
                    name= "To Do List"
                    description = "Lista de tareas creada con Redux Toolkit, me enfoque en el diseño limpio y minimalista, facil de usar, rapido e intuitivo."
                    url = "https://github.com/jgabrielmedina/ToDoList"
                    img = "toDoList.png"
                    tech = {<BiLogoReact></BiLogoReact>}
                    demo = "https://to-do-list-drab-pi.vercel.app/"
                />

               
            </div>
        
    )

}

export default ListProyect; 