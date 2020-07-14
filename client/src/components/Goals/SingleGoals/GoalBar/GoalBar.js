import React, { Component } from "react";
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";
import metaMitad from '../../../../assets/img/SelloRecompensa.png';
import metaInicial from '../../../../assets/img/MetaInicial.png';
import metaFinal from '../../../../assets/img/MetaFinal.png';

const calcularPorcentaje = (actual, meta)=>{
  return (actual*100)/meta;
}

class StepProgressBar extends Component {

  constructor(props) {
    
    super(props);
    console.log();
  }


  render() {
    const {Meta:{ mActual, mMeta }} = this.props;
    return (
        
      <ProgressBar
        percent={calcularPorcentaje(mActual,mMeta)}
        fillBackground="linear-gradient(to right, #fefb72, #f0bb31)"
      >
        <Step transition="scale">
          {({ accomplished }) => (
            <img
              className='metaInicial'
              style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
              width="30"
              src={metaInicial}
              // "https://vignette.wikia.nocookie.net/pkmnshuffle/images/9/9d/Pichu.png/revision/latest?cb=20170407222851"
            />
          )}
        </Step>
        <Step transition="scale">
          {({ accomplished }) => (
            <img
              style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
              width="60"
              src={metaMitad}
              // "https://vignette.wikia.nocookie.net/pkmnshuffle/images/9/97/Pikachu_%28Smiling%29.png/revision/latest?cb=20170410234508"
            />
          )}
        </Step>
        <Step transition="scale">
          {({ accomplished }) => (
            <img
              style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
              width="35"
              src={metaFinal}
              // "https://orig00.deviantart.net/493a/f/2017/095/5/4/raichu_icon_by_pokemonshuffle_icons-db4ryym.png"
            />
          )}
        </Step>
      </ProgressBar>
    );
  }
}

export default StepProgressBar;