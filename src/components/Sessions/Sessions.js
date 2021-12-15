import "./Sessions.css";
import "../MoviesList/MoviesList.css";

import { Link } from 'react-router-dom';


const movieSessions = {
  "id": 19,
  "title": "Project Power",
  "posterURL": "https://image.tmdb.org/t/p/w500/TnOeov4w0sTtV2gqICqIxVi74V.jpg",
  "overview": "An ex-soldier, a teen and a cop collide in New Orleans as they hunt for the source behind a dangerous new pill that grants users temporary superpowers.",
  "releaseDate": "2020-08-14T00:00:00.000Z",
  "days": [
    {
      "id": 24022022,
      "weekday": "Quinta-feira",
      "date": "24/02/2022",
      "showtimes": [
        {
          "name": "15:00",
          "id": 289
        },
        {
          "name": "19:00",
          "id": 290
        }
      ]
    },
    {
      "id": 25022022,
      "weekday": "Sexta-feira",
      "date": "25/02/2022",
      "showtimes": [
        {
          "name": "15:00",
          "id": 291
        },
        {
          "name": "19:00",
          "id": 292
        }
      ]
    },
    {
      "id": 26022022,
      "weekday": "Sábado",
      "date": "26/02/2022",
      "showtimes": [
        {
          "name": "15:00",
          "id": 293
        },
        {
          "name": "19:00",
          "id": 294
        }
      ]
    },
    {
      "id": 27022022,
      "weekday": "Domingo",
      "date": "27/02/2022",
      "showtimes": [
        {
          "name": "15:00",
          "id": 295
        },
        {
          "name": "19:00",
          "id": 296
        }
      ]
    },
    {
      "id": 28022022,
      "weekday": "Segunda-feira",
      "date": "28/02/2022",
      "showtimes": [
        {
          "name": "15:00",
          "id": 297
        },
        {
          "name": "19:00",
          "id": 298
        }
      ]
    },
    {
      "id": 1032022,
      "weekday": "Terça-feira",
      "date": "01/03/2022",
      "showtimes": [
        {
          "name": "15:00",
          "id": 299
        },
        {
          "name": "19:00",
          "id": 300
        }
      ]
    },
    {
      "id": 2032022,
      "weekday": "Quarta-feira",
      "date": "02/03/2022",
      "showtimes": [
        {
          "name": "15:00",
          "id": 301
        },
        {
          "name": "19:00",
          "id": 302
        }
      ]
    },
    {
      "id": 3032022,
      "weekday": "Quinta-feira",
      "date": "03/03/2022",
      "showtimes": [
        {
          "name": "15:00",
          "id": 303
        },
        {
          "name": "19:00",
          "id": 304
        }
      ]
    }
  ]
};


export default function Sessions() {
  const { title, posterURL, days } = movieSessions;

  return (
    <>
      <ul className="movie-days">
        {days.map((session, index) => (
          <li className="day-date" id={session.id} key={index} >
            <p>{session.weekday} - {session.date}</p>
            <ul className="day-hours">
              {session.showtimes.map((time) => (
                <Link to={`/assentos/${time.id}`}>
                  <li className="session-time" id={time.id} key={time.id}>
                    <p>{time.name}</p>
                  </li>
                </Link>
              ))}
            </ul>
          </li>))
        }
      </ul>

      <footer>
        <div className="footer-info">
          <img className="poster" src={posterURL} alt={title} />
        </div>
        <p>{title}</p>
      </footer>
    </>
  );
}