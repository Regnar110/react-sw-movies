import React, { Fragment } from 'react'; 
import './boxnavbar.scss';

const BoxNavbar = ({menuFunction, placeholder, placeholderFunction}) => {
    return(
        <Fragment>
        <div className="nav-container">
            <div className="burger" onClick={menuFunction}>
                    <div className="bun top"></div>
                    <div className="filling"></div>
                    <div className="bun bottom"></div>
            </div>
            <div className='boxSearch-container'>
                <input id='boxSearch' placeholder={placeholder}/>
            </div>
        </div>
        <nav className='nav-menu'>
                <div className='menu-item' id='home' onClick={placeholderFunction}>Home</div>
                <div className='menu-item' id='movies' onClick={placeholderFunction}>Movies</div>
                <div className='menu-item' id='characters' onClick={placeholderFunction}>Characters</div>
                <div className='menu-item' id='species' onClick={placeholderFunction}>Species</div>
                <div className='menu-item' id='actors' onClick={placeholderFunction}>Actors</div>
            </nav>
    </Fragment>
    )
}

export default BoxNavbar;