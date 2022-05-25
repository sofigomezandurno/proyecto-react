import React from 'react';
import ItemDetail from './ItemDetail';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import db from '../service/firebase'
import { collection, getDocs } from 'firebase/firestore';

function ItemDetailContainer() {
    const [producto, setProducto] = useState([])
    const {id}=useParams()


    useEffect(() => {
        async function buscarProducto(){
            const col = collection(db, 'productos')
            try {
                const data =  await getDocs(col);
                const result = data.docs.map(doc => doc ={id:doc.id, ...doc.data()})
                setProducto(result.find((data)=> data.id==id))

            } catch (error) {
                console.log(error)
            }
        }

        buscarProducto();
    }, [])    

    return (
    <div>
        <ItemDetail producto={producto}/> 
    </div>
    )
}

export default ItemDetailContainer