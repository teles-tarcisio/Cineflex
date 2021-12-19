import { SCSeatCard } from './Seats_styles.js';

export default function Seat(props) {
  const { seat, index } = props;
  
  return(
    <SCSeatCard key={seat.id} id={index} >
      {seat.name}
    </SCSeatCard>
  );
}