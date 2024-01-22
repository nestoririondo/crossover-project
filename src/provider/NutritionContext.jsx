import { createContext, useState } from "react";
  
export const NutritionContext = createContext();
export const Provider = ({ children }) => {
  const [allNutritions, setAllNutritions] = useState({});
  const [search, setSearch] = useState([]);

  
    const value = {allNutritions, setAllNutritions, search, setSearch};
  
    return <NutritionContext.Provider value={value}>{children}</NutritionContext.Provider>;
  };
