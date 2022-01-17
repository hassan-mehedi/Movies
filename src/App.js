import "./App.css";
import { useState, useEffect } from "react";
import Search from "./components/search/search.component";
import List from "./components/list/list.component";

function App() {
    const [listData, setListData] = useState([]);
    const [error, setError] = useState(false);

    // Firt time the list is empty, so we need to add some data
    // This function is called only once to fill the list with batman movies
    const startingMovieList = async () => {
        const response = await fetch(`/suggestion/b/batman.json`, {
            method: "GET",
            mode: "cors",
            headers: {
                "Content-Type":
                    "application/x-www-form-urlencoded; charset=UTF-8",
            },
        });
        const data = await response.json();
        setListData(data.d);
    };

    // This function is called everytime the user types something in the search bar
    const searchHandler = async (value) => {
        console.log(value);
        const response = await fetch(
            `/suggestion/${value[0].toLowerCase()}/${value.toLowerCase()}.json`
        );
        const data = await response.json();
        console.log(data);
        if (data.hasOwnProperty("d")) {
            setError(false);
            setListData(data.d);
        } else {
            setError(true);
        }
    };

    useEffect(() => {
        startingMovieList();
    }, []);

    return (
        <div className="App">
            <Search handler={searchHandler} error={error} />
            <List listData={listData} />
        </div>
    );
}

export default App;
