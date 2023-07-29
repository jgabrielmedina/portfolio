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
            
            <span className="icono">{props.tech}</span>
            <a href={props.url} className="icono" target="_blank"><DiGithubBadge /></a>
            <a href={props.demo} target="_blank" className="aButton"><button className="buttonProyect">Ver demo</button></a>
        </div>
    </div>
</div>
   )

}

export default Proyect