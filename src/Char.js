import  React, { Component, Fragment } from 'react'
import './char.scss';
import chardetailsimg from './assets/movieboxhover.svg'
import CharModal from './CharModal';

class Char extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        }
    }

    showModal = () => {
        const navBar = document.querySelector('.nav-container')
        const navMenu = document.querySelector('.nav-menu')
        navBar.style.zIndex = '0'
        navMenu.style.zIndex = '0'
        this.setState({modal: true})
    }

    hideModal = () => {
        const navBar = document.querySelector('.nav-container')
        const navMenu = document.querySelector('.nav-menu')
        navBar.style.zIndex = '1'
        navMenu.style.zIndex = '2'
        this.setState({modal: false})
    }

    render() {

        const {id, image, name, height, mass, gender, homeworld, wiki, born, bornLocation, died, diedLocation, species, hairColor, eyeColor, skinColor, cybernetics, affiliations, masters, apprentices, formerAffiliations} = this.props
        const {modal} = this.state;
        return(
            <Fragment>
            <div className='char-container'  style={{
                backgroundImage: `url(${image})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
                }}>
                <div className='char-img'>
                    <div className='details-pin'>
                        <div className= 'pin-button' onClick={this.showModal}>Details</div>
                        <div className='pin-mark'><img src={chardetailsimg} alt='character'/></div>
                    </div>
                </div>
                <div className='char-name'>
                    {name}
                </div> 
            </div>
            <CharModal key={id} show={modal} hide={this.hideModal} height={height} mass={mass} gender={gender} homeworld={homeworld} wiki={wiki} image={image} born={born} bornLocation={bornLocation} died={died} diedLocation={diedLocation} species={species} hairColor={hairColor} eyeColor={eyeColor} skinColor={skinColor} cybernetics={cybernetics} affiliations={affiliations} masters={masters} apprentices={apprentices} formerAffiliations={formerAffiliations}/>
            </Fragment>
        )
    }
}

export default Char;