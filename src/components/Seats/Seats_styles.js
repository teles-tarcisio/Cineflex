import styled from 'styled-components';

const SCSeatsList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const SCSeatCard = styled.li`
  margin: 8px;
  width: 26px;
  height: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  line-height: 15px;
  border-radius: 17px;
  background: ${(props) => (
    props.isAvailable === false ? '#FBE192' : 
      props.isSelected === false ? '#C3CFD9' : '#8DD7CF')};
  border: ${(props) => (
    props.isAvailable === false ? '1px solid #F7C52B' : 
      props.isSelected === false ? '1px solid #808F9D' : '1px solid #1AAE9E')};
`;



const SCSeatsVisualKey = styled.div`
  width: 327px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 16px;
`;

const SCBuyerData = styled.form`
  width: 330px;
  margin: 24px auto 120px auto;
  display: flex;
  flex-direction: column;
  font-size: 18px;
  line-height: 21px;
  color: #293845;
  line-height: 21px;
  & input {
    width: 100%;
    height: 50px;
    font-style: italic;
    display: flex;
    align-items: center;
    background: #FFFFFF;
    border: 1px solid #D4D4D4;
    border-radius: 3px;
    color: #AFAFAF;
  };
  & a {
  width: 225px;
  margin: 28px auto;
  height: 42px;
  background: #E8833A;
  border-radius: 3px;
  text-decoration: none;
  font-size: 18px;
  line-height: 21px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #FFFFFF;
  };
`;

export {SCSeatsList, SCSeatCard, SCSeatsVisualKey, SCBuyerData};