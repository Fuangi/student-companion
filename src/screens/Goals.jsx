import { DashLayout } from "../components/Layout";
import Goal from "../components/goals/Goal";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAllGoals } from "../services/apiGoals";
import ResHeader from "../components/Layout/ResHeader";

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
            <ResHeader
              url="/goals/new"
              sortVals={["life", "educational", "career", "other"]}
            />
          </div>
          <div className="my-goals-body">
            <div className="goals-container">
              {goalsfiltered.length > 0 ? (
                goalsfiltered.map((goal, i) => (
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
                ))
              ) : (
                <div className="no-goals">
                  <h2>You don't have any saved goals yet...</h2>
                  <p>Click the New buton to start adding goals</p>
                </div>
              )}
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
