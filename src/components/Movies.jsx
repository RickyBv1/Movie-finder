function listOfMovies({ movies }) {
  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.iD}>
          <h3>{movie.title}</h3>
          <p>{movie.year}</p>
          <img src={movie.poster} alt={movie.Title} />
        </li>
      ))}
    </ul>
  );
}

function noMoviesResults() {
  return <p>No results found</p>;
}

export function Movies({ movies }) {
  const hasMovies = movies?.length > 0;

  return hasMovies ? listOfMovies({ movies }) : noMoviesResults();
}
