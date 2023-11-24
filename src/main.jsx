import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProtectedRoute from "./components/ProtectedRoute";
import Admin from "./pages/Admin";
import "./index.css";

export default function App() {
  const [user, setUser] = useState({ id: 1, name: "John", role: "user" });
  // const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch("http://localhost:8000/checkSession.php", {
          method: "GET",
          credentials: "include",
        });

        const data = await response.json();

        if (!data.success) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        } else {
          setUser({ id: 1, name: "John", role: "admin" });
        }
      } catch {
        console.log("Something went wrong");
      }
    };
    fetchUser();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout user={user} setUser={setUser} />}>
          <Route index element={<Home user={user} />} />
          <Route
            path="login"
            element={
              <ProtectedRoute isAllowed={!user}>
                <Login setUser={setUser} />
              </ProtectedRoute>
            }
          />
          <Route
            path="register"
            element={
              <ProtectedRoute isAllowed={!user}>
                <Register />
              </ProtectedRoute>
            }
          />
          <Route
            path="admin"
            element={
              <ProtectedRoute isAllowed={user && user.role === "admin"}>
                <Admin />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
