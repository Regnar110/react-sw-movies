import React, { Component } from 'react';
import MovieBox from './MovieBox'
import Loading from './Loading'
import MovieModal from './MovieModal'
import {moviesImages} from './moviesImages'

class Movies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            moviesArr: [],
            movieSearchValue: '' 
        }
    }

    searchChange = () => { 
        const searchBox = document.querySelector('#boxSearch');
        searchBox.addEventListener('input', e => {
            this.setState({movieSearchValue: e.target.value})
        })
    }

    getData = async () =>{ 
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

            const filmsWithImages = films.map((element, i) => {
                element.image = moviesImages[i].img;
                return element
            })

            this.setState({moviesArr: filmsWithImages})
        }
    }

    componentDidMount() { 
        this.getData();
        this.searchChange();
    }

    render() {
        const {moviesArr, movieSearchValue} = this.state;

        const filteredMovies = moviesArr.filter(movie =>{ 
            return movie.title.toLowerCase().includes(movieSearchValue.toLowerCase());
          })

        return moviesArr.length !== 6 ? 
          <Loading /> 
          :
        (
            <div className='section-container'>
                <h1 className='section-header'> Movies </h1>
                <div className='section-wrapper'>
                {
                    filteredMovies.map(({...props}, i) => {
                        return(
                                <MovieBox key={i} {...props} func={this.boxOnclick}>
                                    <MovieModal key={i}/>
                                </MovieBox>
                        )
                    })
                }
                </div>
            </div>
        )
    }
}
export default Movies;
