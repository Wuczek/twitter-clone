import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import "./index.css";

export default function App() {
  const [isLogged, setIsLogged] = useState(false);

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
          setIsLogged(true);
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
        <Route
          path="/"
          element={<Layout isLogged={isLogged} setIsLogged={setIsLogged} />}
        >
          <Route index element={<Home isLogged={isLogged} />} />
          <Route path="login" element={<Login setIsLogged={setIsLogged}/>} />
          <Route path="register" element={<Register />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
