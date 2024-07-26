/* eslint-disable react-hooks/exhaustive-deps */
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { DashLayout, Loader } from "../components/Layout";
import { useEffect, useState } from "react";
import { getPlans, setIsLoading } from "../store/plannerSlice";
import Error from "../components/Layout/Error";
import PlanCard from "../components/planner/PlanCard";
import NoResource from "../components/Layout/NoResource";
import ResHeader from "../components/Layout/ResHeader";

function Planner() {
  const [sortedPlans, setSortedPlans] = useState([]);
  const [date, setDate] = useState(new Date());
  // const navigate = useNavigate();

  // reading the state from the redux store
  const { plans, status, error } = useSelector((store) => store.plan);
  const dispatch = useDispatch(); //to dispatch actions to the redux store (set state)

  useEffect(function () {
    dispatch(getPlans());
  }, []);

  // Updating the current time based on 1 hour intervals
  const updateCurrentTime = () => {
    setDate(new Date());
  };

  const intervalId = setInterval(updateCurrentTime, 3600 * 1000); //update per minute

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

        if (plan.isCompleted) {
          //completed plans
          planner = { ...plan, status: "completed" };
        } else if (date < start) {
          planner = { ...plan, status: "pending" };
        } //future plans
        else if (date.getTime() === start.getTime()) {
          //same date plans
          planner = { ...plan, status: "ongoing" };
        } else if (date >= start && date < end) {
          //plans in range
          planner = { ...plan, status: "ongoing" };
        } else if (plan.isCompleted) {
          //completed plans
          planner = { ...plan, status: "completed" };
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

  // Grouping the objects based on their categories
  const filteredPlans = sortedPlans.reduce((acc, obj) => {
    const key = obj["status"];

    if (!acc[key]) acc[key] = [];

    acc[key].push(obj);
    return acc;
  }, {});

  // Converting the object groupings from above into an array of objects
  const plansFiltered = Object.entries(filteredPlans).map((plan) => ({
    status: plan[0],
    plans: plan[1],
  }));

  function processStatuses(data) {
    const allStatuses = ["pending", "ongoing", "past"]; // Define all possible statuses
    const presentStatuses = new Set(data.map((group) => group.status)); // Get unique present statuses

    const missingStatuses = allStatuses.filter(
      (status) => !presentStatuses.has(status)
    ); // Find missing statuses

    return { data, missingStatuses }; // Return both data and missing statuses
  }

  const { data, missingStatuses } = processStatuses(plansFiltered);

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
              <h2>My Plans</h2>
              <ResHeader
                url="/plans/new"
                sortVals={["start", "end", "type", "title"]}
              />
            </div>
            <div className="plans-routine">
              <div className="ongoing-routine">
                <div className="ongoing">
                  <h2>
                    Ongoing Plans <span>Today</span>
                  </h2>
                  {data.map(
                    //checking it it's in the data array then display it on screen then checking if it's missing and showing msg
                    (plan) =>
                      plan.status === "ongoing" &&
                      plan.plans.map((val, i) => (
                        <PlanCard plan={val} color="green" key={i} />
                      ))
                  )}
                  {missingStatuses.map(
                    (status, i) =>
                      status === "ongoing" && (
                        <NoResource
                          key={i}
                          msg="Ongoing plan(s) at the moment"
                        />
                      )
                  )}
                </div>
                <div className="routine">
                  <h2>Daily Routine</h2>
                  <ol>
                    <li>Jog</li>
                    <li>Lorem</li>
                    <li>Dance</li>
                    <li>Pray</li>
                    <li>Something</li>
                  </ol>
                </div>
              </div>
              <div className="pending-past">
                <div className="pending">
                  <h2>
                    Upcoming Plans <span>Month/Year</span>
                  </h2>
                  {data.map(
                    //checking it it's in the data array then display it on screen
                    (plan) =>
                      plan.status === "pending" &&
                      plan.plans.map((val, i) => (
                        <PlanCard plan={val} color="blue" key={i} />
                      ))
                  )}
                  {missingStatuses.map(
                    //checking it it's in the missing status array then display msg on screen
                    (status, i) =>
                      status === "pending" && (
                        <NoResource
                          key={i}
                          msg="Pending plan(s) at the moment"
                        />
                      )
                  )}
                </div>
                <div className="past">
                  <h2>Past Plans</h2>
                  {data.map(
                    //checking it it's in the data array then display it on screen then checking if it's missing and showing msg
                    (plan) =>
                      plan.status === "past" &&
                      plan.plans.map((val, i) => (
                        <PlanCard plan={val} color="orange" key={i} />
                      ))
                  )}
                  {missingStatuses.map(
                    (status, i) =>
                      status === "past" && (
                        <NoResource key={i} msg="Past plan(s) at the moment" />
                      )
                  )}
                </div>
                <div className="completed">
                  <h2>Completed Tasks</h2>
                  {data.map(
                    //checking it it's in the data array then display it on screen
                    (plan) =>
                      plan.status === "completed" &&
                      plan.plans.map((val, i) => (
                        <PlanCard plan={val} color="blue" key={i} />
                      ))
                  )}
                  {missingStatuses.map(
                    //checking it it's in the missing status array then display msg on screen
                    (status, i) =>
                      status === "completed" && (
                        <NoResource
                          key={i}
                          msg="Completed plan(s) at the moment"
                        />
                      )
                  )}
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
