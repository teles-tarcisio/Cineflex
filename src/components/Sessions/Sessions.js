import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';


import { SCFooter, SCFooterInfo } from '../MoviesList/MoviesList_styles';
import { SCMovieDays, SCDayDate, SCDayHours, SCSessionTime } from './Sessions_styles.js';

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
      <SCMovieDays>
        {days.map((session, index) => (
          <SCDayDate id={session.id} key={index} >
            <p>{session.weekday} - {session.date}</p>
            <SCDayHours>
              {session.showtimes.map((time) => (
                <Link to={`/assentos/${time.id}`}>
                  
                  <SCSessionTime id={time.id} key={time.id}>
                    <p>{time.name}</p>
                  </SCSessionTime>
                
                </Link>
              ))}
            </SCDayHours>
          </SCDayDate>
        ))}
      </SCMovieDays>

      <SCFooter>
        <SCFooterInfo>
          <img className="poster" src={posterURL} alt={title} />
        </SCFooterInfo>
        <p>{title}</p>
      </SCFooter>
    </>
  );
}