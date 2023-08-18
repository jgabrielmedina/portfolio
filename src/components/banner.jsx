import React from "react";
import { BiLogoReact, BiLogoHtml5, BiLogoTailwindCss, BiLogoCss3, BiLogoJavascript } from "react-icons/bi";

function Banner() {

    return (
        <React.Fragment>
            <div className="banner" id="banner">
                <div className="bannerImg">
                    <img src="/photoCV.jpeg" alt="foto" />
                </div>
                <br />
                <br />
                <div className="bannerName">
                    <h1>FRONT-END REACT DEVELOPER</h1>
                    <p className="subtitulo">Jose Gabriel Medina</p>

                    

                    <p className="linkCv"><a href="https://drive.google.com/file/d/1rumu_C4QDaf4IS7ya3_me1g2bDU5NJ6O/view" target="_blank" rel="noreferrer" >Curriculum Vitae</a></p>
                    <div className="tech">
                        <p className="textTech">Tech Stack</p>
                        <span className="logoi html">    <BiLogoHtml5 /></span>
                        <span className="logoi css">   <BiLogoCss3 /></span>
                        <span className="logoi js"><BiLogoJavascript /></span>
                        <span className="logoi react">      <BiLogoReact /></span>
                        <span className="logoi tailwindcss">   <BiLogoTailwindCss /></span>
                    </div>

                </div>


            </div>

        </React.Fragment>

    )

}

export default Banner; 