import React from 'react';
import GoalBar from './GoalBar/GoalBar';
import sello from '../../../assets/img/GreenLogo-Hero2.png';
import FondoMeta from '../../../assets/img/FondoMetas.jpg';

const SingleGoals = ({ data: { mImagen, mTitulo, mDescripcion, Meta } }) => {

  var styles = {
    'background-image':'url()',
  }
  return (
    <div className=" col-md-6 col-sm-12 col-xl-4 contenedorMetas">     
    
        <div className=" singleGoals">
        {/* <img src={FondoMeta} className='fondoMeta'/>    */}
          <div className="sgContenedor">
            <div className="metaTituloSello">
              <h2 className="metasTitulo">{mTitulo}</h2>
              <div className=" sMeta sellosRecompensas">
                <img src={sello} />
              </div>
            </div>

            <p className="metasDescripcion">{mDescripcion}</p>
          </div>

          <div className="sgBarraProgreso">
            {/* <h4>Progreso</h4> */}
            <div className="barraMeta">
              <GoalBar Meta={Meta} />
            </div>

            <button className="boton btnMetas btn btn-primary">Ver Meta</button>
          </div>
        </div>
    </div>
  );
};

export default SingleGoals;
