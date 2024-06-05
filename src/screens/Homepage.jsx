import AppLayout from "../components/Layout/AppLayout";
import Notification from "../services/Notification";

function Homepage() {
  return (
    <AppLayout>
      <Notification />
    </AppLayout>
  );
}

export default Homepage;
