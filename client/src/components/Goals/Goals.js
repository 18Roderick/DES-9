import React, {Component} from 'react'
import SingleGoals from './SingleGoals/SingleGoals'

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
  ];

const arrToComponent = (datas) => datas.map((data) => <SingleGoals key={data.id} data={data}/>);

class Goals extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className="row metasContenedor ">{arrToComponent(datas)}</div>;
  }
}



export default Goals ;