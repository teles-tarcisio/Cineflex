import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Link } from "react-router-dom";

import Seat from "./Seat.js";

import { SCSeatsList, SCSeatCard, SCSeatsVisualKey, SCBuyerData} from './Seats_styles.js';
import { SCFooter, SCFooterInfo } from '../MoviesList/MoviesList_styles.js';

const SESSIONSEATS_URL = "https://mock-api.driven.com.br/api/v4/cineflex/showtimes/";


export default function Seats() {
  const [sessionData, setSessionData] = useState({movie:{}, day:{}, seats:[]});
  const [localSeats, setLocalSeats] = useState([]);
  
  const { movie, name, day, seats } = sessionData;
  
  const params = useParams();

  const getSessionData = (
    () => {
      const promise = axios.get(SESSIONSEATS_URL + `${params.sessionID}/seats`);
      promise.then( response => {
        setSessionData(response.data);
      });
    }
  );

  useEffect(getSessionData, []);


  function updateLocalSeats(event) {
    //console.log(event);
    console.log('antes :', localSeats);
    const newLocalSeats = sessionData.seats.map((seat) => ({...seat, chosen: false}));
    setLocalSeats(newLocalSeats);
    console.log('depois :', localSeats);   
    
  }

  return(
    <>
      {console.log('from api :', sessionData)}
      {console.log('localSeats :', localSeats)}
      <SCSeatsList>
        {seats.map((seat, index) => (
          <Seat seat={seat} index={index} />
        ))}
      </SCSeatsList>

      <SCSeatsVisualKey>
                <SCSeatCard onClick={updateLocalSeats}>Selecionado</SCSeatCard>
                <SCSeatCard>Props aqui</SCSeatCard>
                <SCSeatCard>Indisponível</SCSeatCard>
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
          src={movie.posterURL} alt={movie.title} />
          </SCFooterInfo>
          <p>{movie.title} <br></br> {day.weekday} - {name}</p>
      </SCFooter>
    
    </>
  );
}