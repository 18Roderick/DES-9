import React from 'react';
import { Form, Col } from 'react-bootstrap';
const logonombre = require('./../../../assets/img/LogoNombre.png');

const RecuperarConstrasena = () => (
  <React.Fragment>
    <div style={{ width: `50%`, height: `40%`, display: `flex` }}>
      <Col sm={12} md={12}>
        <Form className="justify-content-md-center shadow p-4">
          <div className="recuperarContrasena-formulario">
            <img src={logonombre} alt="logo" />
          </div>
          <Form.Group>
            <Form.Label>Nueva Contraseña</Form.Label>
            <Form.Control placeholder="Email" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Repetir Contraseña</Form.Label>
            <Form.Control placeholder="Contraseña" />
          </Form.Group>
          <button className="buttom hollow">Guardar</button>
        </Form>
      </Col>
    </div>
  </React.Fragment>
);

export default RecuperarConstrasena;
