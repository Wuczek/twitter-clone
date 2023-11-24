import React, { useEffect, useState } from "react";
import Post from "../components/Post";
import SetPost from "../components/SetPost";

const Home = ({user}) => {

  return (
    <main className="mt-8 space-y-8 mb-4">
      {user ? <SetPost /> : null}
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
