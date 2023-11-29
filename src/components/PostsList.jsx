import React from "react";
import Post from "./Post";

const PostsList = ({ posts, isAdminPage }) => {
  return (
    <>
      {posts.map((post) => {
        return <Post key={post.id} post={post} isAdminPage={isAdminPage} />;
      })}
    </>
  );
};

export default PostsList;
