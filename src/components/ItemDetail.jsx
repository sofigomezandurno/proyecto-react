import React from 'react'
import "./style.css";
import ItemCount from './ItemCount';

export const ItemDetail = ({producto}) => {
    return (
        <div className='section-detail'>
            <div className='producto'>
            <div className='productos-item'>
                <h2>{producto.nombre} </h2>
                <img className="section-img" src={producto.imagen} alt="detalle"/>
            </div>

                <div className='producto-detalle'>
                <h4>
                    {producto.precio}
                    <ItemCount initial={1} stock={producto.stock} producto={producto}/>
                </h4>
                <h4>
                    {producto.detalle}
                </h4>
                </div>
            </div>
        
</div>
    )
}

export default ItemDetail 
