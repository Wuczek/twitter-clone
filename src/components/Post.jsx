import React from "react";
import { BsPerson } from "react-icons/bs";

const Post = () => {
  return (
    <article className="shadow-xl border p-2 max-w-md mx-auto rounded-xl">
      <div className="flex items-center gap-2">
        <BsPerson />
        <p>Nazwa użytkownika</p>
      </div>
      <p>
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias
        incidunt odio aut ipsa iure unde delectus neque distinctio et non iusto
        vitae perferendis ut aspernatur maxime quidem, aliquid, facilis
        temporibus"
      </p>
    </article>
  );
};

export default Post;
