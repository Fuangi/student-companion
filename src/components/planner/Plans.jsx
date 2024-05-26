/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { getPlan } from "../../services/apiPlans";

function Plans() {
  const navigate = useNavigate();
  const [plan, setPlan] = useState({});
  const [searchParams] = useSearchParams();
  const planId = searchParams.get("id");

  useEffect(() => {
    async function fetchPlan() {
      const Myplan = await getPlan(planId);
      setPlan(Myplan);
    }
    fetchPlan();
  }, []);

  const start = new Date(plan?.eventStart);
  const end = new Date(plan?.eventEnd);

  return (
    <div className="my-plan">
      <h3>{plan?.name}</h3>
      <span>
        {start.toLocaleString()} - {end.toLocaleString()}
      </span>
      <p>{plan?.description}</p>
      <p>Category: {plan?.eventType}</p>

      {/* using query string to pass the id of the plan to be deleted in the URL */}
      <button onClick={() => navigate(`/plans/delete?id=${plan?._id}`)}>
        Delete
      </button>
      <button onClick={() => navigate(`/plans/edit?id=${plan?._id}`)}>
        Update
      </button>
    </div>
  );
}
export default Plans;
