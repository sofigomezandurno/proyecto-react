import React from 'react'
import "./style.css";
import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalStateContext';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import { Cart } from './Cart';
import { collection, addDoc } from 'firebase/firestore';
import db from '../service/firebase';


export const Formulario = () => {

    const { carrito, precioTotal } = useContext(GlobalContext);
    const [formulario, setFormulario] = useState({
        buyer:{
            email: "",
            nombre: "",
            apellido: "",
            telefono: "",
        },
        items:carrito,
        precioTotal:precioTotal,
    })

    console.log(carrito)

    const {buyer: {email, nombre, apellido, telefono}} = formulario;

    const sendOrder = async () =>{
        try{
            const ordersCollections= collection(db, "orders");
            const order= addDoc(ordersCollections, formulario);
            console.log(order.id);
        } catch(error){
            console.log(error)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        sendOrder();
    }

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormulario({
            ...formulario,
            buyer:{
                ...formulario.buyer,
        [name]: value,
            },
        })
    }

    return (
        <div className='sectionFormulario'>
            <Cart/>
            <div className='formulario'>
                Formulario
                <input 
                type="text"
                name='nombre'
                value={nombre}
                onChange={handleChange}
                required
                placeholder='Nombre'
                />
                <input 
                type="text"
                name='apellido'
                value={apellido}
                onChange={handleChange}
                required
                placeholder='Apellido'
                />
                <input 
                type="mail"
                name='email'
                value={email}
                onChange={handleChange}
                placeholder='...@gmail.com'
                required
                />
                <input 
                type="number"
                name='telefono'
                value={telefono}
                onChange={handleChange}
                required
                placeholder='telefono'
                />
                <button onClick={handleSubmit}>Finalizar compra</button>
            </div>
 
        </div>
    )
}