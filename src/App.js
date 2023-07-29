import React from 'react';
import './App.css';
import Footer from './components/footer';
import Banner from './components/banner';
import AboutMe from './components/aboutMe';
import ListProyect from './components/listProyect';
import "./assets/css/Footer.css"
import "./assets/css/AboutMe.css"
import "./assets/css/listProyect.css"

function App() {
  return (

    <React.Fragment>
      <div className='first'>
      <div className='footer'>
        <Footer />
        
      </div>

      <Banner />
     
      <AboutMe/>
      
      <ListProyect/>
     
      </div>

    </React.Fragment>

  );
}

export default App;
