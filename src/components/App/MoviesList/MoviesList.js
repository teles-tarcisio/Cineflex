import "./MoviesList.css";

export default function MoviesList() {
  const allMoviesList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  
  return(
    <ul className="movies-list">
      {allMoviesList.map((movie, index) => (
        <li className="movie-card" key={index}>
          {movie}
        </li>)
      )}
    </ul>

  );
}