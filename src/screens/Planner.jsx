import { Outlet, useNavigate } from "react-router-dom";
import { illustrations } from "../assets";
import { DashLayout } from "../components/Layout";
import Plans from "../components/planner/Plans";
import { FaPlus } from "react-icons/fa6";

function Planner() {
  const navigate = useNavigate();

  return (
    <div>
      <DashLayout>
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
      </DashLayout>
      <Outlet />
    </div>
  );
}

export default Planner;
