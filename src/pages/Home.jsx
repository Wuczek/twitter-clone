import React, { useEffect, useState } from "react";
import SetPost from "../components/SetPost";
import PostList from "../components/PostList";


const Home = ({ user }) => {
  const [posts, setPosts] = useState([]);
  const [isLoadingPosts, setIsLoadingPosts] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("http://localhost:8000/fetchPosts.php", {
          method: "GET",
          credentials: "include",
        });

        const data = await response.json();
        console.log(data);
        setPosts(data);
        setIsLoadingPosts(false);
      } catch {
        console.log("Something went wrong");
      }
    };
    fetchPosts();
  }, []);

  return (
    <main className="mt-8 space-y-8 mb-4">
      {user ? <SetPost /> : null}
      {isLoadingPosts ? (
        <p className="text-center text-xl">Loading posts...</p>
      ) : (
        <PostList posts={posts}/>
      )}
    </main>
  );
};

export default Home;
