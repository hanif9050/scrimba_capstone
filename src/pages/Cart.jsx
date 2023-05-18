import React,{useContext,useState} from "react"
import {Context} from "../Context"
import CartItem from "../components/CartItem"

function Cart(){
    const [buttonText,setButton]=useState("Place Order")
    const {cartItem,emptyCart}=useContext(Context)
    const totalCost= 5.99 * cartItem.length;
    const totalCostDisplay= totalCost.toLocaleString("bn-BD",{style:"currency",currency:"BDT"})
    const cartEl=cartItem.map(item=>(
        <CartItem key={item.id} item={item}/>
    ))
    const placeOrder=()=>{
        setButton("Ordering...")
        setTimeout(()=>{
            setButton("Place Order")
            emptyCart()
        },3000)
    }
    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {cartEl}
            <p className="total-cost">Total:{totalCostDisplay}</p>
           {
            cartItem.length>0?
             <div className="order-button">
                <button onClick={placeOrder}>{buttonText}</button>
            </div>:
            <p>You have no items in your cart.</p>
           }
        </main>
    )
}
export default Cart