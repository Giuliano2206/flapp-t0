import React from "react";
import '../styles/CartItem.css'

const CartItem = ( {item} ) => {
    const {discountPercentage, discountedTotal, id, price, quantity, thumbnail, title, total} = item;
    return(
        <div className="item-container">
            <div className="item-image">
                <img src={thumbnail} alt={title} />
            </div>
            <div className="item-info">
                <h3>{title}</h3>
                <p>Precio unitario: ${price}</p>
                <p>Cantidad: {quantity}</p>
                <p>Porcentaje de descuento: {discountPercentage}%</p>
                <p>Total: ${total}</p>
                <p>Total con descuento: ${discountedTotal}</p>
            </div>
        </div>
    )
}

export default CartItem;