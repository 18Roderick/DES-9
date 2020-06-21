import React, { Fragment } from 'react';
import { Form, Button, Col, Row, Container } from 'react-bootstrap';
import Separador from './../Separador/Separador';
const logonombre = require('../../assets/img/separador.png');

const Contact = () => (
  <React.Fragment>
    <Container>
      <Row>
        <Col sm={12} md={12}>
          <Form className="justify-content-md-center shadow p-4">
            <h3 class="card-title text-center ">Contacto</h3>
            <Separador></Separador>
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
              <Form.Label>Telefono</Form.Label>
              <Form.Control placeholder="Telefono" />
            </Form.Group>

            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control placeholder="Email" />
            </Form.Group>
            <div class="form-group">
              <label for="Contacto">Mensaje</label>
              <textarea class="form-control" id="Contacto" rows="3"></textarea>
            </div>
            <button className="buttom hollow">Enviar</button>
          </Form>
        </Col>
      </Row>
    </Container>
  </React.Fragment>
);
export default Contact;