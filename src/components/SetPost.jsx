import React from "react";

const SetPost = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8000/addPost.php", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `post=${document.getElementById("setPost").textContent}`,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
    } catch {
      console.log("Something went wrong");
    }
  };

  return (
    <div className="shadow-xl border p-2 max-w-md mx-auto flex flex-col gap-4">
      <h2 className="text-center text-xl">Write your post</h2>
      <div contentEditable id="setPost" className="outline-none border rounded-md min-h-[3rem]"></div>
      <button type="submit" onClick={handleSubmit} className="border w-max mx-auto py-2 px-4">
        Send it
      </button>
    </div>
  );
};

export default SetPost;
