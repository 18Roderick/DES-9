import React, {Component} from 'react'
import SingleGoals from './SingleGoals/SingleGoals'

const datas = [
    {
      id: 1,
      mImagen: "Producto",
      mTitulo: 'Producto',
      mDescripcion:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but',
      Meta:{
        mActual: 0.00,
        mMeta: 350.00,
        }
    },
    {
      id: 2,
      mImagen: "Producto",
      mTitulo: 'Producto',
      mDescripcion:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but',
      Meta:{
        mActual: 500.00,
        mMeta: 800.00,
      }
          
    },
    {
      id: 3,
      mImagen: "Producto",
      mTitulo: 'Producto',
      mDescripcion:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but',
      Meta:{
        mActual: 500.00,
        mMeta: 500.00,
        }
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