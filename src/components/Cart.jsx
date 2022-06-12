import React,{ useEffect, useState } from 'react'
import "./style.css";
import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalStateContext';
import { Link,useLocation } from 'react-router-dom';


export const Cart = () => {
    const { carrito, removeFromCart, clear, precioTotal } = useContext(GlobalContext);
    const [precioTotalCarrito, setPrecioTotal] = useState(precioTotal())
    useEffect(() => {
        setPrecioTotal(precioTotal());
    }, [carrito])

    const {pathname} = useLocation();

    return (
        <div className='sectionCarrito'>
            <Link to={`/cosmeticos`}>
                <button>Volver a productos</button>
            </Link>
            <br />
            {
                pathname === '/Cart' && 
            carrito.length > 0 && <button onClick={() => clear()}>Limpiar carrito</button>
            }
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
            {
                pathname === '/Cart' && 
                <Link to={`/Formulario`}>
                    <button>Ir a pagar</button>
                </Link>    
            }
            </div>}
        </div>
    )
}