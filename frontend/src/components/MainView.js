import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const MainView = () => {
    const navigate = useNavigate();
    const [cart, setCart] = useState(null);
    
    const handleGenerateCartClick = async () => {
        let max = 50
        let min = 1
        let number = Math.floor(Math.random() * (max - min + 1)) + min
        axios.get(`https://dummyjson.com/carts/${number}`)
            .then((response) => {
                setCart(response.data.products)
            })
            .catch((error) => {
                console.log(error);
            })
    }

    const handleCheckoutClick = () => {
        if (cart) {
            navigate('checkout')
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