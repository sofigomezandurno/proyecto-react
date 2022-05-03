import React from 'react'
import ItemCount from './ItemCount';

function Item({detalle}) { 
    return (
    <div className="border border-danger p-5">
        {detalle.nombre} 
        {detalle.precio}
        <ItemCount initial={1} stock={20}/>
    </div>
    )
}

export default Item