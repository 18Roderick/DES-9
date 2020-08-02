import React from 'react';
import CarItem from './CarItem';
import CarTotal from './CarTotal';

const Car = () => {
  return (
    <div className="container-fluid">
      {/*'seeds-material-card'*/}
      <div className=" p-2">
        <div className="row">
          <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12">
            <div className="container-productos custom-scroll">
              <div className="row ">
                <CarItem />
                <CarItem />
                <CarItem />
                <CarItem />
                <CarItem />
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12">
            <div className="container-productos overflow-auto custom-scroll">
              <CarTotal></CarTotal>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Car;
