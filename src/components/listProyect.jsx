import React from "react";
import Proyect from "./Proyects";
import { DiNodejs } from "react-icons/di";
import { BiLogoReact } from "react-icons/bi";
import { BiLogoTailwindCss } from "react-icons/bi";

function ListProyect() {

    return (
            
            <div className="listProyect" id="proyects">

                <h1 className="aboutme">PROYECTOS</h1>

             
                <Proyect
                    name= "Papa Noel App"
                    description = "la aplicacion que Papa Noel va a usar estas Navidades."
                    url = "https://github.com/jgabrielmedina/PapaNoel-App"
                    img = "photoGift.png"
                    tech1 = {<BiLogoReact></BiLogoReact>}
                    tech2 = {<BiLogoTailwindCss/>}
                    demo = "https://papa-noel-app.vercel.app/"
                />
                <Proyect
                    name= "Weather App"
                    description = "Mediante el consumo de 3 diferentes APIs se realizo una app que te brinda el reporte del clima segun el pais y la ciudad seleccionada."
                    url = "https://github.com/jgabrielmedina/weatherApp"
                    img = "weatherApp.png"
                    tech1 = {<BiLogoReact></BiLogoReact>}
                    demo = "https://weather-app-self-omega.vercel.app/"
                />
                <Proyect
                    name= "To Do List"
                    description = "Lista de tareas creada con Redux Toolkit, me enfoque en el diseño limpio y minimalista, facil de usar, rapido e intuitivo."
                    url = "https://github.com/jgabrielmedina/ToDoList"
                    img = "toDoList.png"
                    tech1 = {<BiLogoReact></BiLogoReact>}
                    demo = "https://to-do-list-drab-pi.vercel.app/"
                />
           {/*      <Proyect
                    name= "Hello!"
                    description = " E-commerce realizado en conjunto con un equipo durante la cursada de DigitalHouse"
                    url = "https://github.com/sabriw88/grupo_6_panaderiaHello"
                    img = "/PHOTO-2023-06-29-12-23-09.jpg"
                    tech1 = "Node JS, Express"
                />
               */}

               
            </div>
        
    )

}

export default ListProyect; 