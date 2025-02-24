import React from "react";

export const CallbackChild = React.memo(({ addTodo, todo }) => {
  console.log("child todo");
  
  return (
    <div>
      <h3>Todo</h3>
      <button onClick={addTodo}>Add Todo</button>
      {todo?.map((obj, index) => (
        <div key={index}>
          <p>{obj}</p>
        </div>
      ))}
    </div>
  );
});
