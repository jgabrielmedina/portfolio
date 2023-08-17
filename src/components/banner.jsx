import React from "react";


function Banner() {

    return (
        <React.Fragment>
            <div className="banner" id="banner">
            <div className="bannerImg">
                    <img src="/photoCV.jpeg" alt="foto"/>
                </div>
                <br />
                <br />
                <div className="bannerName">
                <h1>FRONT-END REACT DEVELOPER</h1>
                <p className="subtitulo">Jose Gabriel Medina</p>
                <p className="linkCv"><a href="https://drive.google.com/file/d/1rumu_C4QDaf4IS7ya3_me1g2bDU5NJ6O/view" target="_blank"  rel="noreferrer" >Curriculum Vitae</a></p>
                </div>
          

            </div>
        </React.Fragment>

    )

}

export default Banner; 