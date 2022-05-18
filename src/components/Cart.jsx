import React from 'react'
import "./style.css";
import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalStateContext';
import { Link } from 'react-router-dom';


export const Cart = () => {
    const { carrito, removeFromCart, clear } = useContext(GlobalContext);

    return (
        <div className='sectionCarrito'>
            <Link to={`/cosmeticos`}>
                <button>Volver a productos</button>
            </Link>
            <br />
            {carrito.length > 0 && <button onClick={() => clear()}>Limpiar carrito</button>}
            <ul>
                {carrito.length > 0 ? carrito.map((carrito, index) => (
                    <li index={index}>
                        <div className='productoCarrito'>
                            {carrito.nombre}
                        </div>
                        <div className='cantidadCarrito'>
                            Cantidad {carrito.contador}
                        </div>
                        <button onClick={() => removeFromCart(carrito.id)}>Eliminar</button>
                    </li>
                )) :
                    <div>El carrito se encuentra vacio..</div>
                }
            </ul>
        </div>
    )
}