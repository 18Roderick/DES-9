import React from 'react';
import PropTypes from 'prop-types';

import img from '../../../assets/img/247112-P3U17S-760.jpg';

const CarItem = () => {
  return (
    <div className="col-md-12">
      <div className="row">
        <div className="col-md-12"></div>
        <div className="col-md-12">
          <div className="carrito-container-item ">
            <div className="row mt-1">
              <div className="col-md-4 col-sm-12">
                <div className="overflow-hidden carrito-image m-auto">
                  <img src={img} alt="Producto" className="image-fluid" />
                </div>
              </div>
              <div className="col-md-7 col-sm-12">
                <div className="row">
                  <div className="col-sm-12">
                    <p className="text-primary justify">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, non. Aperiam
                      odit, exercitationem consequatur ipsam quo voluptatem quam earum quae ex
                      voluptate veniam dignissimos tempora excepturi numquam fuga consectetur error.
                    </p>
                    <div className="text-success font-weight-bold">Disponible</div>
                    <div className="form-group">
                      <p className="m-0">Cantidad</p>
                      <select className="seeds-select-input">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-1 col-sm-12">
                <p className="font-weight-bold text-right">Precio</p>
                <p className="text-danger font-weight-bold text-right">88.96</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

CarItem.propTypes = {
  data: PropTypes.shape({
    img: PropTypes.string.isRequired,
    descripcion: PropTypes.string.isRequired,
    status: PropTypes.bool.isRequired,
    cantidad: PropTypes.number.isRequired,
    precio: PropTypes.number.isRequired,
  }),
};

export default CarItem;
