import { SCSeatCard } from './Seats_styles.js';

export default function Seat(props) {
  const { seat, index, addSeat, removeSeat } = props;
  
  function selectSeat() {
    console.log(seat);
    if (seat.isAvailable === false) {
      alert("Este assento não está disponível");
      return;
    }
    else {
      if (seat.selected === false) {
          addSeat(seat.id);
          seat.selected = true;
      }
      else if (seat.selected === true) {
          removeSeat(seat.id);
          seat.selected = false;
      }            
    }
  }



  if (seat.isAvailable === false) {
    return (
      <SCSeatCard onClick={selectSeat}
        key={seat.id} id={index} bgColor={'#FBE192'} border={'1px solid #F7C52B'}>
        {seat.name}
      </SCSeatCard>
    );
  }
  else {
    if (seat.selected === true) {
      return (
        <SCSeatCard onClick={selectSeat}
          key={seat.id} id={index} bgColor={'#8DD7CF'} border={'3px solid #1AAE9E'}>
          {seat.name}
        </SCSeatCard>
      );
    }
    else if (seat.selected === false) {
      return(
        <SCSeatCard onClick={selectSeat}
        key={seat.id} id={index} bgColor={'#C3CFD9'} border={'6px solid #808F9D'}>
        {seat.name}
        </SCSeatCard>
      );
    }
  }
}