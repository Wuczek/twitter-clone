const LikeButton = ({ post_id }) => {
  const handleLike = async () => {
    try {
      const response = await fetch("http://localhost:8000/login.php", {
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

  return <button className="bg-red-400">Like</button>;
};

export default LikeButton;
