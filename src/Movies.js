import React from 'react';
import './movies.scss';
import MovieBox from './MovieBox'

const Movies = () => {
    let movies = []; // tablica do której zostają zpushowane obiekty z filmami.
    
    const getData = async () => { // ?????
        let response =  await fetch('https://swapi.dev/api/films/'+ i + '/')
        let data = await response.json();
        movies.push(data)
        return
            <div>{data.name}</div>
        )
    }
    (async () => { // funkcja typu self-calling sprowadzająca Obiekty JSON i przerabiająca je na obiekty JS. Pushuje do tablicy movies
        for(let i=1;i<=6;i++) {
            let response =  await fetch('https://swapi.dev/api/films/'+ i + '/')
            let data = await response.json();
            movies.push(data)
        }
    })();
    console.log(movies)

    return(
        <div className='section-container'>
            <h1 className='section-header'> Movies </h1>
            <div className='movies-wrapper'>
                <MovieBox />
                <MovieBox />
                <MovieBox />
            </div>
        </div>
    )
}

export default Movies;