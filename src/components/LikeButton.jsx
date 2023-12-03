import { BsHeart } from "react-icons/bs";
import { useEffect, useState } from "react";

const LikeButton = ({ post_id, post_like_count }) => {
  const [likeCount, setLikeCount] = useState(post_like_count);


  const handleLike = async () => {
    try {
      const response = await fetch("http://site26981.web1.titanaxe.com/php/like.php", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `post_id=${post_id}`,
      });
      const data = await response.json();

      if (data.success && data.message === "like") {
        setLikeCount(likeCount + 1);
      } else if (data.success && data.message === "unlike") {
        setLikeCount(likeCount - 1);
      } else {
        console.log("fail");
      }
    } catch (error) {
      console.log("error");
    }
  };

  useEffect(() => {

  },[post_like_count])

  return (
    <div className="flex gap-1 items-center">
      <button
        onClick={handleLike}
        className="hover:text-red-500 hover:scale-125"
      >
        <BsHeart />
      </button>
      <p>{likeCount}</p>
    </div>
  );
};

export default LikeButton;
