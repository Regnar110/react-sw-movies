import React, { Fragment, useState } from 'react'
import './moviebox.scss';
import movieboxhover from './assets/movieboxhover.svg'
import MovieModal from './MovieModal'

const MovieBox = ({title, opening_crawl, director, producer, release_date, image}) => {

    let [modal, turnModal] = useState(false)

    const showModal = () => {
        const navBar = document.querySelector('.nav-container')
        const navMenu = document.querySelector('.nav-menu')
        navBar.style.zIndex = '0'
        navMenu.style.zIndex = '0'
        turnModal(modal = true)
    }

    const hideModal = () => {
        const navBar = document.querySelector('.nav-container')
        const navMenu = document.querySelector('.nav-menu')
        navBar.style.zIndex = '1'
        navMenu.style.zIndex = '2'
        turnModal(modal = false)
    }


    return (
        <Fragment>
        <div className='movie-box' style={{
            backgroundImage: `url(${image})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
            }}>
            <div className='movie-image'>
                <div className='movie-details-pin'>
                    <div className='pin-button' onClick={showModal}>See more</div>
                    <div className='pin-mark'><img src={movieboxhover} alt='click-icon'/></div>
                </div>
            </div>
            <div className='box-footer'>
                <div className='upper'>Star Wars</div>
                <div className='bottom'>{title}</div>
            </div>
        </div>
        <MovieModal show={modal} hideModal={hideModal} title={title} crawl={opening_crawl} director={director} producer={producer} relase={release_date}/>
        </Fragment>
    )
}

export default MovieBox;