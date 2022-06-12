import React ,{ useEffect,useState } from 'react';
import Item from './Item';
import "./style.css";
import db from '../service/firebase'
import { collection, getDocs } from 'firebase/firestore';
import { Spinner } from 'react-bootstrap';


function ItemList() {

const [productos, setProductos] = useState([])
const [loader, setLoader] = useState(false)

const buscarProductos = async () =>{
    const col = collection(db, 'productos')
    try {
        setLoader(true);
        const data =  await getDocs(col);
        const result = data.docs.map(doc => doc ={id:doc.id, ...doc.data()})
        setProductos(result)
        setLoader(false);
    } catch (error) {
        console.log(error)
        setLoader(false);
    }
}

useEffect(() => {
    buscarProductos();
}, [])

useEffect(()=> setLoader(false)
, [productos])

    return <ul>
    <div>
        <div className="productos-rows">
            {productos && !loader ? 
productos.map(u => <li><Item detalle={u}/></li>):
            <Spinner animation="border" /> 
            }
        
        </div>
    </div>
    </ul>
}

export default ItemList