import React, {useContext} from "react"
import {Context} from "../Context"


function CartItem({item}){
    const {removeCart} = useContext(Context)
console.log(removeCart)
    return(
        <div className="cart-item">
            <i className="ri-delete-bin-line" onClick={()=>removeCart(item.id)}></i>
            <img src={item.url} width="130px"/>
            <p>$5.99</p>
        </div>
    )
}

export default CartItem;