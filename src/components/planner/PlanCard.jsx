/* eslint-disable no-unused-vars */
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
    const updateStatus = await updatePlan(plan._id, {
      isCompleted: true,
    });

    window.location.reload();
  }
  async function handleUncompletePlan() {
    const updateStatus = await updatePlan(plan._id, {
      isCompleted: false,
    });

    window.location.reload();
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
      <div>
        {isCompleted || plan.isCompleted ? (
          <button onClick={handleUncompletePlan}>
            <MdCheckBox className="card-action complete" />
          </button>
        ) : (
          <button onClick={handleCompletedPlan}>
            <MdCheckBoxOutlineBlank className="card-action complete" />
          </button>
        )}
      </div>
    </div>
  );
}

export default PlanCard;
