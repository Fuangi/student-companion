function DashCard({ details }) {
  return (
    <div className="dash-card">
      <h2>{details.name}</h2>
      <div className="recents">
        <p>{details.desc1}</p>
        <p>{details.desc2}</p>
        <button>Continue</button>
      </div>
    </div>
  );
}

export default DashCard;
