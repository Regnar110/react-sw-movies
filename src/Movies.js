import React, { Component } from 'react';
import './movies.scss';
import MovieBox from './MovieBox'
import Loading from './Loading'

class Movies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            moviesArr: [],
            movieSearchValue: '' // stan uaktualniany na bierząco - znajduje się w nim to co jest wprowadzone w pole input.
        }
    }

    searchChange = () => { // funkcja dodająca event listener z poziomu komponentu, który nie jeste rodzicem elementu do którego dodawany jest event listener. Pozwala to na dynamiczne uaktualnianie stanu searchValue na podstawie tego co jest wprowadzone w polu input.
        const searchBox = document.querySelector('#boxSearch');
        searchBox.addEventListener('input', e => {
            this.setState({movieSearchValue: e.target.value})
        })
    }

    getData = async () =>{ // funkcja ściągająca dane z API (swapi) i umieszczająca je w stanie moviesAarr
        let films = [];
        try{
            for(let i=1;i<=6;i++) {
                let response =  await fetch('https://swapi.dev/api/films/'+ i + '/')
                let data = await response.json();
                films.push(data);
            }
        } catch {
            throw new Error('fetching films error')
        } finally {
            this.setState({moviesArr: films})
        }
    }

    componentDidMount() { // gdy komponent zostanie zamontowany uruchamia funkcję pobierającą dane z API(swapi) oraz funkcję dodającą event listener dla pola input wyszukiwania.
        this.getData();
        this.searchChange();
    }

    render() {
        const {moviesArr, movieSearchValue} = this.state;

        const filteredMovies = moviesArr.filter(movie =>{ // przefiltrowana tablica  moviesArr, do której zwracane są elementy najbardziej odpowiadające wartości pola wyszukiwania
            return movie.title.toLowerCase().includes(movieSearchValue.toLowerCase());
          })

        return moviesArr.length !== 6 ? 
          <Loading /> // komponent ładowania - wyświetlania do momentu aż nie załaduje się całkowita zawartość
          :
        (
            <div className='section-container'>
                <h1 className='section-header'> Movies </h1>
                <div className='movies-wrapper'>
                {
                    filteredMovies.map((element, i) => {
                        return(
                            <MovieBox key={i} title={element.title} func={this.boxOnclick} />
                        )
                    })
                }
                </div>
            </div>
        )
    }
}
export default Movies;
