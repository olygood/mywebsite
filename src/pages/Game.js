import React from 'react'
import Navigation from '../components/Navigation'
import Card from '../components/Card'
const Game = ()=>{
    return(
        <div className="game">
           <Navigation />
            <div className="game-card">
            <Card />
            <Card />
            <Card />
            </div>
          
            
        </div>
    )
}
export default Game;