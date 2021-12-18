import styled from 'styled-components';

const scMovieDays = styled.ul`
  margin: 0 auto 120px 23px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  padding: 1px;
`;

const scDayDate = styled.li`
  margin-bottom: 7px;
  width: 100%;
  height: 100px;1
  display: flex;
  flex-direction: column;
  font-size: 20px;
  line-height: 23px;
  color: #293845;
`;

const scDayHours = styled.ul`
  margin-top: 14px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;

const scSessionTime = styled.li`
  margin: 4px;
  width: 83px;
  height: 43px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #E8833A;
  border-radius: 3px;
  font-size: 18px;
  line-height: 21px;
  color: #FFFFFF;
  & p {
    text-decoration: none;
  }
`;

export { scMovieDays, scDayDate, scDayHours, scSessionTime };