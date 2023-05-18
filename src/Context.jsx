import React,{useState,useEffect} from "react";


const Context = React.createContext()


function ContextProvider(props){
    const [allPhotos,setAllPhotos]=useState([])
    const [cartItem,setCart]=useState([])
    const url="https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>setAllPhotos(data))
    },[])
   function toggleFavorite(id){
    const updateArr=allPhotos.map(photo=>{
        if(photo.id===id){
            
            return {...photo,isFavorite:!photo.isFavorite}
        }
        return photo
    })
    setAllPhotos(updateArr)
   }
   function addToCart(item){
        setCart(prev=>[...prev,item]) 
   }
   function removeCart(id){
    setCart(prev=>prev.filter(item=>item.id !== id))
   }
   
    return(
        <Context.Provider value={{allPhotos,toggleFavorite,addToCart,cartItem,removeCart}}>
{props.children}
        </Context.Provider>
    )
}
export {ContextProvider,Context}