import React, { useRef } from "react";

export const Ref = () => {
  const textRef = useRef();

  const handleClick = () => {
    textRef.current.style.color = "yellowGreen";
    textRef.current.style.fontWeight = "bold";
    textRef.current.style.fontStyle = "italic";
  };

  const handleDoubleClick = () => {
    textRef.current.style = "none";
  };

  return (
    <div>
      <h1 ref={textRef}>Ref</h1>
      <button onDoubleClick={handleDoubleClick} onClick={handleClick}>
        Click Me
      </button>
    </div>
  );
};
