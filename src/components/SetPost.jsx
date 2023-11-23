import React from "react";

const SetPost = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const response = await fetch("http://localhost:8000/post.php", {
            method: "POST",
            credentials: "include",
            headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            },
            body: `post=${document.getElementById("setPost").value}`,
        });
    
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
    } catch {
        console.log("Something went wrong");
    }
  };

  return (
    <div>
      <input type="text" id="setPost" name="setPost" />
      <button type="submit">Wyslij</button>
    </div>
  );
};

export default SetPost;
