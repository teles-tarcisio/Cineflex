import styled from 'styled-components';

const SCMoviesList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
`;

const SCMovieCard = styled.li`
  width: 145px;
  height: 209px;
  margin: 5px;
  padding: 8px;
  box-shadow: 0 2px 4px 2px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  & .poster {
    width: 100%;
    height: 100%;
  }
`;

const SCFooter = styled.footer`
  margin: auto;
  background-color: #DFE6ED;
  width: 100%;
  height: 117px;
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  & p {
    font-size: 26px;
    line-height: 30px;
    color: #293845;
  }
`;

const SCFooterInfo = styled.div`
  width: 64px;
  height: 89px;
  padding: 8px;
  margin: 14px;
  display: flex;
  align-items: center;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 2px;
  & img {
    width: 48px;
    height: 72px;
  }
`;

export { SCMoviesList, SCMovieCard, SCFooter, SCFooterInfo };