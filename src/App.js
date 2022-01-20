import "./App.css";
import { useState, useEffect } from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Search from "./components/search/search.component";
import List from "./components/list/list.component";
import MovieDescription from "./components/item/item.component";

function App() {
    const [listData, setListData] = useState([]);
    const [error, setError] = useState(false);

    // Firt time the list is empty, so we need to add some data
    // This function is called only once to fill the list with batman movies
    const startingMovieList = async () => {
        const response = await fetch(
            `https://imdb-api.com/en/API/Top250Movies/k_0hl1y74n`
        );
        const data = await response.json();
        setListData(data.items);
    };

    // This function is called everytime the user types something in the search bar
    const searchHandler = async (value) => {
        const response = await fetch(
            `https://imdb-api.com/en/API/SearchMovie/k_0hl1y74n/${value}`
        );
        const data = await response.json();
        if (data.results.length === 0) {
            setError(true);
        } else {
            setError(false);
            setListData(data.results);
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
                                <Search handler={searchHandler} />
                                <List listData={listData} error={error} />
                            </>
                        }
                    ></Route>
                    <Route
                        path="/movie/:id"
                        element={<MovieDescription />}
                    ></Route>
                </Routes>
            </Router>
        </main>
    );
}

export default App;
