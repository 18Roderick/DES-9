import React, { Fragment } from 'react';
import { Form, Button, Col, Row, Container } from 'react-bootstrap';
const logonombre = require('./../../../assets/img/LogoNombre.png');

const Registro = () => (
  <React.Fragment>
    <Container>
      <Row>
        <Col sm={12} md={12}>
          <Form className="justify-content-md-center shadow p-4">
            <div className="recuperarContrasena-formulario">
              <img src={logonombre} />
            </div>
            <Form.Row>
              <Form.Group as={Col}>
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="Nombre" placeholder="Nombre" />
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>Apellido</Form.Label>
                <Form.Control type="Apellido" placeholder="Apellido" />
              </Form.Group>
            </Form.Row>

            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control placeholder="Email" />
            </Form.Group>

            <Form.Group>
              <Form.Label>Contrasena</Form.Label>
              <Form.Control placeholder="Contrasena" />
            </Form.Group>

            <Form.Group>
              <Form.Label>Repetir Contrasena</Form.Label>
              <Form.Control placeholder="Repetir Contrasena" />
            </Form.Group>
            <button className="buttom hollow">Registrar</button>
          </Form>
        </Col>
      </Row>
    </Container>
  </React.Fragment>
);

export default Registro;
