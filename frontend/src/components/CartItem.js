import React from "react";
import '../styles/CartItem.css'

/**
 * CartItem component displays the details of a single item in the shopping cart,
 * including its image, title, price, quantity, discount information, and totals.
 * 
 * @component
 * @param {Object} item - The item object containing details about the cart item.
 * @param {number} item.discountPercentage - The discount percentage applied to the item.
 * @param {number} item.discountedTotal - The total price after applying the discount.
 * @param {number} item.id - The unique identifier of the item.
 * @param {number} item.price - The unit price of the item.
 * @param {number} item.quantity - The quantity of the item in the cart.
 * @param {string} item.thumbnail - The URL of the item's thumbnail image.
 * @param {string} item.title - The title or name of the item.
 * @param {number} item.total - The total price before applying the discount.
 */
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