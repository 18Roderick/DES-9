import React, { Fragment } from 'react';
import { Form, Button, Col, Row, Container } from 'react-bootstrap';
const logonombre = require('./../../../assets/img/LogoNombre.png');

const RecuperarConstrasena = () => (
  <React.Fragment>
    <Container>
      <Row>
        <Col sm={12} md={12}>
          <Form className="justify-content-md-center shadow p-4">
          <div className="recuperarContrasena-formulario">
              <img src={logonombre} />
            </div>
            <Form.Group>
              <Form.Label>Nueva Contrasena</Form.Label>
              <Form.Control placeholder="Email" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Repetir Contrasena</Form.Label>
              <Form.Control placeholder="Contrasena" />
            </Form.Group>
            <button className="buttom hollow">Guardar</button>
          </Form>
        </Col>
      </Row>
    </Container>
  </React.Fragment>
);

export default RecuperarConstrasena;
