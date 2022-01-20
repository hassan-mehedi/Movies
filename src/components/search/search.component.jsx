import React, { useState } from "react";
import "./search.style.scss";

export default function Search({ handler, error }) {
    const [value, setValue] = useState("");
    return (
        <div className="search">
            <h1>Search Movies</h1>
            <div>
                <input
                    type="text"
                    className="search-field"
                    placeholder="Search"
                    onInput={(e) => setValue(e.target.value)}
                />
                <button
                    onClick={(e) => {
                        handler(value);
                    }}
                    className="search-button"
                >
                    Search
                </button>
            </div>
            {error && (
                <p className="search-error-message">
                    Please search a valid title
                </p>
            )}
        </div>
    );
}
