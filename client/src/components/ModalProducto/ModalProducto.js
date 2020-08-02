import React from 'react';
import imgproducto from '../../assets/img/ORH82L0.png';
import ReactTooltip from 'react-tooltip';

const ModalProducto = () => (
  <div className="modalProducto">
    <div className="modalImagen">
      <img src={imgproducto} className="" />
    </div>
    <div className="modalInfo">
      <div className="">
        <div className="">
          <div>
            <h1 className="mdTituloProducto">Producto</h1>
          </div>
          <h3 className="">Producto</h3>
        </div>
        <div className="mdDescripcionProducto">
          <h3 className="">Producto</h3>
          <p className="">
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industrys standard dummy text ever since the 1500s, when an unknown printer
            took a galley of type and scrambled it to make a type specimen,
          </p>
        </div>
        <div className="mdCantidadComprar">
          <a href="#" className="agregarCarrito">
            Agregar al carrito
          </a>

          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text">$</span>
              <span class="input-group-text">700.00</span>
            </div>
            <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)" />
          </div>
          <p data-tip data-for="tpPrecio" className="tpAyuda">
            <i class="fas fa-info-circle"></i>
          </p>
          <ReactTooltip id="tpPrecio" className="tpAyudaPrecio">
            <p>Este es el valor base pero puedes optar por aportar una mayor cantidad de dinero.</p>
          </ReactTooltip>
        </div>
      </div>
    </div>
  </div>
);

export default ModalProducto;
