import React from 'react'
import {Context} from '../Context'
import CartItem from '../Components/CartItem'

export default function Cart() {

    const {cartItems, removeFromCart} = React.useContext(Context)

    const cartItemElements = cartItems.map(item => (
        <CartItem key={item.id} item={item} removeFromCart={removeFromCart}/>
    ))

    const totalCost = cartItems.length * 999;

    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {cartItemElements}
            <p className="total-cost">Total: {totalCost.toLocaleString("en-IN", {style: "currency", currency: "INR"})}</p>
            <div className="order-button">
                <button>Place Order</button>
            </div>
        </main>
    )
}