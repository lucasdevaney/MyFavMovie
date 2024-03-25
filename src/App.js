import React, { useState, useEffect } from "react";
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from "./MovieCard";

const API_KEY = "25aa57baf48dd93d47823cfb941b255c";
const API_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}`;

/*
const movie1 = {

    "title": "Kung Fu Panda 4",
    //"poster_path":"/wkfG7DaExmcVsGLR4kLouMwxeT5.jpg",
    "poster_path": "N/A",
    "release_date": "2024-03-02",
}
*/

const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');


    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&query=${title}`);
        const data = await response.json();
        setMovies(data.results);
        
    }

    useEffect(() => {
        searchMovies('Panda');
    }, []);

    return (
        <div className="app">
            <h1>MovieLand</h1>

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

            {
                movies?.length > 0
                ? (
                <div className="container">
                {movies.map((movie) => (
                    <MovieCard movie={movie} />     
            ))}
            </div>
            ) : (
                <div className="empty">
                    <h2>No movies found</h2>

                </div>
            )
            }

            

        </div >
    );
}

export default App;
