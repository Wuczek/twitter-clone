import React, { useEffect, useState } from "react";
import SetPost from "../components/SetPost";
import PostList from "../components/PostsList";

const Home = ({ user }) => {
  const [posts, setPosts] = useState([]);
  const [isLoadingPosts, setIsLoadingPosts] = useState(true);

  const handleSort = () => {
    
  }

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("http://localhost:8000/fetchPosts.php", {
          method: "GET",
          credentials: "include",
        });

        const data = await response.json();
        setPosts(data);
        setIsLoadingPosts(false);
        console.log(data);
      } catch {
        console.log("Something went wrong");
      }
    };
    fetchPosts();
  }, []);

  return (
    <main className="mt-8 space-y-5 mb-4">
      {user ? <SetPost /> : null}
      {isLoadingPosts ? (
        <p className="text-center text-xl">Loading posts...</p>
      ) : (
        <>
          <div className="border max-w-md mx-auto p-4 space-y-8 rounded-md">
            <div className="flex justify-between max-w-md mx-auto items-center">
              <div>
                <p>Sort by</p>
                <select
                  name="sortPosts"
                  id="sortPosts"
                  className="bg-blue-950 border rounded-md w-max"
                >
                  <option value="newest">Newest</option>
                  <option value="oldest">Oldest</option>
                  <option value="mostLiked">Most liked</option>
                  <option value="leastLiked">Least liked</option>
                </select>
              </div>
              <p className="font-bold text-xl tracking-wide">POSTS</p>
              <div className="flex flex-col gap-1">
                <p>Filter by</p>
                <select
                  name="filterPosts"
                  id="filterPosts"
                  className="bg-blue-950 border rounded-md w-max"
                >
                  <option value="all">All</option>
                  <option value="general">General</option>
                  <option value="news">News</option>
                  <option value="funny">Funny</option>
                  <option value="programming">Programming</option>
                </select>
              </div>
            </div>

            <PostList posts={posts} />
          </div>
        </>
      )}
    </main>
  );
};

export default Home;
