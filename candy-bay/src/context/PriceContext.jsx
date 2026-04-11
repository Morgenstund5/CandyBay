import { createContext } from "react";
import useBchPrice from "../hooks/useBchPrice";


export const PriceContext = createContext({
    priceBCH : null,
})

export const PriceProvider = ({ children }) => {
    const priceBCH = useBchPrice()

    return (
        <PriceContext value={{ priceBCH }}>
            {children}
        </PriceContext>
    )
}