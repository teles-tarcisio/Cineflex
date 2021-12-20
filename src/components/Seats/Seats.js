import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Link } from "react-router-dom";

import Seat from "./Seat.js";

import { SCSeatsList, SCSeatCard, SCSeatsVisualKey, SCBuyerData} from './Seats_styles.js';
import { SCFooter, SCFooterInfo } from '../MoviesList/MoviesList_styles.js';

const SESSIONSEATS_URL = "https://mock-api.driven.com.br/api/v4/cineflex/showtimes/";


export default function Seats() {
  const params = useParams();

  const [sessionData, setSessionData] = useState({movie:{}, day:{}, seats:[]});
  const [localSeats, setLocalSeats] = useState([]);    
  
  function updateLocalSeats(newSessionData) {
    const newLocalSeats = newSessionData.seats.map((seat) => ({...seat, selected: false}));
    console.log('new :', newLocalSeats);
    setLocalSeats(newLocalSeats);
  }

  const updateSessionData = (
    () => {
    const promise = axios.get(SESSIONSEATS_URL + `${params.sessionID}/seats`);
    promise.then( response => {
      setSessionData(response.data);
      updateLocalSeats(response.data);
    });
    promise.catch((error) => console.log(error));
  });
  
  useEffect(updateSessionData, []);

  
  return(
    <>
      <SCSeatsList>
      {console.log('local: ', localSeats)}
        {localSeats.map((seat, index) => (
          <Seat seat={seat} index={index} />
        ))}
      </SCSeatsList>

      <SCSeatsVisualKey>
                <SCSeatCard isSelected={true}>Selecionado</SCSeatCard>
                <SCSeatCard isSelected={false}>Disponível</SCSeatCard>
                <SCSeatCard isAvailable={false}>Indisponível</SCSeatCard>
      </SCSeatsVisualKey>

      <SCBuyerData id="buyer-data">
        <label for="buyer-name">Nome do comprador:</label>
        <input type="text" id="buyer-name" name="buyer-name" placeholder="Digite seu nome..." />

        <label for="buyer-cpf">CPF do comprador:</label>
        <input type="text" id="buyer-cpf" name="buyer-cpf" placeholder="Digite seu CPF..." />

        <Link to="/sucesso">
          <p>Reservar assento(s)</p>
        </Link>
      </SCBuyerData>

      <SCFooter>
        <SCFooterInfo>
          <img className="poster"
          src={sessionData.movie.posterURL} alt={sessionData.movie.title} />
          </SCFooterInfo>
          <p>{sessionData.movie.title} <br></br> {sessionData.day.weekday} - {sessionData.name}</p>
      </SCFooter>
    
    </>
  );
}