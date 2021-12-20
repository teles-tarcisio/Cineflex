import { SCSeatCard } from './Seats_styles.js';


export default function Seat({seat, index, orderCopy, setOrderCopy}) {
  
  function addSeat(seatID) {
    orderCopy.seats.push(seatID);
    setOrderCopy({...orderCopy});
  }
  function removeFromArray(element, key) {
    if (key === element) {
        return false;
    }
    else {
        return true;
    }
  };

  function removeSeat(seatID) {
    const newSeats = orderCopy.seats.filter((element) => removeFromArray(element, seatID));
    setOrderCopy({...orderCopy, seats: newSeats});
  };
  
  function selectSeat() {
    if (seat.isAvailable === false) {
      alert("Este assento não está disponível");
      return; 
    }
    else {
      if (seat.selected === false) {
        seat.selected = true;
        addSeat(seat.id);
      }
      else if (seat.selected ===  true) {
        seat.selected = false;
        removeSeat(seat.id);
      }
    }
  }
  
  return(  
    <SCSeatCard onClick={selectSeat} key={seat.id} id={index} isAvailable={seat.isAvailable} isSelected={seat.selected}>
      {seat.name}
    </SCSeatCard>
  );
}