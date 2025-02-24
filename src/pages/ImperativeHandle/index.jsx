import React, { useRef, useState } from "react";
import { ImperaticeChild } from "../../components/ImperaticeChild";

export const ImperativeHandle = () => {

  const coutRef = useRef()
  const [parentCount, setParentCount] = useState(0);

  const handleIncre = ()=>{
    coutRef.current.increment()
    setParentCount(coutRef.current.getCount())
  }

  const handleDecre = ()=>{
    coutRef.current.decrement()
    setParentCount(coutRef.current.getCount())
  }

  return (
    <div>
      <h1>ImperativeHandle : count: {parentCount}</h1>
      <div style={{ marginTop: "20px" }}>
        <ImperaticeChild ref={coutRef} />
      </div>
      <div style={{display:"flex", gap:"15px", marginTop:"20px"}} >
        <button onClick={handleIncre} style={{padding:"20px", cursor:"pointer"}} >Incre</button>
        <button onClick={handleDecre} style={{padding:"20px", cursor:"pointer"}} >Decre</button>
      </div>
    </div>
  );
};
