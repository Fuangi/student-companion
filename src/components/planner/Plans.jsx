import { Link, useNavigate, useSearchParams } from "react-router-dom";

function Plans({
  title = "My Plan",
  description = "Lorem ispum something sometyhing, my go to",
  start,
  end,
  type,
  _id,
}) {
  const navigate = useNavigate();

  return (
    <div className="my-plan">
      <Link to="/plans/view" className="plan-link">
        <h3>{title}</h3>
        <p>{description}</p>
        <p>Category: {type}</p>
        <span>Start: {start}</span> <span>End: {end}</span>
      </Link>
      {/* using query string to pass the id of the plan to be deleted in the URL */}
      <button onClick={() => navigate(`/plans/delete?id=${_id}`)}>
        Delete
      </button>
      <button onClick={() => navigate(`/plans/edit?${_id}`)}>Update</button>
    </div>
  );
}
export default Plans;
