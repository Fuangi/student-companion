import { Loader } from "../components/Layout";
import AppLayout from "../components/Layout/AppLayout";
import MyCalendar from "../components/planner/Calendar";

function Planner() {
  return (
    <>
      <AppLayout>
        {" "}
        <MyCalendar />
      </AppLayout>
    </>
  );
}

export default Planner;
