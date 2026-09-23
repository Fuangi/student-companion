import DashLayout from "../Layout/DashLayout";
import DashStats from "./DashStats";
import { FaClipboard, FaList, FaPeopleGroup } from "react-icons/fa6";
import DashCard from "./DashCard";
import { useEffect, useState } from "react";
import { getAllPlans } from "../../services/apiPlans";
import { getAllGroups } from "../../services/apiGroups";
import { getAllGoals } from "../../services/apiGoals";

const plans = {
  name: "Plans",
  desc1: "...",
};
const forums = {
  name: "Forums",
  desc1: "...",
  desc2: "...",
};

const goals = {
  name: "goals",
  desc1: "...",
};

function Dashboard() {
  let [stats, setStats] = useState({});

  useEffect(() => {
    (async function (){
      let data = {};
      let response = await getAllPlans();
      data.plans = response.length || "0";

      response = await getAllGoals();
      data.goals = response.length  || "0";

      response = await getAllGroups();
      data.forums = response.length  || "0";
      setStats(data)
    })()
  }, [])
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
                you Welcome Mate.
              </p>
              <p style={{ fontWeight: "bolder" }}>Your handy Companion</p>
            </div>
            <h2 className="head">How far you've come</h2>
            <div className="statistics">
              <DashStats
                name="Plans"
                icon={<FaClipboard className="name-icon" />}
                link="/plans"
                total={stats.plans}
              />
              <DashStats
                name="Goals"
                icon={<FaList className="name-icon" />}
                link="/goals"
                total={stats.goals}
              />
              <DashStats
                name="Forums"
                icon={<FaPeopleGroup className="name-icon" />}
                link="/forums"
                total={stats.forums}
              />
            </div>
          </div>
          <div className="right">
            <h2>Resources</h2>
            <p>
              "The future belongs to those who believe in the beauty of their
              dreams." — Eleanor Roosevel
            </p>
            <p>
              "Show me a person who has never made a mistake and I'll show you
              someone who has never achieved much."
            </p>
            <p>
              "Amateurs sit and wait for inspiration, the rest of us just get up
              and go to work." — Stephen King
            </p>
            <p>
              "The greater the obstacle, the more glory in overcoming it." —
              Molière
            </p>
            <p>
              "The man who moves a mountain begins by carrying away small
              stones." — Confucius
            </p>
            <button>More Resources</button>
          </div>
        </div>

        <h2 className="head">Your Recents</h2>
        <div className="dashboard-body">
          <DashCard details={plans} />
          <DashCard details={forums} />
          <DashCard details={goals} />
        </div>
      </div>
    </DashLayout>
  );
}

export default Dashboard;
