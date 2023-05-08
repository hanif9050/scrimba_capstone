import React from "react";
import "../App.css"

function Image({img,className}){
    return(
        <div className= {`${className} image-container`}>
          <img src={img.url} alt="" className="image-grid" />
        </div>
    )
}

export default Image;