import React, { Component, useState } from 'react';
import { Button, Modal, ModalBody } from 'react-bootstrap';
import imagenPerfil from '../../../assets/img/roderick.jpg';
import modalContac from '../../Contact/index';

function TarjetaContacto() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div class="carta col-md-6 col-sm-12 col-xl-4">
        <img src={imagenPerfil} alt="John" />
        <h1>John Doe</h1>
        <p class="titulo">CEO Founder, Example</p>
        <p>Harvard University</p>
        <a href="#">
          <i class="fab fa-twitter"></i>
        </a>
        <a href="#">
          <i class="fab fa-linkedin"></i>
        </a>
        <a href="#">
          <i class="fab fa-facebook"></i>
        </a>
        <p>
          <button className="boton btn btn-primary  mr-1" variant="primary" onClick={handleShow}>
            Contacto
          </button>
        </p>
      </div>
      <Modal size="xl" show={show} onHide={handleClose} scrollable={true}>
        <Modal.Header closeButton>{/* <Modal.Title>Modal heading</Modal.Title> */}</Modal.Header>
        {/* <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
        */}
        <Modal.Body>
          <modalContac />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default TarjetaContacto;
