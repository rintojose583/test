import { createContext, useContext, useState } from "react";

const IsAuthContext = createContext();

export const IsAuthProvider = ({ children }) => {
  const [data, setData] = useState("Admin");
  return (
    <IsAuthContext.Provider value={{ data, setData }}>
      {children}
    </IsAuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(IsAuthContext);
};