import React, { useState, useContext } from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import { GlobalContext } from '../context/GlobalStateContext';

export const ItemCount = ({ stock, initial, producto }) => {

    const { id, nombre, precio } = producto;
    const { addToCart, isInCart } = useContext(GlobalContext)

    const [contador, setContador] = useState(initial);
    const [state, setState] = useState({});
    const [estaEnCarrito, setEstaEnCarrito] = useState(isInCart(producto.id));


    const [stockAux, setStockAux] = useState(stock);

    useEffect(() => {
        setStockAux(stock)
    }, [stock])

    const handleOnAdd = () => {
        if(contador < 1){
            alert('Para agregar productos al carrito, el contador debe ser mayor o igual a 1');
            return;
        }
        setStockAux(stockAux - contador);
        console.log(state)
        addToCart(state)
        setContador(0);
    }

    useEffect(() => {
        setState({ id, nombre, contador, precio })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [contador])

    useEffect(() => {
        setState({ id, nombre, contador, precio })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id, nombre, precio])

    useEffect(() => {
        setEstaEnCarrito(isInCart(producto.id))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [addToCart])


    const sumar = () => {
        if (contador < stockAux) {
            setContador(contador + 1)
        }
    }
    const restar = () => {
        if (contador > 0) {
            setContador(contador - 1)
        }
    }

    return (
        <div>
            <div>
                <div>Carrito: {stock - stockAux}</div>
                <div className='contador'>
                    <div style={{ display: "flex", justifyContent: "space-around", padding: "5px" }}>
                        <button onClick={restar}>-</button>
                        <h4>{contador}</h4>
                        <button onClick={sumar}>+</button>
                    </div>
                </div>
                <div>Stock:{stockAux}</div>
                <div>

                    <button onClick={handleOnAdd}>Agragar al carrito</button>
                    {
                        estaEnCarrito &&

                        <Link to={`/Cart`}>
                            <button>Ir al carrito </button>
                        </Link>

                    }
                </div>
            </div>

        </div>
    )
}

export default ItemCount