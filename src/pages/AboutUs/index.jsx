// import React, { useEffect, useState } from "react";

// export const AboutUs = () => {
//   const [count, setCount] = useState(0);

//   useEffect(() => {

//     const timer = setInterval(() => {
//       console.log("settimeout started");
//       setCount((prev) => prev + 1);
//     }, 1000);

//     return () => {
//       clearTimeout(timer)
//       console.log("timer stopped on unmount");
//     };

//   }, []);

//   return (
//     <div>
//       <h1>About Us</h1>
//       <h3>{count}</h3>
//     </div>
//   );
// };

import React, { useState } from "react";
import { useEffect } from "react";

export const AboutUs = ({state,setState}) => {

  useEffect(() => {
    setState("Hai")
    return ()=>{
      setState("123123123")
    }
  }, [])
  
  return (
    <div>
      <h1>AboutUs</h1>
      {state}
    </div>
  );
};
