import React, { useState } from "react";

const Form = (props) => {
  const [name, setName] = useState();
  const [content, setContent] = useState();
  function handleNameChange(e) {
    setName(e.target.value);
  }
  function handleContentChange(e) {
    setContent(e.target.value);
  }
  async function handleSubmit(e) {
    e.preventDefault();
    const post = { name, content };
    e.target.reset();
    const postedData = await fetch("http://localhost:5000/posts", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    })
      .then((response) => {
        return response.json();
      })
      .catch((error) => {
        console.log({ message: error });
      });
    props.setPosts([...props.posts, postedData]);
  }
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="mt-8 w-96 border bg-white p-6 shadow-md rounded-lg"
      >
        <input
          className="shadow appearance-none border rounded w-full my-2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ring-2 ring-transparent focus:ring-blue-300"
          type="text"
          placeholder="Enter name"
          name="name"
          onChange={handleNameChange}
          required
        />
        <textarea
          className="shadow appearance-none border rounded w-full my-2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ring-2 ring-transparent focus:ring-blue-300"
          name="content"
          id=""
          cols="30"
          rows="10"
          placeholder="Write here..."
          onChange={handleContentChange}
          required
        ></textarea>
        <button
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold my-2 py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
