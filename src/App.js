import Modal from "./components/Layout/Modal";
import { Login, Signup } from "./components/forms";
import MyRoutes from "./routes";
import Homepage from "./screens/Homepage";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />}>
            <Route path="/auth" element={<Modal />}>
              <Route index element={<Navigate to="signup" />} />
              <Route path="login" element={<Login />} />
              <Route path="signup" element={<Signup />} />
            </Route>
          </Route>
        </Routes>
        <MyRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
