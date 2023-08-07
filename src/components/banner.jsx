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
                </div>
            </div>
        </React.Fragment>

    )

}

export default Banner; 