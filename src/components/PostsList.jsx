import React from "react";
import Post from "./Post";

const PostsList = ({ posts }) => {
  return (
    <>
      {posts.map((post) => {
        return <Post key={post.id} post={post} />;
      })}
    </>
  );
};

export default PostsList;
