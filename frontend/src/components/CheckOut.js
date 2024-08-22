import React, { useContext, useState  } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import CartItem from "./CartItem";
import Header from "./Header";

const cartParser = (cart) => {
    return cart.map(item => ({
        productId: item.id,
        price: item.price,
        quantity: item.quantity,
        discount: item.discountPercentage
    }))
}


/**
 * CheckOut component allows users to clearthe cart, return to main view and calculate the dispatch
 */
const CheckOut = () => {
    const navigate = useNavigate();
    const { cart, setCart } = useContext(CartContext);
    const [availableDispatch, setAvailableDispatch] = useState(false);
    const [calculated, setCalculated] = useState(false);
    const [loading, setLoading] = useState(false);
    
    /**
     * Handle the click event, clear the cart.
     * Navigates to the main view. 
     */
    const handleClearCartClick = () => {
        setCart(null);
        setCalculated(false);
        navigate('/');
    }

    /**
     * Handle the click event, navigates to the main view. 
     */
    const handleBackClick = () => {
        navigate('/');
    }

    /**
     * Handle the click event, calls to api and update statuses. 
     */
    const handleQuoteDispatchClick = async () => {
        setLoading(true);
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
            .finally(() => {
                setLoading(false);
            })
    }

    return (
        <div className="container">
            <Header/>
            <h1>Tu carrito</h1>
            <div>
                { ( !cart?.products || cart.products.length === 0 ) ? (
                    <h2>No hay productos en el carrito.</h2>
                ) : (
                    <div>
                        {cart.products.map((item, index) => {
                            return(
                                <CartItem key={index} item={item}/>
                            )
                        })}
                    <h3>Total del carrito: ${cart.total}</h3>
                    </div>
                    
                )}
            </div>
            <div>
                {calculated && (availableDispatch ? (
                    <h3> Envío Nomad ⚡️: $3670</h3>
                ) : (
                    <h3> No hay envíos disponibles :( </h3>
                ))}
            </div>
            <div className="button-container">
                <button onClick={() => handleQuoteDispatchClick()}
                        disabled={!cart || cart.products.length === 0}
                >
                    {loading ? <span className="loading-spinner"></span> : "Cotizar despacho"}
                </button>
                <button onClick={() => handleClearCartClick()}
                        disabled={!cart || cart.products.length === 0}
                >
                    Limpiar carrito
                </button>
                <button onClick={() => handleBackClick()}>Volver</button>
            </div>    
        </div>
    )
}

export default CheckOut;