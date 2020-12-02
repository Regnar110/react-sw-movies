import { Component, Fragment } from 'react';
import './characters.scss';
import Char from './Char';
import Loading from './Loading'
import CharModal from './CharModal'

class Characters extends Component {
    constructor() {
        super();
        this.state = {
            charactersArr: [],
            characterSearchValue: '',
            modal: false
        }
    }

    getData = async () =>{ // funkcja ściągająca dane z API (swapi) i umieszczająca je w stanie charactersArr
        let chars = this.state.charactersArr;
        try{
            for(let i=1;i<=87;i++) {
                if(i !== 17) { // pozycja 17 w api nie istnieje dlatego jest tutaj if aby pominąć tą pozycję
                    let response =  await fetch('https://akabab.github.io/starwars-api/api/id/'+i+'.json')
                    let data = await response.json();
                    chars.push(data);
                }
            }
        } catch {
            throw new Error('characters fetching error')
        } finally {
            this.setState({charactersArr: chars})
        }
    }


    searchChange = () => { // funkcja dodająca event listener z poziomu komponentu, który nie jeste rodzicem elementu do którego dodawany jest event listener. Pozwala to na dynamiczne uaktualnianie stanu searchValue na podstawie tego co jest wprowadzone w polu input.
        const searchBox = document.querySelector('#boxSearch');
        searchBox.addEventListener('input', e => {
            this.setState({characterSearchValue: e.target.value})
        })
    }

    componentDidMount() {
        this.searchChange();
        this.getData();
    }

    turnModal = () => {
        const {modal} = this.state;
        const modalContainer = document.querySelector('.char-modal-container');
        if(!modal){
          this.setState({modal: true})  
          modalContainer.classList.add('modal-active');
        } else {
            this.setState({modal:false})
            modalContainer.classList.remove('modal-active');
        }
    }

    render() {
        const {charactersArr, characterSearchValue, modal} = this.state;
        const filteredCharacters = charactersArr.filter(character =>{
            return character.name.toLowerCase().includes(characterSearchValue.toLowerCase());
        })
        return charactersArr.length !== 86 ?
            <Loading /> 
            :
            (
            <div className='section-container'>
                <h1 className='section-header'> Characters </h1>
                <div className='movies-wrapper'>
                    {
                        filteredCharacters.map((char,i) => {
                            return(
                                <Char key={char.id} name={char.name} image={char.image} turnModal={this.turnModal} modalStatus={modal}>
                                    <CharModal key={char.id} height={char.height} mass={char.mass} gender={char.gender} homeworld={char.homeworld} image={char.image} born={char.born} bornLocation={char.bornLocation} died={char.died} diedLocation={char.diedLocation} species={char.species} hairColor={char.hairColor} eyeColor={char.eyeColor} skin={char.skinColor} cybernetics={char.cybernetics} affiliations={char.affiliations} masters={char.masters} apprentices={char.apprentices} formerAffiliations={char.formerAffiliations}/>
                                </Char>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}


export default Characters;