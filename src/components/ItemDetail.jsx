import React from 'react'
import "./style.css";
import ItemCount from './ItemCount';

export const ItemDetail = ({producto}) => {
    return (
        <div className='sectionDetail'>
        <div>
            <div className='producto'>
            <div className='productos-item'>
                <h2>{producto.nombre} </h2>
            <img className="section-img"src={producto.imagen}/>
            </div>

                <div className='productoDetalle'>
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
</div>
    )
}

export default ItemDetail 
