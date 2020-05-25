import React from 'react';
import PropTypes from 'prop-types';
// import './../../style.css';


const InfoButton = ({price})=>(
    <div className ="info adopt-terms">
    <a href="#" className ="adopt">
      Ver producto
    </a>
    <div class="price">
                      <i class="fas fa-dollar-sign"></i>
                      <h1>{price}</h1>
                  </div>
  </div>

)


export default InfoButton;