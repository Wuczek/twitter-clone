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
        body: `post=${document.getElementById("setPost").value}&category=${
          document.getElementById("category").value
        }`,
      });

      const data = await response.json();

      if (data.success) {
        window.location.reload();
      }
    } catch {
      console.log("Something went wrong");
    }
  };

  return (
    <div className="shadow-xl border p-5 max-w-md mx-auto flex flex-col gap-4 rounded-md">
      <h2 className="text-2xl font-bold">Create a post</h2>
      <input
        type="text"
        className="bg-blue-950 border rounded-md p-2 font-bold"
        placeholder="Put your post title here..."
        id="setTitle"
      />
      <textarea
        name="setPost"
        id="setPost"
        rows={5}
        className="bg-blue-950 border resize-none p-2 rounded-md"
        placeholder="Write your text here..."
      ></textarea>
      <div className="flex flex-col gap-1">
        <p>Select category:</p>
        <select
          name="category"
          id="category"
          className="bg-blue-950 w-max border rounded-md"
        >
          <option value="general">General</option>
          <option value="news">News</option>
          <option value="funny">Funny</option>
          <option value="programming">Programming</option>
        </select>
      </div>
      <button
        type="submit"
        onClick={handleSubmit}
        className="border w-max mx-auto py-2 px-4 rounded-full mb-4"
      >
        Send it
      </button>
    </div>
  );
};

export default SetPost;
