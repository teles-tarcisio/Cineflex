import styled from "styled-components";

export default function InfoBox({children, type}) {
  return (
    <>
      <SCInfoBox>
        {type === 'movie' ? <h1>Selecione o filme</h1> : ''}
        {type === 'session' ? <h1>Selecione o horário</h1> : ''}
        {type === 'seats' ? <h1>Selecione o(s) assento(s)</h1> : ''}
        {type === 'reservation' ? <h1>Pedido feito com sucesso!</h1> : ''}
      </SCInfoBox>
      {children}      
    </>
  );
}

const SCInfoBox = styled.div`
  width: 100%;
  height: 110px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  color: #293845;
`;