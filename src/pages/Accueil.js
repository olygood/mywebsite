import React from 'react'
import Navigation from '../components/Navigation'
import { NavLink } from 'react-router-dom'
import Logo from '../components/Logo'
import Footer from '../components/Footer'

const Accueil = ()=>{
    return(
        <div className="accueil">
            
                <div>  
                    <h2>vous êtes dans mon Accueil</h2>
                    <p>jdsklfmjhsdklfjksdlhgklmhfl,flm,fls,dfdfgdfgfdg;=n;=njlj</p>  
                </div>
             <div>
                <Logo />
             </div> 
             <Footer />           
            
               
        </div>
    )
}
export default Accueil;