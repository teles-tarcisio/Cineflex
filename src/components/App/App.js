import MoviesList from "./MoviesList/MoviesList.js";

import "./App.css";

export default function App() {

  return (
    <>
      <header>CINEFLEX</header>

      <div className="main-container">
        
        <div className="information-box">
          <h1>Selecione_filme-horário-assentos/Pedido_Sucesso</h1>
        </div>

        <MoviesList />


      </div>
    </>
  );
}