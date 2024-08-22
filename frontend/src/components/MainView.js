import React, { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import Header from "./Header";
import '../styles/MainView.css';

/**
 * MainView component allows users to generate a random shopping cart and procced to checkout
 */
const MainView = () => {
    const navigate = useNavigate();
    const { cart, setCart } = useContext(CartContext);
    const [loading, setLoading] = useState(false);
    
    /**
     * Handle the click event, generate a random shopping cart
     * Sends a GET request to DummyJson API and updates the cart state in the context.
     */
    const handleGenerateCartClick = async () => {
        setLoading(true);
        let max = 50
        let min = 1
        let number = Math.floor(Math.random() * (max - min + 1)) + min
        axios.get(`https://dummyjson.com/carts/${number}`)
            .then((response) => {
                setCart(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setLoading(false);
            })
    }
    /**
     * Handles the click event to proceed to checkout.
     * Navigates to the checkout page if the cart exists and is not empty.
     */
    const handleCheckoutClick = () => {
        if (cart) {
            navigate('/checkout')
        }

    }

    return(
        <div className="container">
            <Header/>
            <div className="content">
                <div>
                    {!cart ? (
                        <h1>No has generado tu carrito</h1>
                    ) : 
                        (<h1>¡Carrito generado!</h1>

                    )}
                </div>
                <div className="button-container">
                    <button onClick={() => {handleGenerateCartClick()}}> 
                        {loading ? <span className="loading-spinner"></span> : "Generar carrito"} 
                    </button>
                    <button onClick={() => {handleCheckoutClick()}}
                        disabled={!cart || cart.products.length === 0}
                    >
                        Finalizar compra 
                    </button>
                </div>
            </div>
        </div>
    )
}

export default MainView;