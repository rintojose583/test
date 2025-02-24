import React, { useReducer } from "react";

export const UseReducerHook = () => {
 
  const [state, dispatch] = useReducer(counterFunct, {count:0})

  function counterFunct (state,action){
    switch (action.type) {
        case "INCRE":
            return {count:state.count+1}
        case "DECRE":
            return {count:state.count-1}
    }
  }

  return (
    <div>
      <div style={{ marginTop: "20px" }}>
        <h1>Count: {state.count}</h1>
        <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
          <button
            style={{ padding: "15px", cursor: "pointer", fontSize: "15px" }}
            onClick={()=>dispatch({type:"INCRE"})}
          >
            Increment
          </button>
          <button
            style={{ padding: "15px", cursor: "pointer", fontSize: "15px" }}
            onClick={()=>dispatch({type:"DECRE"})}
          >
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
};
