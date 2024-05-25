import { MdCheckBoxOutlineBlank, MdDelete, MdEdit } from "react-icons/md";
import { Link } from "react-router-dom";

function PlanCard({ plan, color }) {
  const viewURL = `/plans/view?id=${plan?._id}`;
  const start = new Date(plan.eventStart);
  const end = new Date(plan.eventEnd);

  return (
    <div className="plan-card">
      <span className="category" style={{ backgroundColor: color }}></span>
      <Link to={viewURL}>
        <span>
          {start.toLocaleDateString()} : {start.toLocaleTimeString()}
        </span>
        <span>
          {end.toLocaleDateString()} : {end.toLocaleTimeString()}
        </span>
        <p>{plan?.name}</p>
      </Link>
      <span>
        <MdDelete className="card-action delete" />
      </span>
      <span>
        <MdEdit className="card-action edit" />
      </span>
      <span>
        <MdCheckBoxOutlineBlank className="card-action update" />
      </span>
    </div>
  );
}

export default PlanCard;
