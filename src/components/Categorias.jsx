import React from 'react';
import ItemDetail from './ItemDetail';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import db from '../service/firebase'
import { collection, getDocs } from 'firebase/firestore';
import { Spinner } from 'react-bootstrap';
import "./style.css";

function Categoria() {
    const [producto, setProducto] = useState([])
    const [productoIndex, setProductoIndex] = useState()
    const [loader, setLoader] = useState(false)


    const {id}=useParams()

    const buscarProducto = async () =>{
        const col = collection(db, 'productos')
        try {
            setLoader(true)
            const data =  await getDocs(col);
            const result = data.docs.map(doc => doc ={id:doc.id, ...doc.data()})
            setProducto(result)
            buscarCategoriaIndex()
            setLoader(false)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        buscarProducto();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])  

    useEffect(() => {
        buscarProducto();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id])    


    useEffect(() => {
        buscarCategoriaIndex();
        setLoader(false)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [producto])  

    const buscarCategoriaIndex = () =>{
        setProductoIndex(producto.findIndex(prod => prod.categoria === id));
    }

    return (
    <div>
        { producto[productoIndex] && !loader ?
        <>
        <h2>Productos de la Categoria: {id}</h2>
        <div className='category'>
        <ItemDetail producto={producto[productoIndex]}/>
        </div>
        </>
        : <Spinner animation="border" />
        }
    </div>
    )
}

export default Categoria