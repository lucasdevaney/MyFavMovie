import React, { useState, useEffect } from "react";
import './App.scss';
import SearchIcon from './search.svg';
import Logo from './logo.svg';
import MovieCard from "./Components/MovieCard";
import MovieInfo from './Components/MovieInfo';

const API_KEY = "25aa57baf48dd93d47823cfb941b255c";
const API_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}`;

const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [currentMovie, setCurrentMovie] = useState(null);

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&query=${title}`);
        const data = await response.json();
        setMovies(data.results);
    }

    useEffect(() => {
        searchMovies('Panda');
    }, []);

    const viewMovieInfo = (id) => {
        const filteredMovie = movies.filter(movie => movie.id === id);
        const newCurrentMovie = filteredMovie.length > 0 ? filteredMovie[0] : null;
        setCurrentMovie(newCurrentMovie);
    }

    const closeMovieInfo = () => {
        setCurrentMovie(null);
    }

    return (
        <div className="app">
            <img src={Logo} alt="Logo" />

            <div className="search">
                <input
                    placeholder="Search for movies"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <img
                    src={SearchIcon}
                    alt="search"
                    onClick={() => searchMovies(searchTerm)}
                />
            </div>

            {currentMovie ? ( 
                <MovieInfo currentMovie={currentMovie} closeMovieInfo={closeMovieInfo} />
            ) : (
                <div className="container">
                    {movies.length > 0 && movies.map((movie) => (
                        <MovieCard key={movie.id} movie={movie} viewMovieInfo={viewMovieInfo} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default App;

