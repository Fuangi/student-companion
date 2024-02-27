import { header_image } from "../../assets";

function Cards({
  cardName = "Features",
  cardBackground = header_image,
  cardDetails = "This is one of the features of the student companion app...",
}) {
  return (
    <div className="feature-card">
      <img src={cardBackground} alt={cardName} />
      <h2>{cardName}</h2>
      <p>{cardDetails}</p>

      <button>Explore {cardName}</button>
    </div>
  );
}

export default Cards;
