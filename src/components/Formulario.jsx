import React, { useContext, useState } from 'react'
import "./style.css";
import { GlobalContext } from '../context/GlobalStateContext';
import { Cart } from './Cart';
import { collection, addDoc } from 'firebase/firestore';
import db from '../service/firebase';
import { useNavigate } from 'react-router-dom';


export const Formulario = () => {

    const { carrito, precioTotal } = useContext(GlobalContext);
    const navigate = useNavigate();

    const [formulario, setFormulario] = useState({
        buyer:{
            email: "",
            nombre: "",
            apellido: "",
            telefono: "",
        },
        items:carrito,
        precioTotal:precioTotal(),
    })

    const {buyer: {email, nombre, apellido, telefono}} = formulario;
    const [error, setError] = useState({})
    const sendOrder = async () =>{
        try{
            const ordersCollections= collection(db, "orders");
            const order=  await addDoc(ordersCollections, formulario);
            if(order.id){
                alert(`Felicitaciones tu compra fue realizada con éxito, tu numero de orden es: ${order.id} , ahora te redirigiremos al home para que sigas viendo mas productos y servicios, muchas gracias!`);
                navigate('/')
            }
        } catch(error){
            console.log(error)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setError({
            nombre: validate('nombre',nombre),
            apellido: validate('apellido',apellido),
            email: validate('email',email),
            telefono: validate('telefono',telefono)
        })
        if(error.nombre || error.apellido || error.email || error.telefono){
            alert('Ingrese los valores corectos en el formulario');
            return;
        }

        sendOrder();
    }

    const validate = (name, value) => {
        switch (name) {
        case "nombre":
            if (!value || value.trim() === "") {
                return "El nombre es requerido";
            } else {
                return "";
            }
        case "apellido":
            if (!value || value.trim() === "") {
                return "El apellido es requerido";
            } else {
                return "";
            }    
        case "email":
            if (!value) {
                return "El Email es requerido";
            } else if (
                !value.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)
            ) {
                return "Ingrese un email valido";
            } else {
                return "";
            }
        case "telefono":
            if (!value || value.trim() === "") {
                return "El Telefono es requerido";
            } else if (!value.match(/^[0-9]\d{9}$/)) {
                return "Ingrese un telefono valido. Recuerde agregar la caracteristica";
            } else {
                return "";
            }
        default: {
            return "";
        }
        }
    };


    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormulario({
            ...formulario,
            buyer:{
                ...formulario.buyer,
        [name]: value,
            },
        })
        setError({
            ...error,
            [name]: validate(name,value)
        })
    }

    return (
        <div className='sectionFormulario'>
            <Cart/>
            <div className='formulario'>
                <h2>Formulario</h2> 
                    <div className='formulario'>
                        <h5>Nombre</h5>
                    <input 
                    type="text"
                    name='nombre'
                    value={nombre}
                    onChange={handleChange}
                    required
                    placeholder='Nombre'
                    />
                    {error.nombre && 
                        <span>{error.nombre}</span>
                    }
                    </div>
                <div className='formulario'>
                    <h5>Apellido</h5>
                <input 
                type="text"
                name='apellido'
                value={apellido}
                onChange={handleChange}
                required
                placeholder='Apellido'
                />
                {error.apellido && 
                    <span>{error.apellido}</span>
                }
                </div>
                <div className='formulario'>
                    <h5>Email</h5>
                <input 
                type="mail"
                name='email'
                value={email}
                onChange={handleChange}
                placeholder='...@gmail.com'
                required
                />
                {error.email && 
                    <span>{error.email}</span>
                }
                </div>
                <div className='formulario'>
                    <h5>Telefono</h5>
                <input 
                type="number"
                name='telefono'
                value={telefono}
                onChange={handleChange}
                required
                placeholder='telefono'
                />
                {error.telefono && 
                    <span>{error.telefono}</span>
                }
                </div>
                {
                    carrito.length > 0 &&
                <button onClick={handleSubmit} >Finalizar compra</button>
                }
            </div>
        </div>
    )
}