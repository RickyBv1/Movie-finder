import { useState } from "react";
import "./App.css";
import responseMovies from "./mocks/withResults.json";
import withoutResults from "./mocks/withoutResults.json";

function App() {

  const movies = responseMovies.Search;
  const hasMovies = movies.length > 0;

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
      {
        hasMovies
          ? (
            <ul>
              {
                movies.map(movie => (
                  <li key={movie.imdbID}>
                    <h3>{movie.Title}</h3>
                    <p>{movie.Year}</p>
                    <img src={movie.Poster} alt={movie.Title} />
                  </li>
                ))
              }
            </ul>
          )
          : (
            <p>No results found</p>
          )
      }
    </main>
    </div>
  );
}

export default App;
