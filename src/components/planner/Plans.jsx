import { Link, useNavigate } from "react-router-dom";

function Plans({
  title = "My Plan",
  description = "Lorem ispum something sometyhing, my go to",
  time = new Date().toLocaleString(),
}) {
  const navigate = useNavigate();

  return (
    <div className="my-plan">
      <Link to="/plans/view" className="plan-link">
        <h3>{title}</h3>
        <p>{description}</p>
        <p>{time}</p>
      </Link>
      <button onClick={() => navigate("/plans/delete")}>Delete</button>
      <button onClick={() => navigate("/plans/edit")}>Update</button>
    </div>
  );
}
export default Plans;
