// import { Loader } from "../components/Layout";
import DashLayout from "../components/Layout/DashLayout";
import { Forum } from "../components/forums";

function Forums() {
  return <DashLayout children={<Forum />} />;
}

export default Forums;
