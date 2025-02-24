import React, { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { AboutUs } from "./pages/AboutUs";
import { Home } from "./pages/Home";
import { NavBar } from "./components/NavBar";
import { Example } from "./pages/Example";
import { UseReducerHook } from "./pages/UseReducerHook";
import { UseLayout } from "./pages/UseLayout";
import { Ref } from "./pages/Ref";
import { ImperativeHandle } from "./pages/ImperativeHandle";
import { Callback } from "./pages/Callback";
import { MemoExample } from "./pages/MemoExample";
import { IsAuthenticated } from "./wrappers/IsAuthenticated";
import { Testing } from "./pages/Testing";
import { ReduxToolkit } from "./pages/ReduxToolkit";
import { ReduxApi } from "./pages/ReduxApi";

const SmallExample = ()=>{
  return(
    <div>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae
        impedit eligendi aliquam minima id magnam, labore distinctio quisquam
        dolore deleniti aperiam numquam aspernatur sint commodi vero ut quaerat
        necessitatibus qui?
      </p>
    </div>
  )
}


const App = () => {
  const [state, setState] = useState("");

  return (
    <>
      <NavBar />
      <div style={{ padding: "20px" }}>
        <Routes>
          {/* Absolute Paths */}
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<IsAuthenticated><AboutUs state={state} setState={setState} /></IsAuthenticated>} />
          <Route path="/example" element={<Example />}>
            <Route path="smallExample" element={<SmallExample />} />
          </Route>
          <Route path="/useReducer" element={<UseReducerHook />} />
          <Route path="/useLayout" element={<UseLayout />} />
          <Route path="/imperativeHandle" element={<ImperativeHandle />} />
          <Route path="/ref" element={<Ref />} />
          <Route path="/callback" element={<Callback />} />
          <Route path="/memoExample" element={<MemoExample />} />
          <Route path="/reduxToolkit" element={<ReduxToolkit />} />
          <Route path="/testing" element={<Testing />} />
          <Route path="/reduxApi" element={<ReduxApi />} />
        </Routes>
      </div>
      {/* <h1>State Status: {state}</h1> */}
    </>
  );
};

export default App;
