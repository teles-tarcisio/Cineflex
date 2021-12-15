


export default function Success() {
  return (
    <>
      <div className="order-summary">
        <div className="movie-session">
          <h2>Filme e sessão</h2>
          <p>reservation.movieTitle</p>
          <p>reservation.sessionDate - reservation.sessionTime</p>
        </div>

        <div className="tickets">
          <h2>Ingressos</h2>
          <p>Assento seat</p>
          
        </div>
      
        <div className="success-buyer-data">
        <h2>Comprador</h2>
        <p>Nome reservation.nome</p>
        <p>CPF: reservation.cpf</p>
        </div>
      </div>

      <div className="back-to-home">
        <p>Voltar pra Home</p>
      </div>

    </>
  );
}