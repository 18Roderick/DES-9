import React from 'react';
const hero = require ('../../assets/img/GreenLogo-Hero2.png')


const Hero = () =>(

    <div className="site-header" >  
    {/* <img  className="site-header img-responsive" src = {hero}></img>       */}
    <div className="redes-sociales">
          <a href="#" className=""><i className="fab fa-facebook-f"></i></a>
          <a href="#" className=""><i className="fab fa-twitter"></i></a>
          <a href="#" className=""><i className="fab fa-pinterest"></i></a>
          <a href="#" className=""><i className="fab fa-youtube"></i></a>
          <a href="#" className=""><i className="fab fa-instagram"></i></a>
        </div>
  </div>


);

export default Hero;