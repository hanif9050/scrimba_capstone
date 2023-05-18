import React,{useContext, useState} from "react";
import { Context } from "../Context";
import PropTypes from "prop-types"
import "../App.css"
import useHover from "../hooks/useHover";
function Image({img,className}){
  const [hover,ref]=useHover()
  const {toggleFavorite,addToCart,cartItem,removeCart}=useContext(Context)
  
  const heart=()=>{
    if(img.isFavorite){
      return <i className="ri-heart-fill favorite" onClick={()=>toggleFavorite(img.id)}></i>
    }else if(hover){
 return <i className="ri-heart-line favorite" onClick={()=>toggleFavorite(img.id)}></i>
    }
  } 
  
  function cartIcon(){
    const alreadyInCart=cartItem.some(item=>item.id===img.id)
    if(alreadyInCart){
      return <i className="ri-shopping-cart-fill cart" onClick={()=>removeCart(img.id)}></i>
    }else if(hover){
      return <i className="ri-add-circle-line cart" onClick={()=>addToCart(img)}></i>
    }
    
  }
    return(
        <div className= {`${className} image-container`} ref={ref}>
          <img src={img.url} alt="" className="image-grid" />
          {heart() }
          {cartIcon()}
        </div>
    )
}
Image.prototypes ={
  className:PropTypes.string,
  img:PropTypes.shape({
    id:PropTypes.string.isRequired,
    url:PropTypes.string.isRequired,
    isFavorite:PropTypes.bool
  })
}
export default Image;