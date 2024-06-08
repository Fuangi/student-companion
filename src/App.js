import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AuthLayout from "./components/Layout/AuthLayout";
import Modal from "./components/Layout/Modal";
import { ForgotPassword, Login, Signup } from "./components/forms";
import MyRoutes from "./routes";
import Homepage from "./screens/Homepage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />}>
          <Route
            path="/auth"
            element={<Modal children={<AuthLayout />} prevLocation="/" />}
          >
            <Route index element={<Navigate to="signup" />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
          </Route>
        </Route>
        <Route path="forgot-password" element={<ForgotPassword />} />
      </Routes>
      <MyRoutes />
    </BrowserRouter>
  );
}

export default App;

// Setting up notifications in the browser ie, user subscribes to push notification and it store in their browser

/* if ("serviceWorker" in navigator && "PushManager" in window) {
  navigator.serviceWorker
    .register("/service-worker.js")
    .then((registration) => {
      registration.pushManager.getSubscription().then((subscription) => {
        if (subscription) return subscription;

        const vapidPublicKey = "";
        const convertedVapidKey = urlBase64ToUint8Array(vapidPublicKey);

        return registration.pushManager.subscribe({
          userVisibleOnly: true,
          applicationServerKey: convertedVapidKey,
        });
      });
    })
    .then((subscription) => {
      // Send subscription to the server
      axios.post("/api/subscribe", subscription);
    })
    .catch((error) => {
      console.error("Service Worker Error", error);
    });
}

function urlBase64ToUint8Array(base64String) {
  const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding)
    // eslint-disable-next-line no-useless-escape
    .replace(/\-/g, "+")
    .replace(/_/g, "/");
  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }

  return outputArray;
}
 */
