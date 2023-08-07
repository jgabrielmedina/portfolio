import React from "react";

import { SlEnvolope } from "react-icons/sl";
import { SlSocialLinkedin } from "react-icons/sl";



function FooterLeft() {

    return (
        <navbar className='footerLeft' id="header" >
             <a href="#banner" className="aBanner"><h3 className="envolope logo">J</h3></a>
            <a href="https://www.linkedin.com/in/jose-medina-51700a20b/" target="_blank">       <h3 className="linkedin"><SlSocialLinkedin /></h3></a>

        </navbar>
    )

}

export default FooterLeft; 