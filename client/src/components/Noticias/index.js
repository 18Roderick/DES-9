import React, { Fragment } from 'react';
import { Container, Carousel } from 'react-bootstrap';
import Banner from '../../assets/img/Login.jpg';
import Banner1 from '../../assets/img/12737.jpg';
import Banner2 from '../../assets/img/333.jpg';
//const logonombre = require('./../../../assets/img/LogoNombre.png');

const Noticias = () => (
    <Carousel className = 'caruselPersolizado '>
      <Carousel.Item >
        <img className="d-block w-100 img-fluid" src={Banner} alt="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 img-fluid " src={Banner1} alt="Second slide" />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 img-fluid" src={Banner2} alt="Third slide" />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
);

export default Noticias;
