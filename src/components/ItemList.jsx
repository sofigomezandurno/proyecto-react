import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import Item from './Item';

function ItemList() {

const [productos, setProductos] = useState([])

useEffect(() => {
    setTimeout(setProductos([
        {nombre:"Espuma de limpieza", precio: "$1000,00"},
        {nombre:"Serum Vit C", precio: "$1800,00"},
        {nombre:"Crema facial día", precio: "$2000,00"},
    
    ]), 200)
}, [])


    return <ul>
    <div className="border border-danger p-5">Productos
        <div>
        {productos.map(u => <li><Item detalle={u}/></li>)}
        
        </div>
    </div>
    </ul>
}

export default ItemList