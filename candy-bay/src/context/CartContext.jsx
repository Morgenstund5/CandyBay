import { createContext, useState } from "react";


export const CartContext = createContext({
    productsInCart: [],
    productsCount: 0,
})

export const CartProvider = ({ children }) => {
    const [productsInCart, setProductsInCart] = useState([])
    const [productsCount, setProductsCount] = useState(0)

    return (
        <CartContext value={{
            productsInCart, setProductsInCart,
            productsCount, setProductsCount
        }} >
            {children}
        </CartContext>
    )
}