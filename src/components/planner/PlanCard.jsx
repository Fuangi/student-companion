import { MdCheckBoxOutlineBlank, MdDelete, MdEdit } from "react-icons/md";
import { Link } from "react-router-dom";

function PlanCard({ plan, color }) {
  const viewURL = `/plans/view?id=${plan?._id}`;
  return (
    <div className="plan-card">
      <span className="category" style={{ backgroundColor: color }}></span>
      <Link to={viewURL}>
        <span>
          {plan?.eventStart.split("T")[0]} - {plan.eventEnd.split("T")[0]}
        </span>
        <p>{plan?.name}</p>
      </Link>
      <span>
        <MdDelete className="card-action" />
      </span>
      <span>
        <MdEdit className="card-action" />
      </span>
      <span>
        <MdCheckBoxOutlineBlank />
      </span>
    </div>
  );
}

export default PlanCard;
