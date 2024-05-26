import { FaPlus } from "react-icons/fa6";
import { DashLayout } from "../components/Layout";
import { Goal } from "../components/goals/Goal";

const goalCategories = [
  { name: "life" },
  { name: "educational" },
  { name: "carer" },
  { name: "other" },
];

function Goals() {
  return (
    <DashLayout>
      {/* <CreateGoal /> */}
      <div className="my-goals">
        {/* <h2 className="my-goals-header">My Goals...</h2> */}
        <div className="goal-header">
          <h3>%Something inspirational here</h3>
          <div className="goal-actions">
            <input type="search" placeholder="Search..." />
            <select name="sort" id="">
              <option value="">Sort by</option>
              <option value="life">Life</option>
              <option value="educational">Education</option>
              <option value="career">Career</option>
              <option value="other">Other</option>
            </select>
            <button>
              <FaPlus /> New
            </button>
          </div>
        </div>
        <div className="my-goals-body">
          <div className="goals-container">
            {goalCategories.map((category, i) => (
              <>
                <h3>{category?.name.toLocaleUpperCase()} GOALS</h3>
                <div className="goals" key={i}>
                  <Goal />
                  <Goal />
                  <Goal />
                  <Goal />
                  <Goal />
                </div>
              </>
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
  );
}

export default Goals;
