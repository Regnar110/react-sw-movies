import React, { Fragment } from 'react'; 
import './boxnavbar.scss';

const BoxNavbar = ({menuFunction, placeholder, placeholderFunction, searchContent}) => {
    return(
        <Fragment>
        <div className="nav-container">
            <div className="burger" onClick={menuFunction}>
                    <div className="bun top"></div>
                    <div className="filling"></div>
                    <div className="bun bottom"></div>
            </div>
            <div className='boxSearch-container'>
                <input id='boxSearch' placeholder={placeholder} onChange={searchContent}/>
            </div>
        </div>
        <nav className='nav-menu'>
                <div className='menu-item' id='start' onClick={placeholderFunction}>Start</div>
                <div className='menu-item' id='movies' onClick={placeholderFunction}>Movies</div>
                <div className='menu-item' id='characters' onClick={placeholderFunction}>Characters</div>
                <div className='menu-item' id='species' onClick={placeholderFunction}>Species</div>
            </nav>
    </Fragment>
    )
}

export default BoxNavbar;