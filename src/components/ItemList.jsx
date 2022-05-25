import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import Item from './Item';
import "./style.css";
import db from '../service/firebase'
import { collection, getDocs } from 'firebase/firestore';

function ItemList() {

const [productos, setProductos] = useState([])

useEffect(async () => {
    const col = collection(db, 'productos')
    try {
        const data =  await getDocs(col);
        const result = data.docs.map(doc => doc ={id:doc.id, ...doc.data()})
        setProductos(result)
    } catch (error) {
        console.log(error)
    }
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