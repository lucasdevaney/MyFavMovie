import React from "react";
import noImage from "../no-image.png";

const MovieCard = ({ movie, viewMovieInfo }) => {
    return (
        <div className="movie">
            <div>
                <p>{movie.release_date}</p>
            </div>

            <div>
                <img
                    src={movie.poster_path !== null ? `https://image.tmdb.org/t/p/w400${movie.poster_path}` : noImage}
                    alt={movie.title}
                />
            </div>
            <div className="card-content">
                <p><a href="#" onClick={() => viewMovieInfo(movie.id)}>VIEW DETAILS</a></p>
                <h3>{movie.title}</h3>
            </div>
        </div>
    )
}

export default MovieCard;

