import React, { useImperativeHandle, useState } from "react";
import { forwardRef } from "react";

export const ImperaticeChild = forwardRef((props, ref) => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setCount((prev) => prev - 1);
  };

  const getCount = () => {
    return count;
  };

  useImperativeHandle(ref, () => {
    return {
      increment: handleIncrement,
      decrement: handleDecrement,
      getCount,
    };
  });

  return (
    <div>
      <h2>Count: {count}</h2>
    </div>
  );
});
