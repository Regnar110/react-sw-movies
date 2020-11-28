import React from 'react';
import './start.scss';
import fightimg from './assets/sw-fight.png';

const Home = () => {
    return(
        <div className='section-container'>
            <h1 className='section-header'> Start </h1>
            <div className='home-wrapper'>
                <div className='description'>
                Press the button in the upper left corner of the window under the logo to open the menu and navigate through the site. Browse through the different categories to find out everything you need to know about the STAR WARS movies, including all sorts of interesting information about genres, characters and actors. May the force be with you!
                </div>
                <div className='home-image'>
                    <div className='home-image-border'>
                        <img src={fightimg} alt='vader'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;