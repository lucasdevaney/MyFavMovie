import React from "react";
import noImage from "../no-image.png";
import { GoArrowLeft } from "react-icons/go";

const MovieInfo = (props) => {
    return (
        <div className="container-movie-info">
            <div className="back" onClick={props.closeMovieInfo}>
                <a href="#"><GoArrowLeft />
                 Go back</a>
            </div>
            <div className="row">
                <img 
                    src={props.currentMovie.poster_path == null ? noImage : `https://image.tmdb.org/t/p/w400${props.currentMovie.poster_path}`} 
                    alt="Movie Poster" 
                    style={{ width: "100%", height: 360 }} 
                />
            </div>
            <div className="info-container">
                <p className="info-title">{props.currentMovie.title}</p>
                <p>{props.currentMovie.release_date}</p>
                <p>{props.currentMovie.overview}</p>
            </div>
        </div>
    );
};

export default MovieInfo;
