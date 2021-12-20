import { SCSeatCard } from './Seats_styles.js';


export default function Seat(props) {
  const { seat, index } = props;

  function selectSeat(e) {
    if (seat.isAvailable === false) {
      alert("Este assento não está disponível");
      return;
    }
    else {
      if (seat.selected === false) {
        seat.selected = true;
        console.log(seat);
      }
      else if (seat.selected ===  true) {
        seat.selected = false;
        console.log(seat);
      }
    }
  }
  
  return(  
    <SCSeatCard onClick={selectSeat} key={seat.id} id={index} isAvailable={seat.isAvailable} isSelected={seat.selected}>
      {seat.name}
    </SCSeatCard>
  );
}