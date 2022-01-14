import "./App.css";
import { useState } from "react";
import Search from "./components/search/search.component";

function App() {
    const [search, setSearch] = useState("");
    const API_KEY = process.env.REACT_APP_API_KEY;
    const searchURL = `https://imdb-api.com/en/API/SearchMovie/${API_KEY}`;

    const searchHandler = async (value) => {
        setSearch(value);
        console.log(searchURL);
        const response = await fetch(`${searchURL}/${search}`);
        const data = await response.json();
        console.log(data);
        console.log(search);
    };

    return (
        <div className="App">
            <Search handler={searchHandler} />
        </div>
    );
}

export default App;
