import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

import MoviesList from "../MoviesList/MoviesList.js";
import Sessions from "../Sessions/Sessions.js";
import Seats from "../Seats/Seats.js";
import Success from "../Success/Success.js";


function InfoBox() {
  return (
    <>
      <div className="information-box">
        <h1>Selecione o filme</h1>
      </div>
      <MoviesList />
    </>
  );
}

export default function App() {

  return (
    <BrowserRouter>
      <header><h1>CINEFLEX</h1></header>

      <div className="main-container">
        <Routes>
          <Route path="/" element={<InfoBox />}></Route>
          
          <Route path="/sessoes/:movieID" element={<Sessions />}></Route>

          <Route path="/assentos/:sessionID" element={<Seats />}></Route>

          <Route path="/sucesso" element={<Success />}></Route>

        </Routes>
      </div>
    </BrowserRouter >
  );
}