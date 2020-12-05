import {Component} from 'react';
import { speciesImages } from './speciesImages';
import SpeciesCard from './SpeciesCard'

class Species extends Component {
    constructor() {
        super();
        this.state = {
            speciesArr: []
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
               return element;
            })
            this.setState({speciesArr: speciesArrWithImages}, () => {
                console.log(this.state.speciesArr)
            })
        }
    }

    componentDidMount() {
        this.getData();
    }


    render() {
        const {speciesArr} = this.state;
        return (
            <div className='section-container'>
                <h1 className='section-header'> Species </h1>
                <div className='section-wrapper'>
                    {
                        speciesArr.map(element => {
                            return (
                                <SpeciesCard image={element.image}/>
                            )
                        })
                    }
                </div>
            </div>
        )

    } 
}

export default Species;