import React, {createContext}from 'react'
import { useState } from 'react'

export const GlobalContext=createContext("")

const GlobalStateContext=({children})=>{

const[carrito, setCarrito]=useState([])

    return (
    <GlobalContext.Provider value={{carrito, setCarrito}}>
        {children}
    </GlobalContext.Provider>
    )
}

export default GlobalStateContext
