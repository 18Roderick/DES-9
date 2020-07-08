import React, {Container} from 'react'
import imgproducto from '../../assets/img/ORH82L0.jpg';
import ReactTooltip from "react-tooltip";



const ModalProducto = () => (


    <div className='modalProducto'>
        <div className='modalImagen'>
            <img src={imgproducto} className='' />
        </div>
        <div className='modalInfo'>
            <div className="">
                <div className="">
                    <div>
                        <h1 className="mdTituloProducto">Shirayuki</h1>
                    </div>
                    <h3 className="">Loli</h3>
                </div>
                <div className="mdDescripcionProducto">
                    <h3 className="">Loli 100%legal no feik</h3>
                    <p className="">
                        Una linda loli que me acabo de inventar para hacer este maquetado, es legal para que el pendejo de roderick no se salga con sus mamadas de carcel, carcel, es especial hay que entenderlo :v
                    </p>
                </div>
                <div className="mdCantidadComprar">
                    <a href="#" className="agregarCarrito" >
                        Agregar al carrito
                </a>

                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text">$</span>
                            <span class="input-group-text">700.00</span>
                        </div>
                        <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)" />
                    </div>             
                    <p data-tip data-for='tpPrecio' className='tpAyuda'><i class="fas fa-info-circle"></i></p>
                    <ReactTooltip id='tpPrecio' className='tpAyudaPrecio'>
                        <p>Este es el valor base pero puedes optar por aportar una mayor cantidad de dinero.</p>
                    </ReactTooltip>
                </div>
            </div>
        </div>
    </div>
)


export default ModalProducto;