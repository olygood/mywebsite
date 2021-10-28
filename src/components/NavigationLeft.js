import React from 'react';
import { NavLink } from 'react-router-dom'
const NavigationLeft = () => {
    return (
        <div className="navigation-left">
                <img src="./assets/rtrans.png" />
                <ul>
                <li><a href="https://github.com/olygood">Github</a></li>
                </ul>
              {/* <NavLink exact to="https://github.com/olygood" activeClassName="navigation-left-active">Github</NavLink> */}
              <p>vive react</p>
        </div>
    );
};

export default NavigationLeft;