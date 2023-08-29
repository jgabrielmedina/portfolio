import React from 'react';
import './App.css';
import Footer from './components/footer';
import Banner from './components/banner';
import AboutMe from './components/aboutMe';
import ListProyect from './components/listProyect';
import Contact from './components/contact';

import "./assets/css/Footer.css"
import "./assets/css/AboutMe.css"
import "./assets/css/listProyect.css"
import "./assets/css/contact.css"

function App() {
  return (

    <React.Fragment>
      <div className='first'>
      <div className='footer' id='footer'>
        <Footer />
        
      </div>

      <Banner />
     
      <AboutMe/> 
      
     <ListProyect/>
  
     

      <Contact/>
      </div>

    

    </React.Fragment>

  );
}

export default App;
