import React from "react";
import { BsPerson } from "react-icons/bs";
import LikeButton from "./LikeButton";

const Post = ({ post }) => {
  return (
    <article className="shadow-xl border p-2 max-w-md mx-auto rounded-xl">
      <div className="flex items-center gap-2">
        <BsPerson />
        <p>{post.username}</p>
      </div>
      <p>{post.content}</p>
      <div className="flex gap-2">
        <LikeButton post_id={post.id} />
        <p>{post.like_count}</p>
      </div>
    </article>
  );
};

export default Post;
