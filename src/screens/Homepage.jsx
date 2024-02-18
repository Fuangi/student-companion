import { Loader } from "../components/Layout";
import AppLayout from "../components/Layout/AppLayout";

function Homepage() {
  return (
    <div>
      <AppLayout children={<Loader />} />
    </div>
  );
}

export default Homepage;
