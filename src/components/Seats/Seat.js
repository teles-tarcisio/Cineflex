import { SCSeatCard } from './Seats_styles.js';

/*
function selectSeat(event) {
  console.log(event);
  const newLocalSeats = sessionData.seats.map((seat) => ({...seat, chosen: false}));
  setLocalSeats(newLocalSeats);   
}
*/


export default function Seat(props) {
  const { seat, index } = props;
  
  return(
    <SCSeatCard /*onClick={selectSeat}*/ key={seat.id} id={index} >
      {seat.name}
    </SCSeatCard>
  );
}