import React from "react";
import "./search.style.scss";

export default function Search({ handler }) {
    return (
        <div className="search">
            <h1>Search Movies</h1>
            <input
                type="text"
                className="search-field"
                placeholder="Search"
                onChange={(e) => {
                    handler(e.target.value);
                }}
            />
            <p className="search-error-message">Incorrect IMDb ID.</p>
        </div>
    );
}
