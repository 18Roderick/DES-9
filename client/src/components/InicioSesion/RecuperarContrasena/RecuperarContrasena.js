import React from 'react';
import { Form, Col, Row, Container } from 'react-bootstrap';
const logonombre = require('./../../../assets/img/LogoNombre.png');

const RecuperarConstrasena = () => (
  <React.Fragment>
    <Container fluid>
      <Row className="justify-content-md-center">
        <Col sm={12} md={6}>
          <Form className="justify-content-md-center shadow p-5">
            <div className="recuperarContrasena-formulario">
              <img src={logonombre} />
            </div>
            <Form.Group>
              <Form.Label>Nueva Contrasena</Form.Label>
              <Form.Control placeholder="******" />
            </Form.Group>

            <Form.Group>
              <Form.Label>Repetir Contrasena</Form.Label>
              <Form.Control placeholder="******" />
            </Form.Group>

            <button className="buttom hollow">Guardar</button>
          </Form>
        </Col>
      </Row>
    </Container>
  </React.Fragment>
);

export default RecuperarConstrasena;
