import { createContext, useEffect, useState } from "react";


export const CartContext = createContext({
    productsInCart: [],
    productsCount: 0,
})

export const CartProvider = ({ children }) => {
    const [productsInCart, setProductsInCart] = useState([])
    const [productsCount, setProductsCount] = useState(0)

    const addToCart = (product) => {
        const isAlreadyInCart = productsInCart.some(item => item.id === product.id)
        if(isAlreadyInCart) {
            return "Product already in cart!"
        } else {
            setProductsInCart(prev => [...prev, product])
        }
    }

    const deleteFromCart = (product) => {
        setProductsInCart(prev => prev.filter(p => p.id === product.id))
    }

    useEffect(() => {
        setProductsCount(productsInCart.length)
    }, [productsInCart])


    return (
        <CartContext value={{
            productsInCart, setProductsInCart,
            productsCount, setProductsCount,
            addToCart, deleteFromCart
        }} >
            {children}
        </CartContext>
    )
}
