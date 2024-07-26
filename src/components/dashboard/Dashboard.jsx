import DashLayout from "../Layout/DashLayout";
import DashStats from "./DashStats";
import { FaClipboard, FaList, FaPeopleGroup } from "react-icons/fa6";
import DashCard from "./DashCard";

function Dashboard() {
  return (
    <DashLayout>
      <div className="my-dashboard">
        <div className="dash-top">
          <div className="top-left">
            <div className="introduction">
              <h2>Welcome Ma Co!</h2>
              <p>
                Looking for a place to reconcile your academic and social goals?
                Looking for a place to plan and manage your schedule? Ah! I got
                you Welcome to Combi.
              </p>
              <p style={{ fontWeight: "bolder" }}>Your handy Companion</p>
            </div>
            <h2 className="head">How far you've come</h2>
            <div className="statistics">
              <DashStats
                name="Plans"
                icon={<FaClipboard className="name-icon" />}
                link="/plans"
                total="X"
              />
              <DashStats
                name="Goals"
                icon={<FaList className="name-icon" />}
                link="/goals"
                total="X"
              />
              <DashStats
                name="Forums"
                icon={<FaPeopleGroup className="name-icon" />}
                link="/forums"
                total="X"
              />
            </div>
          </div>
          <div className="right">
            <h2>Resources</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo</p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa,
              libero?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa,
              libero?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa,
              libero?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa,
              libero?
            </p>
            <button>More Resources</button>
          </div>
        </div>

        <h2 className="head">Your Recents</h2>
        <div className="dashboard-body">
          <DashCard />
          <DashCard />
          <DashCard />
        </div>
      </div>
    </DashLayout>
  );
}

export default Dashboard;
