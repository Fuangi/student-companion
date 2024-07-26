import { useState } from "react";
import {
  MdCheckBox,
  MdCheckBoxOutlineBlank,
  MdDelete,
  MdEdit,
} from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { updatePlan } from "../../services/apiPlans";

function PlanCard({ plan, color }) {
  const navigate = useNavigate();
  const [isCompleted, setIsCompleted] = useState(false);

  const viewURL = `/plans/view?id=${plan?._id}`;
  const start = new Date(plan.eventStart);
  const end = new Date(plan.eventEnd);

  async function handleCompletedPlan() {
    setIsCompleted(!isCompleted);

    const updateStatus = await updatePlan(plan._id, { isCompleted });

    console.log(updateStatus);
  }

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
      <button onClick={() => navigate(`/plans/delete?id=${plan?._id}`)}>
        <MdDelete className="card-action delete" />
      </button>
      <button onClick={() => navigate(`/plans/edit?id=${plan?._id}`)}>
        <MdEdit className="card-action edit" />
      </button>
      <button onClick={() => handleCompletedPlan()}>
        {isCompleted ? (
          <MdCheckBox className="card-action complete" />
        ) : (
          <MdCheckBoxOutlineBlank className="card-action complete" />
        )}
      </button>
    </div>
  );
}

export default PlanCard;
