import React from 'react';
// import './../../style.css';
import PropTypes from 'prop-types';
const hat = require ('../../../../assets/img/loli.png');

const CardImage = ({img})=>(
    <div  className="background">       
        <img src={hat} alt="Images" className = 'petImage'/>
    </div>
    
);

CardImage.propTypes = {

    img:PropTypes.string,

};

export default CardImage;
