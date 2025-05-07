import React, { useEffect, useState } from "react";

const Counter = ({ todos }) => {
  const [completedTodos, setcompletedTodos] = useState(0);

  const [pendingTodos, setpendingTodos] = useState(0);

  useEffect(() => {
    let completedTask = 0;
    let pendingTask = 0;

    todos.forEach((elem) => {
      elem.completed == true ? completedTask++ : pendingTask++;
    });
    setcompletedTodos(completedTask);
    setpendingTodos(pendingTask);
  }, [todos]);

  return (
    <div className="flex gap-4 w-full px-5 py-4 justify-center">
      <div className="bg-violet-600 min-w-20 sm:px-4 px-2 py-3 rounded-lg w-32 h-15  flex flex-col items-center text-white font-semibold text-sm shadow-md justify-center">
        <h1 className=" text-xs mb-1 tracking-wider">All Task</h1>
        <span className="sm:text-xl font-bold">{todos.length}</span>
      </div>
      <div className="bg-green-600 min-w-20 sm:px-4 px-2 py-3 rounded-lg w-32  h-15 flex flex-col items-center text-white font-semibold text-sm shadow-md  justify-center">
        <h1 className="text-xs mb-1 tracking-wider">Completed</h1>
        <span className="sm:text-xl font-bold">{completedTodos}</span>
      </div>
      <div className="bg-red-600 min-w-20 sm:px-4 px-2 py-3 rounded-lg w-32 h-15  flex flex-col items-center text-white font-semibold text-sm shadow-md  justify-center">
        <h1 className="text-xs mb-1 tracking-wider">Pending</h1>
        <span className="sm:text-xl font-bold">{pendingTodos}</span>
      </div>
    </div>
  );
};

export default Counter;
