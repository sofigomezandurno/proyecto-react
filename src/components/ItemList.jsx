import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import Item from './Item';
import data from "../data/data"
import "./style.css";

function ItemList() {

const [productos, setProductos] = useState([])

useEffect(() => {
    setTimeout(setProductos(data), 200)
}, [])


    return <ul>
    <div>
        <div className="productos-rows">
        {productos.map(u => <li><Item detalle={u}/></li>)}
        
        </div>
    </div>
    </ul>
}

export default ItemList