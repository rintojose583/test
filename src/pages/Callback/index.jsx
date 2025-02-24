import React, { useCallback, useState } from "react";
import { CallbackChild } from "../../components/CallbackChild";

export const Callback = () => {
  const [todo, setTodo] = useState([]);
  const [count, setCount] = useState(0);

  //   const addTodo = () => {
  //     setTodo([...todo, `New Todo ${todo.length + 1}`]);
  //   };

//   we can use this callback and memo logic if we write the function & states in child component also
  const addTodo = useCallback(() => {
    setTodo([...todo, `New Todo ${todo.length + 1}`]);
  }, [todo]);

  const Incre = () => {
    setCount((prev) => prev + 1);
  };

  // console.log("parent")

  return (
    <div>
      <h1>Callback</h1>
      <CallbackChild addTodo={addTodo} todo={todo} />
      <h3>Count: {count}</h3>
      <button onClick={Incre}>Incre</button>
    </div>
  );
};
