import React, { Component } from 'react';
import CardImage from './CardImage/CardImage';
import CardInfo from './CardInfo/CardInfo';
import InfoButton from './InfoButton/InfoButton';
import Grid from '@material-ui/core/Grid';
// import './../style.css';
import PropTypes from 'prop-types';

class Card extends Component {
  constructor(props) {
    super(props);
    const {
      data: { image, cardData, price },
    } = props;
    this.state = {
      data: {
        image,
        cardData,
        price,
      },
    };
  }

  render() {
    const {
      data: { image, cardData, price },
    } = this.state;
    return (
      <Grid item xs={12} md={4}>
        <div className="tarjeta">
          <CardImage image={image} />
          <CardInfo cardData={cardData} />
          <InfoButton price={price} />
        </div>
      </Grid>
    );
  }
}

Card.propTypes = {
  data: PropTypes.shape({
    image: PropTypes.string.isRequired,
    tarjetaData: PropTypes.shape({}),
  }),
};

export default Card;
