import React  from 'react'
import "./style.css";
import {Link} from "react-router-dom";


function Item({detalle}) { 

    return (
    <div className='section'>
            <div>
                <div className='productos-item'>
                    <h2>{detalle.nombre} </h2>
                    <h4>Categoria: {detalle.categoria}</h4>
                <img className="section-img"src={detalle.imagen}/>
                    <div>
                    <h4>
                        Precio: {detalle.precio}
                    </h4>
                    <Link to={`/item/${detalle.id}`}>
                    <button>Ver más</button>
                    </Link>
                    </div>
                </div>
            </div>

        
    </div>
    )
}



export default Item