import { createContext, useState } from "react";
  
export const NutritionContext = createContext();
export const Provider = ({ children }) => {
  const [allNutritions, setAllNutritions] = useState({});
  const [search, setSearch] = useState([]);

  const [allSelections, setAllSelections] = useState({});

  
    const value = {allNutritions, setAllNutritions, search, setSearch, allSelections, setAllSelections};
  
    return <NutritionContext.Provider value={value}>{children}</NutritionContext.Provider>;
  };
