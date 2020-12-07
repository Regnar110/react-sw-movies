import { Component } from 'react';
import Char from './Char';
import Loading from './Loading'
import CharModal from './CharModal'

class Characters extends Component {
    constructor() {
        super();
        this.state = {
            charactersArr: [],
            characterSearchValue: ''
        }
    }

    getData = async () =>{ // funkcja ściągająca dane z API (swapi) i umieszczająca je w stanie charactersArr
        let chars = this.state.charactersArr;

        try{
            for(let i=1;i<=87;i++) {
                if(i !== 17) { // pozycja 17 w api nie istnieje dlatego jest tutaj if aby pominąć tą pozycję
                    let response =  await fetch('https://akabab.github.io/starwars-api/api/id/'+i+'.json')
                    let data = await response.json();    
                    if('masters' in data) {
                        data.masters = [data.masters].flat(1); //metoda flat usuwa dodatkowe zagnieżdżenie bo niektóre klucze posiadające tablicę otrzymywały dodatkowy nesting.
                        data.apprentices = [data.apprentices].flat(1)
                        chars.push(data)
                    } else if(!('masters' in data)) {
                        data.masters = ['----']
                        data.apprentices = ['----']
                        chars.push(data)
                    }              
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

    render() {
        const {charactersArr, characterSearchValue} = this.state;
        const filteredCharacters = charactersArr.filter(character =>{
            return character.name.toLowerCase().includes(characterSearchValue.toLowerCase());
        })
        return charactersArr.length !== 86 ?
            <Loading /> 
            :
            (
            <div className='section-container'>
                <h1 className='section-header'> Characters </h1>
                <div className='section-wrapper'>
                    {
                        filteredCharacters.map( ({id, ...otherProps}) => {
                            return(
                                <Char key={id} {...otherProps}>
                                    <CharModal key={id} />
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