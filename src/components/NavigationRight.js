import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faGamepad } from '@fortawesome/free-solid-svg-icons';
// import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { faDigitalTachograph} from '@fortawesome/free-solid-svg-icons';
const NavigationRight = () => {
    return (
        <div className="navigationRight">
               <h2> Partage</h2>
                <br/>
               <ul>
                    <FontAwesomeIcon icon={faDigitalTachograph} />
                        <li><a href="https://github.com/olygood">Github</a></li>
                            <br/>
                    <FontAwesomeIcon icon={faGamepad} />
                        <li><a href=" https://itch.io/games/free">Itch.io</a></li>
                            <br/>
                </ul>
             
            
        </div>
    );
};

export default NavigationRight;