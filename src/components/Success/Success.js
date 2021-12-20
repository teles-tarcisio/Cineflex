import axios from 'axios';
import { Link } from "react-router-dom";
import { useEffect } from 'react/cjs/react.development';

import "../MoviesList/MoviesList_styles.js";
import { SCOrderSummary, SCBackToHome } from "./Success_styles.js";

const RESERVESEATS_URL = "https://mock-api.driven.com.br/api/v4/cineflex/seats/book-many"

export default function Success({reservation}) {
  
  useEffect(() => {
    const finalOrder = {
      ids: reservation.seats,
      name: reservation.name,
      cpf: reservation.cpf
    }
    const promise = axios.post(RESERVESEATS_URL, finalOrder);
    promise.then(console.log);
    promise.catch(console.log);
  }, []);
  
  return (
    <>
      <SCOrderSummary>
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
      </SCOrderSummary>

      <SCBackToHome>
        <Link to="/" >
        <p>Voltar pra Home</p>
        </Link>
      </SCBackToHome>

    </>
  );
}