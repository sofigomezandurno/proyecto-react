import React, {useState} from 'react'
import LifeCicle from './LifeCicle';

export const ItemCount = ({stock, initial}) => {

    const [contador, setContador]= useState(initial);
    const [stockAux, setStockAux]= useState(stock);
    /* const [ciclo, setCicle]= useState(true); */

    const onAdd = () => {
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
        <div style={{display:"flex", flexDirection:"column"}}>
            <div style={{display:"flex", justifyContent:"space-around"}}>
            <button onClick={restar}>restar 1</button>
            <h1>contador es:{contador}</h1>
            <button onClick={sumar}>sumar 1</button>  
            </div>
            <div>
            <button onClick={onAdd}>Agragar al carrito</button> 
            </div>
        </div>

        {/* <div>
            <LifeCicle/>
        </div> */}
    </div>
    )
}

export default ItemCount
