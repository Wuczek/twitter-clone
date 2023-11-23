import React, { useEffect, useState } from "react";
import Post from "../components/Post";
import SetPost from "../components/SetPost";

const Home = () => {
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch("http://localhost:8000/checkSession.php", {
          method: "GET",
          credentials: "include",
        });

        if (!response.ok) {
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
    <main className="mt-8 space-y-8 mb-4">
      {isLogged ? <SetPost /> : null}
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </main>
  );
};

export default Home;
