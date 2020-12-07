import {Component} from 'react';
import { speciesImages } from './speciesImages';
import Loading from './Loading'
import SpeciesCard from './SpeciesCard'

class Species extends Component {
    constructor() {
        super();
        this.state = {
            speciesArr: [],
            speciesSearchValue: ''
        }
    }

    getData = async () => {
        let species = []
        try {
            for(let i = 1 ; i<=4; i++){
                const response = await fetch('http://swapi.dev/api/species/?page='+i)
                const jsonData = await response.json();
                species.push(jsonData.results);
            }
        } catch {
            throw new Error('species fetching error')
        } finally { 
            const newArr = species.flat(1); // nowa spłaszczona tablica
            const speciesArrWithImages = newArr.map((element, i) => { // dodawanie zdjęć do sprowadzonych obiektów ras. Zdjęcia dodane z obiektu speciesImages. Utworzona tablica jest tablcą gotową do wdrożenia.
               element.image = speciesImages[i].img;
               return element
            })

            this.setState({speciesArr: speciesArrWithImages})
        }
    }

    searchChange = () => { // funkcja dodająca event listener z poziomu komponentu, który nie jeste rodzicem elementu do którego dodawany jest event listener. Pozwala to na dynamiczne uaktualnianie stanu searchValue na podstawie tego co jest wprowadzone w polu input.
        const searchBox = document.querySelector('#boxSearch');
        searchBox.addEventListener('input', e => {
            this.setState({speciesSearchValue: e.target.value})
        })
    }

    componentDidMount() {
        this.getData();
        this.searchChange();
    }

    render() {
        const {speciesArr , speciesSearchValue} = this.state;
        const filteredSpecies = speciesArr.filter(specie => {
            return specie.name.toLowerCase().includes(speciesSearchValue.toLowerCase());
        })

        return speciesArr.length !== 37 ?

        <Loading /> :

        (
            <div className='section-container'>
            <h1 className='section-header'> Species </h1>
            <div className='section-wrapper'>
                {
                    filteredSpecies.map(({image, ...otherProps}, i) => {
                        return (
                            <SpeciesCard key={i} image={image} {...otherProps}/>
                        )
                    })
                }
            </div>
        </div>
        )
    } 
}

export default Species;