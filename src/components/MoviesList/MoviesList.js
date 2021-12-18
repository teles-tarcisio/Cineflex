import axios from 'axios';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { SCMoviesList, SCMovieCard } from './MoviesList_styles';

const MOVIESLIST_URL = "https://mock-api.driven.com.br/api/v4/cineflex/movies";

export default function MoviesList() {
  const [allMoviesList, setMoviesList] = useState([]);
  
  const getAllMovies = (
    () => {
      const promise = axios.get(MOVIESLIST_URL);
      promise.then( response => {
        setMoviesList([...response.data]);
      });
    }
  );
  useEffect(getAllMovies, []);
  
  return (
    <SCMoviesList>
      {allMoviesList.map((movie, index) => (
        <Link to={`/sessoes/${movie.id}`}>
          <SCMovieCard key={index} id={movie.id}>
            <img className="poster" src={movie.posterURL} alt={movie.title} />
          </SCMovieCard>
        </Link>
      ))}
    </SCMoviesList>
  );
}