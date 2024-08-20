import React, { useContext  } from "react";
import { CartContext } from "../context/CartContext";
import CartItem from "./CartItem";

const CheckOut = () => {
    const { cart, setCart } = useContext(CartContext);
    
    return (
        <div>
            <h1>Tu carrito</h1>
            <div>
                { ( !cart?.products || cart.products.lenght === 0 ) ? (
                    <p>No hay productos en el carrito.</p>
                ) : (
                    <>
                        {cart.products.map((item, index) => {
                            return(
                                <CartItem key={index} item={item}/>
                            )
                        })}
                        <h3>Total del carrito: ${cart.total}</h3>
                    </>
                    
                )}
            </div>
            <div>
                <button>Cotizar despacho</button>
                <button>Limpiar carrito</button>
                <button>Volver</button>
            </div>
        </div>
    )
}

export default CheckOut;