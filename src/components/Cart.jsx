import React from 'react'
import "./style.css";
import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalStateContext';


export const Cart = () => {
    const {carrito} = useContext(GlobalContext);

    console.log(carrito)

    return (
    <div className='sectionCarrito'> 
    <ul>
        {carrito.map((carrito, index)=>(
        <li index={index}>
            <div className='productoCarrito'>
            {carrito.nombre}
            </div>  
            <div className='cantidadCarrito'>
                Cantidad {carrito.stock}
            </div>
        </li> 
    ))}
    </ul>
    </div>
    )
}
