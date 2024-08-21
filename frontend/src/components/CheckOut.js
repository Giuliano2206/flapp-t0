import React, { useContext, useState  } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import CartItem from "./CartItem";

const cartParser = (cart) => {
    return cart.map(item => ({
        productId: item.id,
        price: item.price,
        quantity: item.quantity,
        discount: item.discountPercentage
    }))
}


const CheckOut = () => {
    const navigate = useNavigate();
    const { cart, setCart } = useContext(CartContext);
    const [availableDispatch, setAvailableDispatch] = useState(false);
    const [calculated, setCalculated] = useState(false);
    
    const handleClearCartClick = () => {
        setCart(null);
        setCalculated(false);
        navigate('/');
    }

    const handleBackClick = () => {
        navigate('/');
    }

    const handleQuoteDispatchClick = async () => {
        axios.post(`http://127.0.0.1:8000/api/cart/`, 
            cartParser(cart.products), {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then((response) => {
                setAvailableDispatch(response.data);
                setCalculated(true);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    return (
        <div>
            <h1>Tu carrito</h1>
            <div>
                { ( !cart?.products || cart.products.length === 0 ) ? (
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
                <button onClick={() => handleQuoteDispatchClick()}
                        disabled={!cart || cart.products.length === 0}
                >
                    Cotizar despacho
                </button>
                <button onClick={() => handleClearCartClick()}
                        disabled={!cart || cart.products.length === 0}
                >
                    Limpiar carrito
                </button>
                <button onClick={() => handleBackClick()}>Volver</button>
            </div>
            <div>
                {calculated && (availableDispatch ? (
                    <p> Envío Nomad ⚡️ - $3670</p>
                ) : (
                    <p>: No hay envíos disponibles :( </p>
                ))}
            </div>
        </div>
    )
}

export default CheckOut;