import React from "react";

const Post = (props) => {
  const { post } = props;
  async function deletePost(e) {
    const id = props.id;
    const response = await fetch(`http://localhost:5000/posts/${id}`, {
      method: "DELETE",
    });
    props.setPosts(props.posts.filter((post) => post._id !== id));
  }
  return (
    <div className="group bg-white col-span-1 p-4 rounded-lg shadow-md h-48 text-ellipsis overflow-hidden cursor-pointer">
      <div className="flex justify-between">
        <p className="text-gray-600 font-semibold">@{post.name}</p>
        <button className="group-hover:text-gray-500" onClick={deletePost}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-transparent group-hover:text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>
      </div>
      <p className="pl-4 pt-2 overflow-clip line-clamp-5">{post.content}</p>
    </div>
  );
};

export default Post;
