import React from 'react';
import ItemDetail from './ItemDetail';
import { useEffect } from 'react';
import { useState } from 'react';


function ItemDetailContainer() {
    const [producto, setProducto] = useState([])

useEffect(() => {
    setTimeout(setProducto({
        nombre:"Espuma de limpieza", precio: "$1000,00", detalle: "Limpiador diario suave que elimina la suciedad, la grasa y el maquillaje sin eliminar el equilibrio de humedad natural de la piel."  
    
    }), 200)
}, [])

    return (
    <div>
        <ItemDetail producto={producto}/> 
    </div>
    )
}

export default ItemDetailContainer