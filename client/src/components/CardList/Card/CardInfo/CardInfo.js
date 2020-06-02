import React from 'react';
// import './../../style.css';
import PropTypes from 'prop-types';
import { utils } from './../../../../utils/Helpers';

const CardInfo = ({ cardData: { name, type, description, info } }) => (
  <div className="info">
    <div className="name">
      <div>
        <h1 className="big">{name}</h1>
      </div>
      <h3 className="small">{type}</h3>
    </div>
    <div className="description">
      <h3 className="title">{description}</h3>
      <p className="text">
        {`${utils.truncateText(info, 55)}`}
        <a href="#" className="leermas">
          Leer mas...
        </a>
      </p>
    </div>
  </div>
);
CardInfo.propTypes = {
  cardData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    info: PropTypes.string.isRequired,
  }),
};

export default CardInfo;
