import React, { useState } from "react";
import NewTaskForm from "../NewTask/NewTaskForm";
import Task from "./Task";

function TaskList() {
  const [tasks, setTasks] = useState([]);

  return (
    <div className="min-h-screen bg-gray-900 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-2">
            Task Manager
          </h1>
        </div>

        <NewTaskForm setTasks={setTasks} />

        <div className="mt-8">
          {tasks.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-gray-500 text-lg mb-2">No tasks yet</div>
            </div>
          ) : (
            <>
              <div className="mb-4">
                <h2 className="text-2xl font-semibold text-gray-200 mb-2">
                  Your Tasks
                </h2>
                <div className="text-sm text-gray-400">
                  {tasks.filter((task) => !task.done).length} of {tasks.length}{" "}
                  tasks remaining
                </div>
              </div>
              <ul className="space-y-0">
                {tasks.map((task) => {
                  return <Task task={task} setTasks={setTasks} key={task.id} />;
                })}
              </ul>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default TaskList;
