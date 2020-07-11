import React, { Component, useState } from 'react';
import { Button, Modal, ModalBody } from 'react-bootstrap';
import PropTypes from 'prop-types';
import ModalPrueba from '../../../ModalProducto/ModalProducto';

function InfoButton({ price }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="info adopt-terms">
        {/* <button className="boton btn btn-primary  mr-1">
          Ver producto
      </button> */}

        <Button className="boton btn btn-primary  mr-1" variant="primary" onClick={handleShow}>
          Ver producto
      </Button>

        <div className="price">
          <i className="fas fa-dollar-sign"></i>
          <h1>{price}</h1>
        </div>
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
          <ModalPrueba />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default InfoButton;