import React, {useState} from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export const ItemCount = ({stock, initial, producto}) => {

    const [contador, setContador]= useState(initial);
    const [stockAux, setStockAux]= useState(stock);

    useEffect(() => {
        setStockAux(stock)
    }, [stock])

    const handleOnAdd = () => {
        setStockAux(stockAux-contador);
        setContador(0);
    }


    const sumar = () => {
        if(contador < stockAux) {
        setContador(contador + 1)}
    }
    const restar = () => {
        if(contador > 0) {
        setContador(contador - 1)
        }
    }

    return (
    <div>
        <div>
            <div>Carrito: {stock-stockAux}</div>
            <div  className='contador'>
            <div style={{display:"flex", justifyContent:"space-around", padding:"5px"}}>
            <button onClick={restar}>-</button>
            <h4>{contador}</h4>
            <button onClick={sumar}>+</button> 
            </div> 
            </div>
            <div>Stock:{stockAux}</div>
            <div>

            <button onClick={handleOnAdd}>Agragar al carrito</button> 
            {
                producto &&

            <Link to={`/Cart/${producto.id}/${stock-stockAux}`}>
                <button>Ir al carrito </button>
            </Link>

            }
            </div>
        </div>

    </div>
    )
}

export default ItemCount
