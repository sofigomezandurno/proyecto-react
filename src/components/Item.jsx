import React from 'react'
import ItemCount from './ItemCount';
import "./style.css"

function Item({detalle}) { 
    return (
    <div className='section'>
        {Array.from({ length: 1}).map((_, idx) => (
            <div>
                <div className='productos-rows'>
                <img className='section-img' src="holder.js/100px160" />
                    <div>
                    <h1>{detalle.nombre} </h1>
                    <h4>
                        {detalle.precio}
                        <ItemCount initial={1} stock={detalle.stock}/>
                    </h4>
                    </div>
                </div>
            </div>
        ))}

        
    </div>
    )
}



export default Item