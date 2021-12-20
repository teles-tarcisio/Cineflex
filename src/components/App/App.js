import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import '../../assets/index.css';

import InfoBox from '../InfoBox/InfoBox.js';
import MoviesList from '../MoviesList/MoviesList.js';
import Sessions from '../Sessions/Sessions.js';
import Seats from '../Seats/Seats.js';
import Success from '../Success/Success.js';

import { SCHeader, SCMainContainer } from './App_styles.js';

export default function App() {
  const [reservation, setReservation] = useState({
      movieTitle: "",
      sessionDate: "",
      sessionTime: "",
      seats: [],
      name: "",
      cpf: ""}
  );

  return (
    <BrowserRouter>
    {console.log('reservation: ', reservation)}
      <SCHeader>
        <h1>CINEFLEX</h1>
      </SCHeader>

      <SCMainContainer>
        <Routes>
          <Route path="/" element={
            <InfoBox type={'movie'}>
              <MoviesList />
            </InfoBox>}
          />
          
          <Route path="/sessoes/:movieID" element={
            <InfoBox type={'session'}>
              <Sessions setReservation={setReservation} />
            </InfoBox>}           
          />
  
          <Route path="/assentos/:sessionID" element={
            <InfoBox type={'seats'}>
              <Seats />
            </InfoBox>}
          />
  
          <Route path="/sucesso" element={
            <InfoBox type={'reservation'}>
              <Success reservation={reservation}/>
            </InfoBox>}
          />

        </Routes>
      </SCMainContainer>
    </BrowserRouter >
  );
}




