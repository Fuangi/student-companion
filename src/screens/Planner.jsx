/* eslint-disable react-hooks/exhaustive-deps */
import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { illustrations } from "../assets";
import { DashLayout, Loader } from "../components/Layout";
import Plans from "../components/planner/Plans";
import { FaPlus } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { getPlans, setCurrentDate, setIsLoading } from "../store/plannerSlice";
import Error from "../components/Layout/Error";

function Planner() {
  const [sortedPlans, setSortedPlans] = useState([]);
  const navigate = useNavigate();

  // reading the state from the redux store
  const { plans, date, status, error } = useSelector((store) => store.plan);
  const dispatch = useDispatch(); //to dispatch actions to the redux store (set state)

  // To store the number of plans based on their statuses
  let pending = 0,
    progress = 0,
    past = 0;

  useEffect(function () {
    dispatch(getPlans());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Updating the current time based on 1 hour intervals
  const updateCurrentTime = () => {
    dispatch(setCurrentDate(new Date()));
  };

  const intervalId = setInterval(updateCurrentTime, 3600 * 1000); //update hourly

  //sorting the events based on the date (before, current, after)
  useEffect(
    function () {
      dispatch(setIsLoading(true));

      setSortedPlans([]);
      plans?.map((plan) => {
        // getting the start and end of the plan
        const start = new Date(plan.eventStart);
        const end = new Date(plan.eventEnd);

        let planner;

        if (date < start) {
          planner = { ...plan, status: "pending" };
        } //future plans
        else if (date.getTime() === start.getTime()) {
          //same date plans
          planner = { ...plan, status: "ongoing" };
        } else if (date >= start && date < end) {
          //plans in range
          planner = { ...plan, status: "ongoing" };
          progress += 1;
        } else {
          planner = { ...plan, status: "past" }; //past
        }

        setSortedPlans((prev) => [...prev, planner]);
        return planner;
      });

      dispatch(setIsLoading(false));

      return () => clearInterval(intervalId);
    },

    [plans, date]
  );

  // Calculating the number of plans in each status

  return (
    <div>
      <DashLayout>
        {status === "loading" ? ( //to display either the loader, error or the loaded data
          <Loader />
        ) : status === "error" ? (
          <Error errMsg={error} />
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
                    Pending Plans <span>{pending}</span>
                  </h2>
                  {sortedPlans?.map(
                    (sorted) =>
                      sorted.status === "pending" && (
                        <Plans
                          key={sorted?._id}
                          title={sorted?.name}
                          description={sorted?.description}
                          start={sorted?.eventStart}
                          end={sorted?.eventEnd}
                          type={sorted?.eventType}
                        />
                      )
                  )}
                </div>
                <div className="in-progress">
                  <h2>
                    Ongoing Plans <span>{progress}</span>
                  </h2>
                  {sortedPlans?.map(
                    (sorted) =>
                      sorted.status === "ongoing" && (
                        <Plans
                          key={sorted?._id}
                          title={sorted?.name}
                          description={sorted?.description}
                          start={sorted?.eventStart}
                          end={sorted?.eventEnd}
                          type={sorted?.eventType}
                        />
                      )
                  )}
                </div>
                <div className="in-progress">
                  <h2>
                    Past Plans <span>{past}</span>
                  </h2>
                  {sortedPlans?.map(
                    (sorted) =>
                      sorted.status === "past" && (
                        <Plans
                          key={sorted?._id}
                          title={sorted?.name}
                          description={sorted?.description}
                          start={sorted?.eventStart}
                          end={sorted?.eventEnd}
                          type={sorted?.eventType}
                          _id={sorted?._id}
                        />
                      )
                  )}
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
