import { useState } from "react";
import "./App.css";
import responseMovies from "./mocks/withResults.json";
import withoutResults from "./mocks/withoutResults.json";
import {Movies} from "./components/Movies.jsx";

function App() {
  const movies = responseMovies.Search;

  return (
    <div className="page">
      <header>
        <h1>Movie Finder</h1>
        <form className="form">
          <input placeholder="Star Wars, Harry Potter, Lord of the Rings, etc." />
          <button type="submit">Search</button>
        </form>
      </header>

      <main>
        <Movies movies={movies} />
      </main>
    </div>
  );
}

export default App;
