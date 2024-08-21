import React, { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import Header from "./Header";
import '../styles/MainView.css';

const MainView = () => {
    const navigate = useNavigate();
    const { cart, setCart } = useContext(CartContext);
    const [loading, setLoading] = useState(false);
    
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