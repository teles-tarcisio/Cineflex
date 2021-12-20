import { useState } from 'react';
import { Link } from 'react-router-dom';

import { SCBuyerData } from '../Seats/Seats_styles.js';

export default function BuyerData({orderCopy, setOrderCopy, setReservation}) {
  const [buyerName, setBuyerName] = useState("");
  const [buyerCPF, setBuyerCPF] = useState("");
  
  function updateBuyerName(newName) {
    setBuyerName(newName);
  }

  function updateBuyerCPF(newCPF) {
    setBuyerCPF(newCPF);
  };

  function updateBuyerData() {
    let newOrderData = {...orderCopy, name: buyerName, cpf: buyerCPF};
    setOrderCopy(newOrderData);
    setReservation(orderCopy);
  };
  
  
  return (
    <SCBuyerData id="buyer-data">
      <label for="buyer-name">Nome do comprador:</label>
      <input type="text" id="buyer-name" name="buyer-name" placeholder="Digite seu nome..." value={buyerName} onChange={(event) => updateBuyerName(event.target.value)} />

      <label for="buyer-cpf">CPF do comprador:</label>
      <input type="text" id="buyer-cpf" name="buyer-cpf" placeholder="Digite seu CPF..." value={buyerCPF} onChange={(event) => updateBuyerCPF(event.target.value)} />

      <Link to="/sucesso" onClick={updateBuyerData}>
        <p>Reservar assento(s)</p>
      </Link>
    </SCBuyerData>
  );
}