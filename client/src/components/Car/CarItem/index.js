import React from 'react';
import PropTypes from 'prop-types';

import img from '../../../assets/img/27085.jpg';

const CarItem = () => {
  return (
    <div className="carrito-container-item">
      <div className="carrito-image">
        <img src={img} alt="test"></img>
      </div>

      <div className="carrito-detalles">
        <div>
          <p>
            Occaecat tempor ipsum occaecat reprehenderit ad reprehenderit. Enim magna occaecat
            occaecat enim reprehenderit tempor eiusmod est in exercitation cupidatat aute. In et
            officia proident culpa qui laboris consequat deserunt. Anim ipsum duis ad quis ad tempor
            officia officia dolor irure proident. Fugiat pariatur ut commodo nisi esse labore sit
            qui dolore occaecat consequat Lorem est officia. Velit nostrud eu id magna dolore.
            Tempor nisi fugiat nostrud non ea officia qui consectetur.
          </p>
        </div>

        <div>
          <p>Disponible</p>
        </div>
        <div>
          <select name="" id="">
            <option value="">4</option>
            <option value="">4</option>
            <option value="">4</option>
            <option value="">4</option>
          </select>
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
