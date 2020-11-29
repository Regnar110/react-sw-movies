import React, { Component } from 'react';
import './movies.scss';
import MovieBox from './MovieBox'

class Movies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            moviesArr: [],
            searchValue: props.searchField
        }
    }

    getData = async () =>{ // funkcja ściągająca dane z API (swapi) i umieszczająca je w stanie moviesAarr
        let films = [];
        for(let i=1;i<=6;i++) {
            let response =  await fetch('https://swapi.dev/api/films/'+ i + '/')
            let data = await response.json();
            films.push(data);
            this.setState({moviesArr: films})
        }
    }

    componentDidMount() { // gdy komponent zostanie zamontowany uruchamia funkcję pobierającą dane z API(swapi)
        this.getData();
    }

    render() {
        const {moviesArr} = this.state;

        return(
            <div className='section-container'>
                <h1 className='section-header'> Movies </h1>
                <div className='movies-wrapper' onClick={this.show}>
                {
                    moviesArr.map((element, i) => {
                        return(
                            <MovieBox key={i} title={element.title} func={this.boxOnclick}/>
                        )
                    })
                }
                </div>
            </div>
        )
    }
}
export default Movies;
