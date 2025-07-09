import React, { useState } from "react";

function NewTaskForm({ setTasks }) {
  const [title, setTitle] = useState("");

  const handleNewTask = (e) => {
    e.preventDefault();
    const id = Math.random().toString(36).substring(2, 12);
    const newTask = { title, done: false, id };
    setTasks((prev) => [...prev, newTask]);
    setTitle("");
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  return (
    <form
      onSubmit={handleNewTask}
      className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-md mx-auto mt-5"
    >
      <div className="mb-4">
        <label
          htmlFor="title"
          className="block text-gray-300 text-sm font-medium mb-2"
        >
          Title:
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          required
          onChange={handleTitleChange}
          className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>
      <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200 cursor-pointer">
        Add
      </button>
    </form>
  );
}

export default NewTaskForm;
