import { Link } from "react-router-dom";

import "../MoviesList/MoviesList_styles.js";
import "./Success_styles.js";


export default function Success() {
  const reservation = {
    movieTitle: "Project Power",
    sessionDate: "24/02/2022",
    sessionTime: "19:00",
    seats: [14474, 14473, 14475, 14476],
    name: "João da Silva Sauro",
    cpf: "22464246409"
  };

  return (
    <>
      <div className="order-summary">
        <div className="movie-session">
          <h2>Filme e sessão</h2>
          <p>{reservation.movieTitle}</p>
          <p>{reservation.sessionDate} - {reservation.sessionTime}</p>
        </div>

        <div className="tickets">
          <h2>Ingressos</h2>
          {reservation.seats.map((seat) => (
            <p>Assento {seat}</p>
          ))}          
        </div>
      
        <div className="success-buyer-data">
        <h2>Comprador</h2>
        <p>Nome: {reservation.name}</p>
        <p>CPF: {reservation.cpf}</p>
        </div>
      </div>

      <SCBackToHome to="/" >
        <p>Voltar pra Home</p>
      </SCBackToHome>

    </>
  );
}