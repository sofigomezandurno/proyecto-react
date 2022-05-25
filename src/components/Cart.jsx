import React from 'react'
import "./style.css";
import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalStateContext';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';


export const Cart = () => {
    const { carrito, removeFromCart, clear, precioTotal } = useContext(GlobalContext);

    const [precioTotalCarrito, setPrecioTotal] = useState(precioTotal())
    useEffect(() => {
        setPrecioTotal(precioTotal());
    }, [carrito])

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
                            <div> $ {carrito.precio} </div>
                        <div className='cantidadCarrito'>
                            Cantidad {carrito.contador}
                        </div>
                        <button onClick={() => removeFromCart(carrito.id)}>Eliminar</button>
                    </li>
                )) :
                    <div>El carrito se encuentra vacio..</div>
                }
            </ul>
            {carrito.length > 0 && 
            <div>
            <div>Total {precioTotalCarrito}</div>
            <button>Finalizar compra</button>
            </div>}
        </div>
    )
}