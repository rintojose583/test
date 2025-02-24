import React, { useMemo, useState } from "react";

export const MemoExample = () => {
  
    const [num,setNum] = useState(1)
    const [dark,setDark] = useState(false)

    const doubleNumber = useMemo(() => SlowFunct(num), [num])

    function SlowFunct (num){
        console.log("calling slow function")
        for(let i=0; i<1000000000;i++){
        }
        return num * 2
    }
  
    return (
    <div>
      <h1>MemoExample</h1>
      <input type="number" value={num} onChange={(e)=>setNum(e.target.value)} />
      <button onClick={()=>setDark((prev)=>!prev)}>Change Theme</button>
      <div style={{
          backgroundColor: dark ? "darkgray" : "red",
          color: dark ? "white" : "black",
        }}>{doubleNumber}</div>
    </div>
  );
};
