import React, { createContext, useState } from "react";

export const CartContext = createContext();


const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(null);

    return (
        <CartContext.Provider value={{ cart, setCart }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;