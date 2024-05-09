import { illustrations } from "../../assets";
import DashLayout from "../Layout/DashLayout";
import { FaBarsProgress } from "react-icons/fa6";
import { IoCheckmarkDoneCircle } from "react-icons/io5";

function Dashboard() {
  return (
    <DashLayout>
      <div className="my-dashboard">
        <div className="current-events">
          <div className="welcome">
            <h2>Welcome, %Name$</h2>
            <div className="recommendation">
              <div>
                <p>
                  Some encouraging and inspiring message here and the Lorem
                  ipsum dolor sit, amet consectetur adipisicing elit. Totam,
                  nulla ab! Facilis incidunt pariatur quia.
                </p>
                <button>Get Resources</button>
              </div>
              <img src={illustrations.studLearning} alt="Student Relaxing" />
            </div>
          </div>

          <div className="day-plans">
            <h3>How far you've gone today!</h3>
            <div className="stats">
              <p>
                Plans for today <span>X</span>
              </p>
              <p>
                <FaBarsProgress /> In progress <span>Y</span>
              </p>
              <p>
                <IoCheckmarkDoneCircle /> Done <span>Z</span>
              </p>
              <p>
                Total <span>%A</span>
              </p>
            </div>
            <div className="recents">
              <div className="plans">
                <h3>Today's Plans</h3>
                <ul>
                  <li>Go to the market</li>
                  <li>Do Laundry</li>
                  <li>Do my Assignment</li>
                  <li>Cook lunch</li>
                  <li>Prepare for school</li>
                </ul>
                <button>All Plans</button>
              </div>
              <div className="resources">
                <h3>Recent Resources</h3>
                <ul>
                  <li>Go to the market</li>
                  <li>Do Laundry</li>
                  <li>Do my Assignment</li>
                  <li>Cook lunch</li>
                  <li>Prepare for school</li>
                </ul>
                <button>All Resources</button>
              </div>
            </div>
          </div>
        </div>
        <div className="other-events">
          <div className="past-plans">
            <h3>Missed past plans</h3>
            <ul>
              <li>Cook Lunch</li>
              <li>Go to the market</li>
              <li>Rearrange Closet</li>
            </ul>
          </div>
          <div className="future-plans">
            <h3>Your future plans</h3>
            <ul>
              <li>Cook Lunch</li>
              <li>Go to the market</li>
              <li>Rearrange Closet</li>
            </ul>
          </div>
          <div className="goals">
            <h3>Your goals</h3>
            <ul>
              <li>Cook Lunch</li>
              <li>Go to the market</li>
              <li>Rearrange Closet</li>
            </ul>
          </div>
        </div>
      </div>
    </DashLayout>
  );
}

export default Dashboard;
