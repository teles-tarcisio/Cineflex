import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';


import Seat from './Seat.js';
import BuyerData from '../BuyerData/BuyerData.js';

import { SCSeatsList, SCSeatCard, SCSeatsVisualKey } from './Seats_styles.js';
import { SCFooter, SCFooterInfo } from '../MoviesList/MoviesList_styles.js';

const SESSIONSEATS_URL = "https://mock-api.driven.com.br/api/v4/cineflex/showtimes/";


export default function Seats({setReservation }) {
  const params = useParams();

  const [sessionData, setSessionData] = useState({ movie: {}, day: {}, seats: [] });
  const [localSeats, setLocalSeats] = useState([]);
  const [orderCopy, setOrderCopy] = useState({
    movieTitle: "",
    sessionDate: "",
    sessionTime: "",
    seats: [],
    name: "",
    cpf: ""
  });

  function updateSessionData(newSessionData) {
    const newLocalSeats = newSessionData.seats.map((seat) => ({ ...seat, selected: false }));
    setLocalSeats(newLocalSeats);
    
    const newOrderCopy = {
      ...orderCopy, movieTitle: newSessionData.movie.title,
      sessionDate: newSessionData.day.weekday,
      sessionTime: newSessionData.name
    };
    setOrderCopy(newOrderCopy);
  }

  const getSessionData = (
    () => {
      const promise = axios.get(SESSIONSEATS_URL + `${params.sessionID}/seats`);
      promise.then(response => {
        setSessionData(response.data);
        updateSessionData(response.data);
      });
      promise.catch((error) => console.log(error));
    });

  useEffect(getSessionData, []);
  console.log('ordercopy: ', orderCopy);
  return (
    <>
      <SCSeatsList>
        {localSeats.map((seat, index) => (
          <Seat seat={seat} index={index} orderCopy={orderCopy} setOrderCopy={setOrderCopy} />
        ))}
      </SCSeatsList>

      <SCSeatsVisualKey>
        <SCSeatCard isSelected={true}>Selecionado</SCSeatCard>
        <SCSeatCard isSelected={false}>Disponível</SCSeatCard>
        <SCSeatCard isAvailable={false}>Indisponível</SCSeatCard>
      </SCSeatsVisualKey>

      <BuyerData orderCopy={orderCopy} setOrderCopy={setOrderCopy} setReservation={setReservation}/>

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