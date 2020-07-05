import React from 'react';
import CarItem from './CarItem';
import CarTotal from './CarTotal';

const Car = () => {
  return (
    <div>
      <h1 className="text-center">SEEDS</h1>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <CarItem />
            <CarItem />
            <CarItem />
            <CarItem />
          </div>
          <div className="col-md-6 col-sm-12">
            <CarTotal></CarTotal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Car;
