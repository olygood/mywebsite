import React from 'react';
import {NavLink} from 'react-router-dom'
import '../styles/index.css'

const Navigation = () => {
    return (
        <div className="navigation navigation-active">
            <NavLink exact to="/" activeClassName="navigation-active">Accueil</NavLink>
            <NavLink exact to="Ui" activeClassName="navigation-active" >Ui</NavLink>
            <NavLink exact to="Game" activeClassName="navigation-active" >Game</NavLink>
            <NavLink exact to="Cv" activeClassName="navigation-active" >Cv</NavLink>
            <NavLink exact to="Contact" activeClassName="navigation-active" >Contact</NavLink>
        </div>
    );
};

export default Navigation;