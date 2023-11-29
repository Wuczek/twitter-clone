import React, { useState, useEffect } from "react";
import PostsList from "../components/PostsList";

const Admin = () => {
  const [allPosts, setAllPosts] = useState([]);
  const [isLoadingPosts, setIsLoadingPosts] = useState(true);
  const isAdminPage = true;

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("http://localhost:8000/fetchPosts.php", {
          method: "GET",
          credentials: "include",
        });

        const data = await response.json();
        const sortedData = data.sort((a, b) => {
          return new Date(b.created_at) - new Date(a.created_at);
        });
        setAllPosts(sortedData);
        console.log(data);
        setIsLoadingPosts(false);
      } catch {
        console.log("Something went wrong");
      }
    };
    fetchPosts();
  }, []);

  return (
    <div>
      <h1 className="text-center text-xl font-bold">Admin dashboard</h1>
      {isLoadingPosts ? (
        <p>Loading...</p>
      ) : (
        <PostsList posts={allPosts} isAdminPage={isAdminPage} />
      )}
    </div>
  );
};

export default Admin;
