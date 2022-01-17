import "./App.css";
import { useState, useEffect } from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Search from "./components/search/search.component";
import List from "./components/list/list.component";
import MovieDescription from "./components/item/item.component";

function App() {
    const [search, setSearch] = useState("");
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
        setSearch(value);
        const response = await fetch(
            `/suggestion/${search[0].toLowerCase()}/${search.toLowerCase()}.json`
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
        <main className="App">
            <Router>
                <Routes>
                    <Route
                        exact
                        path="/"
                        element={
                            <>
                                <Search handler={searchHandler} error={error} />
                                <List listData={listData} />
                            </>
                        }
                    ></Route>
                    <Route
                        path="/movie/:title/:id"
                        element={<MovieDescription />}
                    ></Route>
                </Routes>
            </Router>
        </main>
    );
}

export default App;
