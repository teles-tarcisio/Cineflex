import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

import MoviesList from "../MoviesList/MoviesList.js";
import Sessions from "../Sessions/Sessions.js";
import Seats from "../Seats/Seats.js";
import Success from "../Success/Success.js";


function InfoBox({children, type}) {
  return (
    <>
      <div className="information-box">
        {type === 'movie' ? <h1>Selecione o filme</h1> : ''}
        {type === 'session' ? <h1>Selecione o horário</h1> : ''}
        {type === 'seats' ? <h1>Selecione o(s) assento(s)</h1> : ''}
        {type === 'reservation' ? <h1>Pedido feito com sucesso!</h1> : ''}
      </div>
      {children}      
    </>
  );
}

export default function App() {

  return (
    <BrowserRouter>
      <header><h1>CINEFLEX</h1></header>

      <div className="main-container">
        <Routes>
          <Route path="/" element={
            <InfoBox type={'movie'}>
              <MoviesList />
            </InfoBox>}
          />
          
          <Route path="/sessoes/:movieID" element={
            <InfoBox type={'session'}>
              <Sessions />
            </InfoBox>}           
          />
  

          <Route path="/assentos/:sessionID" element={
            <InfoBox type={'seats'}>
              <Seats />
            </InfoBox>}
          />
  
          <Route path="/sucesso" element={
            <InfoBox type={'reservation'}>
              <Success />
            </InfoBox>}
          />         

        </Routes>
      </div>
    </BrowserRouter >
  );
}