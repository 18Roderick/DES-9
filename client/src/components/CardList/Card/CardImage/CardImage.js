import React from 'react';
// import './../../style.css';
import PropTypes from 'prop-types';
const hat = require('../../../../assets/img/ORH82L0.jpg');

const CardImage = ({ img }) => (
  <div className="background">
    <img src={hat} alt="Images" className="petImage" />
  </div>
);

CardImage.propTypes = {
  img: PropTypes.string,
};

export default CardImage;
