import styled from 'styled-components';

const SCOrderSummary = styled.div`
  width: 100%;
  height: 327px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  color: #293845;
    h2 {
      font-weight: 700;
      font-size: 24px;
      line-height: 28px;
    };
    p {
      font-size: 22px;
      line-height: 26px;
    };
`;

const SCBackToHome = styled.a`
  width: 225px;
  margin: auto;
  height: 42px;
  background: #E8833A;
  border-radius: 3px;
  font-size: 18px;
  line-height: 21px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: #FFFFFF;
`;