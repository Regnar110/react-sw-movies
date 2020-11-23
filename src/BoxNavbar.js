import React, { Fragment } from 'react'; 
import './boxnavbar.scss';

const BoxNavbar = ({menuFunction, placeholder}) => {
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
                <div className='menu-item' id='movies'>Movies</div>
                <div className='menu-item' id='characters'>Characters</div>
                <div className='menu-item' id='species'>Species</div>
                <div className='menu-item' id='actors'>Actors</div>
            </nav>
    </Fragment>
    )
}

export default BoxNavbar;