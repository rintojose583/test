import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, incrementByAmt, resetCount } from "../../redux/features/counterSlice";

export const ReduxToolkit = () => {

  const dispatch = useDispatch()
  const {count} = useSelector((state)=>state.counter)

  const [state, setState] = useState(1);

  const handleNormalIncre = () => {
    setState((prev) => prev + 1);
  };
  
  const handleReduxIncre = () => {
    dispatch(increment())
  };

  const handleReduxIncreByAmt = () => {
    dispatch(incrementByAmt(2))
  };

  const handleReduxReset = () => {
    dispatch(resetCount())
  };

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>ReduxToolkit</h2>
      <h3>Normal state : {state}</h3>
      <h3>Redux state : {count}</h3>
      <div style={{ marginTop: "10px" }}>
        <button onClick={handleNormalIncre} style={{padding:"10px",cursor:"pointer",color:"red",fontWeight:"bold"}}>Normal Btn</button>
        <button onClick={handleReduxIncre} style={{padding:"10px",cursor:"pointer",color:"green",fontWeight:"bold"}}>Redux Btn</button>
        <button onClick={handleReduxIncreByAmt} style={{padding:"10px",cursor:"pointer",color:"orange",fontWeight:"bold"}}>Redux Incre By Amt Btn</button>
        <button onClick={handleReduxReset} style={{padding:"10px",cursor:"pointer",color:"black",fontWeight:"bold"}}>Redux Reset</button>
      </div>
    </div>
  );
};
