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
            carritoEditado.push({ ...producto });
        } else {
            const itemEditado = {
                ...carritoEditado[itemIndex]
            };
            itemEditado.contador = itemEditado.contador + producto.contador;
            carritoEditado[itemIndex] = itemEditado;
        }
        setCarrito(carritoEditado)
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
        <GlobalContext.Provider value={{ carrito, addToCart, removeFromCart, isInCart, clear }}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalStateContext
