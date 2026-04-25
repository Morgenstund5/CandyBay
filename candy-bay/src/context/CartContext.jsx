import { createContext, useEffect, useState } from "react";


export const CartContext = createContext({
    productsInCart: [],
    productsCount: 0,
})

export const CartProvider = ({ children }) => {
    const [productsInCart, setProductsInCart] = useState([])
    const [productsCount, setProductsCount] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)

    const addToCart = (product) => {
        const isAlreadyInCart = productsInCart.some(item => item.id === product.id)
        if(isAlreadyInCart) {
            return "Product already in cart!"
        } else {
            setProductsInCart(prev => [...prev, { ...product, quantity: 1 }])
        }
    }

    const deleteFromCart = (product) => {
        setProductsInCart(prev => prev.filter(p => p.id != product.id))
    }

    const incrementQuantity = (product) => {
        setProductsInCart(prev => {
            return prev.map(p =>
                p.id === product.id
                ? { ...p, quantity: p.quantity + 1 }
                : p
            );
        });
    }

    const decreaseQuantity = (product) => {
        setProductsInCart(prev => {
            return prev.map(p =>
                p.id === product.id
                ? { ...p, quantity: p.quantity - 1 }
                : p
            );
        });
    }

    function calcProductsCount() {
        let count = 0
        for(let i = 0; i < productsInCart.length; i++) {
            count += productsInCart[i].quantity
        }
        return count
    }

    useEffect(() => {
        setProductsCount(calcProductsCount(productsInCart))
    }, [productsInCart])


    return (
        <CartContext value={{
            productsInCart, setProductsInCart,
            productsCount, setProductsCount,
            addToCart, deleteFromCart,
            incrementQuantity, decreaseQuantity,
            totalPrice, setTotalPrice
        }} >
            {children}
        </CartContext>
    )
}
