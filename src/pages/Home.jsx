import React, { useEffect, useState } from "react";
import SetPost from "../components/SetPost";
import PostList from "../components/PostsList";

const Home = ({ user }) => {
  const [allPosts, setAllPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [isLoadingPosts, setIsLoadingPosts] = useState(true);
  const [sortOption, setSortOption] = useState("newest");
  const [filterOption, setFilterOption] = useState("all");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("http://localhost:8000/fetchPosts.php", {
          method: "GET",
          credentials: "include",
        });

        const data = await response.json();
        setAllPosts(data);
        console.log(data);
        setIsLoadingPosts(false);
      } catch {
        console.log("Something went wrong");
      }
    };
    fetchPosts();
  }, []);

  useEffect(() => {
    const sortedAndFilteredPosts = [...allPosts]
      .sort((a, b) => {
        switch (sortOption) {
          case "newest":
            return new Date(b.created_at) - new Date(a.created_at);
          case "oldest":
            return new Date(a.created_at) - new Date(b.created_at);
          case "mostLiked":
            return b.like_count - a.like_count;
          case "leastLiked":
            return a.like_count - b.like_count;
          default:
            return 0;
        }
      })
      .filter((post) => {
        return filterOption === "all" || post.category === filterOption;
      });

    setFilteredPosts(sortedAndFilteredPosts);
  }, [sortOption, filterOption, allPosts]);

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilterOption(e.target.value);
  };

  return (
    <main className="mt-8 space-y-5 mb-4">
      {user ? <SetPost /> : null}
      {isLoadingPosts ? (
        <p className="text-center text-xl">Loading posts...</p>
      ) : (
        <>
          <div className="border max-w-md mx-auto p-4 space-y-8 rounded-md">
            <div className="flex justify-between max-w-md mx-auto items-center">
              <div className="flex flex-col gap-2">
                <p className="text-center">Sort by</p>
                <select
                  name="sortPosts"
                  id="sortPosts"
                  className="bg-blue-950 border rounded-md w-16"
                  value={sortOption}
                  onChange={handleSortChange}
                >
                  <option value="newest">Newest</option>
                  <option value="oldest">Oldest</option>
                  <option value="mostLiked">Most liked</option>
                  <option value="leastLiked">Least liked</option>
                </select>
              </div>
              <p className="font-bold text-xl tracking-wide">POSTS</p>
              <div className="flex flex-col gap-2">
                <p className="text-center">Filter by</p>
                <select
                  name="filterPosts"
                  id="filterPosts"
                  className="bg-blue-950 border rounded-md w-16"
                  value={filterOption}
                  onChange={handleFilterChange}
                >
                  <option value="all">All</option>
                  <option value="general">General</option>
                  <option value="news">News</option>
                  <option value="funny">Funny</option>
                  <option value="programming">Programming</option>
                </select>
              </div>
            </div>

            <PostList posts={filteredPosts} />
          </div>
        </>
      )}
    </main>
  );
};

export default Home;
