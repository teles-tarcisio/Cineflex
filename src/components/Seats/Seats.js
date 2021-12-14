import "./Seats.css";

import Seat from "./Seat.js";

const sessionData = {
  "id": 290,
  "name": "19:00",
  "day": {
    "id": 24022022,
    "weekday": "Quinta-feira",
    "date": "24/02/2022"
  },
  "movie": {
    "id": 19,
    "title": "Project Power",
    "posterURL": "https://image.tmdb.org/t/p/w500/TnOeov4w0sTtV2gqICqIxVi74V.jpg",
    "overview": "An ex-soldier, a teen and a cop collide in New Orleans as they hunt for the source behind a dangerous new pill that grants users temporary superpowers.",
    "releaseDate": "2020-08-14T00:00:00.000Z"
  },
  "seats": [
    {
      "id": 14451,
      "name": "1",
      "isAvailable": true
    },
    {
      "id": 14452,
      "name": "2",
      "isAvailable": true
    },
    {
      "id": 14453,
      "name": "3",
      "isAvailable": true
    },
    {
      "id": 14454,
      "name": "4",
      "isAvailable": true
    },
    {
      "id": 14455,
      "name": "5",
      "isAvailable": true
    },
    {
      "id": 14456,
      "name": "6",
      "isAvailable": true
    },
    {
      "id": 14457,
      "name": "7",
      "isAvailable": true
    },
    {
      "id": 14458,
      "name": "8",
      "isAvailable": true
    },
    {
      "id": 14459,
      "name": "9",
      "isAvailable": true
    },
    {
      "id": 14460,
      "name": "10",
      "isAvailable": true
    },
    {
      "id": 14461,
      "name": "11",
      "isAvailable": true
    },
    {
      "id": 14462,
      "name": "12",
      "isAvailable": true
    },
    {
      "id": 14463,
      "name": "13",
      "isAvailable": true
    },
    {
      "id": 14464,
      "name": "14",
      "isAvailable": true
    },
    {
      "id": 14465,
      "name": "15",
      "isAvailable": true
    },
    {
      "id": 14466,
      "name": "16",
      "isAvailable": true
    },
    {
      "id": 14467,
      "name": "17",
      "isAvailable": true
    },
    {
      "id": 14468,
      "name": "18",
      "isAvailable": true
    },
    {
      "id": 14469,
      "name": "19",
      "isAvailable": true
    },
    {
      "id": 14470,
      "name": "20",
      "isAvailable": true
    },
    {
      "id": 14471,
      "name": "21",
      "isAvailable": true
    },
    {
      "id": 14472,
      "name": "22",
      "isAvailable": true
    },
    {
      "id": 14473,
      "name": "23",
      "isAvailable": true
    },
    {
      "id": 14474,
      "name": "24",
      "isAvailable": true
    },
    {
      "id": 14475,
      "name": "25",
      "isAvailable": true
    },
    {
      "id": 14476,
      "name": "26",
      "isAvailable": true
    },
    {
      "id": 14477,
      "name": "27",
      "isAvailable": true
    },
    {
      "id": 14478,
      "name": "28",
      "isAvailable": true
    },
    {
      "id": 14479,
      "name": "29",
      "isAvailable": true
    },
    {
      "id": 14480,
      "name": "30",
      "isAvailable": true
    },
    {
      "id": 14481,
      "name": "31",
      "isAvailable": true
    },
    {
      "id": 14482,
      "name": "32",
      "isAvailable": true
    },
    {
      "id": 14483,
      "name": "33",
      "isAvailable": true
    },
    {
      "id": 14484,
      "name": "34",
      "isAvailable": true
    },
    {
      "id": 14485,
      "name": "35",
      "isAvailable": true
    },
    {
      "id": 14486,
      "name": "36",
      "isAvailable": true
    },
    {
      "id": 14487,
      "name": "37",
      "isAvailable": true
    },
    {
      "id": 14488,
      "name": "38",
      "isAvailable": true
    },
    {
      "id": 14489,
      "name": "39",
      "isAvailable": true
    },
    {
      "id": 14490,
      "name": "40",
      "isAvailable": true
    },
    {
      "id": 14491,
      "name": "41",
      "isAvailable": true
    },
    {
      "id": 14492,
      "name": "42",
      "isAvailable": true
    },
    {
      "id": 14493,
      "name": "43",
      "isAvailable": true
    },
    {
      "id": 14494,
      "name": "44",
      "isAvailable": true
    },
    {
      "id": 14495,
      "name": "45",
      "isAvailable": true
    },
    {
      "id": 14496,
      "name": "46",
      "isAvailable": true
    },
    {
      "id": 14497,
      "name": "47",
      "isAvailable": true
    },
    {
      "id": 14498,
      "name": "48",
      "isAvailable": true
    },
    {
      "id": 14499,
      "name": "49",
      "isAvailable": true
    },
    {
      "id": 14500,
      "name": "50",
      "isAvailable": true
    }
  ]
};

export default function Seats() {

  const { movie, name, day, seats } = sessionData;

  return(
    <>
      <ul className="seats-list">
        {seats.map((seat, index) => (
          <Seat seat={seat} index={index} />
        ))}
      </ul>

      <div className="seats-visualkey">
                <li className="seat-card selected">Selecionado</li>
                <li className="seat-card available">Disponível</li>
                <li className="seat-card unavailable">Indisponível</li>
      </div>

      <form className="buyer-data" id="buyer-data">
        <label for="buyer-name">Nome do comprador:</label>
        <input type="text" id="buyer-name" name="buyer-name" placeholder="Digite seu nome..." />

        <label for="buyer-cpf">CPF do comprador:</label>
        <input type="text" id="buyer-cpf" name="buyer-cpf" placeholder="Digite seu CPF..." />

        <div className="reserve-seats">
          <p>Reservar assento(s)</p>
        </div>
      </form>

      <footer>
        <div className="footer-info">
          <img className="poster"
          src={movie.posterURL} alt={movie.title} />
          </div>
          <p>{movie.title} <br></br> {day.weekday} - {name}</p>
      </footer>
    
    </>
  );
}