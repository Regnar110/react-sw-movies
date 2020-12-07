import React from 'react';
import './moviemodal.scss'

const MovieModal = ({show, hideModal, title, crawl, director, producer, relase}) => {

    const showHideClassName = show ? 'movie-modal-container modal-active' : 'movie-modal-container';

    return (
        <div className={showHideClassName}>
            <div className='movie-modal-content'>
                <div className='modal-data'>
                    <div className='data-header'>Director</div>
                    <div className='data'>{director}</div>
                </div>
                <div className='modal-data'>
                    <div className='data-header'>Producer</div>
                    <div className='data'>{producer}</div>
                </div>
                <div className='modal-data'>
                    <div className='data-header'>Relase Date</div>
                    <div className='data'>{relase}</div>
                </div>
            </div>
            <div className='openning-crawl'>
                <div className='play-button'>
                    <button>Click and play oppening crawl</button>
                </div>

                <div className="star-wars-intro">
                    <p className="intro-text">
                        A long time ago in galaxy far, far away....
                    </p>
                    <h2 className="main-logo">
                        <img src="img/star-wars-intro.png" />
                    </h2>
                    <div className="main-content">

                        <div className="title-content">
                            <p className="content-header">{title}</p>
                            <br />
                            <p className="content-body">
                                {crawl}
                            </p>
                        </div>
                    </div>
                </div>

            </div>
            <div className='close-button'>
                <button className='close-movie-modal' onClick={hideModal}>CLOSE</button>
            </div>
        </div>
    )
}

export default MovieModal;