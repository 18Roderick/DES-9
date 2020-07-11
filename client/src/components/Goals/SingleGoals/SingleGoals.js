import React from 'react';
import GoalBar from './GoalBar/GoalBar';

const SingleGoals = ({ mTitulo, mDescripcion, mImagen, mMeta }) => {
  return (
    <div className=" col-md-6 col-sm-12 col-xl-4">
      <div className="singleGoals">
        <h2 className="metasTitulo">{mTitulo}</h2>
        <p className="metasDescripcion">{mDescripcion}</p>
        <GoalBar />
      </div>
    </div>
  );
};

export default SingleGoals;
