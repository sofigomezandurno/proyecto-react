import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import data from "../data/data";
import { useParams } from 'react-router-dom';
import "./style.css";


export const Cart = () => {
    const [producto, setProducto] = useState([])
    const {id, quantityOnAdd}=useParams()

useEffect(() => {
    setTimeout(setProducto(data.find((data)=> data.id==id)), 200)

}, [])

    return (
    <div className='sectionCarrito'> 
        <div className='productoCarrito'>
        {producto.nombre}
        </div> Cantidad 
        <div className='cantidadCarrito'>
        {quantityOnAdd}
        </div>
    </div>
    )
}
