import React from 'react';
import PropTypes from 'prop-types';

import img from '../../../assets/img/247112-P3U17S-760.jpg';

const CarItem = () => {
  return (
    <div className="carrito-container-item shadow m-3">
      <div className="row mt-1">
        <div className="cold-md-4 ">
          <div className="overflow-hidden carrito-image">
            <img src={img} alt="Producto" className="image-fluid" />
          </div>
        </div>
        <div className="col-md-8"></div>
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
