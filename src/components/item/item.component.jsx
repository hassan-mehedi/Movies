import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./item.style.scss";

export default function MovieDescription(props) {
    const { title, id } = useParams();
    const navigate = useNavigate();
    const [movie, setMovie] = useState({});

    const fetchData = async (title, id) => {
        const response = await fetch(
            `https://v2.sg.media-imdb.com/suggestion/${title[0].toLowerCase()}/${title.toLowerCase()}.json`
        );
        const data = await response.json();
        const movies = data.d;
        const movie = movies.find((movie) => movie.id === id);
        setMovie(movie);
    };

    const backToMoviesHandler = () => {
        navigate("/");
    };

    useEffect(() => {
        fetchData(title, id);
    }, []);

    console.log(movie);

    return (
        <div className="movie-description-container">
            <div className="image">
                <img
                    src={
                        movie.hasOwnProperty("i")
                            ? movie.i.imageUrl
                            : "/no_image.jpg"
                    }
                    alt={movie.l}
                />
            </div>
            <div className="description">
                <h1>{movie.l}</h1>
                <p>Cast By: {movie.s}</p>
                <h4>{movie.y}</h4>
                <button className="return-button" onClick={backToMoviesHandler}>
                    Back to Movies
                </button>
            </div>
        </div>
    );
}
