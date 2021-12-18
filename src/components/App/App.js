import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';

import MoviesList from '../MoviesList/MoviesList.js';
import Sessions from '../Sessions/Sessions.js';
import Seats from '../Seats/Seats.js';
import Success from '../Success/Success.js';


function InfoBox({children, type}) {
  return (
    <>
      <scInfoBox>
        {type === 'movie' ? <h1>Selecione o filme</h1> : ''}
        {type === 'session' ? <h1>Selecione o horário</h1> : ''}
        {type === 'seats' ? <h1>Selecione o(s) assento(s)</h1> : ''}
        {type === 'reservation' ? <h1>Pedido feito com sucesso!</h1> : ''}
      </scInfoBox>
      {children}      
    </>
  );
}

export default function App() {

  return (
    <BrowserRouter>
      <scHeader>
        <h1>CINEFLEX</h1>
      </scHeader>

      <scMainContainer>
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
      </scMainContainer>
    </BrowserRouter >
  );
}




const scHeader = styled.header`
  margin: 0;
  width: 100%;
  height: 67px;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #C3CFD9;
  z-index: 10;
  & h1 {
    margin: auto;
    font-weight: 400;
    font-size: 34px;
    line-height: 40px;
    color: #E8833A;
  }
`;

const scMainContainer = styled.div`
  width: 100%;
  margin: 67px auto auto auto;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const scInfoBox = styled.div`
  width: 100%;
  height: 110px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  color: #293845;
`;