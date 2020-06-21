import React, { Fragment } from 'react';
import Separador from '../Separador/Separador';
import { Form, Button, Col, Row, Container } from 'react-bootstrap';

const DireccionesUsuarios = () => (
  <React.Fragment>
    <Container fluid>
      <Row className="justify-content-md-center">
        <Col sm={12} md={6}>
          <Form className="justify-content-md-center shadow p-4">
          <h3 class="card-title text-center ">Direccion</h3>
            <Separador></Separador>
            <div class="form-group">
              <label for="inputState">Pais o Region</label>
              <select id="inputState" class="form-control">
                <option selected>Panama</option>
                <option>Estados Unidos</option>
                <option>China</option>
                <option>Mexico</option>
                <option>Japon</option>
              </select>
            </div>
            <div class="form-group">
              <label for="NombreCompleto">Nombre Completo</label>
              <input
                type="text"
                class="form-control"
                id="NombreCompleto"
              ></input>
            </div>
            <div class="form-group">
              <label for="Direccion1">Linea de Direccion 1</label>
              <input
                type="text"
                class="form-control"
                id="Direccion1"
                placeholder="Direccion, Apartado Postal, Nombre Empresa"
              ></input>
            </div>
            <div class="form-group">
              <label for="Direccion2">Linea de Direccion 2</label>
              <input
                type="text"
                class="form-control"
                id="Direccion2"
                placeholder="Direccion, Suit, Edificio, Piso"
              ></input>
            </div>
            <div class="form-group">
              <label for="Ciudad">Ciudad</label>
              <input type="text" class="form-control" id="Ciudad"></input>
            </div>
            <div class="form-group">
              <label for="Estado">Estado/ Provincia / Region</label>
              <input type="text" class="form-control" id="Estado"></input>
            </div>
            <div class="form-group">
              <label for="Telefono">Numero de Telefono</label>
              <input type="text" class="form-control" id="Telefono"></input>
            </div>
            <button className="buttom hollow">Agregar</button>
          </Form>
        </Col>
      </Row>
    </Container>
  </React.Fragment>
);

export default DireccionesUsuarios;
