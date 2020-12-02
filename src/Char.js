import react, { Fragment } from 'react'
import './char.scss';
import chardetailsimg from './assets/movieboxhover.svg'
import CharModal from './CharModal';

const Char = ({image, name, turnModal, modalStatus}) => {

    const showModal = () => modalStatus ? 

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
                    <div className= 'pin-button' onClick={turnModal}>Details</div>
                    <div className='pin-mark'><img src={chardetailsimg}/></div>
                </div>
            </div>
            <div className='char-name'>
                {name}
            </div> 
        </div> 
        <CharModal />
        </Fragment>
    )
}

export default Char;