import React from 'react';
import {BiLogoGmail} from "react-icons/bi";


const Contact = () => {
    return (
        <div className='contactConteiner'>
            <h1 className='h1contacto'>Contacto</h1>
            <div className='contactDiv'>
            <p className='logoMail'><BiLogoGmail></BiLogoGmail></p>
            <a href="mailto:jogabrielmedina@gmail.com">jogabrielmedina@gmail.com</a>
            </div>
        </div>
    );
}

export default Contact;
