import React, { Fragment } from "react";
import herobanner from "./../../assets/img/GreenLogo-Hero.png";
import NavBarPrueba from "../NavBarPrueba/NavBarPrueba";

function Hero() {
  return (
    <Fragment>
        <div className="site-header">
          <div className="redes-sociales">
            <a href="#" className="">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="">
              <i className="fab fa-pinterest"></i>
            </a>
            <a href="#" className="">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="#" className="">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
          <img className="imagenhero img-fluid" src={herobanner} />
        </div>
    </Fragment>
  );
}

export default Hero;
