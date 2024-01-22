import { createContext, useState } from "react";
  
export const NutritionContext = createContext();
export const Provider = ({ children }) => {
  const [allNutritions, setAllNutritions] = useState({});

  
    const value = {allNutritions, setAllNutritions};
  
    return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
  };
