import React from 'react'
import './moviebox.scss';
import movieboxhover from './assets/movieboxhover.svg'
import sith from './assets/movie-images/sithrevenge.jpg';

const MovieBox = () => {
    
    return (
        <div className='movie-box' style={{
            backgroundImage: `url(${sith})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
            }}>
            <div className='movie-image'> {/*kontener spychający footer na dół i zawierający pin*/}
                <div className='movie-details-pin'>
                    <div className='pin-button'>See more</div>
                    <div className='pin-mark'><img src={movieboxhover} alt='click-icon'/></div>
                </div>
            </div>
            <div className='box-footer'>
                <div className='upper'>Star Wars</div>
                <div className='bottom'>Revenge of the Sith</div>
            </div>
        </div>
    )
}

export default MovieBox;