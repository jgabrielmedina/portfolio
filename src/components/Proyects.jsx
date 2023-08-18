import { DiGithubBadge } from "react-icons/di"
import { DiNodejs } from "react-icons/di";

function Proyect(props) {
   return (
    <div className="proyect">
    <div className="imagenProyecto"> <img src={props.img} alt="foto" /></div>
    <div className="descripcionProyecto">
        <p className="subtitulo"> {props.name} </p>
        <p className="pDescription">{props.description}</p>
        <div className="techStack">
            <p className="iconoProyect"> <span>Tech:</span> {props.tech1}{props.tech2} </p>
            <div className="conteinerButton">
            <a href={props.demo} target="_blank" className="aButton"><button className="buttonProyect">Ver demo</button></a>
           <a href={props.url} className="git" target="_blank"><DiGithubBadge /></a>   
        </div>
        </div>
    </div>
</div>
   )

}

export default Proyect