import { Outlet, useNavigate } from "react-router-dom";
import { illustrations } from "../assets";
import { DashLayout, Loader } from "../components/Layout";
import Plans from "../components/planner/Plans";
import { FaPlus } from "react-icons/fa6";
import { useEffect, useState } from "react";
import axios from "axios";

function Planner() {
  const [plans, setPlans] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(function () {
    setIsLoading(!isLoading);
    axios({ method: "GET", url: "http://localhost:4000/api/v1/plans" }).then(
      function (response) {
        setPlans(response.data.data.data);
        setIsLoading(false);
      }
    );

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <DashLayout>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <div className="all-plans-head">
              <h2>
                <span>My</span> Plans
              </h2>
              <div className="new-actions">
                <button onClick={() => navigate("/plans/new")}>
                  <FaPlus /> New Plan
                </button>
              </div>
            </div>
            <div className="plans-routine">
              <div className="all-plans">
                <div className="in-progress">
                  <h2>
                    Pending Plans <span>%number</span>
                  </h2>
                  {plans.map((plan) => (
                    <Plans
                      key={plan._id}
                      title={plan?.name}
                      description={plan?.description}
                      start={plan?.eventStart}
                      end={plan?.eventEnd}
                      type={plan?.eventType}
                    />
                  ))}
                </div>
                <div className="in-progress">
                  <h2>
                    in Progress Plans <span>%number</span>
                  </h2>
                  <Plans />
                  <Plans />
                  <Plans />
                  <Plans />
                  <Plans />
                  <Plans />
                  <Plans />
                </div>
                <div className="in-progress">
                  <h2>
                    Completed Plans <span>%number</span>
                  </h2>
                  <Plans />
                  <Plans />
                  <Plans />
                  <Plans />
                  <Plans />
                  <Plans />
                  <Plans />
                </div>
              </div>
              <div className="routines">
                <img
                  src={illustrations.studLearning}
                  alt="Relax"
                  style={{ width: "100%" }}
                />
                <div className="routine">
                  <h3>Daily Routine</h3>
                  <ul>
                    <li>Jog</li>
                    <li>Lorem</li>
                    <li>Dance</li>
                    <li>Pray</li>
                    <li>Something</li>
                  </ul>
                </div>
                <div className="priorities">
                  <h3>Your Priorities</h3>
                  <ul>
                    <li>Jog</li>
                    <li>Lorem</li>
                    <li>Dance</li>
                    <li>Pray</li>
                    <li>Something</li>
                  </ul>
                </div>
              </div>
            </div>
          </>
        )}
      </DashLayout>
      <Outlet />
    </div>
  );
}

export default Planner;
