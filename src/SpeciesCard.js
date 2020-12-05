import React from 'react';
import './speciescard.scss'

const SpeciesCard = ({image}) => {
    console.log(image)
    return(
        <div className='card-container' style={{
            backgroundImage: `url(${image})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
            }}>

        </div>
    )
}

export default SpeciesCard;