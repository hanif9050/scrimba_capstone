import React,{useContext} from "react"
import {Context} from "../Context"
import CartItem from "../components/CartItem"

function Cart(){
    const {cartItem}=useContext(Context)
    const totalCost= 5.99 * cartItem.length;
    const totalCostDisplay= totalCost.toLocaleString("bn-BD",{style:"currency",currency:"BDT"})
    const cartEl=cartItem.map(item=>(
        <CartItem key={item.id} item={item}/>
    ))
    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {cartEl}
            <p className="total-cost">Total:{totalCostDisplay}</p>
            <div className="order-button">
                <button>Place Order</button>
            </div>
        </main>
    )
}
export default Cart