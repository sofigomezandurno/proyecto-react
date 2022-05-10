import React from 'react'
import "./style.css";

export const ItemDetail = ({producto}) => {
    console.log(producto)
    return (
    <div>
        <div className="section">
                    <div>
                    <h2>{producto.nombre} </h2>
                    <h4>
                        {producto.precio}
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
