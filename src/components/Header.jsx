import '../App.css'
import { Link } from 'react-router-dom'
import { Context } from '../Context'
import { useContext } from 'react'
function Header(){
    const {cartItem}=useContext(Context)
    const cart=cartItem.length>0 ?"ri-shopping-cart-fill ri-fw ri-2x":"ri-shopping-cart-line ri-fw ri-2x"
    return(
        <header>
            <Link to="/"><h2>Pic Some </h2></Link>
            <Link to="/cart"><i className={cart}></i></Link>
            
        </header>
    )
}

export  default Header