import React from 'react';
import ItemDetail from './ItemDetail';
import { useEffect } from 'react';
import { useState } from 'react';
import data from "../data/data";
import { useParams } from 'react-router-dom';


function ItemDetailContainer() {
    const [producto, setProducto] = useState([])
    const {id}=useParams()

useEffect(() => {
    setTimeout(setProducto(data.find((data)=> data.id==id)), 200)

}, [])

    return (
    <div>
        <ItemDetail producto={producto}/> 
    </div>
    )
}

export default ItemDetailContainer