function Cards({
  cardName = "Features",
  cardBackground,
  cardDetails = "This is one of the amazing features of the student companion app... It's so nice and yeah, I'm a genius 😄",
}) {
  return (
    <div className="feature-card">
      <img src={cardBackground} alt={cardName} />
      <div className="feature-details">
        <h3>{cardName}</h3>
        <p>{cardDetails}</p>

        <button>Explore {cardName}</button>
      </div>
    </div>
  );
}

export default Cards;
