import React, {createContext}from 'react'
import { useState } from 'react'

export const GlobalContext=createContext("")

const GlobalStateContext=({children})=>{

const[carrito, setCarrito]=useState([])

const addToCart =(producto) => {
    const carritoAux = carrito.find((cart)=>(cart.id ===producto.id))

    setCarrito([...carrito,producto])
}

    return (
    <GlobalContext.Provider value={{carrito, addToCart}}>
        {children}
    </GlobalContext.Provider>
    )
}

export default GlobalStateContext
