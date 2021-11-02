import React from 'react'
import Navigation from '../components/Navigation'
import { NavLink } from 'react-router-dom'
import Logo from '../components/Logo'
import Footer from '../components/Footer'
import NavigationLeft from '../components/NavigationLeft'
import NavigationRight from '../components/NavigationRight'
import Contenu_Accueil from '../components/Contenu_Accueil'

const Accueil = ()=>{
    return(
        <div className="accueil">
        <Navigation />
            <NavigationLeft />  
            <Contenu_Accueil />
               <NavigationRight />
               <Footer />
        </div>
    )
}
export default Accueil;