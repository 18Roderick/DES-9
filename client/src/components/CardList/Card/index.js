import React, { Component } from "react";
import CardImage from "./CardImage/CardImage";
import CardInfo from "./CardInfo/CardInfo";
import InfoButton from "./InfoButton/InfoButton";
// import './../style.css';
import PropTypes from "prop-types";

class Card extends Component {
  constructor(props) {
    super(props);
    const {data: { image, cardData, price }} = props;
    this.state = {
      data: {
        image,
        cardData,
        price,
      },
    };
  }

  render() {
    const {handleOnShow} = this.props;
    const {data: { image, cardData, price }} = this.state;
    return (
      <div
        className="col-md-6 col-sm-12 col-xl-4 p-0 m-0"
        onClick={handleOnShow}
      >
        <div className="tarjeta col-12 ">
          <CardImage image={image} />
          <CardInfo cardData={cardData} />
          <InfoButton price={price} />
        </div>
      </div>
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
