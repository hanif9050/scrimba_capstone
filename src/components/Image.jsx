import React,{useContext, useState} from "react";
import { Context } from "../Context";
import "../App.css"

function Image({img,className}){
  const [hover,setHover]=useState(false)
  const {toggleFavorite}=useContext(Context)
  
  const heart=()=>{
    if(img.isFavorite){
      return <i className="ri-heart-fill favorite" onClick={()=>toggleFavorite(img.id)}></i>
    }else if(hover){
 return <i className="ri-heart-line favorite" onClick={()=>toggleFavorite(img.id)}></i>
    }
  } 
  const plus=hover === true ? <i className="ri-add-circle-line cart"></i>:""
    return(
        <div className= {`${className} image-container`} onMouseEnter={()=>setHover(true)
        } onMouseLeave={()=>setHover(false)}>
          <img src={img.url} alt="" className="image-grid" />
          {heart() }
          {plus}
        </div>
    )
}

export default Image;