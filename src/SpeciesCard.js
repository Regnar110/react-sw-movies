import React, { useState } from 'react';
import './speciescard.scss'

const SpeciesCard = ({image, name, language, average_height, average_lifespan, classification, skin_colors, eye_colors, homeworld}) => {

    let [home, setHome] = useState([]);

    (async  () => { 
        const resp = await fetch(homeworld)
        const data = await resp.json();
        setHome(home = data.name)
    })()

    return(
        <div className='card'>
            <div className='card-content' style={{
                backgroundImage: `url(${image})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}>
                <div className='specie-name'>
                    <div>{name}</div>
                    <div className='instruction'>hover/click on card for details</div>
                </div>
            </div>
            <div className='hidden-shell'>
                <div className='shell-data'>
                    <div className='header'>Name:</div>
                    <div className='response'>{name}</div>
                </div>
                <div className='shell-data'>
                    <div className='header'>Classification:</div>
                    <div className='response'>{classification}</div>
                </div>
                <div className='shell-data'>
                    <div className='header'>Language:</div>
                    <div className='response'>{language}</div>
                </div>
                <div className='shell-data'>
                    <div className='header'>Homeworld:</div>
                    <div className='response'>{home}</div>
                </div>
                <div className='shell-data'>
                    <div className='header'>Av. height:</div>
                    <div className='response'>{average_height}</div>
                </div>
                <div className='shell-data'>
                    <div className='header'>Av. lifespan:</div>
                    <div className='response'>{average_lifespan}</div>
                </div>
                <div className='shell-data'>
                    <div className='header'>Skin Color:</div>
                    <div className='response'>{skin_colors}</div>
                </div>
                <div className='shell-data'>
                    <div className='header'>Eye Color:</div>
                    <div className='response'>{eye_colors}</div>
                </div>
            </div>
        </div>
    )
}

export default SpeciesCard;