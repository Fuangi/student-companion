/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getPlan } from "../../services/apiPlans";
import AddEvent from "./AddEvent";

function UpdatePlan() {
  const [searchParams] = useSearchParams();
  const [plan, setPlan] = useState({});
  const id = searchParams.get("id");

  useEffect(() => {
    async function fetchPlan() {
      const Myplan = await getPlan(id);
      setPlan(Myplan);
    }
    fetchPlan();
  }, []);

  return (
    <div>
      <AddEvent plan={plan} />
    </div>
  );
}

export default UpdatePlan;
