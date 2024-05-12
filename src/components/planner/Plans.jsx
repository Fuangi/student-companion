import { Link } from "react-router-dom";

function Plans({
  title = "My Plan",
  description = "Lorem ispum something sometyhing, my go to",
  time = new Date().toLocaleString(),
}) {
  return (
    <Link to="/plans/view" className="plan-link">
      <div className="my-plan">
        <h3>{title}</h3>
        <p>{description}</p>
        <p>{time}</p>
        <button>Delete</button>
        <button>Update</button>
      </div>
    </Link>
  );
}
export default Plans;
