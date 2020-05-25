import React from 'react';
import CardList from '../CardList/index'
import Separador from './../Separador/Separador'
import PropTypes from 'prop-types';
// import './../CardList/style.css';

const News = ()=>(
  
    <div className="seccion">
        <h2 className ='text-center tamanoh2'>Noticias</h2>
        <Separador></Separador>
    <CardList></CardList>
        
    </div>


);

export default News;
