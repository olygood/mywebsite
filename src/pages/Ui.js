import React from 'react'
import Navigation from '../components/Navigation'
import NavigationLeft from '../components/NavigationLeft';
import NavigationRight from '../components/NavigationRight';
import Footer from '../components/Footer'
import Contenu_Ui from '../components/Contenu_Ui'

const Ui = ()=>{
    return(
        
        <div className="ui">
                <Navigation />
                <NavigationLeft />
                <Contenu_Ui />
                <NavigationRight />
                <Footer />
                
           
        </div>
      
    )
}
export default Ui;