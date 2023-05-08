import '../App.css'
import { Link } from 'react-router-dom'
import { Context } from '../Context'
import { useContext } from 'react'
function Header(){
    const value=useContext(Context)
    return(
        <header>
            <Link to="/"><h2>Pic Some </h2></Link>
            <Link to="/cart"><i className="ri-shopping-cart-line ri-fw ri-2x"></i></Link>
            
        </header>
    )
}

export  default Header