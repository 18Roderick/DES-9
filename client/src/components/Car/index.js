import React from 'react';
import CarItem from './CarItem';

const Car = () => {
  return (
    <div>
      <h1 className="text-center">SEEDS</h1>
      <div className="container-fluid">
        <CarItem />

        <CarItem />
      </div>
    </div>
  );
};

export default Car;
