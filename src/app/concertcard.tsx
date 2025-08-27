import { Concert } from "./page";

type ConcertCardProps = {
  concert: Concert;
};

const ConcertCard = ({ concert }: ConcertCardProps) => {
  return (
    <div className="concert-card">
      Hello world
      {/* <img src={concert.image} alt={concert.title} width={200} height={200} /> */}
    </div>
  );
};

export default ConcertCard;