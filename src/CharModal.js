import React from 'react';
import './charModal.scss'

const CharModal = ({show, hide, image, height, mass, gender, homeworld, wiki, born, bornLocation, died, diedLocation, species, hairColor, eyeColor, skinColor, cybernetics, affiliations, masters, apprentices, formerAffiliations}) => {
    const showHideClassName = show ? "char-modal-container modal-active" : "char-modal-container";
    return (
        <div className={showHideClassName}>
            <div className='char-modal-content'>
                <div className='img' style={{
                    backgroundImage: `url(${image})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                    }}>
                </div>
                <div className='char-details'>

                    <div className='details-one'>
                        <div className='dt-one char-height'>
                            <div className='char-detail-header'>Height:</div>
                            <div className='char-data'>{height}</div>
                        </div>
                        <div className='dt-one  char-mass'>
                            <div className='char-detail-header'>Mass:</div>
                            <div className='char-data'>{mass}</div>
                        </div>
                        <div className='dt-one  char-gender'>
                            <div className='char-detail-header'>Gender:</div>
                            <div className='char-data'>{gender}</div>
                        </div>
                        <div className='dt-one  char-homeworld'>
                            <div className='char-detail-header'>Homeworld:</div>
                            <div className='char-data'>{homeworld}</div>
                        </div>
                        <div className='dt-one  char-born'>
                            <div className='char-detail-header'>Birth:</div>
                            <div className='char-data'>{born}</div>
                        </div>
                        <div className='dt-one  char-bornLocation'>
                            <div className='char-detail-header'>Birth location:</div>
                            <div className='char-data'>{bornLocation}</div>
                        </div>
                        <div className='dt-one  char-die'>
                            <div className='char-detail-header'>Died:</div>
                            <div className='char-data'>{died}</div>
                        </div>
                        <div className='dt-one  char-dieLocation'>
                            <div className='char-detail-header'>Died location:</div>
                            <div className='char-data'>{diedLocation}</div>
                        </div>
                        <div className='dt-one  char-species'>
                            <div className='char-detail-header'>Species:</div>
                            <div className='char-data'>{species}</div>
                        </div>
                        <div className='dt-one  char-hairColor'>
                            <div className='char-detail-header'>Hair color:</div>
                            <div className='char-data'>{hairColor}</div>
                        </div>
                        <div className='dt-one  char-eyeColor'>
                            <div className='char-detail-header'>Eye color:</div>
                            <div className='char-data'>{eyeColor}</div>
                        </div>
                        <div className='dt-one char-skinColor'>
                            <div className='char-detail-header'>Skin color:</div>
                            <div className='char-data'>{skinColor}</div>
                        </div>
                        <div className='dt-one char-cybernetics'>
                            <div className='char-detail-header'>Cybernetics:</div>
                            <div className='char-data'>{cybernetics}</div>
                        </div>
                    </div>

                    <div className='details-two'>
                        <div className='dt-two char-affiliations'>
                            <div className='char-detail-header'>Affiliations:</div>  
                            <div className='char-multi-data'>
                                {
                                    affiliations.map(element => {
                                    return (
                                        <div className='multi-data'>{element}</div>
                                    )                                    
                                })
                                }
                            </div>
                        </div>
                        <div className='dt-two char-masters'>
                            <div className='char-detail-header'>Masters:</div>
                            <div className='char-multi-data'>
                                {   
                                    masters.map(element => {
                                    return (
                                        <div className='multi-data'>{element}</div>
                                    )                                    
                                })
                                }
                            </div>
                        </div>
                        <div className='dt-two char-apprentices'>
                            <div className='char-detail-header'>Apprentices:</div>
                            <div className='char-multi-data'>
                                {
                                    apprentices.map(element => {
                                    return (
                                        <div className='multi-data'>{element}</div>
                                    )                                    
                                })
                                }
                            </div>
                        </div>
                        <div className='dt-two char-formerAffiliations'>
                            <div className='char-detail-header'>Former affiliations:</div>
                                <div className='char-multi-data'>
                                {                                    
                                    formerAffiliations.map(element => {
                                        return (
                                            <div className='multi-data'>{element}</div>
                                        )                                    
                                    })
                                }
                                </div>
                        </div>
                    </div>
                    <div className='buttons'>
                        <div className='close-modal'>
                            <button className='modal-btn' onClick={hide}>close</button>
                        </div>
                        <div className='wiki-button'>
                            <button className='modal-btn'><a href={wiki}>More</a></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CharModal;