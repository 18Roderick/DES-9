import React from 'react';
import CardImage from './CardImage/CardImage';
import CardInfo from './CardInfo/CardInfo';
import InfoButton from './InfoButton/InfoButton'
// import './../style.css';
import PropTypes from 'prop-types';

const Card = ({data:{image, cardData, price}})=>(
  
    <div className='col-md-6 col-sm-12 col-xl-4 '>
     <div className="tarjeta ">
        <CardImage image = {image} />
        <CardInfo cardData = {cardData} />
        <InfoButton price = {price}/>
      </div>
    </div>
   


);

Card.propTypes = {

  data:PropTypes.shape({
    image:PropTypes.string.isRequired,
    tarjetaData:PropTypes.shape({
      
    }),

  }),

};

export default Card;
