import axios from 'axios';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { scMoviesList, scMovieCard, scFooter, scFooterInfo } from './MoviesList_styles.js';

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
    <scMoviesList>
      {allMoviesList.map((movie, index) => (
        <Link to={`/sessoes/${movie.id}`}>
          <scMovieCard key={index} id={movie.id}>
            <img className="poster" src={movie.posterURL} alt={movie.title} />
          </scMovieCard>
        </Link>
      ))}
    </scMoviesList>
  );
}