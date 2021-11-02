import React from 'react'
import Navigation from '../components/Navigation'
import { NavLink } from 'react-router-dom'
import Logo from '../components/Logo'
import Footer from '../components/Footer'
import NavigationLeft from '../components/NavigationLeft'
import NavigationRight from '../components/NavigationRight'
const Accueil = ()=>{
    return(
        <div className="accueil">
            <NavigationLeft />  
               <NavigationRight />
        </div>
    )
}
export default Accueil;