import React from "react";

const Card = ({ todos, index, setTodos, id, text, completed }) => {


  
  const handleClick = (deleteId) => {
    let updataTodos = todos.filter((todo) => todo.id !== deleteId);
    setTodos(updataTodos);

  };
  
  const toggleTask = (taskId) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === taskId ? { ...todo, completed: !todo.completed } : todo
  );
  setTodos(updatedTodos);
};


  return (
    <div
      className={
        "w-full min-h-10 flex items-center justify-between px-3 border  border-emerald-500 mt-3 gap-3 rounded-md shadow shadow-emerald-400"
      }
    >
      <div className="w-full h-full flex gap-2 items-center justify-between" onClick={() => toggleTask(id)}>

        <div
          className={` w-48 text-sm sm:text-base sm:w-full flex items-center gap-3 ${
            completed ? "text-slate-500 line-through" : "text-white"
          }`}
        > {<h4 className="text-emerald-500 shrink-0">{`${index + 1} ${"."}`}</h4>}
          {<h4 className="truncate ">{text}</h4>}
        </div>

      </div>
      <h4 className="cursor-pointer  shrink-0" onClick={() => handleClick(id)}>{`${completed ? "✅" : "❌"}`}</h4>
       
    </div>
  );
};

export default Card;
