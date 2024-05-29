import { FaPlus } from "react-icons/fa6";
import { DashLayout } from "../components/Layout";
import Goal from "../components/goals/Goal";
import { Link, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAllGoals } from "../services/apiGoals";

function Goals() {
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    async function fetchGoals() {
      const myGoals = await getAllGoals();
      setGoals(myGoals);
    }
    fetchGoals();
  }, []);

  // Grouping the objects based on their categories
  const filteredGoalsObj = goals.reduce((acc, obj) => {
    const key = obj["category"];

    if (!acc[key]) acc[key] = [];

    acc[key].push(obj);
    return acc;
  }, {});

  // Converting the object groupings from above into an array of objects
  const goalsfiltered = Object.entries(filteredGoalsObj).map((goal) => ({
    category: goal[0],
    goals: goal[1],
  }));

  return (
    <div>
      <DashLayout>
        {/* <CreateGoal /> */}
        <div className="my-goals">
          {/* <h2 className="my-goals-header">My Goals...</h2> */}
          <div className="goal-header">
            <h3>%Something inspirational here</h3>
            <div className="goal-actions">
              <input type="search" placeholder="Search..." id="search" />
              <select name="sort" id="">
                <option value="">Sort by</option>
                <option value="life">Life</option>
                <option value="educational">Education</option>
                <option value="career">Career</option>
                <option value="other">Other</option>
              </select>
              <Link to="/goals/new">
                <FaPlus /> New
              </Link>
            </div>
          </div>
          <div className="my-goals-body">
            <div className="goals-container">
              {goalsfiltered.map((goal, i) => (
                <div key={i}>
                  <h3>
                    {goal.category.toLocaleUpperCase()} GOALS -
                    <span> {goal.goals.length}</span>
                  </h3>
                  <div className="goals">
                    {goal.goals.map((val, i) => (
                      <Goal goal={val.goal} key={i} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="affirm">
              <h4>My affirmations</h4>
              <ol>
                <li>I affirm that I am strong 💪</li>
                <li>I affirm Phil 4:19 ❤️</li>
                <li>I affirm that I am loved 🤗</li>
                <li>I affirm that I am it ❗</li>
                <li>I affirm that I am deserving ❤️‍🔥</li>
              </ol>
              <div className="priorities">
                <h4>Priorities</h4>
                <ol>
                  <li>I affirm that I am strong 💪</li>
                  <li>I affirm Phil 4:19 ❤️</li>
                  <li>I affirm that I am loved 🤗</li>
                  <li>I affirm that I am it ❗</li>
                  <li>I affirm that I am deserving ❤️‍🔥</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </DashLayout>
      <Outlet />
    </div>
  );
}

export default Goals;
