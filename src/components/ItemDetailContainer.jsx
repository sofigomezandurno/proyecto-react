import React ,{ useEffect , useState } from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import db from '../service/firebase'
import { collection, getDocs } from 'firebase/firestore';

function ItemDetailContainer() {
    const [producto, setProducto] = useState([])
    const {id}=useParams()

    const buscarProducto = async () =>{
        const col = collection(db, 'productos')
        try {
            const data =  await getDocs(col);
            const result = data.docs.map(doc => doc ={id:doc.id, ...doc.data()})
            setProducto(result.find((data)=> data.id==id))

        } catch (error) {
            console.log(error)
        }
    }


    useEffect(() => {
        buscarProducto();
    }, [])    

    return (
    <div>
        <ItemDetail producto={producto}/> 
    </div>
    )
}

export default ItemDetailContainer