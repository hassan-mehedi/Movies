import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./item.style.scss";

export default function MovieDescription(props) {
    const { id } = useParams();
    const navigate = useNavigate();
    const [movie, setMovie] = useState({});

    const fetchData = async (id) => {
        const response = await fetch(
            `https://imdb-api.com/en/API/Title/k_0hl1y74n/${id}`
        );
        const data = await response.json();
        setMovie(data);
    };

    const backToMoviesHandler = () => {
        navigate("/");
    };

    useEffect(() => {
        fetchData(id);
    }, []);

    return (
        <div className="movie-description-container">
            <div className="image">
                <img src={movie.image} alt={movie.title} />
            </div>
            <div className="description">
                <h1>{movie.title}</h1>
                <p>Plot: {movie.plot}</p>
                <h4>{movie.year}</h4>
                <button className="return-button" onClick={backToMoviesHandler}>
                    Back to Movies
                </button>
            </div>
        </div>
    );
}
