import { Routes, Route } from "react-router-dom";
import { Forums } from "../screens/index";
import Protected from "../services/Protected";
import Conversation from "../components/forums/Conversation";
import CreateForum from "../components/forums/CreateForum";

function ForumRoute() {
  return (
    <Routes>
      <Route
        path="/forums"
        element={
          <Protected>
            <Forums />
          </Protected>
        }
      >
        <Route path="view" element={<Conversation />} />
        <Route path="create" element={<CreateForum />} />
      </Route>
    </Routes>
  );
}

export default ForumRoute;
