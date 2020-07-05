import React from 'react';
import PropTypes from 'prop-types';
// import './../../style.css';

const InfoButton = ({ price }) => (
  <div className="info adopt-terms">
    <a href="#" className="adopt">
      Ver producto
    </a>
    <div className="price">
      <i className="fas fa-dollar-sign"></i>
      <h1>{price}</h1>
    </div>
  </div>
);

export default InfoButton;
