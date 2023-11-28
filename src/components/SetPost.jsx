import React, { useState, useRef } from "react";

const SetPost = () => {
  const [post, setPost] = useState("");
  const [title, setTitle] = useState("");
  const [formSuccess, setFormSuccess] = useState({
    post: false,
    title: false,
  });

  const postErr = useRef();
  const titleErr = useRef();

  const handleTitleChange = (e) => {
    const titleValidator = (title) => {
      const regex = /^[a-zA-Z0-9\s\.\,\!\?]{3,}$/;
      return regex.test(title);
    };

    const newTitle = e.target.value;
    setTitle(newTitle);

    if (newTitle === null || newTitle === "") {
      titleErr.current.innerHTML = "";
      document.getElementById("setTitle").style.border = "1px solid white";
      setFormSuccess({ ...formSuccess, title: false });
    } else if (!titleValidator(newTitle)) {
      titleErr.current.innerHTML = "Invalid title";
      document.getElementById("setTitle").style.border = "1px solid red";
      setFormSuccess({ ...formSuccess, title: false });
    } else {
      titleErr.current.innerHTML = "";
      document.getElementById("setTitle").style.border = "1px solid white";
      setFormSuccess({ ...formSuccess, title: true });
    }
  };

  const handlePostChange = (e) => {
    const postValidator = (post) => {
      const regex = /^[a-zA-Z0-9\s\.\,\!\?]{3,}$/;
      return regex.test(post);
    };

    const newPost = e.target.value;
    setPost(newPost);

    if (newPost === null || newPost === "") {
      postErr.current.innerHTML = "";
      document.getElementById("setPost").style.border = "1px solid white";
      setFormSuccess({ ...formSuccess, post: false });
    } else if (!postValidator(newPost)) {
      postErr.current.innerHTML = "Invalid post";
      document.getElementById("setPost").style.border = "1px solid red";
      setFormSuccess({ ...formSuccess, post: false });
    } else {
      postErr.current.innerHTML = "";
      document.getElementById("setPost").style.border = "1px solid white";
      setFormSuccess({ ...formSuccess, post: true });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formSuccess.post && formSuccess.title) {
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
    }
  };

  return (
    <div className="shadow-xl border p-5 max-w-md mx-auto flex flex-col rounded-md gap-2">
      <h2 className="text-2xl font-bold">Create a post</h2>
      <div className="mb-5 relative">
        <input
          type="text"
          className="bg-blue-950 border rounded-md p-2 font-bold outline-none w-full"
          placeholder="Put your post title here..."
          id="setTitle"
          name="setTitle"
          onChange={handleTitleChange}
          value={title}
          required
        />
        <p ref={titleErr} className="text-red-400 absolute"></p>
      </div>
      <div className="relative mb-3">
        <textarea
          name="setPost"
          id="setPost"
          rows={5}
          className="bg-blue-950 border resize-none p-2 rounded-md outline-none w-full"
          placeholder="Write your text here..."
          onChange={handlePostChange}
          value={post}
          required
        ></textarea>
        <p ref={postErr} className="text-red-400 relative -top-1"></p>
      </div>
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
