import React, {useContext,useState} from "react"
import {Context} from "../Context"
import PropTypes from "prop-types"
import useHover from "../hooks/useHover"


function CartItem({item}){
    const [hover,ref]=useHover()
    const {removeCart} = useContext(Context)
    // const [hover,setHover]=useState(false)
    
    const iconClassName = hover ? "ri-delete-bin-fill" : "ri-delete-bin-line";
    

    return(
        <div className="cart-item">
            <i className={iconClassName}
             onClick={()=>removeCart(item.id)}
             ref={ref}
             ></i>
            <img src={item.url} width="130px"/>
            <p>$5.99</p>
        </div>
    )
}
CartItem.prototypes={
    item:PropTypes.shape({
        url:PropTypes.string.isRequired
    })
}
export default CartItem;