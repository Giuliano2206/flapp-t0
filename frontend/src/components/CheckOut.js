import React, { useContext  } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import CartItem from "./CartItem";

const CheckOut = () => {
    const navigate = useNavigate();
    const { cart, setCart } = useContext(CartContext);
    
    const handleClearCart = () => {
        setCart(null);
    }

    const handleBackClick = () => {
        navigate('/')
    }

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
                <button onClick={() => handleClearCart()}>Limpiar carrito</button>
                <button onClick={() => handleBackClick()}>Volver</button>
            </div>
        </div>
    )
}

export default CheckOut;