import React from 'react';
import CardImage from './CardImage/CardImage';
import CardInfo from './CardInfo/CardInfo';
import InfoButton from './InfoButton/InfoButton';
// import './../style.css';
import PropTypes from 'prop-types';

const Card = ({ data: { image, cardData, price } }) => (
  <div className="col-md-4 col-sm-12 col-lg-3 col-xl-3 ">
    <div className="tarjeta ">
      <CardImage image={image} />
      <CardInfo cardData={cardData} />
      <InfoButton price={price} />
    </div>
  </div>
);

Card.propTypes = {
  data: PropTypes.shape({
    image: PropTypes.string.isRequired,
    tarjetaData: PropTypes.shape({}),
  }),
};

export default Card;
