import { BsHeart } from "react-icons/bs";
import { useEffect, useState } from "react";

const LikeButton = ({ post_id }) => {

  const handleLike = async () => {
    try {
      const response = await fetch("http://localhost:8000/like.php", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `post_id=${post_id}`,
      });
      const data = await response.json();

      if (data.success) {
        console.log("success");
      } else {
        console.log("fail");
      }
    } catch (error) {
      console.log("error");
    }
  };

  return (
    <button onClick={handleLike} className="hover:text-red-500 hover:scale-125">
      <BsHeart />
    </button>
  );
};

export default LikeButton;
