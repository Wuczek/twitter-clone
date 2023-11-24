import React from "react";
import { BsPerson } from "react-icons/bs";

const Post = ({post}) => {
  return (
    <article className="shadow-xl border p-2 max-w-md mx-auto rounded-xl">
      <div className="flex items-center gap-2">
        <BsPerson />
        <p>{post.username}</p>
      </div>
      <p>
        {post.content}
      </p>
    </article>
  );
};

export default Post;
