import React from 'react';

const Separator = () => (
  <div className="col-sm-12">
    <div className="border-bottom mb-1"></div>
  </div>
);

const CarTotal = () => {
  return (
    <div className="row">
      <div className="col-md-12 col-sm-12">
        <div className="seeds-material-card">
          <div className="p-3">
            <div className="row">
              <div className="col-md-4">
                <h4>Dirección</h4>
              </div>
              <div className="col-md-4">
                <p className="text-break">Don bosco los pinos Samaria Sector 1</p>
              </div>
              <div className="col-md-4">
                <div className="float-right">
                  <button className="btn btn-link p-0 m-0">Cambiar</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-12 col-sm-12">
        <div className="seeds-material-card">
          <div className="p-3">
            <div className="row">
              <div className="col-md-4">
                <h4>Método de Pago</h4>
              </div>
              <div className="col-md-4">
                <p className="text-break">Don bosco los pinos Samaria Sector 1</p>
              </div>
              <div className="col-md-4">
                <div className="float-right">
                  <button className="btn btn-link p-0 m-0">Cambiar</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-12 col-sm-12">
        <div className="seeds-material-card">
          <div className="p-4">
            <div className="row">
              <div className="col-sm-12">
                <div className="row">
                  <div className="col-sm-6">
                    <p>Productos (4)</p>
                    <p>Envió y Manejo</p>
                  </div>
                  <div className="col-sm-6">
                    <p className="text-right">$117.96</p>
                    <p className="text-right">$0.00</p>
                  </div>
                </div>
              </div>
              <Separator />
              <div className="col-sm-12">
                <div className="row">
                  <div className="col-sm-6">
                    <p>Total antes de impuestos</p>
                    <p>Calculo estimado de impuestos por</p>
                  </div>
                  <div className="col-sm-6">
                    <p className="text-right">$0.00</p>
                    <p className="text-right">$0.00</p>
                  </div>
                </div>
              </div>
              <Separator />
              <div className="col-sm-12">
                <div className="row">
                  <div className="col-sm-6">
                    <p>Total antes de impuestos</p>
                  </div>
                  <div className="col-sm-6">
                    <p className="text-right">$0.00</p>
                  </div>
                </div>
              </div>

              <div className="col-sm-12">
                <div className="text-center">
                  <button className="boton btn btn-primary">Finalizar Pedido</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarTotal;
