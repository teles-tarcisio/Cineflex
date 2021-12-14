import "./Sessions.css";
import "../MoviesList/MoviesList.css";

export default function Sessions() {
  const allMovieSessions = [];

  return(
    <>
      <ul className="movie-days">
        <li className="day-date">
          
          <p>session.weekday - session.date</p>
          
          <ul className="day-hours">
            <li className="session-time">
              <p>time.name</p>
            </li>
            <li className="session-time">
              <p>time.name</p>
            </li>
            <li className="session-time">
              <p>time.name</p>
            </li>
          </ul>

        </li>
        <li className="day-date">
          
          <p>session.weekday - session.date</p>
          
          <ul className="day-hours">
            <li className="session-time">
              <p>time.name</p>
            </li>
            <li className="session-time">
              <p>time.name</p>
            </li>
            <li className="session-time">
              <p>time.name</p>
            </li>
            <li className="session-time">
              <p>time.name</p>
            </li>
            <li className="session-time">
              <p>time.name</p>
            </li>
          </ul>

        </li>
      </ul>
      <footer>
        <div className="footer-info">
          <img className="poster" src="posterURL" alt="title" />
        </div>
        <p>title</p>
      </footer>
      
    </>
  );
}