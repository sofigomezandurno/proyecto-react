import React from 'react';
import ItemDetail from './ItemDetail';
import { useEffect } from 'react';
import { useState } from 'react';
import data from "../data/data"


function ItemDetailContainer() {
    const [producto, setProducto] = useState([])

useEffect(() => {
    setTimeout(setProducto(data[0]), 200)
}, [])

    return (
    <div>
        <ItemDetail producto={producto}/> 
    </div>
    )
}

export default ItemDetailContainer