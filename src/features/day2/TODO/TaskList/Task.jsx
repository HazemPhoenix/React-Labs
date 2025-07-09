import React, { useState } from "react";

function Task({ task, setTasks }) {
  const [done, setDone] = useState(task.done || false);
  const titleStyle = done ? "line-through text-gray-500" : "text-gray-100";

  const handleTaskDone = (id) => {
    setDone((prev) => !prev);
    setTasks((prev) => {
      return prev.map((task) => {
        if (task.id == id) {
          return { ...task, done: !done };
        }
        return task;
      });
    });
  };

  const handleTaskDeletion = (id) => {
    setTasks((prev) => {
      return prev.filter((task) => {
        return task.id != id;
      });
    });
  };

  return (
    <li className="bg-gray-800 border border-gray-700 rounded-lg p-4 mb-3 shadow-lg hover:bg-gray-750 transition-colors duration-200">
      <div className="flex items-center justify-between">
        <p
          className={`flex-1 text-lg font-medium ${titleStyle} transition-all duration-200`}
        >
          {task.title}
        </p>
        <div className="flex gap-2 ml-4">
          <button
            onClick={() => handleTaskDone(task.id)}
            className={`px-4 py-2 rounded-md font-medium transition-all duration-200 ${
              done
                ? "bg-yellow-600 hover:bg-yellow-700 text-white"
                : "bg-green-600 hover:bg-green-700 text-white"
            } cursor-pointer`}
          >
            {done ? "Undo" : "Done"}
          </button>
          <button
            onClick={() => handleTaskDeletion(task.id)}
            className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md font-medium transition-colors duration-200 cursor-pointer"
          >
            Delete
          </button>
        </div>
      </div>
    </li>
  );
}

export default Task;
