import React, { Component } from 'react';
import Card from './Card/index';
// import './style.css';
import 'rodal/lib/rodal.css';


const datas = [
  {
    id: 1,
    image: 'loli1',
    cardData: {
      name: 'Shinobu',
      type: 'Loli',
      description: 'Mi Loli legal Favorita',
      info: 'Totalmente legal prro',
    },
    price:'300.00'
  },
  {
    id: 2,
    image: 'loli2',
    cardData: {
      name: 'Taiga',
      type: 'Loli',
      description: 'Loli no tan legal',
      info: 'Totalmente legal prro',
    },
    price:'750.00'
  },
  {
    id: 3,
    image: 'loli2',
    cardData: {
      name: 'Yue',
      type: 'Loli',
      description: 'Loli no tan legal',
      info: 'Totalmente legal prro',
    },
    price:'200.00'
  },
  {
    id: 4,
    image: 'loli4',
    cardData: {
      name: 'Shirayuki',
      type: 'Loli',
      description: 'Loli no tan legal',
      info: 'Totalmente legal prro',
    },
    price:'500.00'
  },
];

const arrToComponent = (datas) => datas.map((data) => <Card  key={data.id} data={data} />);

class CardList extends Component {

  constructor(props){
    super(props);
    this.state = { visible: false };
  }

  show() {
    this.setState({ visible: true });
}

hide() {
    this.setState({ visible: false });
}
  render() {
    return (
      <div className='row tarjeta-list'>
        {arrToComponent(datas)}
      </div>
    );
  }
}

export default CardList;
