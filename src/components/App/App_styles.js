import styled from 'styled-components';

const SCHeader = styled.header`
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

const SCMainContainer = styled.div`
  width: 100%;
  margin: 67px auto auto auto;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export {SCHeader, SCMainContainer};