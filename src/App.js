import MyRoutes from "./routes";
import Homepage from "./screens/Homepage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
        <MyRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
