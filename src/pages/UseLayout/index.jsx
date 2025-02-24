import React, { useLayoutEffect } from "react";

export const UseLayout = () => {
  useLayoutEffect(() => {
    let a = window.innerWidth;
    console.log(a);
  }, []);

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>UseLayout</h1>
    </div>
  );
};
