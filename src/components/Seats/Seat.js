import "./Seats.css";

export default function Seat(props) {
  const { seat, index } = props;
  
  return(
    <li className="seat-card available selected" key={seat.id} id={index} >
      {seat.name}
    </li>
  );
}