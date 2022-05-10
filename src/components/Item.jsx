import React from 'react'
import ItemCount from './ItemCount';
import "./style.css";
import {Link} from "react-router-dom";

function Item({detalle}) { 
    console.log(detalle)
    return (
    <div className='section'>
        {Array.from({ length: 1}).map((_, idx) => (
            <div>
                <div className='productos-item'>
                    <h2>{detalle.nombre} </h2>
                <img className="section-img"src={detalle.img}/>
                    <div>
                    <h4>
                        {detalle.precio}
                        <ItemCount initial={1} stock={detalle.stock}/>
                    </h4>
                    <Link to={`/item/${detalle.id}`}>
                    <button>Ver más</button>
                    </Link>
                    </div>
                </div>
            </div>
        ))}

        
    </div>
    )
}



export default Item