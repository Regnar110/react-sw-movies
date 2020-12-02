import React from 'react';
import './charModal.scss'
import sith from './assets/movie-images/sithrevenge.jpg';

const CharModal = () => {
    return (
        <div className='char-modal-container'>
            <div className='char-modal-content'>
                <div className='img' style={{
                    backgroundImage: `url(${sith})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                    }}>
                </div>
                <div className='char-details'>

                    <div className='details-one'>
                        <div className='dt-one char-height'>
                            <div className='char-detail-header'>Height:</div>
                            <div className='char-data'>1.72</div>
                        </div>
                        <div className='dt-one  char-mass'>
                            <div className='char-detail-header'>Mass:</div>
                            <div className='char-data'>73</div>
                        </div>
                        <div className='dt-one  char-gender'>
                            <div className='char-detail-header'>Gender:</div>
                            <div className='char-data'>male</div>
                        </div>
                        <div className='dt-one  char-homeworld'>
                            <div className='char-detail-header'>Homeworld:</div>
                            <div className='char-data'>tatooine</div>
                        </div>
                        <div className='dt-one  char-born'>
                            <div className='char-detail-header'>Birth:</div>
                            <div className='char-data'>-19</div>
                        </div>
                        <div className='dt-one  char-bornLocation'>
                            <div className='char-detail-header'>Birth location:</div>
                            <div className='char-data'>polis massa</div>
                        </div>
                        <div className='dt-one  char-die'>
                            <div className='char-detail-header'>Died:</div>
                            <div className='char-data'>34</div>
                        </div>
                        <div className='dt-one  char-dieLocation'>
                            <div className='char-detail-header'>Died location:</div>
                            <div className='char-data'>ahch-to</div>
                        </div>
                        <div className='dt-one  char-species'>
                            <div className='char-detail-header'>Species:</div>
                            <div className='char-data'>human</div>
                        </div>
                        <div className='dt-one  char-hairColor'>
                            <div className='char-detail-header'>Hair color:</div>
                            <div className='char-data'>blond</div>
                        </div>
                        <div className='dt-one  char-eyeColor'>
                            <div className='char-detail-header'>Eye color:</div>
                            <div className='char-data'>blue</div>
                        </div>
                        <div className='dt-one char-skinColor'>
                            <div className='char-detail-header'>Skin color:</div>
                            <div className='char-data'>light</div>
                        </div>
                        <div className='dt-one char-cybernetics'>
                            <div className='char-detail-header'>Cybernetics:</div>
                            <div className='char-data'>Prosthetic right hand</div>
                        </div>
                    </div>

                    <div className='details-two'>
                        <div className='dt-two char-affiliations'>
                            <div className='char-detail-header'>Affiliations:</div>  
                            <div className='char-multi-data'>
                                <div className='multi-data'>Alliance to Restore the Republic</div>
                                <div className='multi-data'>Red Squadron</div>
                                <div className='multi-data'>Red Squadron</div>
                                <div className='multi-data'>Red Squadron</div>
                                <div className='multi-data'>Red Squadron</div>
                            </div>
                        </div>
                        <div className='dt-two char-masters'>
                            <div className='char-detail-header'>Masters:</div>
                            <div className='char-multi-data'>
                                <div className='multi-data'>Obi</div>
                                <div className='multi-data'>Obi</div>
                                <div className='multi-data'>Obi</div>
                            </div>
                        </div>
                        <div className='dt-two char-apprentices'>
                            <div className='char-detail-header'>Apprentices:</div>
                            <div className='char-multi-data'>
                                <div className='multi-data'>Leila</div>
                                <div className='multi-data'>Leila</div>
                                <div className='multi-data'>Leila</div>
                                <div className='multi-data'>Leila</div>
                            </div>
                        </div>
                        <div className='dt-two char-formerAffiliations'>
                            <div className='char-detail-header'>Former affiliations:</div>
                                <div className='char-multi-data'>
                                    none
                                </div>
                        </div>
                    </div>
                    <div className='buttons'>
                        <div className='close-modal'>
                            <button className='modal-btn'>close</button>
                        </div>
                        <div className='wiki-button'>
                            <button className='modal-btn'>More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CharModal;