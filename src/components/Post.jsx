import React, { useState } from "react";
import { BsPerson } from "react-icons/bs";
import LikeButton from "./LikeButton";

const Post = ({ post }) => {
  const [isLiked, setIsLiked] = useState(false);
  // first letter of post.category to uppercase

  return (
    <article className="shadow-xl border p-2 max-w-md mx-auto rounded-xl">
      <div className="flex items-center gap-1">
        <BsPerson size={20} />
        <p className="font-bold tracking-wider">{post.username}</p>
      </div>
      <div>
        <p className="text-xl font-bold">{post.title}</p>
        <p>{post.content}</p>
      </div>
      <div className="flex justify-between">
        <div>
          <p>
            {post.category.charAt(0).toUpperCase() + post.category.slice(1)}
          </p>
        </div>
        <div className="flex gap-1 items-center">
          <LikeButton post_id={post.id} />
          <p>{post.like_count}</p>
        </div>
      </div>
    </article>
  );
};

export default Post;
