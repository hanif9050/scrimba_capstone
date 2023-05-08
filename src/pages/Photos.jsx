import React,{ useContext } from "react"
import { Context } from "../Context"
import Image from "../components/Image"
import { getClass } from "../utils"
import "../App.css"


function Photos(){
    const {allPhotos}=useContext(Context)
    // const newPhotos=allPhotos.slice(0,3)
    const imageUrl=allPhotos.map((img,i)=>(<Image key={img.id} img={img} className={getClass(i)}/>))
    // console.log(newPhotos)
    return (
        <main className="photos">
           
            {imageUrl}
        </main>
    )
}

export default Photos