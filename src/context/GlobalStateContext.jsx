import React, { createContext } from 'react'
import { useState } from 'react'

export const GlobalContext = createContext("")

const GlobalStateContext = ({ children }) => {

    const [carrito, setCarrito] = useState([])

    const addToCart = (producto) => {
        const carritoEditado = [...carrito];
        const itemIndex = carritoEditado.findIndex(
            item => item.id === producto.id
        );

        if (itemIndex < 0) {

            const nuevoProducto = {...producto};
            nuevoProducto.precio = nuevoProducto.contador * nuevoProducto.precio;
            carritoEditado.push(nuevoProducto);
        } else {
            const itemEditado = {
                ...carritoEditado[itemIndex]
            };
            itemEditado.contador = itemEditado.contador + producto.contador;
            itemEditado.precio = itemEditado.contador * producto.precio;

            carritoEditado[itemIndex] = itemEditado;
        }
        setCarrito(carritoEditado)
    }

    const precioTotal = () => {
        let precioTotal = 0;
        if (carrito.length > 0){
            for(let i = 0; i < carrito.length; i++ ){
                precioTotal=precioTotal+carrito[i].precio; 
            }
        }
        return precioTotal; 
    }

    const removeFromCart = (productId) => {
        console.log("Eliminando producto con id id: " + productId);
        const carritoEditado = [...carrito];
        const itemIndex = carritoEditado.findIndex(item => item.id === productId);
        carritoEditado.splice(itemIndex, 1);
        setCarrito(carritoEditado)
    };

    const clear = () => {
        setCarrito([])
    }

    const isInCart = (productId) => {
        const carritoEditado = [...carrito];
        const itemIndex = carritoEditado.findIndex(item => item.id === productId);

        if (itemIndex !== -1) return true;
        return false;

    };

    return (
        <GlobalContext.Provider value={{ carrito, addToCart, removeFromCart, isInCart, clear, precioTotal }}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalStateContext
