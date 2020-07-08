import React, { Component } from "react";
import Card from "./Card/index";
// import './style.css';
import 'rodal/lib/rodal.css';

const datas = [
  {
    id: 1,
    image: "Producto",
    cardData: {
      name: 'Producto',
      type: 'Producto',
      description: 'Producto',
      info:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
    },
    price: '300.00',
  },
  {
    id: 2,
    image: "loli2",
    cardData: {
      name: 'Producto',
      type: 'Producto',
      description: 'Producto',
      info:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
    },
    price: '750.00',
  },
  {
    id: 3,
    image: "loli2",
    cardData: {
      name: 'Producto',
      type: 'Producto',
      description: 'Producto',
      info:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
    },
    price: '200.00',
  },
  {
    id: 4,
    image: "loli4",
    cardData: {
      name: 'Producto',
      type: 'Producto',
      description: 'Producto',
      info:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
    },
    price: '500.00',
  },
  {
    id: 5,
    image: "loli4",
    cardData: {
      name: 'Producto',
      type: 'Producto',
      description: 'Producto',
      info:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
    },
    price: '500.00',
  },
];

const arrToComponent = (datas) => datas.map((data) => <Card key={data.id} data={data} />);

class CardList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  show() {
    this.setState({ visible: true });
  }

  hide() {
    this.setState({ visible: false });
  }
  render() {
    return <div className="row tarjeta-list ">{arrToComponent(datas)}</div>;
  }
}

export default CardList;
