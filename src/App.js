import { React, useEffect, useState } from 'react'
import './App.css'
import SeacrhIcon from './search.svg'
import Moviecard from './Moviecard';
// fa17ff9e

const API_URL = 'http://www.omdbapi.com?apikey=fa17ff9e';


const App = () => {

    const [movies, setMovies] = useState([])
    const [searchTerm, setSearchTerm] = useState('')

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json();
        setMovies(data.Search);
    }

    useEffect(() => {
        searchMovies('Spiderman');
    }, [])

    return (
        <div className='app'>
            <h1>MovieApp</h1>
            <div className='search'>
                <input
                    placeholder='search for movies'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)} />
                <img src={SeacrhIcon}
                    alt='search'
                    onClick={() => searchMovies(searchTerm)} />
            </div>
            {
                movies?.length > 0
                    ? (
                        <div className='container'>
                            {movies.map((movie) =>
                                <Moviecard movie={movie} />
                            )}
                        </div>
                    )
                    : (
                        <div className='empty'>
                            <h2>No Movies Found</h2>
                        </div>
                    )
            }
        </div>
    );
}
export default App;