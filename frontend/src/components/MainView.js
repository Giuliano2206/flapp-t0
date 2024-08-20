import axios from "axios";
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const MainView = () => {
    const navigate = useNavigate();
    // const [cart, setCart] = useState(null);
    const { cart, setCart } = useContext(CartContext);
    
    const handleGenerateCartClick = async () => {
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
    }

    const handleCheckoutClick = () => {
        if (cart) {
            navigate('/checkout')
        }

    }

    return(
        <div>
            <div>
                <button onClick={() => {handleGenerateCartClick()}}> Generar carrito </button>
                <button onClick={() => {handleCheckoutClick()}}> Finalizar compra </button>
            </div>
        </div>
    )
}

export default MainView;