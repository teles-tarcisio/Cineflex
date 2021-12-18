import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';


import { scMoviesList, scMovieCard, scFooter, scFooterInfo } from '../MoviesList/MoviesList_styles';
import { scMovieDays, scDayDate, scDayHours, scSessionTime } from './Sessions_styles.js';

const MOVIESESSIONS_URL = "https://mock-api.driven.com.br/api/v4/cineflex/movies/";

export default function Sessions() {
  const [movieSessions, setMovieSessions] = useState({days:[]});
  const params = useParams();

  const getMovieSessions = (
    () => {
      const promise = axios.get(MOVIESESSIONS_URL + `${params.movieID}/showtimes`);
      promise.then( response => {
        setMovieSessions(response.data);} )
    }
  );

  useEffect(getMovieSessions, []);
  const { title, posterURL, days } = movieSessions;

  return (
    <>
      <scMovieDays>
        {days.map((session, index) => (
          <scDayDate id={session.id} key={index} >
            <p>{session.weekday} - {session.date}</p>
            <scDayHours>
              {session.showtimes.map((time) => (
                <Link to={`/assentos/${time.id}`}>
                  
                  <scSessionTime id={time.id} key={time.id}>
                    <p>{time.name}</p>
                  </scSessionTime>
                
                </Link>
              ))}
            </scDayHours>
          </scDayDate>
        ))};
      </scMovieDays>

      <scFooter>
        <scFooterInfo>
          <img className="poster" src={posterURL} alt={title} />
        </scFooterInfo>
        <p>{title}</p>
      </scFooter>
    </>
  );
}