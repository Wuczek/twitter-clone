import React, { useState } from "react";
import { BsPerson } from "react-icons/bs";
import LikeButton from "./LikeButton";

const Post = ({ post, isAdminPage }) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleDeletePost = async () => {
    try {
      const response = await fetch("http://site26981.web1.titanaxe.com/php/deletePost.php", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `post_id=${post.id}`,
      });

    } catch {
      console.log("Something went wrong");
    }
  };

  return (
    <article className="shadow-xl border p-2 max-w-md mx-auto rounded-xl">
      <div className="flex justify-between">
        <div className="flex items-center gap-1">
          <BsPerson size={20} />
          <p className="font-bold tracking-wider">{post.username}</p>
        </div>
        {isAdminPage ? <button onClick={handleDeletePost}>X</button> : null}
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
        <div>
          <LikeButton post_id={post.id} post_like_count={post.like_count}/>
        </div>
      </div>
    </article>
  );
};

export default Post;
