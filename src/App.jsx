import "./App.css";
import { useMovies } from "./hooks/useMovies.js";
import {Movies} from "./components/Movies.jsx";


function App() {

  const { movies } = useMovies();

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
